<script lang="ts">
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';

  interface PropertyReference {
    name: string;
    type: string;
    omit: Optional;
    desc: string;
    deprecated?: string;
    children?: Snippet;
  }

  type Optional =
    | 'true'
    | 'false'
    | 'probably-possible'
    | 'probably-impossible'
    | 'unknown';

  const { name, type, omit, desc, deprecated, children }: PropertyReference =
    $props();

  // 展開状態
  let isExpanded = $state(false); // 本番ではfalseにすること
  function expand() {
    isExpanded = !isExpanded;
  }

  const JsonType = {
    object: 0,
    array: 1,
    number: 2,
    string: 3,
    boolean: 4,
    null: 5,
  } as const;

  const typeMap: { [key: string]: number } = {
    String: JsonType.string,
    short: JsonType.number,
  };

  function getOmitText(optional: Optional): string {
    switch (optional) {
      case 'probably-possible':
        return 'おそらく可';
      case 'probably-impossible':
        return 'おそらく不可';
      case 'true':
        return '可';
      case 'false':
        return '不可';
      default:
        return '可否不明';
    }
  }
  function getJsonTypeText(key: number) {
    switch (key) {
      case JsonType.number:
        return '数値';
      default:
        return undefined;
    }
  }
  function getJsonType(type: string): string {
    const isGeneric = false;
    // []が現れる回数
    const arrayDims = type.split('[]').length - 1;
    // 配列を含まない根本の型
    const simpleType = type.replaceAll('[]', '');

    const temp = getJsonTypeText(typeMap[simpleType]) ?? simpleType;
    const text = new Array(arrayDims).fill('の配列');
    text.unshift(temp);
    return text.join('');
  }
</script>

