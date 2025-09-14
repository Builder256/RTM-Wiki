const fs = require('fs');
const { execSync } = require('child_process');
const xml2js = require('xml2js');
const { URL } = require('url');

class SitemapAnalyzer {
    constructor() {
        this.parser = new xml2js.Parser();
    }

    async parseSitemap(filePath) {
        try {
            const xmlContent = fs.readFileSync(filePath, 'utf8');
            const result = await this.parser.parseStringPromise(xmlContent);

            const urls = {};
            const urlset = result.urlset;

            if (urlset && urlset.url) {
                for (const urlEntry of urlset.url) {
                    const loc = urlEntry.loc?.[0];
                    if (loc) {
                        urls[loc] = {
                            loc: loc,
                            lastmod: urlEntry.lastmod?.[0] || null,
                            changefreq: urlEntry.changefreq?.[0] || null,
                            priority: urlEntry.priority?.[0] || null,
                        };
                    }
                }
            }

            return urls;
        } catch (error) {
            console.error(`Error parsing sitemap ${filePath}:`, error.message);
            return {};
        }
    }

    getPreviousSitemap(commitRef = 'HEAD~1') {
        try {
            // Check if we're in a git repository
            execSync('git rev-parse --git-dir', { stdio: 'pipe' });

            // Get the previous commit hash
            const prevCommit = execSync(`git rev-parse ${commitRef}`, { encoding: 'utf8' }).trim();

            // Get the previous sitemap.xml content
            const prevContent = execSync(`git show ${prevCommit}:sitemap.xml`, { encoding: 'utf8' });

            // Write to temporary file
            const tempFile = 'sitemap_prev.xml';
            fs.writeFileSync(tempFile, prevContent);

            return tempFile;
        } catch (error) {
            console.error('Error getting previous sitemap:', error.message);
            return null;
        }
    }

    compareSitemaps(currentUrls, previousUrls) {
        const changedUrls = [];
        const newUrls = [];
        const removedUrls = [];

        // Find new and changed URLs
        for (const [url, currentData] of Object.entries(currentUrls)) {
            if (!previousUrls[url]) {
                newUrls.push({
                    url: url,
                    data: currentData,
                    status: 'new',
                });
            } else {
                const previousData = previousUrls[url];
                const changes = {};

                // Check each field for changes
                for (const field of ['lastmod', 'changefreq', 'priority']) {
                    if (currentData[field] !== previousData[field]) {
                        changes[field] = {
                            previous: previousData[field],
                            current: currentData[field],
                        };
                    }
                }

                if (Object.keys(changes).length > 0) {
                    changedUrls.push({
                        url: url,
                        data: currentData,
                        changes: changes,
                        status: 'updated',
                    });
                }
            }
        }

        // Find removed URLs
        for (const [url, previousData] of Object.entries(previousUrls)) {
            if (!currentUrls[url]) {
                removedUrls.push({
                    url: url,
                    data: previousData,
                    status: 'removed',
                });
            }
        }

        return { changedUrls, newUrls, removedUrls };
    }

    analyzeUrlPatterns(urls) {
        const patterns = {
            domains: {},
            paths: {},
            extensions: {},
        };

        for (const item of urls) {
            try {
                const parsed = new URL(item.url);

                // Domain analysis
                const domain = parsed.hostname;
                patterns.domains[domain] = (patterns.domains[domain] || 0) + 1;

                // Path analysis
                const pathParts = parsed.pathname.split('/');
                if (pathParts.length > 1) {
                    const rootPath = '/' + (pathParts[1] || '');
                    patterns.paths[rootPath] = (patterns.paths[rootPath] || 0) + 1;
                }

                // Extension analysis
                if (parsed.pathname.includes('.')) {
                    const ext = parsed.pathname.split('.').pop();
                    patterns.extensions[ext] = (patterns.extensions[ext] || 0) + 1;
                }
            } catch (error) {
                console.warn(`Invalid URL: ${item.url}`);
            }
        }

        return patterns;
    }

