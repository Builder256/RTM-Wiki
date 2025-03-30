---
title: スクリプト解説【概説】
description: 
published: true
date: 2025-03-30T14:14:23.513Z
tags: 
editor: markdown
dateCreated: 2025-01-08T02:30:49.841Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

# スクリプトとは
RealTrainModデフォルトの処理をキャンセルし、ユーザーによって定義された処理を代わりに行うことで、デフォルトでは不可能な非常に高度な処理を行うことができます。RealTrainModでは、Java内蔵のJavaScriptエンジン「Nashorn」を使用することで、ECMAScript 5.1までに定義されたJavaScriptの機能を使用してオリジナルの処理を実装することができます。

# スクリプトの種類
RealTrainModでは、三種類のスクリプトが用意されています。

* 描画スクリプト  
  主にクライアント側で実行される描画関連の処理を実装します
* サウンドスクリプト  
  クライアント側で再生される音声の処理を実装します
* サーバースクリプト  
  主にサーバー側で実行される全プレイヤーに共通させる内容の処理を実装します

実装したい処理の内容に応じて、これらのスクリプトを適切に使い分ける（場合によっては併用する）必要があります。

# 関連サイト
- [スクリプト解説 | 城田重工](https://www.hi03s.com/blog)
- [RenderScript用チートシート *RenderScript用チートシート. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/2edadce21011125d6465ed6401ac4842)
- [1.7.10向け *1.7.10向け. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/0dd0cba11592305cdbf859311718f43f)
- [Xユーザーのひー@hi03さん: 「スクリプトで使えそうな、RTMの説明書に載ってない関数とか一部書いてみたよ https://t.co/EGGN6ztr9K」 / X](https://x.com/hi03_s/status/1044613004644376577)
{.links-list}