<article class="prop__wrapper" data-is-expanded={isExpanded}>
  <!-- 常時表示ヘッダー部分 -->
  <button class="prop__header" type="button" onclick={expand}>
    <div class="header__name-wrapper">
      <h2 class="header__name">
        {name}
      </h2>
    </div>
    <div class="header__type-wrapper">
      <span class="header__type">&lt;{type}&gt;</span>
    </div>
    <div class="header__omit-wrapper">
      <span class="header__omit">{getOmitText(omit)}</span>
    </div>
    <div class="header__desc-wrapper">
      <span class="header__desc"
        >{desc}
        {#if deprecated}
          <span class="header__deprecated">非推奨</span>
        {/if}
      </span>
    </div>
    <div class="header__button">詳細</div>
  </button>
  <!-- 折り畳み部分 -->
  {#if isExpanded}
    <div transition:slide={{ duration: 200 }} class="prop__panel">
      {#if deprecated}
        <div class="panel__section">
          <span class="panel__label">非推奨</span>
          <div class="panel__content">
            <div class="explain">
              <p>この項目の使用は非推奨とされています。</p>
              <p><span class="deprecated__label">理由：</span>{deprecated}</p>
            </div>
          </div>
        </div>
      {/if}
      <div class="panel__section">
        <span class="panel__label">基本情報</span>
        <div class="panel__content">
          <dl class="desc__container">
            <dt class="label">データ型：</dt>
            <dd class="def__wrapper">
              <span class="type-json">{getJsonType(type)}</span>
              <span class="type-java">&lt;{type}&gt;</span>
            </dd>
            <br />
            <dt class="label">省略可否：</dt>
            <dd class="def__wrapper">
              <span class="omit">{getOmitText(omit)}</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="panel__section">
        <span class="panel__label">説明</span>
        <div class="panel__content">
          <div class="explain">
            {desc}
          </div>
        </div>
      </div>
      {#if children}
        <div class="panel__section">
          <span class="panel__label">詳細説明</span>
          <div class="panel__content">
            <div class="explain">
              {@render children?.()}
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/if}
</article>

<style>
  div,
  button {
    margin: 0;
    padding: 0;
    border: 0;
  }
  h2,
  h2::before {
    all: unset;
  }
  dt,
  dd {
    font-weight: normal;
    margin: 0;
  }
  /* 全体 */
  .prop__wrapper {
    grid-column: 1 / -1;
    border-left: 4px solid var(--sl-color-accent);
    --badge-padding: 0.375rem 0.5rem;
    transition: border-left-color 0.2s;
  }
  .prop__wrapper[data-is-expanded='true'] {
    border-left-color: var(--sl-color-text-accent);
  }
  /* ヘッダー button */
  .prop__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: oklch(0.25 0 0);
    padding: 0.75rem;

    line-height: 1;
    font-size: 0.875rem;
  }
  .prop__header:hover {
    background-color: oklch(0.35 0 0);
  }
  .header__type-wrapper {
    display: none;
  }
  .header__omit-wrapper {
    display: none;
  }
  .header__desc-wrapper {
    display: none;
  }
  /* 詳細ボタン */
  .header__button {
    display: flex;
    align-items: center;
    background-color: oklch(0.4 0 0);
    color: oklch(0.8 0 0);
    column-gap: 0.25rem;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
  }
  .prop__header:hover .header__button {
    background-color: oklch(0.5 0 0);
    color: oklch(0.9 0 0);
  }
  /* ボタンアイコン */
  .header__button::after {
    /* アイコン */
    content: '';
    width: 1rem;
    height: 1rem;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 19L5 12l11-7z'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    transition: transform 200ms;
  }
  [data-is-expanded='true'] .header__button::after {
    transform: rotate(-90deg);
  }
  /* キー名 h2 */
  .header__name {
    color: #9cdcfe;
    font-family: 'Consolas', 'Monaco', monospace;
    font-weight: 600;
  }
  /* 展開パネル */
  .prop__panel {
    padding: 0.75rem;
    background: oklch(0.2 0 0);
    border-block-start: oklch(0.4 0 0) 1px solid;
  }
  /* パネル章区分 */
  .panel__section {
    margin-block-end: 0.75rem;
  }
  .panel__section:last-child {
    margin-block-end: 0;
  }
  /* span */
  .panel__label {
    color: oklch(0.6 0 0);
    font-size: 0.875rem;
    margin-block-end: 0.75rem;
    display: block;
  }
  .deprecated__label {
    font-weight: 600;
  }
  /* dl */
  .desc__container {
    font-size: 0;
    line-height: 1.25;
  }
  /* dt, dd */
  .desc__container > * {
    font-size: 1rem;
  }
  /* dt */
  .label {
    display: inline;
    /* 改行時のインデントのために、右端にインデント分の余白が収まるようにする */
    margin-inline-end: -1em;

    font-weight: 600;
  }
  /* dd */
  .def__wrapper {
    /* defが一塊で改行されるようにする */
    display: inline-block;
    /* 改行時のインデントのために、左端にインデント分の余白を設定 */
    padding-inline-start: 1em;
    margin-block-end: 0.75rem;
  }
  /* span */
  .type-java {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1;
    color: #4ec9b0;
    background-color: oklch(0.1 0 0);
    padding: var(--badge-padding);
    border-radius: 4px;
  }
  .explain {
    font-size: 1rem;
    overflow-wrap: anywhere;
  }
  @container reference-container (min-width: 32rem) {
    .prop__wrapper {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
    }
    .prop__header {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
    }
    .header__name-wrapper {
      display: flex;
      justify-content: start;
    }
    /* 説明 */
    .header__desc-wrapper {
      display: flex;
      justify-content: start;
    }
    .header__desc {
      color: oklch(0.8 0 0);
      text-align: start;
      overflow-wrap: anywhere;
    }
    .header__button {
      grid-column: -2 / -1;
    }
    /* 非推奨バッジ */
    .header__deprecated {
      display: inline-block;
      background-color: oklch(0.2 0 0);
      padding: var(--badge-padding);
      border-radius: 4px;
      margin-inline-start: 0.5rem;
    }
    .prop__panel {
      grid-column: 1 / -1;
    }
  }
  @container reference-container (min-width: 48rem) {
    /* データ型 */
    .header__type-wrapper {
      display: flex;
      justify-content: start;
    }
    .header__type {
      display: inline-block;
      color: #4ec9b0;
      background-color: oklch(0.2 0 0);
      padding: var(--badge-padding);
      border-radius: 4px;
      white-space: nowrap;
    }
    .prop__header:hover .header__type {
      background-color: oklch(0.3 0 0);
    }
    /* 省略可否 */
    .header__omit-wrapper {
      display: flex;
      justify-content: start;
    }
    .header__omit {
      color: oklch(0.6 0 0);
      background-color: oklch(0.2 0 0);
      padding: var(--badge-padding);
      border-radius: 4px;
      /* overflow-wrap: normal; */
      white-space: nowrap;
    }
    .prop__header:hover .header__omit {
      background-color: oklch(0.3 0 0);
    }
  }
</style>
