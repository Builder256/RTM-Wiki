<script lang="ts">
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
  import { resolveContent } from '$lib/utils/content';

  const result = resolveContent('');
</script>

<svelte:head>
  {#if result}
    <title>{result.metadata.title ?? 'RTM Wiki'}</title>
    {#if result.metadata.description}
      <meta name="description" content={result.metadata.description} />
    {/if}
  {/if}
</svelte:head>

{#if result}
  <MarkdownRenderer content={result.content} />
{/if}
