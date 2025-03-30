---
title: 描画スクリプト解説
description: 
published: false
date: 2025-03-30T16:44:40.432Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-03-30T15:17:27.248Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

# 描画スクリプト解説
RealTrainMod（RTM）のアドオンの機能を大幅に拡張することができる描画スクリプトについて解説します。
パーツごとに、様々に描画を制御できます。ただし、OpenGLの知識が必要になるほか、座標の扱いが特殊なので注意する必要があります。また、RealTrainModやMinecraftのバージョンによって、定義されているメソッドは異なるため、それぞれのバージョンに合わせたスクリプトを制作する必要があります。

以下に、KaizPatchX環境での描画スクリプトの一例を示します。このスクリプトでは、カスタムボタンで種別とハイビームへの切り替え、急行灯の制御を実装しています。

```js
var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer"; // renderClassを設定する。
importPackage(Packages.org.lwjgl.opengl); // 使用するメソッドの属するクラスをインポートする。
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

function init(par1, par2) { // パーツの設定を初期化する関数 RealTrainMod側で自動的に実行されるため、呼び出す必要はない。
    SETTINGS = Object.freeze({ // 設定 このように一か所にまとめ、マジックナンバーは極力排除するとよい。
        DOOR_MOVEMENT: 0.64,
        NO_TYPE_INDEX: 3
    });

    // 車体
    body = renderer.registerParts(new Parts('obj1', 'obj2')); // パーツを登録する 変数宣言のvarは使用せず、グローバルスコープで宣言する。

    // ライト
    headLight = renderer.registerParts(new Parts("lightFront"));
    headLightHigh = renderer.registerParts(new Parts("lightHigh"));
    expressLight = renderer.registerParts(new Parts("lightExp"));
    tailLight = renderer.registerParts(new Parts("lightBack"));

    // 半透明
    alpha = renderer.registerParts(new Parts("alpha")); // 実装する処理によっては、半透明の面のみを別のパーツとして登録した方が良い場合もある。

    // ドア
    doors = { // グローバルスコープで宣言できればよいので、オブジェクトとして登録してもよい。
        lf: renderer.registerParts(new Parts("door_LF")),
        rf: renderer.registerParts(new Parts("door_RF")),
        lb: renderer.registerParts(new Parts("door_LB")),
        rb: renderer.registerParts(new Parts("door_RB"))
    };
  
    // 種別
    type = [];
    for (var i = 0; i < 8; i++) { // 当然配列として登録してもよい。
        type[i] = renderer.registerParts(new Parts(i.toString()));
    }
}

function render(entity, pass, par3) { // 実際に描画を行う関数 これも呼び出す必要はない。

    GL11.glPushMatrix(); // 現在の座標の状態を保存する

    // 通常の描画
    if (pass === 0) { // passの値によって、描画するパーツを変更できる。
        body.render(renderer); // 指定したパーツを現在の座標の状態で描画する
        renderDoor(entity, SETTINGS, doors);
    }

    // 半透明部分の描画
    if (pass === 1) {
        alpha.render(renderer);
        renderDoor(entity, SETTINGS, doors);
    }

    // 発光部部の描画
    if (pass > 1) {
        renderTrainType(entity, SETTINGS);
        renderHeadLight(entity);
    }

    GL11.glPopMatrix(); // 保存した座標の状態を呼び出す
}

// 描画するそれぞれの機能に応じて、別々の関数として処理を実装するとよい。
/**
 * 種別を描画する
 * @param {Entity} entity 車両entity
 * @param {Object} SETTINGS 設定オブジェクト
 */
function renderTrainType(entity, SETTINGS) { // SETTINGSは設定オブジェクト、グローバルスコープから取得してもよいが、再利用性を考え今回は引数として渡す
    var dataMap = entity ? entity.getResourceState().getDataMap() : undefined; // カスタムボタンの情報はデータマップに保存されている
    var trainType = dataMap ? dataMap.getInt('Button0') : 0; // dataMapから0番目のボタンの状態を取得する <int>
    var destination = entity ? entity.getTrainStateData(8) : 0; // 車両entityから方向幕の状態を取得する <int>
    if (destination <= SETTINGS.NO_TYPE_INDEX) return; // 描画しない場合には早期リターンを行い、ネストを浅くし可読性と保守性を向上させる

    type[trainType].render(renderer);
}

/**
 * 標識灯を描画する
 * @param {Entity} entity 車両entity
 */
function renderHeadLight(entity) {
    var dataMap = entity ? entity.getResourceState().getDataMap() : undefined; // entityがnullになる場合があるため、それを考慮した実装を行う
    var hiLow = dataMap ? dataMap.getInt('Button1') : 0; // 0:Low 1:High
    var expressLightState = dataMap ? dataMap.getInt('Button2') : 0; // 0:Off 1:On
    var direction = entity ? entity.getTrainStateData(0) : 0; // 0:Forward 1:Backward

    if (direction === 0) {
        headLight.render(renderer);
        if (hiLow === 1) headLightHigh.render(renderer);
        if (expressLightState === 1) expressLight.render(renderer);
    } else {
        tailLight.render(renderer);
    }
}

/**
 * ドアを描画する
 * @param {Entity} entity 車両entity
 * @param {Object} SETTINGS 設定オブジェクト
 * @param {Object} doors ドアのパーツのオブジェクト
 */
function renderDoor(entity, SETTINGS, doors) {
    var doorMoveL = entity ? renderer.sigmoid(entity.doorMoveL / 60) * SETTINGS.DOOR_MOVEMENT : 0; 
    var doorMoveR = entity ? renderer.sigmoid(entity.doorMoveR / 60) * SETTINGS.DOOR_MOVEMENT : 0;

    translateZ(doors.lf, doorMoveL);
    translateZ(doors.rf, doorMoveR);
    translateZ(doors.lb, -doorMoveL);
    translateZ(doors.rb, -doorMoveR);
}

// 繰り返し使用する処理は、関数として定義することで保守性を高める
/**
 * Z軸方向にパーツを平行移動させる
 * @param {Parts} part 平行移動させるパーツ
 * @param {number} moveZ Z軸方向の移動量
 */
function translateZ(part, moveZ) {
    GL11.glPushMatrix(); // パーツの座標を変換する場合には、現在の座標の状態を保存し、ほかのパーツに影響しないようにする。
    GL11.glTranslatef(0.0, 0.0, moveZ);
    part.render(renderer);
    GL11.glPopMatrix();
}
```