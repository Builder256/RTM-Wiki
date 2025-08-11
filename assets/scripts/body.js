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
    convertImagesToFigures();
    addImagePreview();
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
        `[replaceWithYouTubeEmbeddedPlayer] ${amount === 1 ? 'a' : amount} YouTube Video ID${amount === 1 ? ' was' : 's were'} found.${
            amount !== 0 ? ' Embedding players...' : ''
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
            amount !== 0 ? ' Setting attributes...' : ''
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
        `[changeHeadingLinkIcons] ${amount === 1 ? 'a' : amount} header${amount === 1 ? ' was' : 's were'} found.${amount !== 0 ? ' Changing icons...' : ''}`
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

/**
 * 画像とキャプションのみからなる段落が画像を横並びにするようにする
 * @returns {void}
 */
function convertImagesToFigures() {
    // 予期される段落の例 <img>のimageと#text, <br>, <em>, <strong>, <a>からなるcaptionが交互にある必要がある
    /*
    <p>
        <img /><br />
        キャプション<br />
        <img /><br />
        <strong>キャプション</strong><br />
        キャプション<br />
        <img /><br />
        <a>キャプション</a>
    </p>
    */
    // この場合に予期されるp.childNodesの例
    /*
    NodeList [<img>, <br>, #text "\nキャプション", <br>, #text " ", <img>, <br>, <strong>, <br>, #text "\nキャプション", <br>, #text " ", <img>, <br>, <a>]
    */
    // 変換すべき構造
    /*
    <div class="images-row">
        <figure class="images-column">
            <img />
            <figcaption>キャプション</figcaption>
        </figure>
        <figure class="images-column">
            <img />
            <figcaption>
                <strong>キャプション</strong><br />
                キャプション<br />
            </figcaption>
        </figure>
        <figure class="images-column">
            <img />
            <figcaption>
                <a>キャプション</a>
            </figcaption>
        </figure>
    </div>
    */

    /**
     * @type {Array<HTMLParagraphElement>}
     */
    const paragraphs = Array.from(document.querySelectorAll('.contents > div > p'));

    const expectedNodeNames = ['#text', 'img', 'br', 'em', 'strong', 'code', 'a'];
    const expectedTextNodeNames = expectedNodeNames.filter((nodeName) => nodeName !== 'img');

    /**
     * 適格なpのみを選別する
     * @param {Array<HTMLParagraphElement>} paragraphs - 検証するp
     * @param {Array<string>} allowedNodeNames - pの中にあることが認められるすべてのNode
     * @param {Array<string>} allowedTextNodeNames - pの中にあることが認められるテキストのNode
     * @returns {Array<HTMLParagraphElement>} - 合格したp
     */
    const filterImagesParagraph = (paragraphs, allowedNodeNames, allowedTextNodeNames) => {
        return paragraphs.filter((p) => {
            const childNodes = Array.from(p.childNodes);
            // allowedNodeNamesのみを含んでいること
            if (!childNodes.every((childNode) => allowedNodeNames.includes(childNode.nodeName.toLowerCase()))) return false;
            const firstChild = p.firstChild;
            // imgで始まること
            if (firstChild?.nodeName.toLowerCase() !== 'img') return false;
            const lastChild = p.lastChild;
            if (!lastChild) return false;
            // allowedTextNodeNamesで終わること
            if (!allowedTextNodeNames.includes(lastChild?.nodeName.toLowerCase())) return false;
            return true;
        });
    };

    // imgで始まりtextで終わるpを選別
    const filteredParagraphs = filterImagesParagraph(paragraphs, expectedNodeNames, expectedTextNodeNames);

    /**
     * @typedef {Text | HTMLBRElement | HTMLElement | HTMLAnchorElement} ExpectedTextNode
     */
    /**
     * @typedef {Object} ImageColumn
     * @property {HTMLImageElement} image
     * @property {Array<ExpectedTextNode>} caption
     */

    /**
     * pを解析する
     * @param {HTMLParagraphElement} paragraph - 解析するp
     * @param {Array<string>} expectedNodeNames - pの中にあることが予期されるすべてのNode
     * @param {Array<string>} expectedTextNodeNames - pの中にあることが予期されるテキストのNode
     * @returns {Array<ImageColumn>}
     */
    const parseParagraph = (paragraph, expectedNodeNames, expectedTextNodeNames) => {
        const result = [];
        let currentGroup = null;

        const childNodes = paragraph.childNodes;

        for (const childNode of childNodes) {
            if (childNode.nodeName.toLowerCase() === 'img') {
                if (currentGroup) {
                    result.push(currentGroup);
                }
                currentGroup = { image: childNode, caption: [] };
            } else {
                // @ts-ignore 型 'ChildNode' の引数を型 'never' のパラメーターに割り当てることはできません。ts(2345)
                currentGroup?.caption.push(childNode);
            }
        }

        if (currentGroup) {
            result.push(currentGroup);
        }
        /*
        型 '{ image: ChildNode; caption: never[]; }[]' を型 'ImageColumn[]' に割り当てることはできません。
            型 '{ image: ChildNode; caption: never[]; }' を型 'ImageColumn' に割り当てることはできません。
                プロパティ 'image' の型に互換性がありません。
                型 'ChildNode' には 型 'HTMLImageElement' からの次のプロパティがありません: align, alt, border, complete、287 など。ts(2322)
        */
        // @ts-ignore
        return result;
    };

    for (const filteredParagraph of filteredParagraphs) {
        const parsedParagraph = parseParagraph(filteredParagraph, expectedNodeNames, expectedTextNodeNames);
        // console.log(parsedParagraph);

        const div = document.createElement('div');
        div.classList.add('images-row');

        for (const paragraphNodes of parsedParagraph) {
            const figure = document.createElement('figure');
            figure.appendChild(paragraphNodes.image);
            const figcaption = document.createElement('figcaption');
            const trimmedCaptionNodes = [...paragraphNodes.caption];
            while (trimmedCaptionNodes[0].nodeName === 'BR') trimmedCaptionNodes.shift();
            while (trimmedCaptionNodes.at(-1)?.nodeName === 'BR') trimmedCaptionNodes.pop();
            for (const captionNode of trimmedCaptionNodes) {
                figcaption.appendChild(captionNode);
            }
            figure.appendChild(figcaption);
            div.appendChild(figure);
        }
        filteredParagraph.replaceWith(div);
    }
}

/**
 * 画像のモーダルプレビューを実装
 * @returns {void}
 */
function addImagePreview() {
    /**
     * @type {NodeListOf<HTMLImageElement>}
     */
    const images = document.querySelectorAll('.contents img');

    const insertDialogElement = () => {
        const dialog = document.createElement('dialog');
        const menu = document.createElement('menu');
        const closeLi = document.createElement('li');
        const newTabLi = document.createElement('li');
        const closeButton = document.createElement('button');
        const newTabButton = document.createElement('button');
        const previewImage = document.createElement('img');

        closeButton.textContent = '閉じる';
        closeButton.setAttribute('autofocus', '');
        closeButton.addEventListener('click', () => {
            dialog.close();
        });
        closeLi.appendChild(closeButton);

        newTabButton.textContent = '画像を新しいタブで開く';
        newTabButton.addEventListener('click', () => {
            window.open(previewImage.src);
        });
        newTabLi.appendChild(newTabButton);
        menu.append(closeLi, newTabLi);
        dialog.append(menu, previewImage);
        document.body.appendChild(dialog);
        return dialog;
    };

    const dialog = insertDialogElement();
    for (const image of images) {
        image.addEventListener('click', () => {
            const { src, alt } = image;
            const targetImage = dialog.querySelector('img');
            if (!targetImage) return;
            targetImage.src = src;
            targetImage.alt = alt;

            dialog.showModal();
        });
    }
}
