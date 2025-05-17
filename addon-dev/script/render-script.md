---
title: 描画スクリプト解説
description: 
published: true
date: 2025-05-17T07:23:17.511Z
tags: アドオン制作
editor: markdown
dateCreated: 2025-03-30T15:17:27.248Z
---

> このページは執筆中であり、今後内容が大幅に追加、変更される可能性があります。
{.is-warning}

# 描画スクリプト解説
RealTrainMod（RTM）のアドオンの機能を大幅に拡張することができる描画スクリプトについて解説します。
パーツごとに、様々に描画を制御できます。ただし、OpenGLの知識が必要になるほか、座標の扱いが特殊なので注意する必要があります[^1]。また、RealTrainModやMinecraftのバージョンによって、定義されているメソッドは異なる[^2]ため、それぞれのバージョンに合わせたスクリプトを制作する必要があります。

> 編集時現在で最新となる`KaizPatchX-1.9.1`並びに`RTM2.4.24-43`を使用しているものとして解説を行います。
{.is-success}


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

## renderClassについて
renderClassに設定する文字列によって、モデルの描画方式を設定します[^1]。
以下の中から実装するモデルに合ったものを選んで記述します。
- `jp.ngt.rtm.render.FirearmPartsRenderer`：火器
- `jp.ngt.rtm.render.MachinePartsRenderer`：機能あり設置物
- `jp.ngt.rtm.render.NPCPartsRenderer`：NPC
- `jp.ngt.rtm.render.OrnamentPartsRenderer`：機能なし設置物
- `jp.ngt.rtm.render.RailPartsRenderer`：レール
- `jp.ngt.rtm.render.SignalPartsRenderer`：信号機
- `jp.ngt.rtm.render.VehiclePartsRenderer`：乗り物- `
- `jp.ngt.rtm.render.WirePartsRenderer`：ワイヤー
{.grid-list}

## 描画Passについて
描画は複数回に分けて行われ、パーツによって描画すべきタイミングが異なります。
描画のタイミングは以下のとおりです[^1][^3]。
- `RenderPass.NORMAL.id` or `0`：通常パーツ描画
- `RenderPass.TRANSPARENT.id` or `1`：透過パーツ描画
- `RenderPass.LIGHT.id` or `2`：発光パーツ描画
- `RenderPass.LIGHT_FRONT.id` or `3`：発光パーツ描画 (前照灯、乗り物モデル専用)
- `RenderPass.LIGHT_BACK.id` or `4`：発光パーツ描画 (尾灯、乗り物モデル専用)
- `RenderPass.OUTLINE.id` or `253`：パーツ選択時の輪郭描画
- `RenderPass.GUI.id` or `254`：未使用
- `RenderPass.PICK.id` or `255`：右クリック判定用
{.grid-list}

## スクリプト内に実装するメソッド[^1]

<!-- generated by GPT-4-Turbo -->
<table border="1" class="dense">
    <tr style="background-color: #222;">
        <th>メソッド名</th>
        <th>メソッドの機能</th>
        <th>引数</th>
        <th>引数の説明</th>
    </tr>
    <tr>
        <td><b>init</b>(<span style="color:#ff77ff;">par1, par2</span>)</td>
        <td>パーツの初期化、モデルロード時に1回呼び出し</td>
        <td><b>ModelSetBase</b> <span style="color:#ffff66;">par1</span></td>
        <td>コンフィグ情報等を保持</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><b>ModelObject</b> <span style="color:#ffff66;">par2</span></td>
        <td>モデルとテクスチャの管理</td>
    </tr>
    <tr>
        <td><b>render</b>(<span style="color:#ff77ff;">entity, pass, par3</span>)</td>
        <td>パーツの描画、描画毎に呼び出し</td>
        <td><b>Entity</b> <span style="color:#00ffff;">entity</span> / <b>TileEntity</b> <span style="color:#00ffff;">entity</span></td>
        <td>上記参照</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">int pass</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">float par3</span></td>
        <td></td>
    </tr>
    <tr>
        <td><b>onRightClick</b>(<span style="color:#ff77ff;">entity, parts</span>)</td>
        <td>右クリック時</td>
        <td><b>Entity</b> <span style="color:#00ffff;">entity</span> / <b>TileEntity</b> <span style="color:#00ffff;">entity</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><b>Parts</b> <span style="color:#00ff99;">parts</span></td>
        <td></td>
    </tr>
    <tr>
        <td><b>onRightDrag</b>(<span style="color:#ff77ff;">entity, parts, move</span>)</td>
        <td>右ドラッグ時</td>
        <td><b>Entity</b> <span style="color:#00ffff;">entity</span> / <b>TileEntity</b> <span style="color:#00ffff;">entity</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><b>Parts</b> <span style="color:#00ff99;">parts</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">float move</span></td>
        <td>マウスの移動量</td>
    </tr>
    <tr>
        <td><b>renderRailStatic</b>(<span style="color:#ff77ff;">tileEntity, posX, posY, posZ, par8, pass</span>)</td>
        <td>レールのみ、動かないパーツ描画</td>
        <td><b>TileEntity</b> <span style="color:#00ffff;">tileEntity</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">float posX, posY, posZ</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">int par8, pass</span></td>
        <td></td>
    </tr>
    <tr>
        <td><b>renderRailDynamic</b>(<span style="color:#ff77ff;">tileEntity, posX, posY, posZ, par8, pass</span>)</td>
        <td>レールのみ、動くパーツ描画</td>
        <td><b>TileEntity</b> <span style="color:#00ffff;">tileEntity</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">float posX, posY, posZ</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">int par8, pass</span></td>
        <td></td>
    </tr>
    <tr>
        <td><b>shouldRenderObject</b>(<span style="color:#ff77ff;">tileEntity, objName, len, pos</span>)</td>
        <td>レールのみ、パーツを描画するかどうかを返す</td>
        <td><b>TileEntity</b> <span style="color:#00ffff;">tileEntity</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><b>String</b> <span style="color:#ffcc00;">objName</span></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td><span style="color:#ffff66;">int len, pos</span></td>
        <td></td>
    </tr>
</table>

## 用意されているメソッド一覧[^1]

<!-- generated by Grok 3 -->
<table border="1" class="dense">
    <tr style="background-color: #222;">
        <th>名前</th>
        <th>戻り値</th>
        <th>説明</th>
        <th>備考</th>
    </tr>
    <tr>
        <td><b>getModelName</b>()</td>
        <td><span style="color:#ffcc00;">String</span></td>
        <td>モデル名を取得</td>
        <td></td>
    </tr>
    <tr>
        <td><b>sigmoid</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>シグモイド関数(0.0-1.0)</td>
        <td></td>
    </tr>
    <tr>
        <td><b>rotate</b>(<span style="color:#ff77ff;">float angle, char axis, float x, float y, float z</span>)</td>
        <td><span style="color:#00ff99;">void</span></td>
        <td>指定した座標を中心に指定した回転</td>
        <td></td>
    </tr>
    <tr>
        <td>
          	<b>getTick</b>(<span style="color:#ff77ff;">Entity par1</span>)<br>
          	<b>getTick</b>(<span style="color:#ff77ff;">TileEntity par1</span>)
      	</td>
        <td><span style="color:#ffff66;">int</span></td>
        <td>Tickを取得</td>
        <td></td>
    </tr>
    <tr>
        <td>
        <b>getWheelRotationR</b>(<span style="color:#ff77ff;">Entity entity</span>)<br>
        <b>getWheelRotationL</b>(<span style="color:#ff77ff;">Entity entity<span>)
        </td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>車輪の回転(0-360) JSONの<code>"wheelRotationSpeed"</code>に依存</td>
        <td>乗り物専用</td>
    </tr>
    <tr>
        <td>
            <b>getDoorMovementR</b>(<span style="color:#ff77ff;">Entity entity</span>)<br>
            <b>getDoorMovementL</b>(<span style="color:#ff77ff;">Entity entity</span>)
        </td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>ドア移動(0.0-1.0)</td>
        <td>乗り物専用</td>
    </tr>
    <tr>
        <td>
            <b>getPantographMovementFront</b>(<span style="color:#ff77ff;">Entity entity</span>)<br>
            <b>getPantographMovementBack</b>(<span style="color:#ff77ff;">Entity entity</span>)
        </td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>パンタグラフ上下(0.0-1.0)</td>
        <td>乗り物専用</td>
    </tr>
    <tr>
        <td><b>getMovingCount</b>(<span style="color:#ff77ff;">TileEntity par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>遮断棒やドアの動き(0.0~1.0)</td>
        <td>設置物専用</td>
    </tr>
    <tr>
        <td><b>getLightState</b>(<span style="color:#ff77ff;">TileEntity par1</span>)</td>
        <td><span style="color:#ffff66;">int</span></td>
        <td>-1:OFF, 0 or 1:ON</td>
        <td>遮断機専用</td>
    </tr>
    <tr>
        <td><b>getLodState</b>(<span style="color:#ff77ff;">TileEntity par1</span>)</td>
        <td><span style="color:#ffff66;">int</span></td>
        <td>遮断機の棒の向き(-1 or 1)</td>
        <td>転轍機専用</td>
    </tr>
    <tr>
        <td>
            <b>GL11.glPushMatrix</b>()<br>
            <b>GL11.glPopMatrix</b>()
        </td>
        <td><span style="color:#00ff99;">void</span></td>
        <td>現在の座標を保存&amp;呼び出し</td>
        <td></td>
    </tr>
    <tr>
        <td><b>GL11.glScalef</b>(<span style="color:#ff77ff;">float x, float y, float z</span>)</td>
        <td><span style="color:#00ff99;">void</span></td>
        <td>縮尺を変更</td>
        <td></td>
    </tr>
    <tr>
        <td><b>GL11.glTranslatef</b>(<span style="color:#ff77ff;">float x, float y, float z</span>)</td>
        <td><span style="color:#00ff99;">void</span></td>
        <td>平行移動</td>
        <td></td>
    </tr>
    <tr>
        <td><b>GL11.glRotatef</b>(<span style="color:#ff77ff;">float angle, float x, float y, float z</span>)</td>
        <td><span style="color:#00ff99;">void</span></td>
        <td>原点を軸として回転</td>
        <td></td>
    </tr>
    <tr>
        <td><b>Math.atan2</b>(<span style="color:#ff77ff;">float y, float x</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>逆正接(戻り値はラジアン)</td>
        <td></td>
    </tr>
    <tr>
        <td><b>Math.acos</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>逆余弦(戻り値はラジアン)</td>
        <td></td>
    </tr>
    <tr>
        <td><b>Math.sqrt</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>平方根</td>
        <td></td>
    </tr>
    <tr>
        <td><b>NGTMath.toRadians</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>ラジアンへ変換</td>
        <td></td>
    </tr>
    <tr>
        <td><b>NGTMath.toDegrees</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>度へ変換</td>
        <td></td>
    </tr>
    <tr>
        <td><b>NGTMath.getSin</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>正弦(戻り値はラジアン)</td>
        <td></td>
    </tr>
    <tr>
        <td><b>NGTMath.getCos</b>(<span style="color:#ff77ff;">float par1</span>)</td>
        <td><span style="color:#ffff66;">float</span></td>
        <td>余弦(戻り値はラジアン)</td>
        <td></td>
    </tr>
</table>

ほかにも多数の使用可能なメソッドがあります。
詳細はmodをデコンパイルして確認してください。


[^1]: RealTrainModモデルパック作成マニュアル-RTM2.4.8対応版-
[^2]: https://x.com/hi03_s/status/970154999362670597
[^3]: https://x.com/hi03_s/status/1318527939890221057