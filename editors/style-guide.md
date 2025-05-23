---
title: スタイルガイド
description: Wikiを編集する上での、統一した表記や文法についての解説
published: true
date: 2025-05-18T19:08:49.297Z
tags: 
editor: markdown
dateCreated: 2025-05-18T19:08:49.297Z
---

# スタイルガイド
RTM Wikiを編集する上での、統一する文法や表記の規則です。
できる限りこれを遵守するようにしてください。

# マークアップ
## エディタ
エディタはMarkdownを使用し、他のエディタは使用しないでください。

## 見出し
見出しレベルは適切に使い分けてください。
最上位の見出しには`#`を使用してください。
これは`<h1>`に変換され、一つのページに複数のh1要素が存在することになりますが、Wiki.jsの仕様上これが必要なので、HTML Living Standardの仕様は一旦忘れてください。

## 強調要素
- 重要な部分の強調には**太字**`**...**`を使用してください。
  これは`<strong>`に変換されます。
  見出しの場合には、全体に太字を指定することはしないでください。
- その語句が一般的に使われる用法と異なる意味で使われているということを強調する際には、*斜体*`*...*`を使用してください。
  これは`<em>`に変換されます。
 
## 順序なしリスト
`*`,`-`,`+`が順序なしリスト`<ul>`に変換されますが、`-`のみを使用してください。

## 順序付きリスト
`1. `,`2. `などが順序付きリスト`<ol>`に変換されますが、プレビューのレンダリング結果と同様になるように1から順に数字を指定してください。
  ただし、執筆途中など、リストの内容が確定していない場合には、全て`1. `を使用してください。

## ハイパーリンク
内部リンク、外部リンクは適切に使用してください。
外部リンクは信頼できる公式ドキュメントやメディアなどのページに限定し、特に難しい専門用語などにのみ使用してください。

## 脚注
追加の補足と、出典の明記に使用してください。
専門用語は解説サイト/ページへのハイパーリンク、略語の説明などには使用しないでください。

## 略語
よく知られた略語がある語句を使用する場合には、文末で以下の定義を行ってください。

```
*[RTM]: RealTrainMod
*[MCTE]: MC Terrain Editor
```

# 日本語表現
## 文体
ですます調を基本としてください。可能な限り推定や婉曲の表現は用いず、断定してください。
方法を示す場合には、「まず、～してください。次に～てください。」ではなく「まず、～します。次に～です。」のように、「してください」という表現は使用しないでください。

## 数字
- 熟語や慣用句などを除き、数字は半角のアラビア数字を使用してください。
- 単位との間以外には、数字の前後のスペースは入れないでください。一桁の数値の場合に、その前後にスペースを入れる慣例がありますが、これは使用しないでください。

## 略語
「RTM」「MCTE」など、よく知られた略語がある語句は、冒頭または最初の言及時にのみ正式名称を使用し、それ以降は略語を使用してください。

## メディア
- 画像のフォーマットにはWebP形式（`.webp`）を使用し、PNG形式やJPEG形式は使用しないでください。
- 使用するコンテンツは原則自分で撮影したものとし、著作権に配慮してください。

## 英単語前後のスペース
英単語や固有名詞の前後のスペースは使用しないでください。

×「Metasequoia を使用します」
○「Metasequoiaを使用します」