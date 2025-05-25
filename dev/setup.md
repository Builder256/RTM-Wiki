---
title: アドオン開発環境の準備
description: RealTrainMod（RTM）のアドオンを開発するための準備について説明。必要な知識や、ソフトウエアまで具体的な構成の例を挙げて詳しく解説。
published: false
date: 2025-05-25T09:40:22.820Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-05-25T09:40:22.820Z
---

# はじめに

RealTrainMod（RTM）のアドオンを作るには、いくつかのツールや基礎知識が必要です。このページでは、**開発環境のセットアップ**や**最低限必要なフォルダ構成**について解説します。

# 必要なツール一覧

| 用途             | ツール名                                  | 説明・補足                            |
| ---------------- | ----------------------------------------- | ------------------------------------- |
| モデリング       | [Metasequoia 4](https://www.metaseq.net/) | MQO形式で保存可能なモデリングソフト   | 
| テキスト編集     | Visual Studio Code など                   | JSONやLuaスクリプトの編集に便利       |
| 動作確認用ゲーム | Minecraft 1.7.10 + RTM                    | アドオンを読み込んで動作確認するため  |
| 圧縮ソフト       | 7-Zip、WinRAR など                        | アドオンをZIP形式で配布する場合に使用 |

# フォルダ構成の基本

アドオンは `RealTrainMod/addons/` フォルダ以下に配置します。

```plaintext
.minecraft/
└── RealTrainMod/
    └── addons/
        └── MyAddon/          ← 自作アドオンのフォルダ名
            ├── config.json
            ├── body.mqo
            ├── script.lua
            └── texture.png
```

> 📌 フォルダ名 `MyAddon` は任意の名前でOKですが、英数字推奨です。

---

# 最小構成のサンプル

```plaintext
MyTrain/
├── config.json      ← 各種設定ファイル（必須）
├── body.mqo         ← モデルファイル（Metasequoiaで作成）
└── texture.png      ← テクスチャ画像（PNG形式）
```

必要に応じて `script.lua`（Luaスクリプト）や `bogie.mqo`（台車モデル）などを追加できます。

# config.json の最低限構成例

```json
{
  "name": "mytrain",
  "displayName": "My Train",
  "itemID": "my_train",
  "category": "vehicle"
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