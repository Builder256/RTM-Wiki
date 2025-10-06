---
aliases:
  - スクリプトの概要
title: スクリプトの概要
---
このページでは、RealTrainMod（RTM）のアドオン制作に使用するスクリプトについて説明します。

## スクリプトとは
RTMのスクリプトは、デフォルトでは対応していない高度な機能を実装するために使用する、[JavaScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/)形式のプログラムです。
スクリプトを使用すると、JSONで設定するいくつかのRTMデフォルトの処理は行われなくなり、代わりにスクリプトが実行されます。

スクリプトは、本格的なプログラミング言語であるJavaを使用することなく、比較的平易なJavaScriptのみを使用してRTMやNGTLib、OpenGL、Minecraft、Forge、Javaなどの機能を利用できる、非常に発展性の高い機能です。

RTMでは、[Nashorn スクリプトエンジン](https://github.com/openjdk/nashorn)を使用することで、[ECMAScript 5.1](https://262.ecma-international.org/5.1/)までに定義されたJavaScriptの機能を使用して、オリジナルの機能を実装することができます。

また、スクリプトで利用できる機能に制限がかけられていないため、スクリプトエンジンの制約を除けば、ほぼ無制限にこれらの機能を利用することができます。
## スクリプトの用途
RTMでは、実装する機能に応じて3種類のスクリプトを使用します。
| 種類               | 実行環境     | 主な用途                                                   |
| ------------------ | ------------ | ---------------------------------------------------------- |
| 描画スクリプト     | クライアント | 描画やその他のクライアント処理                             |
| サウンドスクリプト | クライアント | 音声の再生や停止など                                       |
| サーバースクリプト | サーバー     | エンティティやブロックの状態の変更などのサーバーサイド処理 |
## スクリプトファイルの制限
RTMでは、スクリプトファイルについて独自のルールがあります。  
これは、RTMが開発された当初は現代のJavaScript実装であるGraalJSが開発されておらず、当時最先端だったNashornを採用したためです。
### 文法はECMAScript 5.1を使用する
スクリプトで利用できるJavaScriptバージョンは、ECMAScript 5.1 (ES5.1)です。

KaizPatchXなど一部のバージョンではECMAScript 2015 (ES6)が部分的に利用できますが、それ以外のバージョンでは利用できないため、基本的にはES5.1を使用します。  

また、RTMのエコシステムにはBabelやtscなどのトランスパイラは存在しないため、ES5.1を完全に直接コーディングする必要があります。  
これにより、現在一般的に公開されているJavaScriptの教材はほとんど役に立ちません。

具体的には、以下のようなES6以降に由来する機能が使用できません。

- ブロックスコープ関数宣言 `let`、`const`
- アロー関数 `() => {}`
- クラス `class A { }`
- 重複しないコレクション型 `Set`、`Map`
- for...ofループ `for (let x of y) { }`
- モジュール `import`、`export`
- テンプレートリテラル `` `Hello, ${name}` ``
- デフォルト引数 `function f(a=1) { }`
- 分割代入 `let {a, b} = obj;`
- 多数のインスタンス・プロトタイプメソッド `Array.from()`、`string.prototype.includes()`など
- その他多数

また、古いJavaScript実行環境において新しいメソッドを利用する方法として、core-jsなどのPolyfillを実装、利用する手段が知られていますが、これも使用すべきではありません。

一般的なPolyfillは、JavaScript仕様とできる限り同一の動作をするように実装され、そのために本質的には不要な処理が多数実行されます。  
それに対し、スクリプトは毎tick、毎フレームごとに複数回、車両が増えればそれに比例してさらに実行回数が増加するため、可能な限り1回当たりの動作を軽量化する必要があるためです。  
### 利用できる機能の確認
RTMのスクリプトで利用できるJavaScriptの機能は、Nashornが対応している機能に依存します。  
より厳密には、Nashornの独自構文も考慮する必要がありますが、基本的にはES5で定義されているかどうかで判断できます。

#### ES5.1で定義されているかどうかの確認方法
厳密には[ECMAScript 5.1の仕様書](https://262.ecma-international.org/5.1/)を確認すべきですが、よりカジュアルな方法も利用できます。
1. https://caniuse.com/ にアクセス
2. 利用したい機能を入力（`arrow function`, `array.prototype.find`など）
3. 「IE ⚠️」の列を確認

6-10が赤色ならば利用不可能、緑色ならば利用できると考えることができます。  

:::note[補足]
Internet ExplorerがES6への対応を開始したのはIE 11のため、それ以前のバージョンで利用できるかどうかを簡易的な対応状況の目安にします。
:::
## スクリプトの文法
JavaScriptのECMAScript 5.1部分のみについて解説した現在でも閲覧可能な貴重なウェブサイトとして、[アルファシス – alphasis.info -](http://alphasis.info/javascript/)があります。

HTMLやDOM API、windowオブジェクトなどのWeb APIについての情報は無視する必要がありますが、式や演算子、制御構文などの基本的な文法のほとんどを学ぶことができます。

また、Nashornによって拡張された、JavaクラスやJavaオブジェクトなどのJava機能にアクセスする方法については、[Java Platform, Standard Edition Nashorn User's Guide](https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/api.html) にて確認することができます。