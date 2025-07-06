---
title: RTMアドオン制作 - JSON設定項目 共通1
description: ResourceConfigクラス
published: false
date: 2025-07-06T07:20:00.245Z
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

DMIntValue型の配列 `<array of DMIntValue>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

**詳細不明** [KaizPatchXでの実装](https://github.com/Kai-Z-JP/KaizPatchX/blob/3fb01a33efe190845d5c2fca6219c3198460aefa/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java#L60C1-L76C6)
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
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java at master · Kai-Z-JP/KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java)
- [RealTrainModのJsonについてのドキュメント *RealTrainModのJsonで利用可能なキーについてのドキュメント。*](https://akikawaken.github.io/RTM/Docs/json.html)
- [Static Wind - Takami Train Kit *minecraftの鉄道Mod「RealTrainMod」用の車両モデルキットの解説*](https://staticwind.soragoto.net/rtm/tkmtk/#setup_json)
- [アドオン製作ガイド：jsonコーディング - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677483)
{.links-list}