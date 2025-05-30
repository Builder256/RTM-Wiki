---
title: アドオン開発環境の準備
description: RealTrainMod（RTM）のアドオンを開発するための準備について説明。必要な知識や、ソフトウエアまで具体的な構成の例を挙げて詳しく解説。
published: false
date: 2025-05-25T16:11:52.983Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-05-25T09:40:22.820Z
---

# はじめに
RealTrainMod（RTM）のアドオンを作るには、いくつかのツールや基礎知識が必要です。このページでは、**開発環境のセットアップ**や**最低限必要なフォルダ構成**について解説します。

# 必要なソフトウエア

この解説では、以下のソフトウエアを使用します。

| 用途           | ソフトウエア                                         | 説明・補足                             |
| -------------- | ---------------------------------------------------- | -------------------------------------- |
| モデリング     | [Metasequoia 4](https://www.metaseq.net/)            | MQO形式で保存可能な3DCGソフトウエア    |
| テクスチャ作成 | [GIMP](https://www.gimp.org/)                        | PNG形式で保存可能なペイントソフト      |
| テキスト編集   | [Visual Studio Code](https://code.visualstudio.com/) | エンコードを指定可能なテキストエディタ |
| 動作確認       | Minecraft Java Edition + KaizPatchX                  | アドオンの動作確認を行うゲーム         |


# フォルダ構成の基本

アドオンは `mods/` フォルダ以下に配置します。

```plaintext
[RTM]foo_bar_pack.zip
├─ LICENSE.txt
├─ README.txt
├─ pack.png
├─ assets/
│   └─ minecraft/
│       ├─ json/ JSON配置場所1
│       │   └─ ModelTrain_*.json // 設定ファイル（.json）
│       ├─ models/
│       │   ├─ *.mqo // 3Dモデルファイル（.mqo）
│       │   ├─ *.mqoz // 3Dモデルファイル（.mqoz）
│       │   ├─ *.ngto // 3Dモデルファイル（.ngto）
│       │   ├─ *.ngtz // 3Dモデルファイル（.ngtz）
│       │   └─ json/ JSON配置場所2
│       │       └─ ModelTrain_*.json // 設定ファイル（.json）
│       ├─ scripts/
│       │   └─ *.js // スクリプトファイル（.js）
│       └─ textures/
│           └─ train/
│               └─ */ // テクスチャファイルのフォルダ（車両形式ごと）
│                   ├─ button_*.png // ボタンのテクスチャファイル（.png）
│                   └─ *.png // 車両のテクスチャファイル（.png）
└─ mods/
    └─ RTM/
        └─ json/ //  JSON配置場所3
            └─ ModelTrain_*.json // 設定ファイル（.json）
        
        
        
        
```

> ファイル名 `[RTM]foo_bar_pack.zip`には任意の名前を使用できますが、RTMのバージョンによって起動しない可能性があるため、半角英数字のみを使用することを推奨します。
{.is-info}

---

# 最小構成のサンプル

```plaintext
[RTM]minimal_sample.zip
├─ readme.txt
├─ assets/
│  └─ minecraft/
│     ├─ textures/
│     │  └─ train/
│     │     └─ minimal.png
│     └─ models/
│        └─ minimal.mqo
└─ mods/
   └─ RTM/
      └─ train/
         └─ ModelTrain_minimal.json
```

必要に応じて `script.js`（JavaScript）や `bogie.mqo`（台車モデル）などを追加できます。

# ModelTrain_*.json の最低限の構成例

```json
{
    
}
```

> 詳細は [`config.json` のリファレンス](../reference/config-json.md) を参照してください。

# 動作確認の手順

1. `.minecraft/RealTrainMod/addons/` に自作アドオンのフォルダを配置
2. Minecraft（RTM導入済）を起動
3. クリエイティブモードでアドオンが表示されるか確認
4. 配置して動作確認

# 次に読むべきページ

* [車両アドオンの構造](../targets/vehicle/overview.md)
* [MQOモデルのルール](../common/model.md)
* [config.json リファレンス](../reference/config-json.md)

# 補足

* JavaやForgeの知識は基本的に不要です
* ファイル名・拡張子は正確に（大文字小文字の違いに注意）
* ゲーム内で読み込まれない場合、`config.json` の書式ミスをチェック！

*[RTM]: RealTrainMod
*[MCTE]: MC Terrain Editor