---
title: RTMアドオン制作 - JSON設定項目 車両
description: VehicleConfigクラス
published: false
tags: 
editor: markdown
---

<nav>

- [解説](#解説)
  - [`uv`](#uv)
  - [`pos`](#pos)
  - [`doAnimation`](#doanimation)
  - [`disableLighting`](#disablelighting)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `uv`
方向幕に使用するテクスチャの範囲      
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

`[uMin, uMax, vMin, vMax]`
</section>

<section>

## `pos`
方向幕の位置
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列の配列 `<float[][][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

方向幕の4頂点それぞれの座標を指定
方向幕1箇所分の設定: '`[[x, y, z], [x, y, z], [x, y, z], [x, y, z]]'
頂点の順番は、右上、右下、左下、左上
方向幕を配置したい箇所分の4頂点の配列を設定

</section>

<section>

## `doAnimation`
幕回しを有効化
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>
</section>

<section>

## `disableLighting`
発光を無効化
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>
</section>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java at master · Kai-Z-JP/KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java)
- [RealTrainModのJsonについてのドキュメント *RealTrainModのJsonで利用可能なキーについてのドキュメント。*](https://akikawaken.github.io/RTM/Docs/json.html)
- [Static Wind - Takami Train Kit *minecraftの鉄道Mod「RealTrainMod」用の車両モデルキットの解説*](https://staticwind.soragoto.net/rtm/tkmtk/#setup_json)
- [アドオン製作ガイド：jsonコーディング - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677483)
{.links-list}