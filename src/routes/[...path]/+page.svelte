<!-- <script lang="ts">
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
  import { resolveContent } from '$lib/utils/content';
  import { page } from '$app/state';
  import { error } from '@sveltejs/kit';

  // URLパスからコンテンツを解決
  const path = $derived(page.url.pathname);
  const result = $derived.by(() => {
    const r = resolveContent(path);
    if (!r) {
      error(404, 'ページが見つかりません');
    }
    return r;
  });
</script>

<svelte:head>
  <title>{result.metadata.title ?? 'RTM Wiki'}</title>
  {#if result.metadata.description}
    <meta name="description" content={result.metadata.description} />
  {/if}
</svelte:head>

<MarkdownRenderer content={result.content} /> -->
