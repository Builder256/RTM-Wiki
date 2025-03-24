const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const WEBHOOK = 'https://discord.com/api/webhooks/1353274186922987572/EeNx8gVNATWws82-OkeVSNoNrT6wEh5MmpZx1E-aDYU53nSqJZPgk-falk0lGY8IssvM';
const NOTIFY_TEXT = 'An update has been made to the wiki!';
const SITEMAP = 'sitemap.xml';

const files = fs.readdirSync('./', { recursive: true });
const pages = files.filter(file => path.extname(file) === '.md');
const sitemap = fs.readFileSync(SITEMAP, 'utf-8');

const urls = sitemapParser(sitemap);
console.log(urls);

execSync('dir', { encoding: 'utf-8' });

// sendWebhook();

function sitemapParser(content) {
    const lines = content.split('\n').map(line => line.trim());
    const urls = lines.filter(line => line.includes('<loc>')).map(line => line.replace('<loc>', '').replace('</loc>', ''));
    return urls;
}

function sendWebhook(title, description, url, published, date, author) {
    const body = {
        content: NOTIFY_TEXT,
        embeds: [
            {
                title: title,
                type: 'link',
                description: description,
                url: url,
                timestamp: date,
                color: 0x5EAEEB,
                // footer: {
                //     text: 'footer'
                // },
                fields: [
                    {
                        name: 'published',
                        value: published,
                        inline: true
                    },
                    {
                        name: 'author',
                        value: author,
                        inline: true
                    }
                ],
                // author: {
                //     name: 'author',
                // }
            }
        ]
    };

    fetch(WEBHOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            console.log(response);
        });
}

