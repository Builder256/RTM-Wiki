---
title: RTMアドオン制作 - JSON設定項目 共通4 ModelConfig.Partsクラス
description: ModelConfig.Partsクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:29:59.339Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:05.431Z
---

<nav>

- [解説](#解説)
  - [`objects`](#objects)
  - [`pos`](#pos)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `objects`
パーツを構成するオブジェクトの名前
<dl>
<dt>データ型</dt>
<dd>

文字列の配列 `<String[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>     
</dl>
</section>

<section>

## `pos`
中心座標
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
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