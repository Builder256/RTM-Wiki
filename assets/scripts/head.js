// @ts-check
/**
 * Faviconを修正する
 * @see https://js.wiki/feedback/p/favicon
 * @returns {void}
 */
function correctFavicon() {
    document.querySelectorAll('link[rel=icon],link[rel=apple-touch-icon],link[rel=mask-icon],meta[name=msapplication-TileImage]').forEach(function (node) {
        node.setAttribute(node.hasAttribute('content') ? 'content' : 'href', '/assets/images/logos/wiki-logo.svg');
    });
}

/**
 * @typedef {Object} CanonicalUrlOptions
 * @property {boolean} [removeExtension=true] - 拡張子を削除するかどうか
 */

/**
 * SEO対策：Canonical URLを生成
 * @param {CanonicalUrlOptions} [options={}] - オプション
 * @returns {string} - 生成されたCanonical URL
 */
function generateCanonicalUrl(options = {}) {
    const { removeExtension = true } = options;
    const currentURL = new URL(window.location.href);
    let canonicalURL = currentURL.origin + currentURL.pathname;
    if (removeExtension) {
        canonicalURL = canonicalURL.replace(/\.[^/.]+$/, '');
    }
    return canonicalURL;
}

/**
 * SEO対策：Canonical Linkを生成してheadに追加
 * @param {string} canonicalURL - 生成に使用するURL
 * @param {boolean} replace - 既存のCanonical Linkを置き換えるかどうか (デフォルト: true)
 * @returns {void}
 */
function addCanonicalLink(canonicalURL, replace = true) {
    const head = document.head;

    if (replace) {
        /**
         * @type {HTMLLinkElement | null}
         */
        const existingCanonicalLink = head.querySelector('link[rel="canonical"]');
        if (existingCanonicalLink) {
            console.warn('Existing canonical link found, replacing it:', existingCanonicalLink.href);
            existingCanonicalLink.remove();
        }
    }

    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalURL;

    head.appendChild(canonicalLink);
    console.info('Canonical link added:', canonicalLink.href);
}

/**
 * SEO対策：og:urlのURLを修正
 * @param {string} url - 修正するURL
 * @return {void}
 */
function correctOgUrl(url) {
    const meta = document.querySelector('meta[property="og:url"]');
    if (meta) {
        meta.setAttribute('content', url);
        console.info('og:url corrected:', url);
    }
}

// Faviconを修正
correctFavicon();
// Canonical URLを生成し、リンクを追加
const canonicalURL = generateCanonicalUrl();
addCanonicalLink(canonicalURL, true);
// og:urlを修正
correctOgUrl(canonicalURL);
