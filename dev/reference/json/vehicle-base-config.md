---
title: RTMアドオン制作 - JSON設定項目 車両共通 VehicleBaseConfigクラス
description: VehicleBaseConfigクラスで定義されているJSON設定項目の一覧
published: false
date: 2025-07-17T12:27:35.198Z
tags: 
editor: markdown
dateCreated: 2025-07-17T12:07:22.764Z
---

<nav>

- [解説](#解説)
  - [`size`](#size)
  - [`rollsignTexture`](#rollsigntexture)
  - [`rollsignNames`](#rollsignnames)
  - [`rollsigns`](#rollsigns)
  - [`customButtons`](#custombuttons)
  - [`customButtonTips`](#custombuttontips)
  - [`door_left`](#door_left)
  - [`door_right`](#door_right)
  - [`pantograph_front`](#pantograph_front)
  - [`pantograph_back`](#pantograph_back)
  - [`sound_Stop`](#sound_stop)
  - [`sound_S_A`](#sound_s_a)
  - [`sound_Acceleration`](#sound_acceleration)
  - [`sound_Deceleration`](#sound_deceleration)
  - [`sound_D_S`](#sound_d_s)
  - [`sound_Horn`](#sound_horn)
  - [`sound_DoorOpen`](#sound_dooropen)
  - [`sound_DoorClose`](#sound_doorclose)
  - [`sound_ATSChime`](#sound_atschime)
  - [`sound_ATSBell`](#sound_atsbell)
  - [`sound_Announcement`](#sound_announcement)
  - [`soundScriptPath`](#soundscriptpath)
  - [`smoke`](#smoke)
  - [`headLights`](#headlights)
  - [`tailLights`](#taillights)
  - [`interiorLights`](#interiorlights)
  - [`slotPos`](#slotpos)
  - [~~`seatPos`~~](#seatpos)
  - [`seatPosF`](#seatposf)
  - [`playerPos`](#playerpos)
  - [`notDisplayCab`](#notdisplaycab)
  - [`wheelRotationSpeed`](#wheelrotationspeed)
- [関連サイト](#関連サイト)

</nav>

# 解説
<section>

## `size`
当たり判定サイズ `[width, height]`
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

## `rollsignTexture`
方向幕テクスチャのパス
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

## `rollsignNames`
方向幕の名前
<dl>
<dt>データ型</dt>
<dd>

文字列の配列 `<String[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `rollsigns`
方向幕
<dl>
<dt>データ型</dt>
<dd>

Rollsignの配列 `<Rollsign[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `customButtons`
カスタムボタン
<dl>
<dt>データ型</dt>
<dd>

文字列の配列の配列 `<String[][]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

`[ボタン, ボタンの状態名]`
</section>

<section>

## `customButtonTips`
各ボタンの説明
<dl>
<dt>データ型</dt>
<dd>

文字列の配列 `<String[]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

<section>

## `door_left`
左側ドアの動作
<dl>
<dt>データ型</dt>
<dd>

VehiclePartsの配列 `<VehicleParts[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `door_right`
右側ドアの動作
<dl>
<dt>データ型</dt>
<dd>

VehiclePartsの配列 `<VehicleParts[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `pantograph_front`
前方パンタグラフの動作
<dl>
<dt>データ型</dt>
<dd>

VehiclePartsの配列 `<VehicleParts[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `pantograph_back`
後方パンタグラフの動作
<dl>
<dt>データ型</dt>
<dd>

VehiclePartsの配列 `<VehicleParts[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `sound_Stop`
停車時の音声のパス
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

## `sound_S_A`
停車~加速時の音声のパス
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

## `sound_Acceleration`
加速時の音声のパス
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

## `sound_Deceleration`
減速時の音声のパス
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

## `sound_D_S`
減速~停車時の音声のパス
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

## `sound_Horn`
警笛の音声のパス
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

## `sound_DoorOpen`
ドア開扉時の音声のパス
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

## `sound_DoorClose`
ドア閉扉時の音声のパス
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

## `sound_ATSChime`
null
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

## `sound_ATSBell`
null
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

## `sound_Announcement`
車内放送の音声のパス
<dl>
<dt>データ型</dt>
<dd>

文字列の配列の配列 `<String[][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

`[表示名, 音声]`
</section>

<section>

## `soundScriptPath`
音声スクリプトのパス
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

## `smoke`
煙
<dl>
<dt>データ型</dt>
<dd>

オブジェクトの配列の配列 `<Object[][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

`[float x, float y, float z, String name, int min, int max, float speed]`
</section>

<section>

## `headLights`
前照灯
<dl>
<dt>データ型</dt>
<dd>

Lightの配列 `<Light[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `tailLights`
尾灯
<dl>
<dt>データ型</dt>
<dd>

Lightの配列 `<Light[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `interiorLights`
車内灯
<dl>
<dt>データ型</dt>
<dd>

Lightの配列 `<Light[]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>
</section>

<section>

## `slotPos`
座席
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<float[][]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

```json
[x, y, z, type]
```
単位はメートル
**typeの値**
- `0`: なし 当たり判定のみが欲しい場合
- `1`: クロスシート
- `2`: 表示なし 3Dモデルで座席を制作してある場合など
- `3`: 寝台 未実装
{.grid-list}

</section>

<section>

## ~~`seatPos`~~
**非推奨** 上位互換の`slotPos`があるため
座席
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<int[][]>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

単位はブロック
</section>

<section>

## `seatPosF`
座席（RTM2用）
<dl>
<dt>データ型</dt>
<dd>

不明 `<不明>`
</dd>
<dt>省略</dt>
<dd>不明（おそらく可）</dd>
</dl>

1.12.2に対応するには`slotPos`に加え、こちらも使う
値はslotPosと同じでよい

</section>

<section>

## `playerPos`
プレイヤーの位置
<dl>
<dt>データ型</dt>
<dd>

数値の配列の配列 `<float[][]>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>

```json
[x, y, z]
```

</section>

<section>

## `notDisplayCab`
運転台非表示
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

## `wheelRotationSpeed`
車輪の回転速度
<dl>
<dt>データ型</dt>
<dd>

数値 `<float>`
</dd>
<dt>省略</dt>
<dd>可</dd>
</dl>
</section>

# 関連サイト
- [KaizPatchX/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java at master · Kai-Z-JP/KaizPatchX](https://github.com/Kai-Z-JP/KaizPatchX/blob/master/src/main/java/jp/ngt/rtm/modelpack/cfg/ResourceConfig.java)
- [RealTrainModのJsonについてのドキュメント *RealTrainModのJsonで利用可能なキーについてのドキュメント。*](https://akikawaken.github.io/RTM/Docs/json.html)
- [Static Wind - Takami Train Kit *minecraftの鉄道Mod「RealTrainMod」用の車両モデルキットの解説*](https://staticwind.soragoto.net/rtm/tkmtk/#setup_json)
- [アドオン製作ガイド：jsonコーディング - RTMwiki | Gamerch](https://gamerch.com/realtrainmod/677483)
{.links-list}