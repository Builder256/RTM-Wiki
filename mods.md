---
title: RealTrainMod拡張Mod解説
description: RealTrainMod（RTM）の機能を拡張するModについて解説します。ATSAssistModやCake's RTM Addon、fixRTM、KaizPatchX、SignalControllerMod、WebCTCなど
published: true
date: 2025-03-30T14:42:00.978Z
tags: realtrainmod解説, mod解説
editor: markdown
dateCreated: 2025-02-20T12:00:24.020Z
---

# RealTrainModを拡張するMod
長い歴史を持つRealTrainModには、その機能を拡充したり不具合を修正する様々なModが開発されています。
このページでは、それらのRealTrainModに直接的に関連するModについて解説します。

RealTrainModに直接的には関連しない、あくまでも一緒に使うと便利、というModについては、このページではなく、[よく併用されているMod](/ja/usage/related-mods) のページで解説しています。

# ATSAssistMod

## 解説
ATSAssistMod、通称「ATSA」は、Kaiz_JP氏によって開発された、RealTrainModの保安装置を簡単に構築できるようにするModです。

このModを使用することで、以下のような保安装置を構築できます。
- **TASC（定位置停止支援装置）**: 列車が駅で正確に停止するように支援します。
- **ATO（自動列車運転装置）**: 列車の自動運転を可能にします。
- **ATACS（移動閉塞）**: 列車間の安全な距離を保ちながら運行を管理します。

これらの機能を組み合わせることで、運転補佐から完全自動運転まで幅広い用途に対応可能です。

### 主な特徴
1. **簡単な設定**  
GUIを使用して保安装置を直感的に設定できます。
   
2. **高い汎用性**  
レッドストーン回路を使用して制御することができるため、他のModやシステムと組み合わせることができ、複雑な運行管理も実現可能です。
追加されるさまざまな機能を利用することで、保安装置だけでない列車と連携したシステムを構築することも容易にします。

3. **現実に即した運行体験**  
実際の鉄道システムを再現した運行管理が可能で、没入感のある現実に即した鉄道運転体験を実現します。

## 対応バージョン
- Minecraft 1.7.10
- Minecraft 1.12.2

## リンク
GitHub: [https://github.com/Kai-Z-JP/ATSAssistMod/tree/master](https://github.com/Kai-Z-JP/ATSAssistMod/tree/master)
RTM Wikiでの解説：[ATSAssistMod解説](/mods/compatible/ats-assist-mod)

## 注意点
- 対応するバージョンのMinecraft・RealTrainModを使用していることを確認してください。

# Cake's RTM Addon
> 後日執筆予定
{.is-success}
# fixRTM
> 後日執筆予定
{.is-success}
# KaizPatchX
> 後日執筆予定
{.is-success}

# SignalControllerMod

## 解説
SignalControllerMod、通称「シグコン」は、masa300氏によって開発された、閉塞信号システムを簡単に構築できるようにするModです。  
このModを使用することで、鉄道運行における信号管理を効率化し、現実に即した閉塞システムを再現できます。

<!-- [検討用]
### 主な特徴
1. **簡単な信号設定**  
   GUIを使用して信号機や閉塞区間を直感的に設定できます。

2. **現実に即した閉塞システム**  
   実際の鉄道システムに基づいた閉塞信号の動作を再現可能です。

3. **柔軟なカスタマイズ**  
   他のModやシステムと連携して、複雑な信号システムを構築できます。
-->

## 対応バージョン
* Minecraft 1.7.10
* Minecraft 1.12.2

## リンク
- GitHub: [https://github.com/masa300/SignalControllerMod](https://github.com/masa300/SignalControllerMod)
- RTM Wikiでの解説：[SignalControllerMod解説](/ja/mods/compatible/signal-controller-mod)

## 注意点
- 対応するバージョンのMinecraft・RealTrainModを使用していることを確認してください。

# WebCTC

## 解説
WebCTCは、Kaiz_JP氏によって開発された、CTC（列車集中制御装置）をウェブページ上で確認、操作できるようにするModです。  
このModを使用することで、鉄道運行の状態をリアルタイムで監視し、遠隔操作が可能になります。

### 主な特徴
1. **ウェブベースの操作**  
ブラウザを使用して、鉄道の運行状況を確認・制御できます。

2. **リアルタイム監視**  
車両の在線位置、速度、運転しているプレイヤーや線路の状態をリアルタイムで表示します。

3. **直感的なUI**  
視覚的にわかりやすいインターフェースで、操作が簡単です。

## 対応バージョン
* Minecraft 1.7.10 Forge 10.13.4.1614
* KaizPatchX v1.3RC またはそれ以降

## リンク
- GitHub：[https://github.com/WebCTC/WebCTC](https://github.com/WebCTC/WebCTC)
- RTM Wikiでの解説：[WebCTC解説](/ja/mods/compatible/web-ctc)

## 注意点
- 対応するバージョンのMinecraft・KaizPatchXを使用していることを確認してください。
- WebCTCを使用するには、TCP/IPやHTTP通信、ウェブサーバーについての基本的な知識が必要です。
- ネットワーク環境によっては、遅延が発生する場合があります。