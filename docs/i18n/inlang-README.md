
## このフォルダは何ですか？

これは [unpacked (git-friendly)](https://inlang.com/docs/unpacked-project) 形式の inlang プロジェクトです。

## 概要

目的:
- このフォルダには、inlang プロジェクトの設定とプラグインのキャッシュデータが保存されます。
- 翻訳ファイルはこのフォルダの外にあり、`settings.json` から参照されます。

編集しても安全なファイル:
- `settings.json`

編集しないでください:
- `cache/`
- `.gitignore`

主要ファイル:
- `settings.json` — ロケール、プラグイン、ファイルパターン（信頼できる唯一の情報源）
- `cache/` — プラグインのキャッシュ（削除しても安全）
- `.gitignore` — 自動生成

```
*.inlang/
├── settings.json    # ロケール、プラグイン、ファイルパターン（信頼できる唯一の情報源）
├── cache/           # プラグインのキャッシュ (gitignored)
└── .gitignore       # settings.json 以外のすべてを無視
```

翻訳ファイル（例: `messages/en.json`）はこのフォルダの**外**にあり、`settings.json` 内のプラグインを介して参照されます。

## inlang とは何ですか？

[Inlang](https://inlang.com) は、カスタムのローカライゼーション (i18n) ツールを構築するためのオープンファイルフォーマットです。以下の機能を提供します：

- **CRUD API** — SQL を介してプログラムで翻訳を読み書き
- **プラグインシステム** — 任意の形式 (JSON、XLIFF など) をインポート/エクスポート
- **バージョン管理** — [lix](https://lix.dev) による組み込みのバージョン管理

```
┌──────────┐        ┌───────────┐         ┌────────────┐
│ i18n lib │        │Translation│         │   CI/CD    │
│          │        │   Tool    │         │ Automation │
└────┬─────┘        └─────┬─────┘         └─────┬──────┘
     │                    │                     │
     └─────────┐          │          ┌──────────┘
               ▼          ▼          ▼
           ┌──────────────────────────────────┐
           │          *.inlang file           │
           └──────────────────────────────────┘
```

## クイックスタート

```bash
npm install @inlang/sdk
```

```ts
import { loadProjectFromDirectory, saveProjectToDirectory } from "@inlang/sdk";

const project = await loadProjectFromDirectory({ path: "./project.inlang" });
// 内部的には SQLite + [Kysely](https://kysely.dev/) を使用してメッセージをクエリします。
const messages = await project.db.selectFrom("message").selectAll().execute();

// project.db を使用してメッセージを更新します。
await saveProjectToDirectory({ path: "./project.inlang", project });
```

## カスタムツールのアイデア

- 翻訳ヘルスダッシュボード（欠落/空/古いメッセージ）
- CI でのロケールカバレッジレポート
- プレイスホルダー付きの新しいキーの自動 PR
- プラグインを介したファイルフォーマット間の移行ツール
- 用語集/用語の一貫性チェッカー

## データモデル ([ドキュメント](https://inlang.com/docs/data-model))

```
bundle (コンセプト、例: "welcome_header")
  └── message (ロケールごと、例: "en", "ja")
        └── variant (複数形、性別など)
```

- **bundle**: メッセージを ID ごとにグループ化します (例: `welcome_header`)
- **message**: 特定のロケールの翻訳
- **variant**: 複数形化/セレクターを処理します（ほとんどのメッセージは 1 つのバリアントを持ちます）

## 一般的なタスク

- バンドルの一覧表示: `project.db.selectFrom("bundle").selectAll().execute()`
- ロケールごとのメッセージ一覧表示: `project.db.selectFrom("message").where("locale", "=", "en").selectAll().execute()`
- 欠落している翻訳の検索: ロケール間でのメッセージ数を比較
- メッセージの更新: `project.db.updateTable("message").set({ ... }).where("id", "=", "...").execute()`

## リンク

- [SDK ドキュメント](https://inlang.com/docs)
- [inlang.com](https://inlang.com)
- [プラグイン一覧](https://inlang.com/c/plugins)
- [ツール一覧](https://inlang.com/c/tools)
