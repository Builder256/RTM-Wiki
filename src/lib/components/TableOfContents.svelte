<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Toc, TocEntry } from '@stefanprobst/rehype-extract-toc';
  import { onMount } from 'svelte';

  interface Props {
    toc?: Toc;
  }

  interface FlatToc {
    depth: number;
    value: string;
    id: string;
  }

  const 名前考えるの面倒 = (child: TocEntry, 名前分からん: FlatToc[]) => {
    const entry = {
      depth: child.depth,
      value: child.value,
      id: `${ID_PREFIX}${child.id}`,
    };
    名前分からん.push(entry);
    const children = child.children;
    if (children) children.forEach(c => 名前考えるの面倒(c, 名前分からん));
  };

  const flattenToc = (toc: Toc) => {
    const 名前分からん: FlatToc[] = [];
    for (const t of toc) {
      名前考えるの面倒(t, 名前分からん);
    }
    return 名前分からん;
  };

  const getTocLinkElement = (href: string) => {
    // 本当は各a要素からbind:thisで取得するのがスマートな気がするが、ネストされたeachブロック内から取得するのは面倒そうなのでquerySelectorを使う
    // Svelteの天才教えて
    const [...anchors] = document.querySelectorAll<HTMLAnchorElement>('[data-slot="table-of-contents"] a[href]');
    return anchors.find(anchor => anchor.getAttribute('href') === `#${href}`) ?? null;
  };

  const { toc = [] }: Props = $props();
  const ID_PREFIX = 'user-content-';

  let flatToc: FlatToc[] = $derived(flattenToc(toc));
  let headingIds = $derived(flatToc.map(entry => entry.id));

  onMount(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>('h2, h3, h4, h5, h6');
    const intersectingHeadingIds = new Set<string>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const currentId = entry.target.id;
          if (entry.isIntersecting) {
            intersectingHeadingIds.add(currentId);
          } else {
            intersectingHeadingIds.delete(currentId);
          }

          /** 画面中の見出し要素の中で、最も上にあるもの */
          const firstHeadingId = headingIds.find(id => intersectingHeadingIds.has(id));
          if (!firstHeadingId) return;

          const correspondingTocLink = getTocLinkElement(firstHeadingId);
          if (!correspondingTocLink) return;

          const allTocLinks = document.querySelectorAll<HTMLAnchorElement>('[data-slot="table-of-contents"] a[href]');
          allTocLinks.forEach(link => (link.dataset.activate = 'false'));
          correspondingTocLink.dataset.activate = 'true';
        });
      },
      {
        rootMargin: `-80px 0px 0px 0px`,
        threshold: 1,
      },
    );
    headings.forEach(heading => observer.observe(heading));
    return () => observer.disconnect();
  });
</script>

{#snippet tocList(items: TocEntry[])}
  <ul>
    {#each items as item}
      <li class="border-s border-border ps-4 transition-colors has-[a[data-activate=true]]:border-accent-foreground">
        <a
          href={`#${ID_PREFIX}${item.id}`}
          class={[
            '-ms-2 block w-full rounded-sm px-2 py-1.5 leading-none transition-colors hover:bg-accent hover:text-foreground data-[activate=true]:text-accent-foreground',
            {
              'py-1 text-sm font-bold': item.depth === 2,
              'py-0.5 text-xs text-muted-foreground': item.depth >= 3,
            },
          ]}
          data-activate={false}
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
