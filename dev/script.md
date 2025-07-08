---
title: RTMアドオン制作 - スクリプト概説
description: 
published: true
date: 2025-07-08T01:11:04.017Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:30:49.841Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

# スクリプトとは
RealTrainMod（RTM）のスクリプトとは、アドオンを制作する際にデフォルトでは不可能な機能を実装することができる、JavaScript形式のプログラムです。

スクリプトを使用することで、JSONで設定されるRTMデフォルトの処理を行わず、代わりにユーザーによって定義された機能が実装できるようになります。
また、本格的なプログラミング言語であるJavaを使用することなく、比較的平易なJavaScriptを使用してRTMやNGTLib、OpenGL、Minecraft、Forge、Javaの機能を利用した高度な機能を実装できます。

RealTrainModでは、Java内蔵のJavaScriptエンジン「Nashorn」を使用することで、ECMAScript 5.1までに定義されたJavaScriptの文法を使用して、オリジナルの機能を実装することができます。

# スクリプトの種類
RealTrainModでは、三種類のスクリプトが用意されています。

- 描画スクリプト：論理クライアントで実行され、主に描画やその他の処理を実装します
- サウンドスクリプト：論理クライアントで実装され、主に再生される音声の処理を実装します
- サーバースクリプト：論理サーバーで実行され、エンティティやブロックの状態の変更などの処理を実装します
{.grid-list}

実装したい処理の内容に応じて、これらのスクリプトを適切に使い分け、併用する必要があります。

# スクリプト解説
RTMのスクリプトで利用できるJavaScriptは、ECMAScript 5.1（KaizPatchXのみ、一部ECMAScript 6にも対応）です。
そのため、現在のJavaScriptでごく一般的に利用されている多くの技術やテクニックが利用できません。

具体的には、以下の機能が利用できません。

| 利用できない機能 | 具体例 | 代替 |
| --- | --- | --- |
| ブロックスコープ変数宣言 | `let`, `const` | 関数スコープ変数宣言 `var` |
| アロー関数 | `=>` | `function`関数宣言 |
| クラス | `class` | 関数とプロトタイプを使用 |
| 重複しないコレクション型 | `Map` `Set` | 通常のオブジェクトと配列 |
| for...ofループ | `for (element of elements)` | `for`、`Array.prototype.forEach()` |
| 多数のインスタンスメソッド | `String.prototype.includes()`, `Array.prototype.find()`... | 他のメソッドで代替、ポリフィルを実装 | |
| テンプレートリテラル | `` `hogehoge ${fugafuga}` `` | 文字列の連結 |
| 分割代入 | `[a,b] = [b,c]` | 通常の代入 |
{.dense}

## 利用できない機能の見つけ方

1. https://caniuse.com/ にアクセス
2. 利用したい機能を入力（`arrow function`, `array.prototype.find`など）
3. IEのサポート状況を確認

6-10が赤色ならば利用不可能、緑色ならば利用できます。




---


より具体的な各スクリプトの説明については、以下のページで解説しています。

- [描画スクリプト解説](/ja/dev/script/render-script)
- [サウンドスクリプト解説]
- [サーバースクリプト解説]
{.links-list}

# 関連サイト
- [スクリプト解説 | 城田重工](https://hi03sub.wixsite.com/shirota-industries/blog)
- [RenderScript用チートシート *RenderScript用チートシート. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/2edadce21011125d6465ed6401ac4842)
- [1.7.10向け *1.7.10向け. GitHub Gist: instantly share code, notes, and snippets.*](https://gist.github.com/Kai-Z-JP/0dd0cba11592305cdbf859311718f43f)
- [Xユーザーのひー@hi03さん: 「スクリプトで使えそうな、RTMの説明書に載ってない関数とか一部書いてみたよ https://t.co/EGGN6ztr9K」 / X](https://x.com/hi03_s/status/1044613004644376577)
{.links-list}

*[RTM]: RealTrainMod