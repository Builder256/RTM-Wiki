<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { m } from '$lib/paraglide/messages';
  import Container from '$lib/components/Container.svelte';
  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import TableOfContents from '$lib/components/TableOfContents.svelte';
  import { getAllContent } from '$lib/utils/content';
  import type { SidebarItem } from '$lib/components/sidebar/sidebar';
  import { resolveContent } from '$lib/utils/content';
  import { Book, BookOpen, BookOpenText, FilePenLine, FileText, Languages, Menu, Search, X } from '@lucide/svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';

  let { children } = $props();

  const SITE_NAME = 'RTM Wiki';

  // サイドバーデータ
  const allContent = getAllContent();
  // const sidebarItems = buildSidebarTree(allContent);

  const sidebarItems: SidebarItem[] = [
    {
      type: 'page',
      title: 'ホーム',
      path: '/',
    },
    {
      type: 'category',
      title: 'はじめに',
      items: [
        {
          type: 'page',
          title: 'ページ',
          path: '/usage/basic',
        },
      ],
    },
  ];

  // 現在ページのコンテンツ（目次用）
  const currentContent = $derived(resolveContent(page.url.pathname));

  /** モバイルサイドバー表示制御 */
  let isSidebarShown = $state(false);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <!-- ブラウザのDarkReader 拡張機能を無効にする https://darkreader.org/ -->
  <meta name="darkreader-lock" />
</svelte:head>

{#snippet headerMenu()}
  <div class="flex flex-wrap items-center">
    <Button variant="ghost" size="sm">
      <Search class="hidden md:block" />{m.header_search()}
    </Button>
    <Separator orientation="vertical" class="h-8" />
    <Button variant="ghost" size="sm">
      <Book class="hidden md:block" />{m.header_wiki()}
    </Button>
    <Button variant="ghost" size="sm">
      <BookOpenText class="hidden md:block" />{m.header_article()}
    </Button>
    <Button variant="ghost" size="sm">
      <FileText class="hidden md:block" />{m.header_reference()}
    </Button>
    <Separator orientation="vertical" class="h-8" />
    <Button variant="ghost" size="sm">
      <Languages class="hidden md:block" />{m.header_language()}
    </Button>
    <Button variant="ghost" size="sm">
      <FilePenLine class="hidden md:block" />{m.header_edit()}
    </Button>
  </div>
{/snippet}

<header class="sticky top-0 z-50 border-b border-border bg-background/50 backdrop-blur-lg">
  <Container>
    <div class="flex h-(--header-content-height) items-center justify-between">
      <Button variant="ghost" class="hidden text-xl lg:block" href="/">RTM Wiki</Button>

      <!-- デスクトップ用メニュー -->
      <div class="hidden lg:block">
        {@render headerMenu()}
      </div>

      <!-- モバイル用目次 -->
      <div class="px-4 lg:hidden">
        <Button variant="outline" size="sm">目次</Button>
      </div>

      <!-- モバイル用ページタイトル -->
      <div class="lg:hidden">
        <span>ページタイトル</span>
      </div>

      <!-- モバイル用ハンバーガーメニュー -->
      <Button variant="ghost" onclick={() => (isSidebarShown = !isSidebarShown)} class="lg:hidden">
        {#if isSidebarShown}
          <X />
          <span class="hidden sm:block">{m.header_close()}</span>
        {:else}
          <Menu />
          <span class="hidden sm:block">{m.header_menu()}</span>
        {/if}
      </Button>
    </div>
  </Container>
</header>

<!-- メインコンテンツ -->
<Container>
  <div class="flex">
    <!-- サイドバー -->
    <!-- モバイルではcontentsで場所を取らない(hiddenだと中身まで消える)、lg>で表示 -->
    <div class="contents w-xs shrink-0 border-e border-border lg:block">
      <!-- モバイルではfixedで全面固定、lg>でstickyにし、通常と同様にwidthを取らせる -->
      <nav
        class={[
          'fixed top-(--header-height) bottom-0 z-50 hidden w-full bg-background/50 p-4 backdrop-blur-lg lg:sticky lg:block!',
          { 'block!': isSidebarShown },
        ]}
      >
        <div class="mb-4 grid place-items-center lg:hidden">
          {@render headerMenu()}
        </div>
        <Sidebar items={sidebarItems} />
      </nav>
    </div>

    <!-- メインコンテンツ -->
    <main class="w-full p-4">
      {@render children()}
    </main>

    <!-- 目次（デスクトップ） -->
    <div class="hidden w-xs shrink-0 border-s border-border lg:block">
      <div class="sticky top-(--header-height) w-full p-4">
        {#if currentContent}
          <TableOfContents content={currentContent.content} />
        {/if}
      </div>
    </div>
  </div>
</Container>

<!-- モバイルサイドバーオーバーレイ -->
<!-- {#if sidebarOpen}
  <div class="sidebar-overlay" onclick={() => (sidebarOpen = false)} role="presentation"></div>
  <div class="sidebar-mobile">
    <Sidebar items={sidebarItems} />
  </div>
{/if} -->

<!-- フッター -->
<footer class="border-t border-border">
  <Container>
    <div class="py-4 text-center text-sm text-muted-foreground">
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
  * {
    --header-content-height: clamp(calc(var(--spacing) * 12), 6vw, calc(var(--spacing) * 18));
    --header-height: calc(var(--header-content-height) + 1px);
  }
</style>
