---
title: よく併用されているMod
description: RealTrainMod（RTM）とよく併用されているModについて解説します。1.7.10や1.12.2のMinecraftでのワールド開発に便利なModを紹介。Ha10gen's Building Material Mod、MCTE、Minatocc_Addblocksなど
published: true
date: 2025-02-25T15:42:18.715Z
tags: realtrainmod解説, mod解説
editor: markdown
dateCreated: 2025-01-08T04:50:19.273Z
---

# RealTrainModにおいてよく併用されているMod
RealTrainMod（RTM）とよく併用されているModについて解説します。

RealTrainModはMinecraftバージョン1.7.10や1.12.2に対応していますが、これらは非常に古いバージョンであり、対応するModについての情報は不足しています。そこで、多くのRealTrainModサーバーで採用されていると考えられる、代表的なModをここで紹介します。

RealTrainModの機能を拡充したり、不具合を修正するなど、RealTrainModに直接関連しているModについては、こちらのページで解説しています。
- [RealTrainMod拡張Mod解説 *RealTrainMod（RTM）の機能を拡張するModについて解説します。ATSAssistModやCake's RTM Addon、fixRTM、KaizPatchX、SignalControllerMod、WebCTCなど*](/ja/mod-usage)
{.links-list}

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
> ![0bug.webp](/assets/images/screenshots/minecraft/0bug.webp =750x)
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

# 関連サイト
- [H10BM](https://sites.google.com/view/h10bm/top)
- [H10WEB](https://sites.google.com/view/h10web)
- [MC Terrain Editor - Minecraft Mods - CurseForge *Graphical world editing mod.*](https://www.curseforge.com/minecraft/mc-mods/mc-terrain-editor)
- [Minatocc_Addblocks(建材mod) | Minato Car Corp.](https://minatocc.com/archives/1920)
{.links-list}
