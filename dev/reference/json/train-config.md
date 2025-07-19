---
title: RTMアドオン制作 - JSON設定項目 列車 TrainConfigクラス
description: TrainConfigクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:34:46.346Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:18.448Z
---

<nav>

- [解説](#解説)
  - [`trainName`](#trainname)
  - [`trainType`](#traintype)
  - [`trainModel2`](#trainmodel2)
  - [`bogieModel3`](#bogiemodel3)
  - [~~`bogieModel2`~~](#bogiemodel2)
  - [~~`trainModel`~~](#trainmodel)
  - [~~`bogieModel`~~](#bogiemodel)
  - [~~`trainTexture`~~](#traintexture)
  - [~~`bogieTexture`~~](#bogietexture)
  - [`sound_BrakeRelease`](#sound_brakerelease)
  - [`sound_BrakeRelease2`](#sound_brakerelease2)
  - [`muteJointSound`](#mutejointsound)
  - [`jointDelay`](#jointdelay)
  - [`isSingleTrain`](#issingletrain)
  - [`bogiePos`](#bogiepos)
  - [`trainDistance`](#traindistance)
  - [`accelerateion`](#accelerateion)
  - [`accelerateions`](#accelerateions)
  - [`maxSpeed`](#maxspeed)
  - [`deccelerations`](#deccelerations)
  - [`rolling`](#rolling)
  - [`pantoPos`](#pantopos)
  - [`rollSpeedCoefficient`](#rollspeedcoefficient)
  - [`rollVariationCoefficient`](#rollvariationcoefficient)
  - [`rollWidthCoefficient`](#rollwidthcoefficient)
  - [`userVariableAcceleration`](#uservariableacceleration)
  - [`useVariableDeceleration`](#usevariabledeceleration)
  - [`sound_CpFin`](#sound_cpfin)
  - [`sound_Joint`](#sound_joint)
  - [`sound_JointReverb`](#sound_jointreverb)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `trainName`
車両名
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

重複不可
</section>

<section>

## `trainType`
車両のタイプ
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

- `EC`: 電車
- `DC`: 気動車
- `EL`: 電気機関車
- `DL`: ディーゼル機関車
- `SL`: 蒸気機関車
- `CC`: コンテナ車
- `TC`: タンク車
- `N`: なし
{.grid-list}

</section>

<section>

## `trainModel2`
車体モデルのパス
<dl>
<dt>データ型</dt>
<dd>

ModelSource `<ModelSource>`
</dd>
<dt>省略</dt>
<dd>不可</dd>
</dl>
</section>

<section>

## `bogieModel3`
台車モデルのパス（前後別）
<dl>
<dt>データ型</dt>
<dd>

ModelSourceの配列 `<ModelSource[]>`
</dd>
<dt>省略</dt>
<dd>不可</dd>
</dl>

前後の台車の指定方法
[front <ModelSource>, back<ModelSource>]

</section>

<section>

## ~~`bogieModel2`~~
**非推奨** 前後別の台車指定方法`bogieModel3`があるため
台車モデルのパス（前後同じ）
<dl>
<dt>データ型</dt>
<dd>

ModelSource `<ModelSource>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## ~~`trainModel`~~
**非推奨** 上位互換の`trainModel2`があるため
車体モデルのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## ~~`bogieModel`~~
**非推奨** 上位互換の`bogieModel2`があるため
台車モデルのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## ~~`trainTexture`~~
**非推奨** 上位互換の`trainModel2`があるため
車体テクスチャのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## ~~`bogieTexture`~~
**非推奨** 上位互換の`bogieModel2`があるため
台車テクスチャのパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `sound_BrakeRelease`
ブレーキ緩解音のパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `sound_BrakeRelease2`
ブレーキ緩解音（弱め）のパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `muteJointSound`
ジョイント音をミュート
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `jointDelay`
2回めのジョイント音の遅延具合（メートル）
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<float[][]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

3つ以上の車輪対応、台車前後別。台車のホイールベースを指定すると思う。
</section>

<section>

## `isSingleTrain`
単行かどうか
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `bogiePos`
台車の位置（x,y,z）
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<float[][]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `trainDistance`
車体長の半分
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `accelerateion`
加速度（Block/tick^2^）
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

スペルミスは仕様です
</section>

<section>

## `accelerateions`
ノッチ段数とそれぞれのノッチごとの加速度（Block/tick^2^）
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

スペルミスは仕様です
</section>

<section>

## `maxSpeed`
ノッチごとの速度上限（1~5段）
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `deccelerations`
ブレーキノッチ段ごとの減速度（Block/tick^2^）
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

スペルミスは仕様です。  
値は負の値を設定してください。正の値を設定すると加速します。

</section>

<section>

## `rolling`
カーブでの傾き具合（0~1）
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `pantoPos`
パンタグラフの摺板位置（x, z, minY, maxY）
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<float[][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `rollSpeedCoefficient`
車体が揺れる速度
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

車体の揺れ方は、基本波と変調波の合成波によって定義されている
2つの波が進行する速度は、それぞれ車両の速度に比例するが、その際の比例定数

...たぶん

</section>

<section>

## `rollVariationCoefficient`
車体の揺れ方
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

大きい値を指定すると変調波の周波数が高くなり、揺れが細かくなる
小さい値を指定すると変調波の周波数が低くなり、揺れが緩やかになる

...と思う

</section>

<section>

## `rollWidthCoefficient`
車体が揺れる量
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

車体が最終的に揺れる量は合成波に比例するが、その際の比例定数
わかりやすく左右に揺れる大きさを変えることができる

...はず

</section>

<section>

## `userVariableAcceleration`
サーバースクリプトでの加速度制御の有効化
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `useVariableDeceleration`
サーバースクリプトでの減速度制御の有効化
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `sound_CpFin`
コンプレッサー終了音のパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `sound_Joint`
ジョイント音のパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `sound_JointReverb`
反響ありのジョイント音のパス
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/TrainConfig.java at master · Kai-Z-JP/KaizPatchX *もっと便利に、自由に。KaizPatchはNGTLib・RTM・MCTEの非公式な改造物です。. Contribute to Kai-Z-JP/KaizPatchX development by creating an account on GitHub.*](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/TrainConfig.java)
{.links-list}