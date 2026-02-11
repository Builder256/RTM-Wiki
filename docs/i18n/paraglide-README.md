# Paraglide JS コンパイル済み出力

> 自動生成された i18n メッセージ関数です。翻訳された文字列を使用するには `messages.js` をインポートしてください。

コンパイル元: `./project.inlang`


## このフォルダは何ですか？

このフォルダには、[Paraglide JS](https://github.com/opral/paraglide-js) のコンパイル済み出力が含まれています。Paraglide JS は、翻訳メッセージをツリーシェイカブルな JavaScript 関数にコンパイルします。

## 概要

目的:
- このフォルダにはコンパイルされた i18n メッセージ関数が格納されます。
- 元の翻訳ファイルはこのフォルダの外にある inlang プロジェクト内にあります。

インポートして安全なファイル:
- `messages.js` — すべてのメッセージ関数
- `runtime.js` — ロケールユーティリティ
- `server.js` — サーバーサイドミドルウェア

編集しないでください:
- このフォルダ内のすべてのファイルは自動生成されています。
- 変更は次回のコンパイル時に上書きされます。

```
paraglide/
├── messages.js      # メッセージのエクスポート（これをインポートする）
├── messages/        # 個別のメッセージ関数
├── runtime.js       # ロケールの検出と設定
├── registry.js      # フォーマットユーティリティ (複数形、数値、日付時刻)
├── server.js        # サーバーサイドミドルウェア
└── .gitignore       # フォルダが生成されたものであることを示す
```

## 使い方

```js
import * as m from "./paraglide/messages.js";

// メッセージはローカライズされた文字列を返す関数です
m.hello_world();             // "Hello, World!" (現在のロケール)
m.greeting({ name: "Sam" }); // "Hello, Sam!"

// 呼び出しごとにロケールをオーバーライドする
m.hello_world({}, { locale: "de" });           // "Hallo, Welt!"
m.greeting({ name: "Sam" }, { locale: "de" }); // "Hallo, Sam!"
```

## Runtime API

```js
import { getLocale, setLocale, locales, baseLocale } from "./paraglide/runtime.js";

getLocale();    // 現在のロケール (例: "en")
setLocale("de"); // ロケールを設定
locales;        // 利用可能なロケール (例: ["en", "de", "fr"])
baseLocale;     // デフォルトのロケール (例: "en")
```

## ストラテジー

ストラテジーは、現在のロケールがどのように検出・保持されるかを決定します。

- **Cookie**: ロケールの設定を Cookie に保存します。
- **URL**: URL パターン（例: `/en/about`, `en.example.com`）からロケールを導き出します。
- **GlobalVariable**: グローバル変数を使用します（クライアントサイドのみ）。
- **BaseLocale**: 常にベースロケールを返します。

ストラテジーは組み合わせることができます。順序が優先順位を定義します。

```js
await compile({
  project: "./project.inlang",
  outdir: "./src/paraglide",
  strategy: ["url", "cookie", "baseLocale"],
});
```

詳細は [ストラテジーのドキュメント](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/strategy) を参照してください。

## 主なコンセプト

- **ツリーシェイカブル**: 各メッセージが関数であるため、従来の i18n ライブラリよりも [最大 70% 小さい i18n バンドルサイズ](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/benchmark) を実現できます。
- **型安全**: オートコンプリートを備えた完全な TypeScript/JSDoc サポート。
- **バリアント**: メッセージは、複数形、性別などのバリアントを持つことができます。
- **フォールバック**: 翻訳が欠落している場合は、ベースロケールにフォールバックします。

## リンク

- [Paraglide JS ドキュメント](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- [ソースリポジトリ](https://github.com/opral/paraglide-js)
