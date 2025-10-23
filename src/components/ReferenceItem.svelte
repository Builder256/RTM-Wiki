<script lang="ts">
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';

  interface PropertyReference {
    name: string;
    type: string;
    omit: Optional;
    desc: string;
    deprecated?: string;
    children: Snippet;
  }

  type Optional =
    | 'true'
    | 'false'
    | 'probably-possible'
    | 'probably-impossible'
    | 'unknown';

  const { name, type, omit, desc, deprecated, children }: PropertyReference =
    $props();

  let isExpanded = $state(true);

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
  <button class="prop__header" type="button" onclick={expand}>
    <div class="name__wrapper">
      <h2 class="name">
        {name}
      </h2>
    </div>
    <div class="prop__expand">詳細</div>
  </button>
  {#if isExpanded}
    <div transition:slide={{ duration: 200 }} class="prop__panel">
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
      <div class="panel__section">
        <span class="panel__label">詳細説明</span>
        <div class="panel__content">
          <div class="explain">
            {@render children?.()}
          </div>
        </div>
      </div>
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
    /* all: unset; */
    font-weight: normal;
    margin: 0;
  }
  .prop__wrapper {
    border-left: 4px solid oklch(0.5 0 0);
    --badge-padding: 0.375rem 0.5rem;
  }
  .prop__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* gap: 0.5rem; */
    background-color: oklch(0.25 0 0);
    padding: 0.75rem;

    line-height: 1;
    font-size: 0.875rem;
  }
  .prop__header:hover {
    background-color: oklch(0.35 0 0);
  }
  .prop__expand {
    display: flex;
    align-items: center;
    background-color: oklch(0.4 0 0);
    color: oklch(0.8 0 0);
    column-gap: 0.25rem;
    padding: 0.5rem 0.5rem;
    /* padding-inline-end: 1.5rem; */
    border-radius: 4px;
  }
  :hover .prop__expand {
    background-color: oklch(0.5 0 0);
    color: oklch(0.9 0 0);
  }
  .prop__expand::after {
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
  [data-is-expanded='true'] .prop__expand::after {
    transform: rotate(-90deg);
  }
  .name {
    color: #9cdcfe;
    font-family: 'Consolas', 'Monaco', monospace;
    font-weight: 600;
  }
  /*
  .meta-data {
    display: none;
    gap: 0.5rem;
  }
  .type__wrapper {
  }
  .omit__wrapper {
    }
  .omit {
    color: oklch(0.6 0 0);
    background-color: oklch(0.2 0 0);
    padding: var(--badge-padding);
    border-radius: 4px;
    }
    .desc {
      display: none;
      }
       */
  .prop__panel {
    padding: 0.75rem;
    background: oklch(0.2 0 0);
    border-block-start: oklch(0.4 0 0) 1px solid;
  }
  .panel__section {
    margin-block-end: 0.75rem;
  }
  .panel__label {
    color: oklch(0.6 0 0);
    font-size: 0.875rem;
    margin-block-end: 0.75rem;
    display: block;
  }
  .desc__container {
    font-size: 0;
    line-height: 1.25;
  }
  .desc__container > * {
    font-size: 1rem;
  }
  .label {
    display: inline;
    /* 改行時のインデントのために、右端にインデント分の余白が収まるようにする */
    margin-inline-end: -1em;

    font-weight: 600;
  }
  .def__wrapper {
    /* defが一塊で改行されるようにする */
    display: inline-block;
    /* 改行時のインデントのために、左端にインデント分の余白を設定 */
    padding-inline-start: 1em;
    margin-block-end: 0.75rem;
  }
  .type-java {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1;
    color: #4ec9b0;
    background-color: oklch(0.1 0 0);
    padding: var(--badge-padding);
    border-radius: 4px;
  }
  .omit {
  }
  .explain {
    font-size: 1rem;
  }
  /* .detail__type-value {
  } */
</style>
