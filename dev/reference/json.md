---
title: RTMアドオン制作 - JSONファイルの設定項目
description: RealTrainMod（RTM）のアドオン制作に必要なJSONの設定項目について解説します。それぞれの項目の設定内容や初期値、省略の可否など詳しく解説！
published: true
date: 2025-06-25T10:43:58.229Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

> このページは執筆中であり、今後内容が大幅に追加・変更される可能性があります。
{.is-warning}

RealTrainMod（RTM）のアドオン制作をする際のJSONの設定項目について解説します。
バージョンによって使用できる内容が異なりますが、このページでは最新版のRealTrainModに準拠しています。

> JSONのインデントについて、このWikiでは空白4つで1つのインデントとする作法を採用します
{.is-info}

# 目次
## 共通
- [`useCustomColor`](#usecustomcolor)
- [`tags`](#tags)
- [`defaultData`](#defaultdata)
- [`scale`](#scale)
- [`offset`](#offset)
- [`smoothing`](#smoothing)
- [`doCulling`](#doculling)
- [`accuracy`](#accuracy)
- [`serverScriptPath`](#serverscriptpath)
- [`guiScriptPath`](#guiscriptpath)
- [`guiTexture`](#guitexture)
- [`customIconTexture`](#customicontexture)
- [`renderAABB`](#renderaabb)

## 列車
- パーツ動作設定
- 座標変換設定
- 台車設定
- [`trainName`](#trainname)
- [`trainType`](#traintype)
- [~~`trainModel`~~](#trainmodel)
- [~~`bogieModel`~~](#bogiemodel)
- [~~`trainTexture`~~](#traintexture)
- [~~`bogieTexture`~~](#bogietexture)
- [`trainModel2`](#trainmodel2)
    - `modelFile`
    - `textures`
    - `rendererPath`
    - `vertexShaderPath`
    - `fragmentShaderPath`

- `bogieModel2`
    - `modelFile`
    - `textures`
    - `rendererPath`
- `bogieModel3`
    - 台車設定（前）
    - 台車設定（後）
- `buttonTexture`
- `rollsignTexture`
- `rollsignNames`
- `rollsigns`
    - 方向幕設定
    - `uv`
    - `pos`
    - `doAnimation`
    - `disableLighting`
- `door_left`
    - パーツ動作設定の配列
        - `objects`
        - `pos`
        - `transform`
            - 座標変換設定の配列
- `door_right`
    - パーツ動作設定の配列
        - `objects`
        - `pos`
        - `transform`
            - 座標変換設定の配列
- `pantograph_front`
- `pantograph_back`
- `sound_Stop`
- `sound_S_A`
- `sound_S_M`
- `sound_Medium`
- `sound_M_H`
- `sound_High`
- `sound_H_M`
- `sound_M_S`
- `sound_Acceleration`
- `sound_Deceleration`
- `sound_D_S`
- `sound_Horn`
- `sound_BrakeRelease`
- `sound_BrakeRelease2`
- `sound_Announcement`
- `sound_DoorOpen`
- `sound_DoorClose`
- `soundScriptPath`
- `muteJointSound`
- `seatPos`
- `slotPos`
- `seatPosF`
- `playerPos`
- `bogiePos`
- `pantoPos`
- `jointDelay`
- `maxSpeed`
- ~~`renderLight`~~
- `rolling`
- `rollSpeedCoefficient`
- `rollVariationCoefficient`
- `rollWidthCoefficient`
- `accelerateion`
- `trainDistance`
- `doCulling`
- `isSingleTrain`
- `notDisplayCab`
- `headLights`
    - 配列
        - `type`
        - `color`
        - `pos`
        - `r`
- `tailLights`
    - 配列
        - `type`
        - `color`
        - `pos`
        - `r`
- `interiorLights`
    - 配列
        - `pos`

- `smoke`
- `size`
- `wheelRotationSpeed`

## 乗り物
- `name`
- `model`
- `vehicleType`
- `friction`
- `acceleration`
- `maxSpeed`
- `maxYaw`
- `yawCoefficient`
- `pitchCoefficient`
- `rollCoefficient`
- `hoveringSpeed`
- `changeYawOnStopping`
- `vibration`
- `collisionParts`
- `connectionDistance`
- `customButtons`
- `customButtonTips`

## リフト
- `name`
- `model`
- `vehicleType`
- `vibration`
- `gripPos`
- `collisionParts`


## レール
- `railName`
- `railModel`
- `railTexture`
- `model`
- `buttonTexture`
- `polygonType`
- `ballastWidth`
- `allowCrossing`
- `defaultBallast` 
    - 配列
        - `blockName`
        - `blockMetadata`
        - `height`

## コンテナ
- `containerName`
- `containerModel`
- `containerTexture`
- `model`
- `buttonTexture`
- `containerWidth`
- `containerHeight`
- `containerLength`

## 火器
- `firearmName`
- `firearmModel`
- `firearmTexture`
- `model`
- `buttonTexture`
- `modelPartsN`
    - `objects`
    - `pos`
- `modelPartsY`
    - `objects`
    - `pos`
- `modelPartsX`
    - `objects`
    - `pos`
- `modelPartsBarrel`
    - `objects`
    - `pos`
- `muzzlePos`
- `playerPos`
- `yaw`
- `pitch`
- `rotationSpeedY`
- `rotationSpeedX`
- `recoil`
- `ammoType`
- `rateOfFire`
- `magazineSize`
- `fpvMode`

## 信号機
- `signalName`
- `signalModel`
- `signalTexture`
- `lightTexture`
- `buttonTexture`
- `modelPartsFixture`
    - `objects`
    - `pos`
- `modelPartsBody`
    - `objects`
    - `pos`
- `lights`
- `rotateBody`

## NPC
- `name`
- `model`
- `texture`
- `lightTexture`
- `buttonTexture`
- `role`
- `health`
- `speed`
- `damage`
- `useCustomColor`
- `duCulling`
- `smoothing`

## 看板
- `texture`
- `backTexture`
- `height`
- `width`
- `depth`
- `frame`
- `animationCycle`
- `color`
- `lightValue`

## 機械（ModelMachine）
- `name`
- `model`
    - `modelFile`
    - `textures`
    - `rendererPath`
- `buttonTexture`
- `machineType`
- `followRailAngle`
- `rotateByMetadata`
- `brightness`
- `sound_OnActivate`
- `sound_Running`
- `defaultValues`
    - `type`
    - `key`
    - `value`
    - `suggestions`
    - `pattern`
    - `minmax`
- `defaultData`


## 機械（ModelOrnament）
- `name`
- `model`
- `buttonTexture`
- `ornamentType`
- `minRandomScale`
- `conveyorSpeed`

## 機械（ModelMechanism）
- `name`
- `model`
- `buttonTexture`
- `type`
- `transmissionRatioON`
- `transmissionRatioOFF`
- `maxSpeed`
- `acceleration`
- `radius`
- `teethCount`

## 旗
- `texture`
- `height`
- `width`
- `resolutionU`
- `resolutionV`
- `poleLength`

## コネクタ
- `name`
- `model`
- `connectorType`
- `wirePos`

## ワイヤ
- `name`
- `model`
- `deflectionCoefficient`
- `lengthCoefficient`
- `sectionLength`
- `yOffset`

# 解説

## 共通
### `useCustomColor`
カスタムカラーを有効化するか
- \<boolean>
- 省略：可
- default：`false`

<!-- <details>
<summary>対応表</summary> -->

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | NO  | YES        |
{.dense}
<!-- </details> -->

### `tags`
モデル選択画面での検索キーワード

- \<string> 
- 省略：可

```json
"tags": "ngt 223 JRW"
```

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | YES | YES        |
{.dense}

### `defaultData`
DataMapのデフォルト値

- \<string>
- 省略：可

```json
"defaultData": "scale=(Double)1.0,type=(String)Normal"
```

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | YES | YES        |
{.dense}

### `scale`
縮尺（NGTOモデル使用時のみ）
- \<float>
- 省略：不明

| RTM2 | RTM       | KaizPatchX |
| ---- | --------- | ---------- |
| YES  | Maybe YES | YES        |
{.dense}

### `offset`
モデルの描画位置

- \<Array>
    - \<float>
    - \<float>
    - \<float>
- 省略：可

モデルの描画位置を設定します。Entityの中心からの相対座標で記述してください。

```json
"offset": [0.0, 0.0, 0.0]
```

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | YES | YES        |
{.dense}

### `smoothing`
スムージングを有効化するか

- \<boolean>
- 省略：可
- default：`false`

### `doCulling`
面の片面表示を有効化するか

- \<boolean>
- 省略：可
- default：`false`

有効化すると、ポリゴンの表面のみが描画されます。MQOとOBJでは有効化した方が負荷が少ないです。

### `accuracy`
頂点座標の精度

- \<string>
- 省略：可
- default：`"MEDIUM"`

<div>
  
- `"LOW"` - ±16.000の範囲を持ちます。この範囲に収まり、かつそれほど細かくないモデルであれば、こちらを選択したほうがメモリ使用量を削減できます。
- `"MEDIUM"` - 通常通り。
{.grid-list}
</div>

### `serverScriptPath`
サーバースクリプトのファイルパス

- \<string>
- 省略：可

```json
"serverScriptPath": "scripts/server/serverscript.js"
```

### `guiScriptPath`
GUIスクリプトのファイルパス

- \<string>
- 省略：可

```json
"guiScriptPath": "scripts/gui/guiscript.js"
```

### `guiTexture`
乗り物GUIのカスタムテクスチャのファイルパス

- \<string>
- 省略：可

```json
"guiTexture": "textures/gui/gui.png",
```

### `customIconTexture`
カスタムアイコンのテクスチャのファイルパス

- \<string>
- 省略：可

```json
"customIconTexture": "textures/icon/icon.png"
```

### `renderAABB`
描画有無判定用BOXのサイズ

- \<array>
    - \<float>
    - \<float>
    - \<float>
    - \<float>
    - \<float>
    - \<float>
- 省略：可

```json
"renderAABB": [-0.5, 0.0, -0.5, 0.5, 1.0, 0.5]
```

## 列車

- パーツ動作設定
- 座標変換設定
- 台車設定
### `trainName`
車両のID
ユニークなものでなければならない。車両キットを使用した場合や、既にアドオンがある形式など、競合することがないように工夫して命名することが望ましい。

- \<string>
- 省略：不可

```json
"trainName": "train_name"
```

### `trainType`
サブタイプ

- \<string>
- 省略：不可

<div>

- `"EC"` - 電車
- `"DC"` - 気動車
- `"CC"` - 貨車
- `"TC"` - タンク車
{.grid-list}
</div>

```json
"trainType": "EC"
```

### ~~`trainModel`~~
削除
```json
"trainModel": "train.class",
```
### ~~`bogieModel`~~
削除
```json
"bogieModel": "bogie.class",
```
### ~~`trainTexture`~~
削除
```json
"trainTexture": "textures/train/train.png",
```
### ~~`bogieTexture`~~
削除
```json
"bogieTexture": "textures/train/bogie.png",
```

### `trainModel2`
モデルファイルとテクスチャファイルの設定
- `modelFile` \<string> モデルファイルへの相対パス
- `textures` \<array> 材質設定の配列
    - 材質設定
        - 材質名 \<string> モデルファイルで作成した材質の名前
        - ファイルパス \<string> テクスチャのファイルパス
        - オプション \<string> オプションの設定
- `rendererPath` \<string> 描画スクリプトのファイルパス
- `vertexShaderPath` \<string> 詳細不明
- `fragmentShaderPath` \<string> 詳細不明

#### オプションの設定の内容
文字列に`AlphaBlend`が含まれていれば透過、`Light`が含まれていれば発光が有効化されます
{.grid-list}

```json
"trainModel2": {
    "modelFile": "train.mqo",
    "textures": [
        ["mat1", "textures/train/train1.png", "AlphaBlend"],
        ["mat2", "textures/train/train2.png", "Light"],
        ["mat3", "textures/train/train3.png"]
    ],
    "rendererPath": "scripts/script.js"
},
```


<!-- ### `bogieModel2`
- `modelFile`
- `textures`
- `rendererPath`
- `bogieModel3`
    - 台車設定（前）
    - 台車設定（後）
- `buttonTexture`
- `rollsignTexture`
- `rollsignNames`
- `rollsigns`
    - 方向幕設定
    - `uv`
    - `pos`
    - `doAnimation`
    - `disableLighting`
- `door_left`
    - パーツ動作設定の配列
        - `objects`
        - `pos`
        - `transform`
            - 座標変換設定の配列
- `door_right`
    - パーツ動作設定の配列
        - `objects`
        - `pos`
        - `transform`
            - 座標変換設定の配列
- `pantograph_front`
- `pantograph_back`
- `sound_Stop`
- `sound_S_A`
- `sound_S_M`
- `sound_Medium`
- `sound_M_H`
- `sound_High`
- `sound_H_M`
- `sound_M_S`
- `sound_Acceleration`
- `sound_Deceleration`
- `sound_D_S`
- `sound_Horn`
- `sound_BrakeRelease`
- `sound_BrakeRelease2`
- `sound_Announcement`
- `sound_DoorOpen`
- `sound_DoorClose`
- `soundScriptPath`
- `muteJointSound`
- `seatPos`
- `slotPos`
- `seatPosF`
- `playerPos`
- `bogiePos`
- `pantoPos`
- `jointDelay`
- `maxSpeed`
- ~~`renderLight`~~
- `rolling`
- `rollSpeedCoefficient`
- `rollVariationCoefficient`
- `rollWidthCoefficient`
- `accelerateion`
- `trainDistance`
- `doCulling`
- `isSingleTrain`
- `notDisplayCab`
- `headLights`
    - 配列
        - `type`
        - `color`
        - `pos`
        - `r`
- `tailLights`
    - 配列
        - `type`
        - `color`
        - `pos`
        - `r`
- `interiorLights`
    - 配列
        - `pos`

- `smoke`
- `size`
- `wheelRotationSpeed` -->

# 台車の定義 `"bogieModel2"` / `"bogieModel3"`

ゲーム内の車両には、台車（ボギー）を設定することができます。  
台車の指定方法には、前後で同じ台車を使用する場合と、異なる台車を使用する場合の2種類があります。

## 前後同じ台車を指定する (`"bogieModel2"`)

`"bogieModel2"` を使用すると、前後で同じ台車を設定できます。

```JSON
"bogieModel2": { "modelFile": "...", "textures": [...], "rendererPath": "..." }
```

### キーの説明
| キー名            | 型                | 説明                                                                             |
|------------------|-------------------|---------------------------------------------------------------------------------|
| `"modelFile"`    | `string`          | モデルファイルのパス（`models` ディレクトリからの相対パス）                             |
| `"textures"`     | `array of arrays` | `[材質名, テクスチャのパス]` のペアを格納した配列（`minecraft` ディレクトリからの相対パス） |
| `"rendererPath"` | `string` (省略可)  | 描画スクリプトのパス（指定するとスクリプトで描画を制御可能）                              |
{.dense}

### 使用例
```JSON
"bogieModel2": {
    "modelFile": "bogie.mqo",
    "textures": [
        ["mat1", "textures/bogie.png"]
    ],
    "rendererPath": "scripts/bogie.js"
}
```


## 前後で異なる台車を指定する (`"bogieModel3"`)

`"bogieModel3"` を使用すると、前後で異なる台車を設定できます。

```JSON
"bogieModel3": [ frontBogie, rearBogie ]
```

### キーの説明
| キー名        | 型       | 説明                                       |
|--------------|----------|-------------------------------------------|
| `frontBogie` | `object` | 前方の台車の設定（`"bogieModel2"` の値と同様） |
| `rearBogie`  | `object` | 後方の台車の設定（`"bogieModel2"` の値と同様） |
{.dense}

### 使用例
```JSON
"bogieModel3": [
    {
        "modelFile": "bogieF.mqo",
        "textures": [
          	["mat1", "textures/bogieF.png"]
        ],
        "rendererPath": "scripts/bogieF.js"
    },
    {
        "modelFile": "bogieR.mqo",
        "textures": [
          	["mat1", "textures/bogieR.png"]
        ],
        "rendererPath": "scripts/bogieR.js"
    }
]
```

# 関連サイト
- [RealTrainModのJsonについてのドキュメント *RealTrainModのJsonで利用可能なキーについてのドキュメント。*](https://akikawaken.github.io/RTM/Docs/json.html)
{.links-list}