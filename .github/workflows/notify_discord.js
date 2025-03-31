const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// const WEBHOOK = 'https://discord.com/api/webhooks/';
// const BEFORE_SHA = 'ef92836dac6db75e59e9ddd925f8e9fd801b059a';
// const AFTER_SHA = '7324d768bf2c88a9bca9143e212d79f8ee621bdc';
const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
const BEFORE_SHA = process.env.BEFORE_SHA;
const AFTER_SHA = process.env.AFTER_SHA;
const NOTIFY_TEXT = 'An update has been made to the wiki!';
// const SITEMAP = 'sitemap.xml';
const URL = 'https://rtmwiki.kotl.io';
const USING_LANG = ['ja', 'en', 'zh-tw'];


const files = fs.readdirSync('./', { recursive: true });
const pages = files.filter(file => path.extname(file) === '.md');
// const sitemap = fs.readFileSync(SITEMAP, 'utf-8');
const changedFiles = execSync(`git diff --name-only ${BEFORE_SHA} ${AFTER_SHA}`, { encoding: 'utf-8' }).split('\n').map(file => path.normalize(file));

const pageDatas = changedFiles.map(file => getPageData(pages, file));

for (const pageData of pageDatas) {
    if (!pageData) continue;
    sendWebhook(pageData.title, pageData.description, pageData.url, pageData.published, pageData.date);
}

function getPageData(filePaths, filePath) {
    if (!filePaths.includes(filePath)) {
        return;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let header = [];
    const headerEndIndex = lines.indexOf('---', 1);
    const isContainHeader = lines[0] === '---' && lines[headerEndIndex] === '---';
    if (!isContainHeader) return {
        title: null,
        description: null,
        url: null,
        published: null,
        date: null
    };

    for (let i = 1; i < headerEndIndex; i++) {
        header.push(lines[i]);
    }
    const title = header.find(line => line.startsWith('title: ')).split(': ')[1];
    const description = header.find(line => line.startsWith('description: ')).split(': ')[1];
    const isPublished = header.includes('published: true');
    const updatedDate = header.find(line => line.startsWith('date: ')).split(': ')[1];

    const lang = isValidLanguageCode(USING_LANG, filePath.split(path.sep)[0]) ? filePath.split(path.sep)[0] : 'ja';

    const url = `${URL}/${lang}/${filePath.replaceAll(path.sep, '/').replace('.md', '')}`;

    return {
        title: title,
        description: description,
        url: url,
        published: isPublished,
        date: updatedDate
    }
}

// 書いたけど要らなかった
// function sitemapParser(content) {
//     const lines = content.split('\n').map(line => line.trim());
//     const urls = lines.filter(line => line.includes('<loc>')).map(line => line.replace('<loc>', '').replace('</loc>', ''));
//     return urls;
// }

function sendWebhook(title, description, url, published, date) {
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
                        value: published ? 'Yes' : 'No',
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
            if (response.ok) {
                console.log(`Webhook sent successfully: ${title} / ${url}`);
            } else {
                console.error(`Failed to send webhook: ${title} / ${url}`);
            }
        });
}

/**
 * @description 有効な使用している言語コードかどうかを判定する
 * @param {string[]} langs 使用している言語コードの配列
 * @param {string} code 言語コードの可能性がある文字列
 * @return {boolean} 有効な言語コードの場合はtrue、そうでない場合はfalse
 */
function isValidLanguageCode(langs, code) {
    return langs.includes(code.toLowerCase());
}