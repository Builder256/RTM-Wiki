<script lang="ts">
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { m } from '$lib/paraglide/messages';
  import Container from '$lib/components/Container.svelte';

  let { children } = $props();

  const SITE_NAME = 'RTM Wiki';
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <!-- ブラウザのDarkReader 拡張機能を無効にする https://darkreader.org/ -->
  <meta name="darkreader-lock" />
</svelte:head>

<header class="contents">
  <!-- ヘッダ1段目 -->
  <Container>
    <div class="flex h-12 items-center justify-between">
      <a href="/" class="mx-2 text-xl transition-colors duration-300 hover:text-accent">{SITE_NAME}</a>
      <div class="flex">
        <a href="edit/" class="mx-2 transition-colors duration-300 hover:text-accent">{m.header_edit()}</a>
        <button class="mx-2 transition-colors duration-300 hover:text-accent">
          {m.header_menu()}
        </button>
      </div>
    </div>
  </Container>
  <!-- ヘッダ2段目 -->
  <div class="sticky top-0 border-b border-border/80 bg-background/50 backdrop-blur-lg">
    <Container>
      <div class="flex h-12 items-center justify-between">
        <button class="mx-2">目次</button>

        <div class="mx-auto">ページタイトル</div>
      </div>
    </Container>
  </div>
</header>

<Container>
  <div class="flex">
    <nav></nav>

    <main class="px-2 py-8">
      {@render children()}
    </main>

    <div></div>
  </div>
</Container>

<footer class="border-t border-border/80">
  <Container>
    <div class="space-y-2 px-2 py-8">
      <p>MIT License</p>
      <p>
        Copyright &copy; {new Date().getFullYear()}
        {SITE_NAME}
      </p>

      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </Container>
</footer>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>
      {locale}
    </a>
  {/each}
</div>
