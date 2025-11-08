# RTM Wiki: Starlight
これは、RTM Wikiの開発中の新システムです。

メインのフレームワークには、静的サイトジェネレーターの[Astro](https://github.com/withastro/astro)と、同フレームワークのドキュメントサイト用テーマである、[Starlight](https://github.com/withastro/starlight)を採用しました。

そのため、これまでのWiki.jsを使用した動的サイトよりも閲覧時のパフォーマンスの向上が見込めます。


## ディレクトリ構成
### `.github/`
GitHub Workflowsの設定が含まれています。触る必要はありません。

これにより、`starlight`ブランチへのpushによって即座にビルドが行われ、最新の変更がサイトに反映されます。
### `.vscode/`
VSCodeやその拡張機能用の設定が含まれます。触る必要はありません。
### `public/`
Astroでの処理を行わないアセットが配置されます。触る必要はありません。

現在は、Astroで処理されないfaviconの画像が配置されています。

将来的には各言語用のフォントファイルなどが配置されるかもしれません。
### `src/assets/`
サイトで使用する画像（各ページで使用するものではない）などが配置されます。触る必要はありません。
### `src/components/`
サイトで使用する各フレームワークのコンポーネントが配置されます。触る必要はありません。
### `src/content/`
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ここから重要↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

サイトの各ページの実際のソースが含まれます。基本的にこのディレクトリ以外を触る必要はありません。
#### `src/content/docs/`
各言語別のディレクトリと、ルートページであるグローバルトップページのファイル`index.mdx`が含まれます。

`en`や`ja`などの言語コードのディレクトリ以下が、実際の各ページの原稿になります。

ここのファイルを編集することで、サイトに編集をすることができます。
#### `src/content/i18n/` 
現状使用していません。
#### `src/content/images/` 
サイトのページで使用する画像です。

**画像の内容で**分類、整理しています。
- `src/content/images/diagram`
  図とか
- `src/content/images/icons/`
  アイコンとか
- `src/content/images/items/`
  アイテムの画像とか
- `src/content/images/screenshots/`
  スクリーンショットとか

↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ここまで重要↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
### `src/scripts/`
サイトで使用するTypeScriptファイルが配置されます。触る必要はありません。
### `src/styles/`
サイトで使用するCSSファイルが配置されます。触る必要はありません。
### `src/content.config.ts`
AstroのContent Collectionの設定ファイルです。触る必要はありません。
### `.gitignore`
Gitで管理しないファイルの設定です。触る必要はありません。
### `.prettierignore`
Prettierでフォーマットしないファイルの設定です。触る必要はありません。
### `.prettierrc`
Prettierのフォーマット設定です。触る必要はありません。
### `astro.config.mjs`
AstroとStarlightの設定です。メニューバーを変更する際には、編集する必要があります。
### `package-lock.json`
npmパッケージのインストールに使用します。触る必要はありません。
### `package.json`
npmパッケージのインストールに使用します。触る必要はありません。
### `README_STARLIGHT.md`
Starlightがデフォルトで生成するREADMEファイルとその日本語訳です。

気になる人は読んでみるのもいいかもしれません。
### `README.md`
このファイルです。
### `svelte.config.js`
Svelteの設定です。触る必要はありません。
### `tsconfig.json`
TypeScriptの設定です。触る必要はありません。