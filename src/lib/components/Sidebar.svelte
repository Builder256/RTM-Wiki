<script lang="ts">
  import { page } from '$app/state';
  import type { SidebarItem } from '$lib/utils/sidebar';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';

  interface Props {
    items: SidebarItem[];
  }

  const { items }: Props = $props();
</script>

{#snippet menuItem(item: SidebarItem, depth: number)}
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
{/snippet}

<nav data-slot="sidebar" class="sidebar">
  <ul>
    {#each items as item}
      {@render menuItem(item, 0)}
    {/each}
  </ul>
</nav>

<style>
  .sidebar {
    position: sticky;
    top: 4rem;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    padding: 1rem 0;
    width: 15rem;
    flex-shrink: 0;
    scrollbar-width: thin;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    color: var(--muted-foreground);
    border-radius: 0.375rem;
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;
    user-select: none;
  }

  .sidebar-item:hover {
    color: var(--foreground);
    background-color: var(--accent);
  }

  .sidebar-item.active,
  .sidebar-item.active a {
    color: var(--accent);
    font-weight: 600;
  }

  .sidebar-item a {
    color: inherit;
    text-decoration: none;
    flex: 1;
  }

  .sidebar-link {
    text-decoration: none;
  }

  details summary {
    list-style: none;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details summary :global(.sidebar-chevron) {
    transition: transform 0.2s;
    flex-shrink: 0;
  }

  details[open] > summary :global(.sidebar-chevron) {
    transform: rotate(90deg);
  }
</style>
