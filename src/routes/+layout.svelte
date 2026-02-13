<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { m } from '$lib/paraglide/messages';
  import Container from '$lib/components/Container.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import TableOfContents from '$lib/components/TableOfContents.svelte';
  import { getAllContent } from '$lib/utils/content';
  import { buildSidebarTree } from '$lib/utils/sidebar';
  import { resolveContent } from '$lib/utils/content';
  import Search from '@lucide/svelte/icons/search';
  import Menu from '@lucide/svelte/icons/menu';
  import X from '@lucide/svelte/icons/x';

  let { children } = $props();

  const SITE_NAME = 'RTM Wiki';

  // サイドバーデータ
  const allContent = getAllContent();
  const sidebarItems = buildSidebarTree(allContent);

  // 現在ページのコンテンツ（目次用）
  const currentContent = $derived(resolveContent(page.url.pathname));

  // モバイルサイドバー表示制御
  let sidebarOpen = $state(false);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <!-- ブラウザのDarkReader 拡張機能を無効にする https://darkreader.org/ -->
  <meta name="darkreader-lock" />
</svelte:head>

<!-- ヘッダ -->
<header class="header">
  <Container>
    <div class="header-inner">
      <div class="header-left">
        <button class="mobile-menu-btn" onclick={() => (sidebarOpen = !sidebarOpen)}>
          {#if sidebarOpen}
            <X size={20} />
          {:else}
            <Menu size={20} />
          {/if}
        </button>
        <a href="/" class="site-title">{SITE_NAME}</a>
      </div>

      <div class="header-right">
        <a href="edit/" class="header-link">{m.header_edit()}</a>
      </div>
    </div>
  </Container>
</header>

<!-- メインコンテンツ -->
<Container>
  <div class="layout">
    <!-- サイドバー（デスクトップ） -->
    <div class="sidebar-desktop">
      <Sidebar items={sidebarItems} />
    </div>

    <!-- メインコンテンツ -->
    <main class="main-content">
      {@render children()}
    </main>

    <!-- 目次（デスクトップ） -->
    <div class="toc-desktop">
      {#if currentContent}
        <TableOfContents content={currentContent.content} />
      {/if}
    </div>
  </div>
</Container>

<!-- モバイルサイドバーオーバーレイ -->
{#if sidebarOpen}
  <div class="sidebar-overlay" onclick={() => (sidebarOpen = false)} role="presentation"></div>
  <div class="sidebar-mobile">
    <Sidebar items={sidebarItems} />
  </div>
{/if}

<!-- フッター -->
<footer class="footer">
  <Container>
    <div class="footer-inner">
      <p>© {new Date().getFullYear()} {SITE_NAME}. MIT License.</p>
    </div>
  </Container>
</footer>

<!-- 言語切り替え（非表示） -->
<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>
      {locale}
    </a>
  {/each}
</div>

<style>
  /* ヘッダー */
  .header {
    position: sticky;
    top: 0;
    z-index: 40;
    border-bottom: 1px solid var(--border);
    background-color: color-mix(in oklab, var(--background) 80%, transparent);
    backdrop-filter: blur(16px) saturate(180%);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0 0.5rem;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .site-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: -0.01em;
  }

  .site-title:hover {
    color: var(--accent);
  }

  .header-link {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    text-decoration: none;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    transition:
      color 0.2s,
      background-color 0.2s;
  }

  .header-link:hover {
    color: var(--foreground);
    background-color: var(--accent);
  }

  .mobile-menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0.375rem;
    border: none;
    background: none;
    color: var(--muted-foreground);
    cursor: pointer;
    border-radius: 0.375rem;
    transition:
      color 0.2s,
      background-color 0.2s;
  }

  .mobile-menu-btn:hover {
    color: var(--foreground);
    background-color: var(--accent);
  }

  /* 3カラムレイアウト */
  .layout {
    display: flex;
    gap: 1.5rem;
    min-height: calc(100vh - 3.5rem - 4rem);
  }

  .sidebar-desktop {
    display: block;
  }

  .main-content {
    flex: 1;
    min-width: 0;
    padding: 2rem 0;
  }

  .toc-desktop {
    display: block;
  }

  /* モバイルサイドバー */
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .sidebar-mobile {
    position: fixed;
    top: 3.5rem;
    left: 0;
    bottom: 0;
    z-index: 31;
    width: 16rem;
    background-color: var(--background);
    border-right: 1px solid var(--border);
    overflow-y: auto;
    padding: 0.5rem;
  }

  /* フッター */
  .footer {
    border-top: 1px solid var(--border);
  }

  .footer-inner {
    padding: 1.5rem 0.5rem;
    text-align: center;
    font-size: 0.8125rem;
    color: var(--muted-foreground);
  }

  /* レスポンシブ */
  @media (max-width: 1024px) {
    .toc-desktop {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .sidebar-desktop {
      display: none;
    }

    .mobile-menu-btn {
      display: flex;
    }
  }
</style>
