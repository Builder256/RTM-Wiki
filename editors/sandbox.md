---
title: 編集練習場
description: 試したい表現とかの練習場所
published: true
date: 2025-07-18T22:50:29.556Z
tags: 編集者向け
editor: markdown
dateCreated: 2025-01-14T14:19:06.374Z
---

# 編集練習場
好きに使ってください

## class属性の検証

foo{.hoge}
```md
foo{.hoge}
```
```html
<p class="hoge">foo</p>
```

bar
{.hoge}
```md
bar
{.hoge}
```
```html
<p class="hoge">bar</p>
```

foo
bar
{.hoge}
```md
foo
bar
{.hoge}
```
```html
<p class="hoge">foo<br>bar</p>
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{.hoge}
```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{.hoge}
```
```html
<p class="hoge">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{.hoge}
```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{.hoge}
```
```html
<p class="hoge">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

## blockquoteの種類追加の検討

> あいうえお
{.is-ab}

```css
.v-main .contents blockquote.is-ab:before {
  content: "󰇉"
}
.theme--dark .v-main .contents blockquote.is-ab {
  background-color: #c71585;
  color: violet;
  border-color: #f0f
}
```

## tailwindCSSの導入のテスト

あいうえお{.text-center}

かきくけこ
{.text-red-500}

## attributeの追加

[/ja/home](/ja/home){target=_blank}{.hoge}{piyopiyo}

## 画像行

![600x400](https://placehold.co/600x400)
テキスト
![600x400](https://placehold.co/600x400)
テキスト
![600x400](https://placehold.co/600x400)
テキスト
![600x400](https://placehold.co/600x400)
テキスト
![600x400](https://placehold.co/600x400)
テキスト

![600x400](https://placehold.co/600x400)
テキスト
![600x400](https://placehold.co/600x400)
テキスト


![600x400](https://placehold.co/600x400)
テキスト