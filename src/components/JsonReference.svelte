<script lang="ts">
  import { slide } from 'svelte/transition';

  type Optional =
    | boolean
    | 'probably-possible'
    | 'probably-impossible'
    | 'unknown';

  interface PropertyReference {
    name: string;
    type: string;
    optional: Optional;
    description: string;
    deprecated?: string;
    details?: string;
  }

  const { reference } = $props();
  let expanded: string[] = $state([]);

  function onclick(name: string) {
    if (expanded.includes(name)) {
      expanded = expanded.filter((i) => i !== name);
    } else {
      expanded.push(name);
    }
  }

  function getOmitText(optional: Optional): string {
    switch (optional) {
      case 'probably-possible':
        return '省略おそらく可';
      case 'probably-impossible':
        return '省略おそらく不可';
      case true:
        return '省略可';
      case false:
        return '省略不可';
      default:
        return '省略可否不明';
    }
  }
</script>

<div class="container">
  <ul class="props__list">
    {#each reference as prop}
      {@const isExpanded = expanded.includes(prop.name)}
      {@const hasDetails = !!prop.details || !!prop.deprecated}
      {#snippet header(prop: any)}
        <div class="prop__name-wrapper">
          <span class="prop__name--name">{prop.name}</span>
          <div class="copy-button"></div>
        </div>
        <div class="prop__name-wrapper">
          <span class="prop__name--type">&lt;{prop.type}&gt;</span>
        </div>
        <div class="prop__name-wrapper">
          <span class="prop__name--omit">{getOmitText(prop.optional)}</span>
        </div>
        <div class="prop__name-wrapper">
          <span class="prop__name--desc">{prop.description}</span>
          {#if !!prop.deprecated}
            <span class="prop__name--deprecated">非推奨</span>
          {/if}
        </div>
        {#if hasDetails}
          <div class="prop__name-wrapper">
            <span class="prop__name--detail">詳細</span>
          </div>
          <div class="prop__name-wrapper">
            <span class="prop__name--expand-icon"></span>
          </div>
        {/if}
      {/snippet}
      <li class="prop" data-expanded={isExpanded} data-has-note={hasDetails}>
        {#if hasDetails}
          <button onclick={() => onclick(prop.name)} class="prop__header">
            {@render header(prop)}
          </button>
        {:else}
          <div class="prop__header">
            {@render header(prop)}
          </div>
        {/if}
        {#if hasDetails && isExpanded}
          <div transition:slide={{ duration: 200 }} class="prop__detail">
            {#if prop.deprecated}
              <div class="detail__section">
                <span class="detail__label">非推奨</span>
                <div class="detail__content">
                  {prop.deprecated}
                </div>
              </div>
            {/if}
            {#if prop.details}
              <div class="detail__section">
                <span class="detail__label">詳細</span>
                <div class="detail__content">
                  {@html prop.details}
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  * {
    all: unset;
    box-sizing: border-box;
  }
  *::before {
    all: unset;
  }
  div {
    display: block;
  }
  /* [data-theme='light'] .container {
  }
  [data-theme='dark'] .container {
  } */

  .props__list {
    display: grid;
    grid-template-columns: auto auto auto auto 1fr auto auto;
    gap: 0.125rem 0.5rem;
  }
  .prop {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
    background-color: oklch(0.25 0 0);
    border-left: 4px solid oklch(0.5 0 0);
  }
  [data-expanded='true'].prop {
    border-color: oklch(0.6 0 0);
  }
  .prop__header {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: subgrid;
    padding: 0.75rem 1rem;
    user-select: none;
  }
  .prop__header:hover {
    transition: background-color 0.2s;
    background-color: oklch(0.35 0 0);
  }
  .prop__name-wrapper {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }
  .prop__name--name {
    color: #9cdcfe;
    font-weight: 600;
  }
  .prop__name--type {
    color: #4ec9b0;
    background-color: oklch(0.2 0 0);
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
  }
  .prop__name--omit {
    color: oklch(0.6 0 0);
    background-color: oklch(0.2 0 0);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
  }
  .prop__name--deprecated {
    background: oklch(0.2 0 0);
    margin-inline-start: 1rem;
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
  }
  .prop__name-wrapper:has(.prop__name--detail) {
    grid-column-start: 6;
  }
  .prop__name--detail {
    padding: 0.125rem 0.5rem;
    background-color: oklch(47.939% 0.09293 227.393);
  }
  .prop__name--expand-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 19V5l11 7z'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    transition: transform 200ms;
  }
  [data-expanded='true'] .prop__name--expand-icon {
    transform: rotate(90deg);
  }

  .prop__detail {
    grid-column: 1 / -1;
    background-color: oklch(0.2 0 0);
    padding: 0.75rem 1rem;
    border-block-start: oklch(0.4 0 0) 1px solid;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  /* .detail__section {
  } */
  .detail__label {
    font-size: 0.875rem;
    color: oklch(0.6 0 0);
  }
</style>
