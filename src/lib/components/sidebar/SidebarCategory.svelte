<script lang="ts">
  import { buttonVariants } from '$lib/components/ui/button';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import { ChevronDown, ChevronLeft } from '@lucide/svelte';

  import {
    isSidebarCategory,
    isSidebarPage,
    type SidebarPage as SidebarPageType,
    type SidebarCategory as SidebarCategoryType,
  } from './sidebar';
  import SidebarPage from './SidebarPage.svelte';
  import SidebarCategory from './SidebarCategory.svelte';
  import { cn } from '$lib/utils';

  interface Props {
    item: SidebarCategoryType;
  }

  let { item }: Props = $props();

  let isOpen = $state(true);
</script>

<Collapsible.Root bind:open={isOpen}>
  <Collapsible.Trigger class={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'flex w-full justify-between')}>
    <span>{item.title}</span>
    {#if isOpen}
      <ChevronDown />
    {:else}
      <ChevronLeft />
    {/if}
  </Collapsible.Trigger>
  <Collapsible.Content>
    <div class="ps-4">
      {#each item.items as child}
        {#if isSidebarCategory(child)}
          <SidebarCategory item={child} />
        {:else if isSidebarPage(child)}
          <SidebarPage item={child} />
        {/if}
      {/each}
    </div>
  </Collapsible.Content>
</Collapsible.Root>
