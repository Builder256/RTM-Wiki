---
title: 編集テストページ
description: 編集のテストにご利用ください
published: true
date: 2025-01-14T14:05:02.431Z
tags: 
editor: markdown
dateCreated: 2025-01-14T13:21:41.313Z
---

# 編集テストページ

## YouTube動画を埋め込む方法

### 1. 以下のように記述

```html
<div class="embed-yt-vid">YouTubeの動画ID</div>
```

### 2. ページのスクリプト欄に以下のように記述

```html
<script>
  window.boot.register('page-ready', () => {
		// ドキュメント内の全ての<div class="embed-yt-vid">を取得
		const embedDivs = document.querySelectorAll('.embed-yt-vid');

    // 各<div>を<iframe>に置き換える
    embedDivs.forEach(div => {
        const videoId = div.textContent.trim(); // 動画IDを取得
        if (videoId) {
            // iframe要素を作成
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;

            // divタグをiframeに置き換え
            div.parentNode.replaceChild(iframe, div);
        }
    });
  })
</script>
```

### 使用例

<div class="embed-yt-vid">EvuXIk2Bh78</div>
