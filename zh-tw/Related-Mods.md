---
title: 相關模組
description: 
published: true
date: 2025-01-12T06:58:48.675Z
tags: 
editor: markdown
dateCreated: 2025-01-12T06:58:48.675Z
---

# 相關模組

適合與RealTrainMod一同遊玩的模組。

## ATSAssistMod

### 說明
ATSAssistMod、通稱「ATSA」、由Kaiz_JP開發的RTM機電系統模組、此模組能夠更加容易製作列車安全系統。

除了基本的速度限制外，還可以配置TASC（列車停止系統）、ATO（列車自動運行系統）和ATACS（移動閉塞），並透過與其他系統組合，可達成各種多樣性的駕駛輔助，甚至使自動駕駛成為可能。

### 對應版本
* Minecraft 1.7.10
* Minecraft 1.12.2

### 下載連結
GitHub： <a href="https://github.com/Kai-Z-JP/ATSAssistMod/tree/master" target="_blank">https://github.com/Kai-Z-JP/ATSAssistMod/tree/master</a>

## Ha10gen's BuildingMaterial Mod

### 解説
Ha10gen's BuildingMaterial Mod、通稱「H10BM」は、由ha10gen開發的建築方塊模組。

加入了各種適合用於車站或是其他建築的各式方塊

### 對應版本
* Minecraft 1.7.10

### 下載連結
下載頁面：<a href="https://sites.google.com/view/h10bm/top" target="_blank">https://sites.google.com/view/h10bm/top</a>

## MC Terrain Editor

### 解説
MC Terrain Editor、通稱「MCTE」、由ngt5479開發的建築輔助模組。

能夠正常對 RealTrainMod 的軌道和方塊進行編輯，這是小木斧或是其他模組和插件沒辦法達到的。除了填滿、替換、複製與貼上方塊等基本功能外，還具備處理迷你方塊與 .ngto 格式的方塊數據匯入和匯出等功能。

迷你方塊功能可以將多個方塊作為「一個方塊」來處理，不僅可以作為防具穿戴，還能作為沒有實體碰撞箱、裝飾用方塊放置。
此外，迷你方塊可以進行縮放、旋轉和移動等多種操作，用途非常廣泛。

此外，透過方塊數據的匯入和匯出功能，可以製作稱為「建築包」的創作品，包含許多建築物。這些主要是 .ngto 數據的匯出物，透過使用 MCTE 將 .ngto 放置於世界中，可以瞬間建設住宅、商店等各種建築物。

> MCTEには、通称「0バグ」と呼ばれる***致命的な悪影響を及ぼす***不具合が存在することが知られています。
> これは、MCTEを使用してブロックの埋め立てや置き換えなどを行う際、選択した範囲の始点と終点の2点の内の片方がワールド原点（0,0,0）に移動してしまう不具合であり、結果として***ワールドの大部分が単一のブロックで埋め尽くされて***しまいます。
> 
> MCTEにはWorldEditの`//undo`や`//redo`に対応するような操作の「取り消し」や「やり直し」を行う機能がないため、ワールドデータのバックアップからの復元以外の方法はありません。
> 
> Minecraft 1.12.2や、KaizPatchXのMCTEでは、この不具合が修正されているとされていますが、サーバーとクライアント間のラグが大きい場合に、依然として類似の現象が発生することが報告されています。ラグを感じる際には、MCTEの使用を控える、こまめにワールドのバックアップをとるなどして、対策をする必要があります。
> 
> ![2020-03-11_14.17.02.png](/2020-03-11_14.17.02.png =750x)
> 参考画像：ブロックを削除する際に0バグが発生し、計4800チャンクの地面が消滅した。
{.is-danger}

### 対応バージョン
* Minecraft 1.7.10
* Minecraft 1.12.2
* その他多数のバージョン

### リンク
CurseForge：<a href="https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor" target="_blank">https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor</a>

## Minatocc_Addblocks

### 解説
Minatocc_Addblocksは、meitetsu600V氏によって解説された、建材追加Modです。

RealTrainModユーザーによって開発されているため、RealTrainModと相性の良い建材を多数収録しています。

### 対応バージョン
* Minecraft 1.12.2

### リンク
ホームページ：<a href="https://minatocc.com/archives/1920" target="_blank">https://minatocc.com/archives/1920</a>

## WebCTC

### 解説
WebCTCは、Kaiz_JP氏によって開発された、CTC（列車集中制御装置）をウェブページ上で操作できるようにしたModです。

RealTrainModの車両の線路の状態や、在線位置などをウェブページ上で確認、操作することができます。

### 対応バージョン
* Minecraft 1.7.10 Forge 10.13.4.1614
* KaizPatchX v1.3RC またはそれ以降が必要

### リンク
GitHub：<a href="https://github.com/WebCTC/WebCTC" target="_blank">https://github.com/WebCTC/WebCTC</a>