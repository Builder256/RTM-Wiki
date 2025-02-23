---
title: JSONファイルの設定項目
description: 
published: true
date: 2025-02-23T17:37:58.446Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

とはいってもこんなところを見に来る人は基本的な作り方は知っていそうなのでマニアックなところから。

# 台車の定義 `"bogieModel2"`/`"bogieModel3"`

## 前後同じ台車を指定する場合
`"bogieModel2"`を使用することで前後同じ台車を指定できます。
```
"bogieModel2": {"modelFile", "textures", ("rendererPath")}
```

### キー
- `"modelFile"`\<string>
- `"textures"`\<array>
- `"rendererPath"`\<string> (省略可)

`"modelFile"`で指定するモデルファイル、`"textures"`でモデルファイルの材質名と割り当てるテクスチャを指定します。`"modelFile"`は`models`ディレクトリからの相対パスで指定してください。その他の項目は`minecraft`ディレクトリからの相対パスで指定してください。
もし `"rendererPath"`に台車の描画スクリプトが指定されていれば、描画スクリプトで台車の描画を実装することができます。

### 使用例
```JSON
"bogieModel2": {
    "modelFile": "bogie.mqo",
    "textures": [["mat1", "textures/bogie.png"]],
    "rendererPath": "scripts/bogie.js"
}
```

## 前後違う台車を指定する場合

`"bogieModel3"`を使用することで前後別の台車を指定できます。
```
"bogieModel3": [frontBogie, rearBogie]
```

### キー
- `frontBogie`\<object>
- `rearBogie`\<object>

`frontBogie`、`rearBogie`の値はそれぞれ`"bogieModel2"`の値と同様です。

### 使用例

```JSON
"bogieModel3": [
    {
        "modelFile": "bogieF.mqo",
        "textures": [["mat1", "textures/bogieF.png"]],
        "rendererPath": "scripts/bogieF.js"
    },
    {
        "modelFile": "bogieR.mqo",
        "textures": [["mat1", "textures/bogieR.png"]],
        "rendererPath": "scripts/bogieR.js"
    }
]
```