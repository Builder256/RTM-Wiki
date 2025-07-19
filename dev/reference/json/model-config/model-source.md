---
title: RTMアドオン制作 - JSON設定項目 共通3 ModelConfig.ModelSourceクラス
description: ModelConfig.ModelSourceクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:29:23.442Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:11.278Z
---

<nav>

- [解説](#解説)
  - [`modelFile`](#modelfile)
  - [`textures`](#textures)
  - [`rendererPath`](#rendererpath)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `modelFile`
モデルファイルのパス
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

## `textures`
マテリアル名と、それに対応するテクスチャファイルのパス
<dl>
<dt>データ型</dt>
<dd>

文字列の配列の配列 `<String[][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

**マテリアルとテクスチャ、オプションの設定方法**      
```json
["materialName", "texturePath", "option"]
```
- `"materialName"`: 3Dモデルファイルで設定したマテリアル名 <String>
- `"texturePath"`: その材質に使用するテクスチャのパス <String>
- `"option"`: 透過、発光を有効化するか <String>
  `AlphaBlend`が含まれていれば透過, `Light`が含まれていれば発光が有効化される
{.grid-list}

</section>

<section>

## `rendererPath`
描画スクリプトのパス
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