<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Toc, TocEntry } from '@stefanprobst/rehype-extract-toc';

  interface Props {
    toc?: Toc;
  }

  const { toc = [] }: Props = $props();
</script>

{#snippet tocList(items: TocEntry[])}
  <ul>
    {#each items as item}
      <li class="border-s border-border ps-4 transition-colors hover:border-accent-foreground">
        <!-- rehype-slugで生成されるidは`user-content-`から始まる -->
        <a
          href={`#user-content-${item.id}`}
          class={[
            'block w-full transition-colors hover:text-accent-foreground',
            {
              'py-1 text-sm font-bold': item.depth === 2,
              'py-0.5 text-xs text-muted-foreground': item.depth >= 3,
            },
          ]}
        >
          {item.value}
        </a>
        {#if item.children && item.children.length > 0}
          {@render tocList(item.children)}
        {/if}
      </li>
    {/each}
  </ul>
{/snippet}

{#if toc && toc.length > 0}
  <aside data-slot="table-of-contents">
    <p class="pb-2 text-sm font-bold text-muted-foreground">{m.table_of_contents()}</p>
    {@render tocList(toc)}
  </aside>
{/if}
