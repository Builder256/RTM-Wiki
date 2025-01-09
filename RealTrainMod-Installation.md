---
title: RealTrainModのインストール
description: RealTrainModのインストール方法
published: true
date: 2025-01-08T04:04:52.185Z
tags: realtrainmod解説
editor: markdown
dateCreated: 2025-01-08T02:13:04.103Z
---

## 手っ取り早くダウンロードリンクが欲しいという人へ

以下で説明する内容をすでに理解している方向け。

| 1.7.10 | - |
| --- | --- |
| RTM1.7.10.44_Forge10.13.4.1558.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4030455" target="_blank">https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4030455</a> |
| NGTLib1.7.10.35_Forge10.13.4.1558.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4030452" target="_blank">https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4030452</a> |
| MCTE1.7.10.18_Forge10.13.4.1558.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4030456" target="_blank">https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4030456</a> |
| src1.7.10_20200822+KaizPatchX-1.8.0.jar | <a href="https://github.com/Kai-Z-JP/KaizPatchX/releases/tag/v1.8.0" target="_blank">https://github.com/Kai-Z-JP/KaizPatchX/releases/tag/v1.8.0</a> |


| 1.12.2 | - |
| --- | --- |
| RTM2.4.24-43_forge-1.12.2-14.23.2.2611.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4641603" target="_blank">https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4641603</a> |
| NGTLib2.4.21-38_forge-1.12.2-14.23.2.2611.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4641592" target="_blank">https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4641592</a> |
| MCTE2.4.12-26_forge-1.12.2-14.23.2.2611.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4641597" target="_blank">https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4641597</a> |
| fixRtm-2.0.28.jar | <a href="https://www.curseforge.com/minecraft/mc-mods/fixrtm/files/4654155" target="_blank">https://www.curseforge.com/minecraft/mc-mods/fixrtm/files/4654155</a> |

# RealTrainModのインストール方法

<a href="https://rtmaddon-search.com/how_to_rtm/" target="_blank">はじめてのRTM【初期導入編】 【RealTrainMod】| RTM Addon Search</a> も参考にしてください。

## 前提条件
* 正規ライセンス品のMinecraft Java Editionを所有している
* Modの危険性を理解している
* 手動でダウンロード、適用するMinecraftのModを使用したことがある  
  自動でModのダウンロード、適用が行われるランチャーでのみModをプレイしたことがある方は、公式ランチャーでの手動のModのインストール方法を学んでからRealTrainModをプレイすることをおすすめします。

## RealTrainModの対応環境

* RealTrainModは、Minecraft Java Editionにのみ対応しています
* RealTrainModは、主にMinecraft 1.7.10と1.12.2に対応しています  
他にも対応バージョンはありますが、後述するフォーク版や不具合修正Modがなく、また追加アドオンの中にはそれらでの動作が保証されていない場合もあるため、おすすめできません。
* RealTrainModには、前提としてMinecraft ForgeとNGTLibが必要です

## 純正以外のRealTrainMod
現在、RealTrainModの開発は不定期に行われており、リアルタイムのアップデートや不具合修正がなされていません。
そのため、特に利用者の多い1.7.10と1.12.2のRealTrainModには、第三者によって開発された不具合修正や機能追加がされたバージョンがあります。
特に理由がない限り、これらのModを使用、併用することをおすすめします。

### KaizPatchX

* KaizPatchXは、Kaiz_JP氏によって開発されたRealTrainModのフォーク版です
* 1.7.10版のRTM、NGTLib、MCTEを内包しており、不具合修正に加え、後のバージョンで追加された機能も移植されています
* 移植された機能を必要とする追加アドオンもあるため、純正ではなくこちらを使用するのをおすすめします

### fixRTM

* fixRTMは、anatawa12氏によって開発されたRealTrainModの不具合修正Modです
* 1.12.2版のRealTrainModに対応しており、通常のRealTrainModの不具合を修正することを目指しています
* 多くの不具合が修正されているため、純正のRealTrainModに加えこちらを併用するのをおすすめします

## 導入方法

他のMinecraft Forgeが前提のModと同様です。

### 共通

1.  Minecraft Forgeをインストール  
    1.7.10、1.12.2共にReccomendバージョンを使用すれば問題ありません。

2.  ForgeのみでMinecraftを起動し、modsフォルダが作成されていることを確認

### 純正のRealTrainModを使用する場合

1. <a href="https://www.curseforge.com/minecraft/mc-mods/ngtlib" target="_blank">CurseForgeのNGTLibのページ</a> から使用したいバージョンのNGTLibをダウンロード

2. <a href="https://www.curseforge.com/minecraft/mc-mods/realtrainmod" target="_blank">CurseForgeのRealTrainModのページ</a> から使用したいバージョンのRealTrainModをダウンロード

3. ダウンロードした`.jar`ファイルをmodsフォルダに移動

4. Minecraftを起動しMod一覧にRealTrainModが追加されていることを確認してください

### KaizPatchXを使用する場合（for Minecraft 1.7.10）

1. <a href="https://github.com/Kai-Z-JP/KaizPatchX" target="_blank">GitHubのKaizPatchXのページ</a> から最新版のKaizPatchXをダウンロード

2. ダウンロードした`.jar`ファイルをmodsフォルダに移動

3. Minecraftを起動しMod一覧にRealTrainModが追加されていることを確認してください

### fixRTMを使用する場合（for Minecraft 1.12.2）

1. 純正と同様にRealTrainModを追加

2. <a href="https://www.curseforge.com/minecraft/mc-mods/fixrtm" target="_blank">CurseForgeのfixRTMのページ</a> から安定版のfixRTMをダウンロード（betaやrcの表記のないもの）

3. ダウンロードした`.jar`ファイルをmodsフォルダに移動

4. Minecraftを起動しMod一覧にfixRTMが追加されていることを確認してください
