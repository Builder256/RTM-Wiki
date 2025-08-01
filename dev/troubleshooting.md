---
title: RTMアドオン制作 - トラブルシューティング
description: RealTrainMod（RTM）のアドオン制作でのトラブルシューティングを掲載。ゲームがクラッシュした、選択画面に出てこない。色や形がおかしいなど様々な問題の解決方法を掲載しています
published: true
date: 2025-07-31T17:22:01.555Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-02-18T18:35:49.199Z
---

このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。

---
このページの内容は、主にKaizPatchXの使用を想定しています。  
他のバージョンを使用している場合には、説明の内容が異なる可能性があります。[^1]

---

# 目次
<!-- WikiのUIには見出し2までしか表示されないので、複雑なページには全レベルの目次を挿入しなさい。 -->
- [目次](#目次)
- [忙しい人向け: 簡易トラブル診断](#忙しい人向け-簡易トラブル診断)
- [アドオン制作のトラブルの種類](#アドオン制作のトラブルの種類)
  - [Minecraftがクラッシュする場合](#minecraftがクラッシュする場合)
  - [Minecraftがクラッシュしない場合](#minecraftがクラッシュしない場合)
- [トラブルの原因の特定](#トラブルの原因の特定)
  - [Minecraftがクラッシュする場合](#minecraftがクラッシュする場合-1)
    - [終了コード](#終了コード)
    - [クラッシュレポート](#クラッシュレポート)
      - [クラッシュレポートを確認する方法](#クラッシュレポートを確認する方法)
    - [クラッシュレポートの読み方](#クラッシュレポートの読み方)
    - [クラッシュレポートの内容](#クラッシュレポートの内容)
      - [冒頭](#冒頭)
      - [エラーメッセージ](#エラーメッセージ)
      - [スタックトレース](#スタックトレース)
      - [連鎖するエラー](#連鎖するエラー)
    - [発生するエラーの一覧](#発生するエラーの一覧)
  - [Minecraftがクラッシュしない場合](#minecraftがクラッシュしない場合-1)
    - [RTMがアドオンを認識できていない場合](#rtmがアドオンを認識できていない場合)
      - [JSONのファイル名が必要な形式でない](#jsonのファイル名が必要な形式でない)
    - [RTMがアドオンを認識できている場合](#rtmがアドオンを認識できている場合)
      - [3DCG制作ソフトでのモデルの描画とRTMでのモデルの描画が異なる場合](#3dcg制作ソフトでのモデルの描画とrtmでのモデルの描画が異なる場合)
        - [ポリゴンの形状が異なっている](#ポリゴンの形状が異なっている)
        - [ポリゴンが暗くなる](#ポリゴンが暗くなる)
        - [スムージングが意図しない結果になる](#スムージングが意図しない結果になる)
        - [意図せずソフトエッジになる](#意図せずソフトエッジになる)
        - [マッピングがずれる・ポリゴンが重なっていないのにZファイティングが発生する](#マッピングがずれるポリゴンが重なっていないのにzファイティングが発生する)
        - [テクスチャがおかしい](#テクスチャがおかしい)
      - [その他](#その他)
- [トラブルの解決](#トラブルの解決)
- [補足](#補足)
- [関連サイト](#関連サイト)

# 忙しい人向け: 簡易トラブル診断
不正確な場合があります。
| No  | クラッシュレポートの内容                                                 | Yes の場合                                                                 | No の場合                                                                  |
| --- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1   | クラッシュする                                                           | 2                                                                          | 15                                                                         |
| 2   | クラッシュレポートが読める                                               | 次の項目                                                                   | [クラッシュレポートの読み方を学ぶ](#クラッシュレポートの読み方)            |
| 3   | クラッシュレポートに「FileNotFoundException」って書いてある              | JSONのファイルパスのミス                                                   | 次の項目                                                                   |
| 4   | クラッシュレポートに「MALFORMED」って書いてある                          | 2バイト文字を含むファイル名のファイルがあるかも                            | 次の項目                                                                   |
| 5   | クラッシュレポートに「Can't load model (ホニャララ.json)」って書いてある | JSONの文法が間違ってるかも                                                 | 次の項目                                                                   |
| 6   | クラッシュレポートに「Can't load model (モデル名)」って書いてある        | モデルファイルが間違ってるかも                                             | 次の項目                                                                   |
| 7   | クラッシュレポートに「Can't find model file」って書いてある              | モデルファイルの場所が間違ってるかも                                       | 次の項目                                                                   |
| 8   | クラッシュレポートに「Can't find model file」って書いてある              | モデルファイルの場所が間違ってるかも                                       | 次の項目                                                                   |
| 9   | クラッシュレポートに「On construct ModelSet」って書いてある              | JSONの設定が間違ってるかも                                                 | 次の項目                                                                   |
| 10  | クラッシュレポートに「Can't load class」って書いてある                   | なんか重大な間違いをしてるかも                                             | 次の項目                                                                   |
| 11  | クラッシュレポートに「Can't load class」って書いてある                   | なんか重大な間違いをしてるかも                                             | 次の項目                                                                   |
| 12  | クラッシュレポートに「Failed to load script」って書いてある              | スクリプトで間違ってるかも                                                 | 次の項目                                                                   |
| 13  | クラッシュレポートに「Script exec error」って書いてある                  | スクリプトで間違ってるかも                                                 | 次の項目                                                                   |
| 14  | どれも違う                                                               | KaizPatchXを使ってないかも                                                 | 不明です コメント欄かWikiのGitHubでIssueを建てて知らせてくれると嬉しいかも |
| 15  | モデル選択画面に出てくる                                                 | 不明です コメント欄かWikiのGitHubでIssueを建てて知らせてくれると嬉しいかも | [JSONファイル名が間違ってるかも](#JSONのファイル名が必要な形式でない)      |
{.dense}

# アドオン制作のトラブルの種類
RealTranMod（RTM）のアドオン制作においては、様々な内容のトラブルが発生する可能性があります。  
これらのトラブルには、それぞれたくさんの原因と対処法がありますが、Minecraftがクラッシュするかどうかで、大きく2つに大別することができます。

## Minecraftがクラッシュする場合
これは、RTMがアドオンの存在を認識しているが、何らかの要素（ディレクトリ構成、ファイル内容など）が誤っているために発生するものです。

主に、JSONでの設定のミスや、ファイル内容が想定される内容と異なっており、その不具合を許容できない場合に発生します。  
クラッシュレポートから原因となるミスの内容を読み取ることができるため、比較的簡単に対処することができます。

## Minecraftがクラッシュしない場合
これには、2つの可能性があります。

一つ目は、アドオンの内容が根本的に間違っており、それをアドオンとして認識できていない場合です。  
主に、RTMが適切なJSONファイルを発見できなかった場合に発生します。

もう一つは、アドオンとして認識されていてかつ、RTMが問題の存在を認識できていない場合です。  
3Dモデルの描画や、テクスチャがおかしいなど、何かしらの表示や動作が意図しない状態である場合が相当します。

# トラブルの原因の特定
具体的なトラブルの内容と、その原因の特定方法を説明します。

## Minecraftがクラッシュする場合
この場合には、クラッシュレポートの内容から比較的容易に原因を推定することができます。

### 終了コード
初心者にありがちな勘違いとして、よく、「終了コード」の数字がクラッシュの内容を表す文字列だと考えている場合があります。

もちろん、この数字にも意味がないわけではありません。  
ですが、所詮数桁の数字でしかないことからもわかるように、具体的なミスの内容や原因を特定できる情報ではありません。[^2]

### クラッシュレポート
クラッシュの原因の特定には、ほとんどの場合、クラッシュレポートが必要です。

クラッシュレポートは、Minecraftが異常終了（クラッシュ）した際に、その原因を特定するために自動生成されるログファイルです。  
クラッシュを引き起こしたエラーが発生した原因や、そこに至るまでの実際のプログラムの実行過程の内容が詳細に記載されています。  

この記載内容を確認することで、アドオンの処理のどの部分でどのようなエラーが発生したのかを読み取ることができます。

#### クラッシュレポートを確認する方法
クラッシュレポートを閲覧し、内容を確認するには、2つの方法があります。

わかりやすい方法は、ランチャーから開く方法です。  
クラッシュが発生した際、ランチャーのクラッシュを通知するポップアップの下部にある、「クラッシュレポートを表示」をクリックすることで開くことができます。

また、クラッシュレポートのファイルは、Minecraftの起動構成を設定したディレクトリにある、`crash-reports`ディレクトリに、以下のような名前のファイルとして生成されます。  
```plaintext
crash-YYYY-MM-DD_HH.MM.SS.txt
```
このようなファイル名のTXT形式（`.txt`）のテキストファイルが、クラッシュレポートになります。

このファイルを適切なアプリケーションで開くことでも、クラッシュレポートの内容を確認することができます。

### クラッシュレポートの読み方
クラッシュレポートを確認することができたら、その内容を読んで原因を探す必要があります。

初心者の場合には、クラッシュレポートのすべてを読む必要はなく、重要な部分のみを読むだけで十分です。  
原因の特定に重要な、実際のエラーメッセージなどの内容は、章や段落の最初にある英文の部分に記載されています。

この部分は、Modの開発者がエラーが起きた際に、その内容をわかりやすく伝えるためにプログラムの中に準備した通知です。  
RTMに限らず、多くのModやソフトウェアでは、エラーの内容を端的に示す通知があらかじめ準備されています。  

この英文を読むことで、大まかにどのような原因なのかを特定することができます。

余談ですが、オンライン知恵袋では「RTMでクラッシュしました。助けてください。」などとだけ書かれた大量の投稿がなされています。  
これらへのあまりといえばあまりな回答を見ても、やはり正確に対処するためにクラッシュレポートが重要であるとわかります。

### クラッシュレポートの内容
クラッシュレポートの内容について、実際の例を挙げて説明します。

#### 冒頭
```plaintext
---- Minecraft Crash Report ----
// Shall we play a game?

Time: 25/07/22 22:18
Description: Loading RTM ModelPack
```

ここでは、エラーが発生した状況が大まかに記載されています。
- Time: クラッシュが発生した時間
- Description: クラッシュが発生した状況
{.grid-list}

この例では、`Loading RTM ModelPack`と記載されているので、Minecraftの起動の際、RTMがアドオンを読み込んでいる最中に発生したものだとわかります。

**クラッシュが発生する状況**
- `Loading RTM ModelPack`: Minecraftの起動時にアドオンをロードしている最中
- `Rendering screen`: ?
- `Rendering entity in world`: ?
- `Initializing game`: ?

> **加筆希望**  
> これら以外のクラッシュが発生する状況とそのメッセージ
{.is-info}

#### エラーメッセージ
```plaintext
jp.ngt.rtm.modelpack.ModelPackException: On construct ModelSet (exampleTrain)
```
冒頭の次に続くこのような部分は、Minecraftが検知したクラッシュ原因です。  
この部分に、実際のエラーが記載されており、原因の特定において**最も重要な部分**です。

この例では、`On construct ModelSet ([JSONで設定したtrainName])`と記載されているため、その車両の内容が原因でエラーが発生した可能性が高いと考えることができます。

ちなみに、ModelSetはRTMで追加される各アイテムの設計図のようなものです。  
その設計図をもとにファイルを取得、解析して車両データを構築している最中にエラーが発生したということになります。

#### スタックトレース
```plaintext
	at jp.ngt.rtm.modelpack.ModelPackManager.getNewModelSet(ModelPackManager.java:144)
	at jp.ngt.rtm.modelpack.ModelPackManager.registerModelset(ModelPackManager.java:78)
	at jp.ngt.rtm.modelpack.ModelPackLoadThread.loadModelFromConfig(ModelPackLoadThread.java:172)
	at jp.ngt.rtm.modelpack.ModelPackLoadThread.runThread(ModelPackLoadThread.java:149)
	at jp.ngt.rtm.modelpack.ModelPackLoadThread.run(ModelPackLoadThread.java:99)
```
プログラムのどの部分で処理が行われ、エラーの発生に至ったかが記録されています。  

実際にRTMのプログラムを確認し、スタックトレースと見比べながら処理の流れを追うことで、より詳細に内容を知ることもできます。  
ですが、そのような対処が必要な場合は稀なので、多くの場合この部分は無視できます。

#### 連鎖するエラー
```plaintext
Caused by: java.lang.reflect.InvocationTargetException
	at sun.reflect.GeneratedConstructorAccessor70.newInstance(Unknown Source)
	at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
	at java.lang.reflect.Constructor.newInstance(Constructor.java:422)
	at jp.ngt.rtm.modelpack.ModelPackManager.getNewModelSet(ModelPackManager.java:135)
	... 4 more
Caused by: net.minecraftforge.client.model.ModelFormatException: Can't load model : example.mqo
	at jp.ngt.rtm.modelpack.ModelPackManager.loadModel(ModelPackManager.java:223)
	at jp.ngt.rtm.render.ModelObject.<init>(ModelObject.java:44)
	at jp.ngt.rtm.modelpack.modelset.ModelSetTrainClient.registerBogieModel(ModelSetTrainClient.java:50)
	at jp.ngt.rtm.modelpack.modelset.ModelSetTrainClient.<init>(ModelSetTrainClient.java:38)
	... 8 more
Caused by: net.minecraftforge.client.model.ModelFormatException: Failed to load model : minecraft:models/example.mqo
	at jp.ngt.ngtlib.renderer.model.ModelLoader.loadModel(ModelLoader.java:57)
	at jp.ngt.ngtlib.renderer.model.ModelLoader.loadModel(ModelLoader.java:24)
	at jp.ngt.rtm.modelpack.ModelPackManager.loadModel(ModelPackManager.java:218)
	... 11 more
Caused by: java.io.FileNotFoundException: minecraft:models/example.mqo
	at net.minecraft.client.resources.FallbackResourceManager.func_110536_a(SourceFile:51)
	at net.minecraft.client.resources.SimpleReloadableResourceManager.func_110536_a(SimpleReloadableResourceManager.java:67)
	at jp.ngt.ngtlib.io.NGTFileLoader.getInputStream(NGTFileLoader.java:330)
	at jp.ngt.ngtlib.renderer.model.ModelLoader.loadModel(ModelLoader.java:33)
	... 13 more
```
このようなさらなるエラーメッセージとスタックトレースが、一つ目のエラーメッセージとスタックトレースに続けて記録される場合があります。  

これは、エラーが連鎖していることを示しており、下に記載されるものほどより細かいレベルで発生したエラーを記録しています。

この例では、まず、2番目のエラーとして`InvocationTargetException` と記載されています。  
これはエラーのラッパーです。  
原因の特定にはあまり重要ではないので無視できます。

次に、3番目のエラーとして、`ModelFormatException: Can't load model : [エラーが発生したファイル名]`と記載されています。  
これによって、そのファイルの解析でエラーが起きたことがわかります。

4番目のエラーとして、`ModelFormatException: Failed to load model : minecraft:models/[エラーが発生したファイル名]`と記載されています。  
これによって、そのファイルの取得に失敗したことがわかります。

最後に、5番目のエラーとして、`FileNotFoundException: minecraft:models/[エラーが発生したファイル名]`と記載されています。  
これによって、そのファイルが存在しなかったことがわかります。

このようにして、クラッシュレポートの内容から、クラッシュした原因を特定することができます。

### 発生するエラーの一覧
これらは、クラッシュレポートに記録されるエラーメッセージの一覧です。
> **加筆希望**  
> RTMのモデルロード関連の挙動を理解できていないので、エラーメッセージとその発生条件についてご存じの方教えてください。
{.is-info}

## Minecraftがクラッシュしない場合
Minecraftがクラッシュしない場合は、その原因が明らかなでない限り、特定が比較的難しくなります。

### RTMがアドオンを認識できていない場合
以下のような場合に、RTMがアドオンを認識できていない場合があります。

#### JSONのファイル名が必要な形式でない
RTMのアドオンのJSONファイルは、アンダーバー`_`（U+005F）で区切られたモデル名を含むファイル名である必要があります。  
これに準ずる名前でない場合には、アドオンとして認識されません。

以下は、正当なJSONファイル名の具体例です。

**車両モデル**
- `ModelTrain_exampleTrain.json`
- `ModelTrain_JRC313-2350_Mc.json`

その他のJSONファイル名の例については、以下のページで説明しています:　　…と言いたいところですが、まだありません。  
[/ja/dev/file/json（予定）]

> **加筆希望**  
> RTMがアドオンを認識できない可能性がほかにもあるはずなのでご存じの方教えてください。
{.is-info}

### RTMがアドオンを認識できている場合
非常に多くの可能性が考えられますが、以下に発生する事象の一覧と原因を記載します。

#### 3DCG制作ソフトでのモデルの描画とRTMでのモデルの描画が異なる場合
RTMは3Dモデルを独自の機構で解析、描画するため、3DCG制作ソフトでの描画結果と、RTMでの描画結果が異なる場合があります。

##### ポリゴンの形状が異なっている
原因: 多角形ポリゴンを使用している

RTMでは多角形ポリゴンをロードすることが可能ですが、そのままロードするのではなく、三角形に分割されます。  
その際に、本来のポリゴンの形状を考慮せず画一的に処理されるため、本来と異なる形状に分割される可能性があります。

##### ポリゴンが暗くなる
原因: 凹四角形を使用している  

四角形ポリゴンも三角形に分割されるため、多角形ポリゴンと同様の理由で意図しない描画結果になる可能性があります。

##### スムージングが意図しない結果になる
原因: 法線を編集している

3Dモデルデータの法線情報は解析されず、独自に法線を生成します。  
そのため、法線の編集が適用された状態の3D制作ソフトでの見た目とは異なる見た目になる可能性があります。

##### 意図せずソフトエッジになる
原因: スムージンググループ、法線の分割、ハードエッジなどを指定している

これらについての情報は全て解析されず、同じ座標の2頂点からなるエッジを含むポリゴンの間は、常にソフトエッジとして処理されます。  
頂点を同じ座標に配置しつつ、ハードエッジを使用したい場合には、適切なスムージング角度を指定するか、オブジェクトを分割する必要があります。

##### マッピングがずれる・ポリゴンが重なっていないのにZファイティングが発生する
原因: UV座標をピクセルの境目に設定している

3D制作ソフトとRTMでの処理の違いにより、わずかにマッピングに誤差が生じるようです。  
ほんの少しUV座標を移動すれば問題ありません。

##### テクスチャがおかしい
原因: テクスチャのパスの指定を間違えている

設定したファイルパスがテクスチャとして認識できる拡張子の存在するファイルであった場合には、クラッシュは発生しません。

また、RTMのバージョンによっては（KaizPatchX以外など）、テクスチャに存在しないファイルパスを指定した場合にもクラッシュが発生しません。  
その際には、`#ff00ff`と`#000000`の市松模様のテクスチャが適用されます。

#### その他
> **加筆希望**  
> クラッシュしないトラブルが発生する可能性がほかにも山ほどあるはずなので心当たりのある方教えてください。
{.is-info}

# トラブルの解決
トラブルの原因を特定することができたら、それを解決することができます。

原因の特定がそのまま解決方法に結び付く場合もありますが、そうでない複雑なトラブルの可能性もあります。

> **加筆希望**  
> 原因が判明しても解決方法が不明なトラブルに心当たりのある方教えてください。多分あると思います。
{.is-info}

# 補足
この解説では、わかりやすく「エラー」という言葉を用いていますが、これらのほとんどは正確には「例外 *Exception*」です。  
Javaでは、*Error*と*Exception*を明確に区別しますが、RTMのアドオン制作のミスによって発生するのはほぼすべて*Exception*であり、両者を区別する必要はないため、わかりやすさを優先し全て*エラー*としています。

# 関連サイト
- [RealTrainModにおけるクラッシュレポート解説 | 箱日本観光振興局 *よくあるクラッシュレポートの例と解決策を適当に書き綴っています。*](https://boxjapan.info/archives/337)
- [アドオン製作ガイド：動作チェック - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677484)
- [宝条帝都：RTM系 私のRealTrainModがクラッシュした時のログ置き場 ※特にパック作成時 *最近はMinecraftをやってます。*](http://hojyoteito.blog134.fc2.com/blog-entry-241.html)
- [Static Wind - Takami Train Kit *minecraftの鉄道Mod「RealTrainMod」用の車両モデルキットの解説*](https://staticwind.soragoto.net/rtm/tkmtk/index.html#pack)
{.links-list}

[^1]:主に、クラッシュが発生した際にエラーが投げられるクラスが異なっている場合があります。まれに、似ても似つかないエラーが出ることもあります。
[^2]:Javaでは、終了コードは0が正常な終了であり、それ以外のステータスは異常終了を表します。[参考](https://codegym.cc/ja/groups/posts/ja.384.java-no-system-exit-)

*[RTM]: RealTrainMod