console.log('sitemap-generator.jsが実行されました')

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://rtmwiki.kotl.io';
const SCAN_DIR = './';
const DEFAULT_LANG = 'ja';
const USING_LANG = ['ja', 'en', 'zh-tw'];
const NEWLINE = '\n'; // UNIXでの改行コードLFに対応
const OUTPUT_FILE = 'sitemap1.xml'

function getMarkdownFiles() {
    const result = [];
    const files = fs.readdirSync(SCAN_DIR, { recursive: true }); // ファイルパス一覧を再帰的に取得

    for (const file of files) {
        const fileStat = fs.statSync(file);
        const parsedFilePath = path.parse(file);

        if (fileStat.isFile() && parsedFilePath.ext === '.md') {
            const fileStatus = getFileStatus(file);

            if (fileStatus.isPublished) {
                const lastModTime = fileStatus.updatedDate;
                const pathArray = file.split(path.sep);

                let urlPath = '';

                if (parsedFilePath.dir === '') {
                    urlPath = parsedFilePath.name;
                } else {
                    urlPath = [parsedFilePath.dir, parsedFilePath.name].join('/');
                }

                let normalizedUrlPath = `${SITE_URL}`;

                if (!isValidLanguageCode(pathArray[0])) {
                    normalizedUrlPath += `/${DEFAULT_LANG}/${urlPath}`; // 日本語のページはなぜかカレントディレクトリ直下にバラまかれるので/jaをつけてあげないといけません。欠陥。
                } else {
                    normalizedUrlPath += `/${urlPath}`;
                }
                normalizedUrlPath = normalizedUrlPath.replaceAll(path.sep, '/');
                result.push({ path: normalizedUrlPath, lastModTime: lastModTime });
            }
        }
    }
    return result;
}

/**
 * @description ファイルの公開状態と更新日時を取得する
 * @param {string} filePath ルートディレクトリからの相対パス
 * @return {object} {isPublished: boolean, updatedDate: string} 取得できない場合は updatedDate === null
 */
function getFileStatus(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split(NEWLINE);

    let header = [];
    const headerEndIndex = lines.indexOf('---', 1);
    const isContainHeader = lines[0] === '---' && lines[headerEndIndex] === '---';
    if (!isContainHeader) return { isPublished: false, updatedDate: null };

    for (let i = 1; i < headerEndIndex; i++) {
        header.push(lines[i]);
    }
    const isPublished = header.includes('published: true');
    const dateIndex = header.findIndex(line => line.startsWith('date: '));
    const updatedDate = header[dateIndex].split(': ')[1];
    return {
        isPublished: isPublished,
        updatedDate: updatedDate
    }
}

function generateSitemap(fileData) {
    const sitemap = [];
    sitemap.push('<?xml version="1.0" encoding="UTF-8"?>');
    sitemap.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

    for (const data of fileData) {
        sitemap.push('\t<url>');
        sitemap.push(`\t\t<loc>${data.path}</loc>`);
        sitemap.push(`\t\t<lastmod>${data.lastModTime}</lastmod>`);
        sitemap.push('\t</url>');
    }
    sitemap.push('</urlset>');

    return sitemap.join(NEWLINE);
}

/**
 * @description 有効な使用している言語コードかどうかを判定する
 * @param {string} code 言語コードの可能性がある文字列
 * @return {boolean} 有効な言語コードの場合はtrue、そうでない場合はfalse
 */
function isValidLanguageCode(code) {
    return USING_LANG.includes(code.toLowerCase());
}

const fileData = getMarkdownFiles();
const sitemapContent = generateSitemap(fileData);

fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf-8');
console.log('Operation completed: Generated sitemap.xml');
