---
title: 編集者向けTips
description: 編集者向けの有用な情報
published: true
date: 2025-02-25T10:24:03.237Z
tags: 編集者向け
editor: markdown
dateCreated: 2025-01-14T13:21:41.313Z
---

# YouTube動画を埋め込む方法

## 1. 以下のように記述

```html
YouTubeの動画ID{.embed-yt-vid}
```

## 2. ~~ページのスクリプト欄に以下のように記述~~
当Wikiでは全てのページにデフォルトで記述されているので不要です。

```html
<script>
     window.boot.register('page-ready', () => {
        replaceWithYouTubeEmbeddedPlayer();
    });

    function replaceWithYouTubeEmbeddedPlayer() {
        const embedYtVideos = document.querySelectorAll('p.embed-yt-vid');
        if (!embedYtVideos) return;

        // それぞれのpタグについて置き換え
        embedYtVideos.forEach(embedYtVideo => {
            const videoId = embedYtVideo.textContent.trim();
            if (!videoId) return;

            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            embedYtVideo.parentNode.replaceChild(iframe, embedYtVideo);
        });
    }
</script>
```

## 使用例

EvuXIk2Bh78{.embed-yt-vid}

# Tweetを埋め込む方法
## 下準備
~~ページのスクリプト欄に以下のように記述~~
当Wikiでは全てのページにデフォルトで記述されているので不要です。

```html
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

## ツイートの埋め込みコードを取得
1. https://publish.twitter.com/ にアクセス
1. 埋め込みたいツイートのURLを入力
1. `Embedded Post`を選択
1. `set customization options`をクリック
1. `How would you like this to look?`で`Dark`を選択
1. `What language would you like to display this in?`で`Japanese`を選択
1. ツイートがリプライで、リプライ元を表示させたくない場合には`Hide Conversation`にチェックを入れる
1. `Opt-out of tailoring Twitter`にチェックを入れる
1. `Update`をクリック
1. `Copy Code`をクリック
1. コピーしたコードをページにペースト
1. ペーストした文字の中から`<script>`から始まる部分を削除する

## 使用例

<blockquote class="twitter-tweet" data-lang="ja" data-dnt="true" data-theme="dark"><p lang="ja" dir="ltr">◆RTM1.7.10.45<br>・バグ修正<a href="https://t.co/oBCZYJsFxd">https://t.co/oBCZYJsFxd</a></p>&mdash; ngt5479 (@ngt5479) <a href="https://twitter.com/ngt5479/status/1893322497103208818?ref_src=twsrc%5Etfw">2025年2月22日</a></blockquote>