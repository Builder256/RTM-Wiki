---
title: 【初心者向け】RealTrainMod（RTM）の導入方法をかんたん解説！
description: Minecraftの鉄道Mod『RealTrainMod（RTM）』の詳しい導入手順を紹介！このページを読めば純正版のバージョン1.7.10・1.12.2の導入方法のほか、改良版のKaizPatchX・fixRTMの導入方法もまるわかり！
published: false
date: 2025-05-20T09:04:05.213Z
tags: 
editor: markdown
dateCreated: 2025-01-08T02:13:04.103Z
---

# 【初心者向け】RealTrainMod（RTM）の導入方法をかんたん解説！{.text-center}

このページでは、はじめてMinecraftにModを入れる人や、小中学生とその保護者の方でもわかるように、鉄道Mod「RealTrainMod（RTM）」の導入方法をわかりやすく解説します。

<!--
また、以下の用語を使用します。もし、用語に不安がある場合には、確認してください。
- **Minecraft**: 「マインクラフト」「マイクラ」とも呼ばれる、累計3億5000万本を販売した、世界一の販売本数を誇るゲーム。
- **Minecraft Java Edition**: 「本家」「Java版」とも呼ばれる、Windows、MacOS、Linux用に開発された、オリジナルのMinecraft。元々は単に「Minecraft」であったが、ゲーム機やモバイル端末などのプラットフォームの拡大や、メディアミックス展開に伴い、それらと区別するため改称された。
- **統合版**: 「Bedrock Edition」とも呼ばれる。ゲーム機向けのConsole Edition、モバイル端末向けのPocket Editionなどが統合された、もう一つのMinecraft。
- **Mod**: ゲームの機能やコンテンツを拡張するためのデータのうち、非公式に公開されているもの。
- **Java**: Minecraft Java Editionに使用されているプログラミング言語。Modを導入するには、このJavaを動かすためのソフトウエアがパソコンにインストールされている必要がある。
- **RTM**: 正式名称はRealTrainMod、このWikiの主題となる鉄道Mod。読みは「アールティーエム」。
{.grid-list}
-->

> Mod経験者やアドオン開発者など、より簡潔な導入方法が知りたい方や、より高度な情報が欲しい方は、以下のページをご覧ください。
> [高度なRealTrainModのインストール方法](/ja/usage/installing-advanced)
{.is-info}

# ■ RealTrainMod (RTM) ってなに？
RTMは、Minecraftで電車や線路、信号機などを追加できる「Mod（モッド）」です。好きな電車を運転したり、街や駅を作ったりして遊べます！

**こんなことができるよ！**
- 実際の電車のようにレールを敷いて運転できる
- 線路を切り替えたり、信号で管理できる
- 電車のアドオン（追加データ）を入れると、いろんな車両を楽しめる！
- 他にもRTMの機能を使って、鉄道以外の様々なものも！

