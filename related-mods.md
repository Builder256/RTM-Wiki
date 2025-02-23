---
title: 関連Mod
description: RealTrainModと同時に使用すると有用と思われるMod。
published: true
date: 2025-02-23T11:20:14.539Z
tags: realtrainmod解説, mod解説
editor: markdown
dateCreated: 2025-01-08T04:50:19.273Z
---

# ATSAssistMod

## 解説
ATSAssistMod、通称「ATSA」は、Kaiz_JP氏によって開発された、RealTrainModの保安装置を簡単に構築できるようにするModです。

基本的な速度制限のほか、TASC（定位置停止支援装置）、ATO（自動列車運転装置）、ATACS（移動閉塞）の構築が可能となっており、他のシステムと組み合わせることで運転補佐から完全自動運転まで実現可能な高い汎用性を持っています。

## 対応バージョン
* Minecraft 1.7.10
* Minecraft 1.12.2

## リンク
GitHub： <a href="https://github.com/Kai-Z-JP/ATSAssistMod/tree/master" target="_blank">https://github.com/Kai-Z-JP/ATSAssistMod/tree/master</a>

RTM Wikiでの解説：[ATSAssistMod解説](/ja/mod-usage/ats-assist-mod)

# Ha10gen's BuildingMaterial Mod

## 解説
Ha10gen's BuildingMaterial Mod、通称「H10BM」は、ha10gen氏によって開発された、建材追加Modです。

RealTrainModユーザーによって開発されているため、RealTrainModと相性の良い建材を多数収録しています。
また、後述するMinatocc_Addblocksのバックポートも含んでおり、こちらで追加されたブロックも収録されています。

## 対応バージョン
* Minecraft 1.7.10

## リンク
ホームページ：<a href="https://sites.google.com/view/h10bm/top" target="_blank">https://sites.google.com/view/h10bm/top</a>

# MC Terrain Editor

## 解説
MC Terrain Editor、通称「MCTE」は、ngt5479氏によって開発された、ワールドデータ編集Modです。

RealTrainModの開発者によって開発されているため、他のワールドデータ編集Modでは困難な、RealTrainModの線路やブロックなどを正常に操作することができます。ブロックの埋め立てや置き換え、コピーアンドペーストのような基本的な機能のほかに、ミニチュアブロックや、`.ngto`形式でのブロックデーターのインポート、エクスポートなど多岐にわたる機能を有しています。ミニチュアブロックは、複数のブロックを一つの「ミニチュア」として扱うことができるようになる機能で、防具として身に着けることができるほか、実体のない見た目だけのブロックとしてワールドに配置することもできます。これには、拡大縮小や、回転、移動などの様々な動作を設定することができ、様々な使い方のできる機能と言えるでしょう。

また、ブロックデータのインポート、エクスポート機能を活用し、「建物パック」と呼ばれる多数の建築物が含まれた作品が配布されています。これは主に`.ngto`データを含む配布物であり、`.ngto`データをMCTEを使用してワールドに配置することで、住居や商店などの様々な建物を一瞬で建設することができるため、RealTrainModでの作品制作に頻繁に使用されています。

> MCTEには、通称「0バグ」と呼ばれる***致命的な悪影響を及ぼす***不具合が存在することが知られています。
> これは、MCTEを使用してブロックの埋め立てや置き換えなどを行う際、選択した範囲の始点と終点の2点の内の片方がワールド原点（0,0,0）に移動してしまう不具合であり、結果として***ワールドの大部分が単一のブロックで埋め尽くされて***しまいます。
> 
> MCTEにはWorldEditの`//undo`や`//redo`に対応するような操作の「取り消し」や「やり直し」を行う機能がないため、ワールドデータのバックアップからの復元以外の方法はありません。
> 
> Minecraft 1.12.2や、KaizPatchXのMCTEでは、この不具合が修正されているとされていますが、サーバーとクライアント間のラグが大きい場合に、依然として類似の現象が発生することが報告されています。ラグを感じる際には、MCTEの使用を控える、こまめにワールドのバックアップをとるなどして、対策をする必要があります。
> 
> ![0bug.png](/assets/images/screenshots/minecraft/0bug.png =750x)
> 参考画像：ブロックを削除する際に0バグが発生し、計4800チャンクの地面が消滅した。
{.is-danger}

## 対応バージョン
* Minecraft 1.7.10
* Minecraft 1.12.2
* その他多数のバージョン

## リンク
CurseForge：<a href="https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor" target="_blank">https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor</a>

# Minatocc_Addblocks

## 解説
Minatocc_Addblocksは、meitetsu600V氏によって開発された、建材追加Modです。

RealTrainModユーザーによって開発されているため、RealTrainModと相性の良い建材を多数収録しています。

## 対応バージョン
* Minecraft 1.12.2

## リンク
ホームページ：<a href="https://minatocc.com/archives/1920" target="_blank">https://minatocc.com/archives/1920</a>

# SignalContorollerMod

## 解説
SignalControllerModは、masa300氏によって開発された、閉塞信号システムを簡単に組むことができるようにするMODです。

## 対応バージョン
* Minecraft 1.7.10
* Minecraft 1.12.2

## リンク
GitHub：<a href="https://github.com/masa300/SignalControllerMod" target="_blank">https://github.com/masa300/SignalControllerMod</a>

RTM Wikiでの解説：[SignalControllerMod解説](/ja/mod-usage/signal-controller-mod)

# WebCTC

## 解説
WebCTCは、Kaiz_JP氏によって開発された、CTC（列車集中制御装置）をウェブページ上で確認、操作できるようにするModです。

RealTrainModの車両の線路の状態や、在線位置などをウェブページ上で確認、操作することができます。

## 対応バージョン
* Minecraft 1.7.10 Forge 10.13.4.1614
* KaizPatchX v1.3RC またはそれ以降が必要

## リンク
GitHub：<a href="https://github.com/WebCTC/WebCTC" target="_blank">https://github.com/WebCTC/WebCTC</a>

RTM Wikiでの解説：[WebCTC解説](/ja/mod-usage/web-ctc)
