---
title: スクリプト概説
description: 
published: true
date: 2025-05-02T11:42:51.897Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:30:49.841Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

# スクリプトとは
RealTrainMod（RTM）でのスクリプトとは、デフォルトでは不可能な機能を実装するためのJavaScript形式のプログラムです。スクリプトを使用することで、JSONで設定されるRealTrainModデフォルトの処理を行わず、代わりにユーザーによって定義された機能が実装できるようになります。また、本格的なオブジェクト指向言語であるJavaを使用することなく、比較的平易なJavaScriptを使用してRealTrainModやOpenGL、Minecraft、Forge、Javaの機能を利用したデフォルトでは不可能な非常に高度な機能を実装できます。RealTrainModでは、Java内蔵のJavaScriptエンジン「Nashorn」を使用することで、ECMAScript 5.1までに定義されたJavaScriptの文法を使用して、オリジナルの機能を実装することができます。

# スクリプトの種類
RealTrainModでは、三種類のスクリプトが用意されています。

- 描画スクリプト：論理クライアントで実行され、主に描画関連の処理を実装します
- サウンドスクリプト：論理クライアントで実装され、主に再生される音声の処理を実装します
- サーバースクリプト：論理サーバーで実行され、エンティティやブロックの状態の変更などの処理を実装します
{.grid-list}

実装したい処理の内容に応じて、これらのスクリプトを適切に使い分け、併用する必要があります。

# スクリプト解説
- [描画スクリプト解説](/ja/addon-dev/script/render-script)
- [サウンドスクリプト解説]()
- [サーバースクリプト解説]()
{.links-list}

# 関連サイト
- [スクリプト解説 | 城田重工](https://www.hi03s.com/blog)
- [RenderScript用チートシート *RenderScript用チートシート. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/2edadce21011125d6465ed6401ac4842)
- [1.7.10向け *1.7.10向け. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/0dd0cba11592305cdbf859311718f43f)
- [Xユーザーのひー@hi03さん: 「スクリプトで使えそうな、RTMの説明書に載ってない関数とか一部書いてみたよ https://t.co/EGGN6ztr9K」 / X](https://x.com/hi03_s/status/1044613004644376577)
{.links-list}