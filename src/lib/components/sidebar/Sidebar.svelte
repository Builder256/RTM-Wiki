<script lang="ts">
  import { isSidebarCategory, isSidebarPage, type SidebarItem } from '$lib/components/sidebar/sidebar';
  import SidebarPage from './SidebarPage.svelte';
  import SidebarCategory from './SidebarCategory.svelte';

  interface Props {
    items: SidebarItem[];
  }

  const { items }: Props = $props();
</script>

<ul class="w-full">
  {#each items as item}
    {#if isSidebarCategory(item)}
      <SidebarCategory {item} />
    {:else if isSidebarPage(item)}
      <SidebarPage {item} />
    {/if}
  {/each}
</ul>
