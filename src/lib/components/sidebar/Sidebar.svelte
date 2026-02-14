<script lang="ts">
  import { page } from '$app/state';

  import { isSidebarCategory, isSidebarPage, type SidebarItem } from '$lib/components/sidebar/sidebar';
  import SidebarPage from './SidebarPage.svelte';
  import SidebarCategory from './SidebarCategory.svelte';

  interface Props {
    items: SidebarItem[];
  }

  const { items }: Props = $props();

  const currentPath = page.url;

  // console.log(currentPath);
</script>

<!-- {#snippet menuItem(item: SidebarItem, depth: number)}
  {@const currentPath = page.url.pathname.replace(/\/$/, '') || '/'}
  {@const isActive = currentPath === item.path}
  {@const hasChildren = item.children.length > 0}

  <li>
    {#if hasChildren}
      <details open={currentPath.startsWith(item.path) || item.children.some(c => currentPath === c.path)}>
        <summary class="sidebar-item" class:active={isActive} style="padding-left: {depth * 0.75 + 0.5}rem">
          <ChevronRight size={14} class="sidebar-chevron" />
          {#if item.path}
            <a href={item.path}>{item.title}</a>
          {:else}
            <span>{item.title}</span>
          {/if}
        </summary>
        <ul>
          {#each item.children as child}
            {@render menuItem(child, depth + 1)}
          {/each}
        </ul>
      </details>
    {:else}
      <a
        href={item.path}
        class="sidebar-item sidebar-link"
        class:active={isActive}
        style="padding-left: {depth * 0.75 + 1.25}rem"
      >
        {item.title}
      </a>
    {/if}
  </li>
{/snippet} -->

<ul class="w-full">
  {#each items as item}
    {#if isSidebarCategory(item)}
      <SidebarCategory {item} />
    {:else if isSidebarPage(item)}
      <SidebarPage {item} />
    {/if}
  {/each}
</ul>

<!-- <nav data-slot="sidebar" class="sidebar">
  <ul>
    {#each items as item}
      {@render menuItem(item, 0)}
    {/each}
  </ul>
</nav> -->
