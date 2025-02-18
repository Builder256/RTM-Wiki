console.log('sitemap-generator.jsが実行されました')

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://rtmwiki.kotl.io';
const SCAN_DIR = './';
const DEFAULT_LANG = 'ja';
const USING_LANG = ['ja', 'en', 'zh-tw'];

function getMarkdownFiles() {
    const result = [];

    const files = fs.readdirSync(SCAN_DIR, { withFileTypes: true }); // ファイル一覧をDirentオブジェクトで取得

    files.forEach(file => {
        if (file.isFile() && path.extname(file.name) === '.md') { // ルートディレクトリにある.mdファイルについて
            const simplified = path.parse(file.name).name; // 拡張子を除いたファイル名を取得
            const filePath = path.join(SCAN_DIR, file.name);
            const url = `/${DEFAULT_LANG}/${simplified}`; // `/ja/file-name`の形式のURLを作成

            const fileStatus = fs.statSync(filePath);
            const lastModTime = fileStatus.mtime;
            result.push({
                path: url,
                lastModTime: lastModTime
            });
        } else if (file.isDirectory() && !isValidLanguageCode(file.name)) { // 日本語ページのディレクトリの場合
            // result.push(recGetMarkdownFiles(filePath, file.name));
        }
    });

    console.log(result);
}

function recGetMarkdownFiles(dir, baseDir = '') {

}

function isValidLanguageCode(code) {
    return USING_LANG.includes(code.toLowerCase());
}

getMarkdownFiles();
