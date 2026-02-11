<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <!-- ブラウザのDarkReader 拡張機能を無効にする https://darkreader.org/ -->
  <meta name="darkreader-lock" />
</svelte:head>

<header class="flex h-18 items-center border-b border-border">
  <a href="/" class="">RTM Wiki</a>
</header>
<main>
  {@render children()}
</main>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>
      {locale}
    </a>
  {/each}
</div>