さらに詳しく知りたい人は、こちらのページをご覧ください。
[RealTrainModとは](/ja/home#rtmrealtrainmod%E3%81%A8%E3%81%AF)

> ※ Mod（モッド）とは、Minecraftに新しい機能やアイテムを追加するための拡張ファイルのことです。
> Minecraft Java Editionにおいては、その開発、公開が**許可**されており、世界中のユーザーによって、Modの開発が活発に行われています。
{.is-info}

# ■ はじめてModにふれる保護者の方へ

お子さまから「RTMのModを入れてほしい」と頼まれたとき、以下のような疑問や不安を感じるかもしれません。

* 「Modってなに？安全なの？」
* 「うちのMinecraftで使えるの？」
* 「ダウンロードってどこを押せばいいの？」
* 「英語ばかりの画面で不安…」

ご安心ください。このページでは、パソコンがあまり得意でない方でも理解できるよう、できるだけやさしく解説しています。

# ■ Modを遊ぶには何が必要？

MinecraftにModを入れるには、以下の準備が必要です。

## 1. Minecraft Java Edition を持っている
> ※ スマホ版やSwitch版、Windowsストア版（Bedrock版）ではModは使えません。どのプラットフォームを遊んでいるか、事前に確認しましょう。
{.is-warning}

### 遊んでいるMinecraftのプラットフォームの見分け方
よく、「パソコンで遊んでいるから、うちはJava Editionのはずだ」と判断する親御さんが多いですが、この判断は正しくない場合があります。
なぜならば、統合版の中にも、Windows PC向けのもの（かつてWindow 10 Editionと呼ばれていたもの）があるからです。
この初心者向けページが必要なあなたは、確実に確認してください。  
| **判別ポイント** | **Java Edition** | **統合版（Bedrock Edition）** |
| --- | --- | --- |
| **使用しているデバイス** | Windows / Mac / Linux のパソコン | ゲーム機 / スマートフォン / タブレット / Windowsパソコン |
| **ランチャーの有無（Windowsの場合）** | 「Minecraft Launcher」というアプリを起動してからゲームを始める | ランチャーは使わず、「Minecraft」という名前のアプリを直接起動 |
| **ランチャーの画面（Windowsの場合）** | 黒い背景に緑の「プレイ」ボタン、イラストあり、「Minecraft Launcher」と表示 | ランチャーなし |
| **ゲームのロゴ表示** | 「MINECRAFT」の下に「JAVA EDITION」と表示（古いバージョンではMINECRAFTのみの場合も） | 「MINECRAFT」のみ表示 |
| **最初に起動するアプリ名（Windowsの場合）** | 「Minecraft Launcher」 | 「Minecraft」 |
| **ゲーム画面の特徴** | PC向けの独自のメニュー画面 | ゲーム機やスマートフォンと似たメニュー画面。メニューに「マーケットプレイス（MarketPlace）」がある |
| **確実に判断できるポイント** | 「JAVA EDITION」と表示あり | ・ゲーム機でプレイしている<br>・「Minecraft」という名前だけのアプリ<br>・マーケットプレイスがある |
{.dense}


## 2. Java（ジャバ）をインストールしている

RTMは「Java」という無料のプログラムが必要です。

[Javaのダウンロード（公式サイト）](https://www.java.com/ja/download/)

* セキュリティの警告が出ても、公式サイトからなら安全です
* 「パソコンに詳しくないけど、これを入れても大丈夫？」という方も、安心してインストールできます

## 3. Minecraft Forge（マインクラフト フォージ）を入れる

Forge（フォージ）は、Modを読み込むための土台（台座）です。

# ■ RTMを入れるまでのながれ（ざっくり）

1. **Minecraft Java Editionをインストール**
2. **Javaをインストール**（まだの場合）
3. **Forgeをインストール**
4. **RTMと必要なMod（NGTLibなど）をダウンロード**
5. **modsフォルダに入れる**
6. **Minecraftを起動して動作確認！**

# ■ ステップごとの詳しい解説

## 1. Minecraft Java版をインストール

Java Editionをまだ買っていない人は、[Minecraft公式サイト](https://www.minecraft.net/ja-jp)から購入できます。

* アカウント作成や支払いには、保護者の方のサポートが必要です

## 2. Javaをインストール

[Java公式サイト](https://www.java.com/ja/download/)にアクセスし、「無料ダウンロード」ボタンを押します。

* ダウンロード後、ファイルを開いて「次へ」「次へ」と進めばOKです
* セキュリティの警告が出ることがありますが、これは正常な動作です

## 3. Forgeをインストール

以下のページから、自分の使いたいバージョンのForgeをダウンロードします。

* Minecraft 1.7.10 → Forge 10.13.4.1558
* Minecraft 1.12.2 → Forge 14.23.2.2611

[Forge公式ダウンロードページ](https://files.minecraftforge.net/)

**注意：広告が表示されることがあります！**

* 「Download」や「Start」と書かれた広告には注意！
* 画面中央や右上の「SKIP」など、本物のリンクを見極めてクリックしましょう

インストーラーを開いたら「Install Client」を選んでOKを押すだけです。

## 4. RTMやNGTLibをダウンロード

以下のページからRTMや必要なModをダウンロードします：

* [RealTrainMod (RTM)](https://www.curseforge.com/minecraft/mc-mods/realtrainmod)
* [NGTLib](https://www.curseforge.com/minecraft/mc-mods/ngtlib)

**1.7.10を使う人は「KaizPatchX」も必要です：**

* [KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX/releases)

## 5. modsフォルダにファイルを入れる

1. 一度Minecraftを起動して、Forgeで遊ぶ準備をしておきます
2. 「mods」というフォルダを開きます

   * Windowsの場合：エクスプローラーで `C:\Users\(あなたの名前)\AppData\Roaming\.minecraft\mods` を開きます

     * ※「AppData」が表示されないときは、隠しファイルを表示する設定が必要です
   * Macの場合： `~/Library/Application Support/minecraft/mods`
3. ダウンロードした `.jar` ファイルをこのフォルダにコピーします

## 6. Minecraftを起動！

ForgeのプロファイルでMinecraftを起動すると、タイトル画面に「MOD」というボタンが増えています。

* そこに「RTM」や「NGTLib」が表示されていれば成功！
* 電車を自由に走らせて遊べるようになります！

# ■ よくあるトラブルQ\&A

## Q1: Minecraftが起動しない！

* ForgeやRTMなどのバージョンが合っていない可能性があります
* Javaが古い、または入っていない場合もあります
* Modを入れすぎるとパソコンの性能が足りなくなることも

## Q2: ダウンロードしたファイルが見つからない！

* 保存先が「ダウンロード」フォルダ以外になっている可能性があります
* ブラウザの「ダウンロード履歴」から探してみましょう

## Q3: 急に英語の画面が出てきて怖い…

* ForgeやRTMのサイトは英語が多いですが、説明をよく読むと「Download」や「Installer」と書いてあります
* このページの案内通りに操作すれば、安心です！

# ■ さらに楽しむために！

* アドオンを追加すると、実在の車両（E233系や新幹線など）も運転できます
* 駅や町を作ると、リアルな鉄道ワールドが作れます
* 遊ぶうちにパソコンやファイルの知識も自然と身につきます！

# ■ おうちの方へ

このModは、子どもたちが鉄道や都市づくりに興味を持つきっかけにもなります。
ですが、Modの導入にはパソコンの操作やファイルの管理など、少し専門的な知識が必要です。

**安心して導入できるよう、以下の点に注意しましょう：**

* 正規のサイト（CurseForgeやGitHubなど）からのみダウンロードする
* 不審な広告や「ダウンロード」と書かれたボタンには注意
* 操作に困ったら、お子さんと一緒に調べて進めるのがおすすめです

# ■ まとめ

RealTrainModは、Minecraftで本格的な鉄道体験ができるすごいModです！

初めてのMod導入でも、このページを見ながら手順通りに進めれば大丈夫。
分からないところがあれば、ぜひまわりの人と一緒にやってみましょう！

楽しい鉄道ライフをMinecraftで！

# 関連サイト
- [はじめてのRTM【初期導入編】 【RealTrainMod】| RTM Addon Search *RealTrainModを初めて導入するあなたに、導入方法をわかりやすくご案内します。 | ※RealTrainModを導入するには、事前にMinecraft Forgeを実行する環境が必要になります。*](https://rtmaddon-search.com/how_to_rtm/)
- [RTMの導入方法 - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677453)
- [NGTLib - Minecraft Mods - CurseForge *Library of ngt5479's mods.*](https://www.curseforge.com/minecraft/mc-mods/ngtlib)
- [RealTrainMod - Minecraft Mods - CurseForge *Adds real scale train, rail and more.*](https://www.curseforge.com/minecraft/mc-mods/realtrainmod)
- [Kai-Z-JP/KaizPatchX: もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。 *もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。. Contribute to Kai-Z-JP/KaizPatchX development by creating an account on GitHub.*](https://github.com/Kai-Z-JP/KaizPatchX)
- [fixRTM - Minecraft Mods - CurseForge *fixes some bugs of RTM and make RTM more useful!*](https://www.curseforge.com/minecraft/mc-mods/fixrtm)
- [fixrtm/fixRTM: Fixes some bugs of RTM and make RTM more useful! *Fixes some bugs of RTM and make RTM more useful! Contribute to fixrtm/fixRTM development by creating an account on GitHub.*](https://github.com/fixrtm/fixRTM)
{.links-list}

[^1]: ここで断定できないのは、スマートフォンでもJava Editionを起動することのできる方法が存在するからです。
  しかしながら、特殊なアプリや高度な設定が必要となるため、あなたのお子さんには関係ないでしょう。

*[RTM]: RealTrainMod