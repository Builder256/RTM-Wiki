<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Toc, TocEntry } from '@stefanprobst/rehype-extract-toc';
  import { onMount } from 'svelte';

  interface Props {
    toc: Toc;
  }

  const { toc = [] }: Props = $props();
  const ID_PREFIX = 'user-content-';
  const getFullID = (id: string | undefined) => `${ID_PREFIX}${id}`;

  let activeId = $state<string | null>(null);

  const getFlatIds = (entries: Toc): string[] => {
    return entries.flatMap(entry => [getFullID(entry.id), ...(entry.children ? getFlatIds(entry.children) : [])]);
  };

  const headingIds = $derived(getFlatIds(toc));

  /**
   * 現在の目次、またはその子孫の目次にアクティブなIDが含まれているかどうか
   * @param entry
   * @param activeId
   */
  const isActiveOrParentOfActive = (entry: TocEntry, activeId: string | null): boolean => {
    if (activeId === null) return false;
    if (getFullID(entry.id) === activeId) return true;
    if (entry.children) {
      return entry.children.some(child => isActiveOrParentOfActive(child, activeId));
    }
    return false;
  };

  (() => {
    // 見出しがなければonMountを実装しない 多分早くなる？
    if (headingIds.length === 0) return;

    onMount(() => {
      const intersectingHeadingIndexes = new Set<number>();

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const index = headingIds.indexOf(entry.target.id);
            if (entry.isIntersecting) {
              intersectingHeadingIndexes.add(index);
            } else {
              intersectingHeadingIndexes.delete(index);
            }

            /** 画面中の見出し要素の中で、最も上にあるもの */
            const firstHeadingIndex = Math.min(...intersectingHeadingIndexes);
            activeId = headingIds[firstHeadingIndex];
          });
        },
        {
          rootMargin: `-80px 0px 0px 0px`, // ビューポート上部のヘッダー分の領域をカット
          // ビューポート内に一個も見出しが表示されないときに、何もハイライトされなくなる。 どう実装すべき？
          threshold: 0.1,
        },
      );

      headingIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
      return () => observer.disconnect();
    });
  })();
</script>

{#snippet tocList(items: Toc)}
  <ul>
    {#each items as item}
      {@const fullId = getFullID(item.id)}
      {@const isActive = activeId === fullId}
      {@const isHierarcyActive = isActiveOrParentOfActive(item, activeId)}
      <!-- JSでクラスを制御すべき？それともisActiveなaにdata-active="true"を付けて、liにhas-[data-active=true]でスタイルを付けるべき？ -->
      <li class={['border-s ps-4 transition-colors', isHierarcyActive ? 'border-accent-foreground' : 'border-border']}>
        <a
          href={`#${fullId}`}
          class={[
            '-ms-2 block w-full rounded-sm px-2 py-1.5 leading-none transition-colors hover:bg-accent hover:text-foreground',
            isActive && 'text-accent-foreground',
            item.depth === 2 && 'py-1 text-sm font-bold',
            item.depth >= 3 && 'py-0.5 text-xs',
            item.depth >= 3 && !isActive && 'text-muted-foreground',
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
