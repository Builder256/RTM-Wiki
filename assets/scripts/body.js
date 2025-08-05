// @ts-check
window.addEventListener('resize', adjustDescriptionAreaHeight); //画面サイズが変更された時に実行

// @ts-ignore
window.boot.register('page-ready', () => {
    // ページの構成が完了したときに実行
    adjustDescriptionAreaHeight();
    // 以下機能追加
    replaceWithYouTubeEmbeddedPlayer();
    openExternalLinkInNewTab();
    changeHeadingLinkIcons();
});

/**
 * ページ説明が長い場合に枠をはみ出る問題を修正
 * @returns {void}
 */
function adjustDescriptionAreaHeight() {
    const descriptionArea = document.querySelector('.page-header-section');
    if (!descriptionArea) {
        console.warn(`[adjustDescriptionAreaHeight] descriptionArea is not found!`);
        return;
    }

    const contentWrapper = descriptionArea.firstElementChild;
    if (!contentWrapper) {
        console.warn(`[adjustDescriptionAreaHeight] contentWrapper is not found!`);
        return;
    }

    // HTMLElementにキャスト
    const contentHeight = contentWrapper instanceof HTMLElement ? contentWrapper.offsetHeight : 0;
    if (!contentHeight) {
        console.warn(`[adjustDescriptionAreaHeight] contentHeight is not found!`);
    }

    const adjustedHeight = `${contentHeight + 38}px`;

    // descriptionAreaもHTMLElementであるか確認しなくてはならない
    if (descriptionArea instanceof HTMLElement) {
        // 既存の高さと異なる場合のみ更新（パフォーマンス最適化）
        if (parseInt(descriptionArea.style.height, 10) !== contentHeight + 38) {
            descriptionArea.style.height = adjustedHeight;
        }
    }
}

/**
 * YouTube動画を埋め込めるようにする
 * @returns {void}
 */
function replaceWithYouTubeEmbeddedPlayer() {
    const embedYtVideos = document.querySelectorAll('p.embed-yt-vid'); // <p class="embed-yt-vid">動画ID</p> を想定
    const amount = embedYtVideos.length;
    console.info(
        `[replaceWithYouTubeEmbeddedPlayer] ${amount === 1 ? 'an' : amount} YouTube Video ID${amount === 1 ? ' was' : 's were'} found.${
            amount !== 0 && ' Embedding players...'
        }`
    );

    // それぞれのpタグについて置き換え
    for (const embedYtVideo of embedYtVideos) {
        let videoId = embedYtVideo.textContent?.trim(); // 動画IDを取得
        if (!videoId) {
            console.warn(`[replaceWithYouTubeEmbeddedPlayer] YouTube video ID is unspecified!`);
            continue;
        }

        if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            console.warn(`[replaceWithYouTubeEmbeddedPlayer] ${videoId} is not valid YouTube video ID!`);
            continue;
        }

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
        iframe.frameBorder = '0'; //IDEでは非推奨とマークされるがYouTubeの埋め込みコードには存在しているので一応維持
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.classList.add('embedded-youtube-video');

        const parent = embedYtVideo.parentNode;
        if (!parent) {
            console.warn('[replaceWithYouTubeEmbeddedPlayer] parentNode is not found!', embedYtVideo);
            continue;
        }
        parent.replaceChild(iframe, embedYtVideo);
    }
}

/**
 * 外部リンクを新しいタブで開くようにする
 * @returns {void}
 */
function openExternalLinkInNewTab() {
    const externalLinkTags = document.querySelectorAll('a.is-external-link');
    const amount = externalLinkTags.length;
    console.info(
        `[openExternalLinkInNewTab] ${amount === 1 ? 'an' : amount} external link${amount === 1 ? ' was' : 's were'} found.${
            amount !== 0 && ' Setting attributes...'
        }`
    );

    for (const externalLinkTag of externalLinkTags) {
        externalLinkTag.setAttribute('target', '_blank');
        externalLinkTag.setAttribute('rel', 'noopener');
    }
}

/**
 * 見出しのリンクのアイコンを変更する
 * @returns {void}
 */
function changeHeadingLinkIcons() {
    /**
     * @type {NodeListOf<HTMLAnchorElement>}
     */
    const anchors = document.querySelectorAll('a.toc-anchor');
    const amount = anchors.length;
    console.info(
        `[changeHeadingLinkIcons] ${amount === 1 ? 'an' : amount} header${amount === 1 ? ' was' : 's were'} found.${amount !== 0 && ' Changing icons...'}`
    );

    for (const anchor of anchors) {
        if (anchor.querySelector('.v-icon')) continue; // アイコンが変更済みの場合は何もしない
        anchor.textContent = ''; // デフォルトのアイコンを削除
        anchor.insertAdjacentHTML('afterbegin', '<div class="v-icon mdi mdi-link-variant"></div>');
        anchor.addEventListener('click', () => {
            copyToClipboard(anchor);
        });
    }
}

/**
 * アイコンをクリックしたときに見出しのURLをクリップボードにコピー
 * @param {HTMLAnchorElement} anchor
 * @returns {void}
 */
function copyToClipboard(anchor) {
    const url = anchor.href;

    if (!navigator.clipboard) {
        console.warn('Clipboard API is not supported in this browser.');
        alert('このブラウザではコピー機能がサポートされていません。リンクを手動でコピーしてください。');
        return;
    }
    navigator.clipboard
        .writeText(url)
        .then(() => {
            console.log('URL copied to clipboard:', url);

            const lang = document.documentElement.lang || 'ja';

            const messages = {
                ja: 'URLをクリップボードにコピーしました:\n',
                'zh-tw': 'URL已複製到剪貼簿:\n',
                en: 'URL copied to clipboard:\n',
            };
            alert((messages[lang] || messages['en']) + decodeURI(url));
        })
        .catch(() => {
            console.error('Clipboard write failed');
            alert('URLのコピーに失敗しました。手動でコピーしてください。');
        });
}
