<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    content: string;
  }

  interface TocItem {
    id: string;
    text: string;
    level: number;
  }

  const { content }: Props = $props();

  let tocItems = $state<TocItem[]>([]);
  let activeId = $state('');

  // Markdownコンテンツからh2, h3の見出しを抽出
  $effect(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1]!.length;
      const text = match[2]!.trim();
      const id = text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, '')
        .replace(/\s+/g, '-');

      items.push({ id, text, level });
    }

    tocItems = items;
  });

  onMount(() => {
    // IntersectionObserverで現在表示中の見出しを追跡
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      },
    );

    // DOMの見出し要素を監視
    const observeHeadings = () => {
      const headings = document.querySelectorAll('[data-md-content] h2, [data-md-content] h3');
      headings.forEach(heading => observer.observe(heading));
    };

    // Markdownがレンダリングされた後にobserve
    const timer = setTimeout(observeHeadings, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  });
</script>

{#if tocItems.length > 0}
  <aside data-slot="toc" class="toc">
    <p class="toc-title">目次</p>
    <ul>
      {#each tocItems as item}
        <li class="toc-item" class:active={activeId === item.id} style="padding-left: {(item.level - 2) * 0.75}rem">
          <a href="#{item.id}">{item.text}</a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<style>
  .toc {
    position: sticky;
    top: 4rem;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    padding: 1rem 0;
    width: 14rem;
    flex-shrink: 0;
    scrollbar-width: thin;
  }

  .toc-title {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--muted-foreground);
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  .toc ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-left: 1px solid var(--border);
  }

  .toc-item {
    font-size: 0.8125rem;
    padding: 0.25rem 0.5rem;
    border-left: 2px solid transparent;
    margin-left: -1px;
    transition:
      color 0.2s,
      border-color 0.2s;
  }

  .toc-item a {
    color: var(--muted-foreground);
    text-decoration: none;
    display: block;
    transition: color 0.2s;
  }

  .toc-item:hover a {
    color: var(--foreground);
  }

  .toc-item.active {
    border-left-color: var(--accent);
  }

  .toc-item.active a {
    color: var(--accent);
    font-weight: 500;
  }
</style>
