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

  /** 現在閲覧中の章のID ビューポート内に見出し要素がない場合にnullになる */
  let currentActiveId = $state<string | null>(null);
  /** 最後に閲覧中だった章のID currentActiveIDがnullの場合に、こちらを参照する */
  let previousActiveId = $state<string | null>(null);

  // TODO: currentActiveIdがnullの場合のフォールバックの実装の改善
  // 常にpreviousActivIdをフォールバックとする実装は、上から下に読んでいる場合には感覚的に正しい動作をするが、
  // 下から上にさかのぼった場合には、読んでいる章の次の章がハイライトされる。
  // IntersectionObserverEntry#isIntersectingでそのIntersectionObserverEntryが入ったのか出たかのが取得できるので、先頭要素が入るor末尾の要素が出た場合に上方向へのスクロール、
  // またはその逆の場合に下方向のスクロールと判断して、適切なフォールバックの実装ができるはず。

  const getFlatIds = (entries: Toc): string[] => {
    return entries.flatMap(entry => [getFullID(entry.id), ...(entry.children ? getFlatIds(entry.children) : [])]);
  };

  const headingIds = $derived(getFlatIds(toc));

  /**
   * 現在の目次、またはその子孫の目次にアクティブなIDが含まれているかどうか
   * @param entry
   * @param currentActiveId
   */
  const isActiveOrParentOfActive = (
    entry: TocEntry,
    currentActiveId: string | null,
    previousActiveId: string | null,
  ): boolean => {
    const activeId = currentActiveId ?? previousActiveId;
    if (activeId === null) return false;
    if (getFullID(entry.id) === activeId) return true;
    if (entry.children) {
      return entry.children.some(child => isActiveOrParentOfActive(child, currentActiveId, previousActiveId));
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
            currentActiveId = headingIds[firstHeadingIndex] ?? null; // string | nullにundefinedが入るんだから型エラーになれよ！！！！！！！！！！！
            if (currentActiveId !== null) previousActiveId = currentActiveId;
          });
        },
        {
          rootMargin: `-80px 0px 0px 0px`, // ビューポート上部のヘッダー分の領域をカット
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
      {@const isActive = currentActiveId !== null ? currentActiveId === fullId : previousActiveId === fullId}
      {@const isHierarcyActive = isActiveOrParentOfActive(item, currentActiveId, previousActiveId)}
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
