---
title: JSONファイルの設定項目
description: 
published: true
date: 2025-02-25T07:48:23.971Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

> ⚠ このページは執筆中であり、今後内容が大幅に追加・変更される可能性があります。
{.is-warning}

このページでは、主に車両モデルのJSONでの設定項目について解説します。

> インデントについて、様々な派閥があるかと思いますが、ここでは恐らくRealTrainMod界隈で最も主流である空白4つで1つのインデントとする作法を採用します
{.is-info}

<blockquote class="twitter-tweet" data-lang="ja" data-dnt="true" data-theme="dark"><p lang="ja" dir="ltr">インデントのスペース <a href="https://t.co/SuTM2sEosJ">pic.twitter.com/SuTM2sEosJ</a></p>&mdash; arkw (@arkw0) <a href="https://twitter.com/arkw0/status/1881650240660668586?ref_src=twsrc%5Etfw">2025年1月21日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

せ、戦争じゃ......

# 台車の定義 `"bogieModel2"` / `"bogieModel3"`

ゲーム内の車両には、台車（ボギー）を設定することができます。  
台車の指定方法には、前後で同じ台車を使用する場合と、異なる台車を使用する場合の2種類があります。

## 前後同じ台車を指定する (`"bogieModel2"`)

`"bogieModel2"` を使用すると、前後で同じ台車を設定できます。

```JSON
"bogieModel2": { "modelFile": "...", "textures": [...], "rendererPath": "..." }
```

### キーの説明
| キー名            | 型                | 説明                                                                             |
|------------------|-------------------|---------------------------------------------------------------------------------|
| `"modelFile"`    | `string`          | モデルファイルのパス（`models` ディレクトリからの相対パス）                             |
| `"textures"`     | `array of arrays` | `[材質名, テクスチャのパス]` のペアを格納した配列（`minecraft` ディレクトリからの相対パス） |
| `"rendererPath"` | `string` (省略可)  | 描画スクリプトのパス（指定するとスクリプトで描画を制御可能）                              |
{.dense}

### 使用例
```JSON
"bogieModel2": {
    "modelFile": "bogie.mqo",
    "textures": [
        ["mat1", "textures/bogie.png"]
    ],
    "rendererPath": "scripts/bogie.js"
}
```


## 前後で異なる台車を指定する (`"bogieModel3"`)

`"bogieModel3"` を使用すると、前後で異なる台車を設定できます。

```JSON
"bogieModel3": [ frontBogie, rearBogie ]
```

### キーの説明
| キー名        | 型       | 説明                                       |
|--------------|----------|-------------------------------------------|
| `frontBogie` | `object` | 前方の台車の設定（`"bogieModel2"` の値と同様） |
| `rearBogie`  | `object` | 後方の台車の設定（`"bogieModel2"` の値と同様） |
{.dense}

### 使用例
```JSON
"bogieModel3": [
    {
        "modelFile": "bogieF.mqo",
        "textures": [
          	["mat1", "textures/bogieF.png"]
        ],
        "rendererPath": "scripts/bogieF.js"
    },
    {
        "modelFile": "bogieR.mqo",
        "textures": [
          	["mat1", "textures/bogieR.png"]
        ],
        "rendererPath": "scripts/bogieR.js"
    }
]
```

