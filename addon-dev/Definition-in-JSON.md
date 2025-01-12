---
title: JSONファイルの設定項目
description: 
published: true
date: 2025-01-12T05:24:23.270Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

## 注意
このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。そのため、多言語対応担当の編集者は、今後このページに大幅な変更が加えられる可能性を理解したうえで多言語への対応をしてくださるようお願いいたします。

# JSONファイルの設定項目

とはいってもこんなところを見に来る人は基本的な作り方は知っていそうなのでマニアックなところから。

## 台車の定義 `"bogieModel2"`/`"bogieModel3"`

### 前後同じ台車を指定する場合

`"bogieModel2"`を使用することで前後同じ台車を指定できます。

#### 構文

```
"bogieModel2": {modelFile, textures, (rendererPath)}
```

#### キー

`"modelFile"`

対象のモデルファイルのパスを表す文字列です。

`"textures"`

対象のテクスチャファイルの材質名とファイルパスを含む配列です。

`"rendererPath"` (省略可)

適用する描画スクリプトのパスを表す文字列です。

#### 使用例

```JSON
"bogieModel2": {
    "modelFile": "path/to/file",
    "textures": [["materialname", "path/to/file", ""]],
    "rendererPath": "path/to/file"
}
```

### 前後違う台車を指定する場合

`"bogieModel3"`を使用することで前後別の台車を指定できます。

#### 構文

```
"bogieModel3": [frontBogie, rearBogie]
```

#### キー

`frontBogie`

前台車を表すオブジェクトです。  
内容は`"bogieModel2"`と同様です。

`rearBogie`

後台車を表すオブジェクトです。  
内容は`"bogieModel2"`と同様です。

#### 使用例

```JSON
"bogieModel3": [
    {
        "modelFile": "path/to/file",
        "textures": [["materialname", "path/to/file"]],
        "rendererPath": "path/to/file"
    },
    {
        "modelFile": "path/to/file",
        "textures": [["materialname", "path/to/file"]],
        "rendererPath": "path/to/file"
    }
]
```