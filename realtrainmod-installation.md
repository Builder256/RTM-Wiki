---
title: 【2025年最新版】RealTrainModのインストール方法を詳しく解説！
description: Minecraftの鉄道Mod『RealTrainMod（RTM）』の詳しい導入手順を紹介！このページを読めば純正版のバージョン1.7.10・1.12.2の導入方法のほか、改良版のKaizPatchX・fixRTMの導入方法もまるわかり！
published: true
date: 2025-04-28T13:38:32.038Z
tags: 
editor: markdown
dateCreated: 2025-01-08T02:13:04.103Z
---

このページでは、Minecraftの鉄道Mod「RealTrainMod」の導入方法について詳しく解説します。  
RealTrainModがどのようなModなのか知りたい方は、以下のページをご覧ください。  
- [RealTrainModとは](/ja/home#realtrainmodとは)
{.links-list}

# 手っ取り早くダウンロードリンクが欲しい方へ

以下の内容をすでに理解している方向けの情報です。

## 1.7.10
| ファイル名                              | URL                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| RTM1.7.10.45_Forge10.13.4.1558.jar      | https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/6221539      |
| NGTLib1.7.10.35_Forge10.13.4.1558.jar   | https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4030452            |
| MCTE1.7.10.18_Forge10.13.4.1558.jar     | https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4030456 |
| src1.7.10_20200822+KaizPatchX-1.9.1.jar | https://github.com/Kai-Z-JP/KaizPatchX/releases/tag/v1.9.1                   |
{.dense}

## 1.12.2
| ファイル名                                    | URL                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| RTM2.4.24-43_forge-1.12.2-14.23.2.2611.jar    | https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4641603      |
| NGTLib2.4.21-38_forge-1.12.2-14.23.2.2611.jar | https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4641592            |
| MCTE2.4.12-26_forge-1.12.2-14.23.2.2611.jar   | https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4641597 |
| fixRtm-2.0.28.jar                             | https://www.curseforge.com/minecraft/mc-mods/fixrtm/files/4654155            |
{.dense}

# 前提条件
以下の条件を満たしている必要があります。
* 正規ライセンス品のMinecraft Java Editionを所有していること
* Modの危険性を理解していること
* 手動でMinecraftのModをダウンロード・適用した経験があること  
  自動でModをダウンロード・適用するランチャーのみを使用している方は、公式ランチャーでの手動インストール方法を学んでからRealTrainModを導入することをおすすめします。

# RealTrainModの対応環境

* RealTrainModはMinecraft Java Editionにのみ対応しています。
* 主にMinecraft 1.7.10と1.12.2に対応しています。  
  他のバージョンにも対応していますが、後述するフォーク版や不具合修正Modがなく、追加アドオンの動作保証もないためおすすめできません。
* RealTrainModには、Minecraft ForgeとNGTLibが前提として必要です。

# 純正以外のRealTrainMod
現在、RealTrainModの開発は不定期で行われており、リアルタイムのアップデートや不具合修正が行われていません。  
そのため、特に利用者の多い1.7.10と1.12.2のRealTrainModには、サードパーティーによって開発された不具合修正や機能追加がされたバージョンがあります。  
特に理由がない限り、これらのModを使用・併用することをおすすめします。

## KaizPatchX

* KaizPatchXは、Kaiz_JP氏によって開発されたRealTrainModのフォークです。
* 1.7.10版のRTM、NGTLib、MCTEを内包しており、不具合修正に加え、後のバージョンで追加された機能の移植や独自の新機能が実装されています。
* 移植された機能や独自機能を必要とするアドオンもあるため、純正ではなくこちらを使用することを推奨します。

## fixRTM

* fixRTMは、anatawa12氏によって開発されたRealTrainModの不具合修正Modです。
* 1.12.2版のRealTrainModに対応しており、通常のRealTrainModの不具合を修正することを目的としています。
* 多くの不具合が修正されているため、純正のRealTrainModに加えこちらを併用することを推奨します。

# 導入方法

他のMinecraft Forgeが前提のModと同様の手順です。  
[はじめてのRTM【初期導入編】 【RealTrainMod】| RTM Addon Search](https://rtmaddon-search.com/how_to_rtm/) も参考にしてください。

## 共通手順

1. Minecraft Forgeをインストールします。  
   1.7.10、1.12.2ともにRecommendバージョンを使用すれば問題ありません。

2. ForgeのみでMinecraftを起動し、modsフォルダが作成されていることを確認します。

## 純正のRealTrainModを使用する場合

1. [CurseForgeのNGTLibのページ](https://www.curseforge.com/minecraft/mc-mods/ngtlib) から使用したいバージョンのNGTLibをダウンロードします。

2. [CurseForgeのRealTrainModのページ](https://www.curseforge.com/minecraft/mc-mods/realtrainmod) から使用したいバージョンのRealTrainModをダウンロードします。

3. ダウンロードした`.jar`ファイルをmodsフォルダに移動します。

4. Minecraftを起動し、Mod一覧にRealTrainModが追加されていることを確認してください。

## KaizPatchXを使用する場合（for Minecraft 1.7.10）

1. [GitHubのKaizPatchXのページ](https://github.com/Kai-Z-JP/KaizPatchX) から最新版のKaizPatchXをダウンロードします。

2. ダウンロードした`.jar`ファイルをmodsフォルダに移動します。

3. Minecraftを起動し、Mod一覧にRealTrainModが追加されていることを確認してください。

## fixRTMを使用する場合（for Minecraft 1.12.2）

1. 純正と同様にRealTrainModを追加します。

2. [CurseForgeのfixRTMのページ](https://www.curseforge.com/minecraft/mc-mods/fixrtm) から安定版のfixRTMをダウンロードします（betaやrcの表記のないもの）。

3. ダウンロードした`.jar`ファイルをmodsフォルダに移動します。

4. Minecraftを起動し、Mod一覧にfixRTMが追加されていることを確認してください。

# 関連サイト
- [はじめてのRTM【初期導入編】 【RealTrainMod】| RTM Addon Search *RealTrainModを初めて導入するあなたに、導入方法をわかりやすくご案内します。 | ※RealTrainModを導入するには、事前にMinecraft Forgeを実行する環境が必要になります。*](https://rtmaddon-search.com/how_to_rtm/)
- [RTMの導入方法 - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677453)
- [NGTLib - Minecraft Mods - CurseForge *Library of ngt5479's mods.*](https://www.curseforge.com/minecraft/mc-mods/ngtlib)
- [RealTrainMod - Minecraft Mods - CurseForge *Adds real scale train, rail and more.*](https://www.curseforge.com/minecraft/mc-mods/realtrainmod)
- [Kai-Z-JP/KaizPatchX: もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。 *もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。. Contribute to Kai-Z-JP/KaizPatchX development by creating an account on GitHub.*](https://github.com/Kai-Z-JP/KaizPatchX)
- [fixRTM - Minecraft Mods - CurseForge *fixes some bugs of RTM and make RTM more useful!*](https://www.curseforge.com/minecraft/mc-mods/fixrtm)
- [fixrtm/fixRTM: Fixes some bugs of RTM and make RTM more useful! *Fixes some bugs of RTM and make RTM more useful! Contribute to fixrtm/fixRTM development by creating an account on GitHub.*](https://github.com/fixrtm/fixRTM)
{.links-list}