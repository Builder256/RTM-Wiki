---
title: 如何安裝Realtrainmod
description: 千里之行 始於足下
published: true
date: 2025-02-25T07:49:01.643Z
tags: realtrainmod解説
editor: markdown
dateCreated: 2025-01-12T04:52:06.422Z
---

## 下載連結

給已經了解以下內容的人：

## 1.7.10
| ファイル名                                | URL                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| RTM1.7.10.45_Forge10.13.4.1558.jar      | https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/6221539      |
| NGTLib1.7.10.35_Forge10.13.4.1558.jar   | https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4030452            |
| MCTE1.7.10.18_Forge10.13.4.1558.jar     | https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4030456 |
| src1.7.10_20200822+KaizPatchX-1.9.1.jar | https://github.com/Kai-Z-JP/KaizPatchX/releases/tag/v1.9.1                   |
{.dense}

## 1.12.2
| ファイル名                                      | URL                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| RTM2.4.24-43_forge-1.12.2-14.23.2.2611.jar    | https://www.curseforge.com/minecraft/mc-mods/realtrainmod/files/4641603      |
| NGTLib2.4.21-38_forge-1.12.2-14.23.2.2611.jar | https://www.curseforge.com/minecraft/mc-mods/ngtlib/files/4641592            |
| MCTE2.4.12-26_forge-1.12.2-14.23.2.2611.jar   | https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor/files/4641597 |
| fixRtm-2.0.28.jar                             | https://www.curseforge.com/minecraft/mc-mods/fixrtm/files/4654155            |
{.dense}

# 如何導入Realtrainmod

你可以參考 [從forge開始裝模組! 2020年版 以RTM模組為例 - Minecraft X Real Train Mod教學篇 宇宙初心者教學【拉斯特】](https://www.youtube.com/watch?v=Hjt7WTLnjic)

## 前提條件
* 請使用正版的 Minecraft Java Edition
* 安裝還有啟動該模組會具有一定風險，模組造成任何損害請自行負責
* 是否曾經使用過必須手動下載和應用的 Minecraft 模組？
如果你只有使用自動下載和應用程式模組的啟動器玩過任何模組，建議你在安裝 RealTrainMod 之前先學會如何使用官方啟動器手動安裝模組。

## Realtrainmod 對應環境

* Minecraft Java Edition 限定
* RealTrainMod 主要有 1.12.2 和 1.7.10 兩個版本
還有其他可用的版本(例如1.10)，但因為有些已經停止維護了，並且一些追加包可能不支援這些版本，所以不建議使用。
* 需要NGTlib

## 非原版的 RealTrainMod 
因為RealTrainMod目前處在~~半爛尾~~狀態，沒辦法頻繁的進行更新和修復。
所以目前1.7.10 和 1.12.2 的RTM有第三方開發的版本，修正了一些Bug並添加了新功能。
除非您有特殊原因，否則我們建議使用這些模組遊玩。

### KaizPatchX

* KaizPatchX是由Kaiz_JP開發的RealTrainMod修正版本
* 包含1.7.10版本RTM、NGTLib和MCTE，除了修復了bug之外，還包含1.12.2新增的功能。
* 有一些追加包需要1.12.2的功能，因此我們建議使用KaizPatchX。

### fixRTM

* fixRTM是由anatawa12開發的RealTrainMod附加修正模組
* 與 RealTrainMod 1.12.2 版本 相容，用於修復原版 RealTrainMod 中的bug
* 這個模組必須跟原版RTM一起使用。

## 導入方法

和其他需要Forge的模組一樣

### 同樣的部分

1. 安裝 Minecraft Forge
 如果你使用建議的1.7.10和1.12.2版本就沒有問題。

2. 使用 Forge 啟動 Minecraft 並確認 mods 資料夾已建立。

### 使用原版RealTrainMod時

1. 從 [CurseForge的NGTLib下載頁](https://www.curseforge.com/minecraft/mc-mods/ngtlib) 下載NGTLib

2. 從 [CurseForge的Realtrainmod下載頁](https://www.curseforge.com/minecraft/mc-mods/realtrainmod) 下載Realtrainmod

3. 把下載到的`.jar`檔案移動到mods資料夾

4. 啟動 Minecraft 並確認 RealTrainMod 已新增至模組清單。

### 使用KaizPatchX時（for Minecraft 1.7.10）

1. 從 [Github的KaizPatchX下載頁](https://github.com/Kai-Z-JP/KaizPatchX) 下載KaizPatchX

3. 把下載到的`.jar`檔案移動到mods資料夾

4. 啟動 Minecraft 並確認 RealTrainMod 已新增至模組清單。

### 使用fixRTMを時（for Minecraft 1.12.2）

1. 下載原版RTM

2. 從 [CurseForge的fixRTM下載頁](https://www.curseforge.com/minecraft/mc-mods/fixrtm) 下載安定版的fixRTM（沒有beta或rc的符號）

3. 把下載到的`.jar`檔案移動到mods資料夾

4. 啟動 Minecraft 並確認 RealTrainMod 已新增至模組清單。
