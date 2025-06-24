---
title: RTMのインストール方法（Mod経験者向け）
description: Modに慣れている方や、高度な情報が必要な方に向けたインストール方法を解説。
published: true
date: 2025-06-24T11:12:16.042Z
tags: 
editor: markdown
dateCreated: 2025-05-18T21:05:27.182Z
---

# 高度なRealTrainMod（RTM）のインストール方法
このページでは、Modに慣れている方や高度な情報が必要な方に向けたRealTrainMod（RTM）のインストール方法を解説します。

初心者向けのわかりやすい解説が欲しい方は、以下のページをご覧ください。
[【初心者向け】RealTrainMod（RTM）の導入方法をかんたん解説！](/ja/getting-started/installing)

# ダウンロードリンク
各Modのダウンロードページへの直通リンクです。遷移してもすぐにダウンロードは始まりません。

## 1.7.10
| ファイル名                              | URL                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| RTM1.7.10.46_Forge10.13.4.1558.jar      | https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/6505479      |
| NGTLib1.7.10.36_Forge10.13.4.1558.jar   | https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/6505474            |
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
RTMをインストールするためには、以下の条件を満たしている必要があります。
* 正規ライセンス品のMinecraft Java Editionを所有していること
* Modの危険性を理解していること
* 手動でMinecraftのModをダウンロード・インストールした経験があること
  RTMでは、多くのユーザーは公式ランチャーを使用しているため、サードパーティーランチャーを使用した場合のサポートがされない場合があります。
  自動でModをダウンロード・適用するランチャーのみを使用している方は、公式ランチャーでの手動インストール方法を学んでからRTMを導入することを推奨します。
  
# 推奨環境
* 主にMinecraft 1.7.10と1.12.2に対応しています。  
  他のバージョンにも対応しています[^1]が、後述するフォーク版や不具合修正Modがなく、追加アドオンの動作保証もないため推奨できません。
* RTMには、Minecraft ForgeとNGTLibが前提として必要です。

# 非公式のRealTrainMod（RTM）
現在、RTMの開発は不定期で行われており、リアルタイムのアップデートや不具合修正が行われていません。
そのため、特に利用者の多い1.7.10と1.12.2のRTMには、サードパーティーによって開発された不具合修正や機能追加がされたバージョンがあります。
また、ソースコードが現在入手できない[^2]ため、他のModとの競合が発生した際に、修正・対応される可能性が限りなく低いです。
特に理由がない限り、これらのModを使用・併用することを推奨します。

## [KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX)
- KaizPatchXは、Kaiz_JP氏によって開発されたRTMのフォークです。
- 1.7.10版のRTM、NGTLib、MCTEを内包しており、不具合修正に加え、後のバージョンで追加された機能の移植や独自の新機能が実装されています。
- 移植された機能や独自機能を必要とするアドオンもあるため、公式のRTMではなくこちらを使用することを推奨します。

## [fixRTM](https://www.curseforge.com/minecraft/mc-mods/fixrtm)
- fixRTMは、anatawa12氏によって開発されたRTMの不具合を修正するModです。
- 1.12.2版のRTMに対応しており、通常のRTMの不具合を修正することを目的としています。
- 多くの不具合が修正されているため、公式のRTMに加えこちらを併用することを推奨します。

# 導入方法
他のMinecraft Forgeが前提のModと同様の手順です。  

## 公式のRTMを使用する場合
1. [Minecraft Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)をインストール
ForgeのバージョンはRecommendのものを使用してください。

2. NGTLib、RTMをインストール
3. Minecraftを起動し、Mod一覧にRTM、NGTLibが追加されていることを確認

## KaizPatchXを使用する場合（for Minecraft 1.7.10）
1. Minecraft Forgeをインストール
   バージョンは`1.7.10 - 10.13.4.1614`を使用[^3]してください。
2. KaizPatchXをインストール
3. Minecraftを起動し、Mod一覧にRTM、NGTLib、MCTEが追加されていることを確認

## fixRTMを使用する場合（for Minecraft 1.12.2）
1. 公式と同様にRTMをインストール
   ただし、Minecraft Forgeは`1.12.2 - 14.23.5.2847`以降を使用[^4]してください。
2. 安定版のfixRTMをインストール
3. Minecraftを起動し、Mod一覧にRTM、NGTLib、fixRTMが追加されていることを確認

[^1]: 少なくとも以下のバージョンに対応していたことが確認されています。
    - 1.5.2
    - 1.6.2
    - 1.6.4
    - 1.7.2
    - 1.8.9
    - 1.9.4
    - 1.10.2
[^2]: 以前は公開されていましたが、現在はいずれのURLもダウンロード不可能となっています。
[^3]: 出典: https://github.com/Kai-Z-JP/KaizPatchX/tree/adf6ce22f64927f057795f3e94ec916f59bc25f0?tab=readme-ov-file#kaizpatch
[^4]: 出典: https://www.curseforge.com/minecraft/mc-mods/fixrtm#:~:text=Minecraft%20Forge%2014.23.5.2847%E4%BB%A5%E9%99%8D%E3%81%8C%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%2014.23.5.2847%20or%20later%20is%20supported.

*[RTM]: RealTrainMod
*[MCTE]: MC Terrain Editor