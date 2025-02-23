---
title: JSONファイルの設定項目
description: 
published: true
date: 2025-02-23T18:14:13.188Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

> ⚠ このページは執筆中であり、今後内容が大幅に追加・変更される可能性があります。
{.is-warning}

このページでは、主に車両モデルのJSONでの設定項目について解説します。

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
| キー名         | 型       | 説明 |
|--------------|--------|--------------------------|
| `frontBogie` | `object` | 前方の台車の設定（`"bogieModel2"` の値と同様） |
| `rearBogie`  | `object` | 後方の台車の設定（`"bogieModel2"` の値と同様） |

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

