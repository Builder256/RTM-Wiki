---
title: RTMアドオン制作 - JSON設定項目 共通1 ResourceConfigクラス
description: ResourceConfigクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:24:12.403Z
tags: 
editor: markdown
dateCreated: 2025-07-06T07:12:47.412Z
---

<nav>

- [解説](#解説)
  - [`version`](#version)
  - [`useCustomColor`](#usecustomcolor)
  - [`tags`](#tags)
  - [`defaultValues`](#defaultvalues)
  - [~~`defaultData`~~](#defaultdata)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `version`
name重複時の優先度決定     
<dl>
<dt>データ型</dt>
<dd>

数値 `<short>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `useCustomColor`       
カスタムカラーの有効化     
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `tags`
モデル選択画面での検索キーワード
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

複数のキーワードを指定する場合には、1つの半角スペース（`U+0020`）で区分します。
</section>

<section>

## `defaultValues`
DataMapのデフォルト値
<dl>
<dt>データ型</dt>
<dd>

DMIntValueの配列 `<DMIntValue[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

詳細不明
</section>

<section>

## ~~`defaultData`~~
**非推奨** 理由不明
DataMapのデフォルト値
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java at master · Kai-Z-JP/KaizPatchX *もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。. Contribute to Kai-Z-JP/KaizPatchX development by creating an account on GitHub.*](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java)
{.links-list}