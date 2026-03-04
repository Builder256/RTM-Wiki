<script lang="ts">
  import type { Element, Root, RootContent } from 'hast';

  interface Props {
    hast: Root;
  }

  const { hast }: Props = $props();
</script>

<!-- HASTノードを再帰的にレンダリングする -->
{#snippet renderNode(node: RootContent)}
  {#if node.type === 'element'}
    {#if node.children.length > 0}
      <svelte:element this={node.tagName} {...node.properties}>
        {#each node.children as child}
          {@render renderNode(child)}
        {/each}
      </svelte:element>
    {:else}
      <svelte:element this={node.tagName} {...node.properties} />
    {/if}
  {:else if node.type === 'text'}
    {node.value}
  {:else if node.type === 'raw'}
    {@html node.value}
  {/if}
{/snippet}

<!-- 日本語のtypographyについて: https://gist.github.com/tak-dcxi/0f8b924d6dd81aaeb58dc2e287f2ab3a -->
<div data-slot="markdown-renderer" class="space-y-4 wrap-anywhere [line-break:strict]" data-md-content>
  {#each hast.children as node}
    {@render renderNode(node)}
  {/each}
</div>