    generateReport(changedUrls, newUrls, removedUrls, format = 'text') {
        if (format === 'json') {
            return JSON.stringify(
                {
                    summary: {
                        updated: changedUrls.length,
                        new: newUrls.length,
                        removed: removedUrls.length,
                        total_changes: changedUrls.length + newUrls.length + removedUrls.length,
                    },
                    changed_urls: changedUrls,
                    new_urls: newUrls,
                    removed_urls: removedUrls,
                },
                null,
                2
            );
        }

        // Text format
        const report = [];
        const totalChanges = changedUrls.length + newUrls.length + removedUrls.length;

        if (totalChanges === 0) {
            return 'No changes detected in sitemap.xml';
        }

        report.push('=== SITEMAP ANALYSIS REPORT ===');
        report.push(`Total changes: ${totalChanges}`);
        report.push(`Updated URLs: ${changedUrls.length}`);
        report.push(`New URLs: ${newUrls.length}`);
        report.push(`Removed URLs: ${removedUrls.length}`);
        report.push('');

        if (newUrls.length > 0) {
            report.push('🆕 NEW URLs:');
            for (const item of newUrls) {
                report.push(`  + ${item.url}`);
                const data = item.data;
                if (data.lastmod) report.push(`    lastmod: ${data.lastmod}`);
                if (data.changefreq) report.push(`    changefreq: ${data.changefreq}`);
                if (data.priority) report.push(`    priority: ${data.priority}`);
            }
            report.push('');
        }

        if (changedUrls.length > 0) {
            report.push('🔄 UPDATED URLs:');
            for (const item of changedUrls) {
                report.push(`  ~ ${item.url}`);
                for (const [field, change] of Object.entries(item.changes)) {
                    report.push(`    ${field}: ${change.previous} → ${change.current}`);
                }
            }
            report.push('');
        }

        if (removedUrls.length > 0) {
            report.push('🗑️ REMOVED URLs:');
            for (const item of removedUrls) {
                report.push(`  - ${item.url}`);
            }
            report.push('');
        }

        // Pattern analysis
        const allChanges = [...changedUrls, ...newUrls];
        if (allChanges.length > 0) {
            const patterns = this.analyzeUrlPatterns(allChanges);
            report.push('📊 PATTERN ANALYSIS:');

            if (Object.keys(patterns.domains).length > 0) {
                report.push('  Domains:');
                const sortedDomains = Object.entries(patterns.domains).sort(([, a], [, b]) => b - a);
                for (const [domain, count] of sortedDomains) {
                    report.push(`    ${domain}: ${count} changes`);
                }
            }

            if (Object.keys(patterns.paths).length > 0) {
                report.push('  Path patterns:');
                const sortedPaths = Object.entries(patterns.paths).sort(([, a], [, b]) => b - a);
                for (const [path, count] of sortedPaths) {
                    report.push(`    ${path}: ${count} changes`);
                }
            }
        }

        return report.join('\n');
    }

    outputGithubActionsFormat(changedUrls, newUrls, removedUrls) {
        const allChanges = [...changedUrls, ...newUrls];
        const hasChanges = allChanges.length > 0;

        console.log(`::set-output name=has_changes::${hasChanges}`);

        if (hasChanges) {
            const urlsList = allChanges.map((item) => item.url);
            console.log(`::set-output name=changed_urls::${urlsList.join(',')}`);
            console.log(`::set-output name=total_changes::${allChanges.length}`);
            console.log(`::set-output name=new_count::${newUrls.length}`);
            console.log(`::set-output name=updated_count::${changedUrls.length}`);
            console.log(`::set-output name=removed_count::${removedUrls.length}`);
        }
    }
}

async function main() {
    const analyzer = new SitemapAnalyzer();
    const currentFile = 'sitemap.xml';

    // Check if current sitemap exists
    if (!fs.existsSync(currentFile)) {
        console.error('sitemap.xml not found');
        process.exit(1);
    }

    const currentUrls = await analyzer.parseSitemap(currentFile);

    // Get previous sitemap
    const previousFile = analyzer.getPreviousSitemap();
    let previousUrls = {};

    if (previousFile) {
        previousUrls = await analyzer.parseSitemap(previousFile);
    } else {
        console.warn('No previous sitemap found. All URLs will be treated as new.');
    }

    // Compare sitemaps
    const { changedUrls, newUrls, removedUrls } = analyzer.compareSitemaps(currentUrls, previousUrls);

    // Generate and output report
    const report = analyzer.generateReport(changedUrls, newUrls, removedUrls);
    console.log(report);

    // Output for GitHub Actions
    analyzer.outputGithubActionsFormat(changedUrls, newUrls, removedUrls);
}

main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
});
