<script lang="ts">
  import type { PageProps } from './$types';
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';

  let { data }: PageProps = $props();
  let hast = $derived(data.hast);
  let metadata = $derived(data.metadata);
</script>

<svelte:head>
  {#if metadata}
    <title>{metadata.title ?? 'RTM Wiki'}</title>
    {#if metadata.description}
      <meta name="description" content={metadata.description} />
    {/if}
  {/if}
</svelte:head>

<!-- <div class="space-y-4 wrap-anywhere [line-break:strict]" data-md-content>
  {@html JSON.stringify(hast, null, 2).replaceAll('\n', '<br>')}
</div> -->
{#if hast}
  <MarkdownRenderer {hast} />
{/if}
