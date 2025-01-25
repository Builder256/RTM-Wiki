---
title: SignalControllerMod解説
description: 
published: true
date: 2025-01-25T03:50:37.817Z
tags: mod解説
editor: markdown
dateCreated: 2025-01-14T12:43:40.157Z
---

# SignalControllerMod解説
## SignalControllerModとは
SignalControllerMod、通称「シグコン」は、masa300氏によって開発された、RTMで閉塞信号システムを簡単に組むことができるようになるmodです。
SignalControllerModで追加される専用ブロックとアイテムを使用することにより、信号機を簡単に制御することができます。
回路などと組み合わせることで、閉塞信号機のような許容信号機だけでなく、出発信号機・場内信号機といった絶対信号機も構築することができます。

### 対応バージョン
- Minecraft 1.7.10
- Minecraft 1.12.2

### リンク
GitHub : https://github.com/masa300/SignalControllerMod

## SignalControllerModで追加されるアイテム
> SignalControllerModでは1種類のブロック、2種類のアイテムが追加されます。
{.is-info}

### ブロック
- SignalControllerBlock

### アイテム
- 座標設定ツール(NextSignal)
- 座標設定ツール(DisplayPos)

## アイテム解説
## SignalControllerBlock
信号機を制御するためのブロックです。
> 正常な動作には、このブロックが設置されているチャンクがロードされている必要があります。チャンクローダーの使用をおすすめします。
{.is-warning}

**RTM純正のチャンクローダーはかなり重いのでおすすめしません**
おすすめのチャンクローダーはこちら : https://www.immibis.com/mcmoddl/
※このチャンクローダーの導入には、同ページにある「Immibis Core」の導入が必要です。
PCスペックなどで導入が難しい場合は、スポーンチャンクに設置することも有効です。

### 設置方法
どこでも良いです。~~おかわり~~自由に置きましょう。

### 使用方法
右クリックすると次のような画面が開きます。
<画像を挿入予定>

原則、制御している信号機は、nextsignalの信号機の現示の1レベル上の現示をします。nextsignalの設定がない場合、原則、制御している信号機は常にR現示をします。
このブロックにRS入力をすることで、制御している信号機をR現示にすることができます。
1つのブロックに対して、制御する信号機、次の信号機共に複数の信号機を割り当てることができます。
> 2つ以上のSignalControllerBlockで同一の信号機を指定しないでください。信号の現示が正常にされなくなります。
{.is-warning}


### 各種機能解説
#### SignalType
制御する信号機の種類を選択します。この種類は、RTMデフォルトの信号機と連動しています。

> 信号機の種類は正しく登録してください。種類が誤っている場合、信号機が正常に動作しなかったり、無駄な処理によって重くなったりする可能性があります。 
{.is-warning}

選択できる種類は以下の通りです。 ()内は灯火色
- 2灯式A　(<font color=lime>●</font><font color=red>●</font>)
- 2灯式B　(<font color=gold>●</font><font color=red>●</font>)
- 3灯式　(<font color=lime>●</font><font color=gold>●</font><font color=red>●</font>)
- 4灯式A　(<font color=gold>●<font color=red>●</font><font color=lime>●</font>●</font>)
- 4灯式B　(<font color=gold>●<font color=red>●</font>●</font><font color=lime>●</font>)
- 5灯式A　(<font color=gold>●●<font color=red>●</font>●<font color=lime>●</font></font>)
- 5灯式B　(<font color=lime>●<font color=gold>●<font color=red>●</font>●</font>●</font>)
- 6灯式　(<font color=gold>●</font><font color=lime>●<font color=red>●</font>●<font color=gold>●</font>●</font>)

#### Option
##### last
チェックを入れると、制御している信号機を終端とします。終点駅の場内信号機などに利用します。
この設定が影響している信号機は、RS入力がない限り、R現示の１レベル上の現示が常に現示されます

##### repeat
次の信号機と同じ現示(YG現示・Y現示に限る)をさせます。
閉塞区間が短いことにより、制動距離が足りない場合に同じ現示をするところがあるそうなので、その再現のためにこの機能が実装されています。

##### Reduced Speed
未実装のため省略。実装され次第執筆します。

#### nextsignal
制御している信号機の次の信号機を座標で指定します。
+を押すことで、複数登録が可能です。登録した順に数字が0から割り振られます。
また、アイテム「座標設定ツール(NextSignal)」を使用することで、簡単に信号機の座標を登録できます。
このツールを使用する場合、信号機の追加登録に毎回+を押す必要はありません。

#### displayPos
制御する信号機を座標で指定します。
+を押すことで、複数登録が可能です。登録した順に数字が0から割り振られます。
また、アイテム「座標設定ツール(DisplayPos)」を使用することで、簡単に信号機の座標を登録できます。
このツールを使用する場合、信号機の追加登録に毎回+を押す必要はありません。

#### above
チェックを入れると、SignalControllerBlockの真上(32ブロック以内)にある信号機を制御できます。
> v1.4.0よりabove機能は廃止されました。
{.is-danger}


## 座標設定ツール(NextSignal)
SignalControllerBlockの次の信号(nextsignal)を設定するためのアイテムです。
### 使用方法
設定したい信号機をShift+右クリックしてツールに信号機の座標情報を登録し、その後、SignalControllerBlockにShift+右クリックをすることで、SignalControllerBlockのnextsignalに登録することができます。
> ツールに登録できる信号機は1つのみのため、登録は1つずつ行う必要があります。
{.is-warning}


## 座標設定ツール(DisplayPos)
SignalControllerBlockで制御する信号(displayPos)を設定するためのアイテムです。
### 使用方法
設定したい信号機をShift+右クリックしてツールに信号機の座標情報を登録し、その後、SignalControllerBlockにShift+右クリックをすることで、SignalControllerBlockのdisplayPosに登録することができます。
> ツールに登録できる信号機は1つのみのため、登録は1つずつ行う必要があります。
{.is-warning}
