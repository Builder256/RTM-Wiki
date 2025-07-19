---
title: RTMアドオン制作 - JSON設定項目 共通2 ModelConfigクラス
description: ModelConfigクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:23:04.703Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:01.244Z
---

<nav>

- [解説](#解説)
  - [`buttonTexture`](#buttontexture)
  - [`scale`](#scale)
  - [`offset`](#offset)
  - [`smoothing`](#smoothing)
  - [`doCulling`](#doculling)
  - [`accuracy`](#accuracy)
  - [`serverScriptPath`](#serverscriptpath)
  - [`guiScriptPath`](#guiscriptpath)
  - [`guiTexture`](#guitexture)
  - [`renderAABB`](#renderaabb)
  - [`customIconTexture`](#customicontexture)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `buttonTexture`
モデル選択画面で表示されるボタンテクスチャのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>
</section>

<section>

## `scale`
モデルの縮尺
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

NGTO形式専用
</section>

<section>

## `offset`
モデルの描画位置
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

NGTO形式専用
</section>

<section>

## `smoothing`
スムージング
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

## `doCulling`
片面表示
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

MQO, OBJ形式では使用したほうが負荷が軽減されます。
</section>

<section>

## `accuracy`
ポリゴンの精度
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

- `"LOW"`: ±16.000の範囲のみ正常に描画
- `"MEDIUM"`: 通常
{.grid-list}

</section>

<section>

## `serverScriptPath`
サーバースクリプトのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `guiScriptPath`
GUIスクリプトのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `guiTexture`
GUIテクスチャのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `renderAABB`
描画判定範囲の大きさ
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `customIconTexture`
カスタムアイコンのテクスチャ
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ModelConfig.java at master · Kai-Z-JP/KaizPatchX *もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。. Contribute to Kai-Z-JP/KaizPatchX development by creating an account on GitHub.*](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ModelConfig.java)
{.links-list}