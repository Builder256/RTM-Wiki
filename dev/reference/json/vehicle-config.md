---
title: RTMアドオン制作 - JSON設定項目 車両 VehicleConfigクラス
description: VehicleConfigクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:33:35.244Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:30.994Z
---

<nav>

- [解説](#解説)
  - [`name`](#name)
  - [`model`](#model)
  - [`vehicleType`](#vehicletype)
  - [`friction`](#friction)
  - [`acceleration`](#acceleration)
  - [`maxSpeed`](#maxspeed)
  - [`maxYaw`](#maxyaw)
  - [`yawCoefficient`](#yawcoefficient)
  - [`pitchCoefficient`](#pitchcoefficient)
  - [`rollCoefficient`](#rollcoefficient)
  - [`changeYawOnStopping`](#changeyawonstopping)
- [関連サイト](#関連サイト)
</nav>

# 解説
<section>

## `name`
名前
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>
</section>

<section>

## `model`
モデル
<dl>
<dt>データ型</dt>
<dd>

ModelSource `<ModelSource>`  
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>
</section>

<section>

## `vehicleType`
乗り物の種類
<dl>
<dt>データ型</dt>
<dd>

文字列 `<String>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく不可）</dd>
</dl>

`"Car"`, `"Plane"`, `"Ship"`が指定できます
</section>

<section>

## `friction`
滑りやすさ
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `acceleration`
加速度
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `maxSpeed`
最大速度
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `maxYaw`
最大Y軸回転
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `yawCoefficient`
Yaw係数
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `pitchCoefficient`
Pitch係数
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `rollCoefficient`
Roll係数
<dl>
<dt>データ型</dt>
<dd>

数値の配列 `<float[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

[地上, 空中]
</section>

<section>

## `changeYawOnStopping`
停車中の旋回の有効化
<dl>
<dt>データ型</dt>
<dd>

真偽値 `<boolean>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java at master · Kai-Z-JP/KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java)
- [RealTrainModのJsonについてのドキュメント *RealTrainModのJsonで利用可能なキーについてのドキュメント。*](https://akikawaken.github.io/RTM/Docs/json.html)
- [Static Wind - Takami Train Kit *minecraftの鉄道Mod「RealTrainMod」用の車両モデルキットの解説*](https://staticwind.soragoto.net/rtm/tkmtk/#setup_json)
- [アドオン製作ガイド：jsonコーディング - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677483)
{.links-list}