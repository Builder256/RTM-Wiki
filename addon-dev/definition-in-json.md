---
title: JSONファイルの設定項目
description: 
published: true
date: 2025-03-14T11:42:05.424Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-01-08T02:27:50.809Z
---

> ⚠ このページは執筆中であり、今後内容が大幅に追加・変更される可能性があります。
{.is-warning}

このページでは、主に車両モデルのJSONでの設定項目について解説します。

> インデントについて、様々な派閥があるかと思いますが、ここでは恐らくRealTrainMod界隈で最も主流である空白4つで1つのインデントとする作法を採用します
{.is-info}

<blockquote class="twitter-tweet" data-lang="ja" data-dnt="true" data-theme="dark"><p lang="ja" dir="ltr">インデントのスペース <a href="https://t.co/SuTM2sEosJ">pic.twitter.com/SuTM2sEosJ</a></p>&mdash; arkw (@arkw0) <a href="https://twitter.com/arkw0/status/1881650240660668586?ref_src=twsrc%5Etfw">2025年1月21日</a></blockquote>

せ、戦争じゃ......

# 目次
## 共通
- [`useCustomColor`](#usecustomcolor)
- `tags`
- `defaultData`
- `scale`
- `offset`
- `smoothing`
- `doCulling`
- `accuracy`
- `serverScriptPath`
- `guiScriptPath`
- `guiTexture`
- `customIconTexture`
- `renderAABB`

## 列車
- パーツ動作設定
- 座標変換設定
- 台車設定
- `trainName`
- `trainType`
- ~~`trainModel`~~
- ~~`bogieModel`~~
- ~~`trainTexture`~~
- ~~`bogieTexture`~~
- `trainModel2`
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
カスタムカラーを使用するか
- \<boolean>
- 省略：可
- `default`：`false`

<!-- <details>
<summary>対応表</summary> -->

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | NO  | YES        |
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

### `defaultData`
DataMapのデフォルト値

- \<string>
- 省略：可
- `default`：`null`

```json
"defaultData": "scale=(Double)1.0,type=(String)Normal"
```

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | YES | YES        |

### `scale`
縮尺（NGTOモデル使用時のみ）
- \<float>
- 省略：不明

| RTM2 | RTM       | KaizPatchX |
| ---- | --------- | ---------- |
| YES  | Maybe YES | YES        |

### `offset`
モデルの描画位置（Entityの中心からの相対座標）

- \<Array>
    - \<float>
    - \<float>
    - \<float>
- 省略：可

```json
"offset": [0.0, 0.0, 0.0]
```

| RTM2 | RTM | KaizPatchX |
| ---- | --- | ---------- |
| YES  | YES | YES        |




### `smoothing`
### `doCulling`
### `accuracy`
### `serverScriptPath`
### `guiScriptPath`
### `guiTexture`
### `customIconTexture`
### `renderAABB`

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