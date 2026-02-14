<script lang="ts">
  // lucide
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  // shadcn-svelte
  import { buttonVariants } from '$lib/components/ui/button';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import { cn } from '$lib/utils';
  // custom components
  import SidebarPage from './SidebarPage.svelte';
  import SidebarCategory from './SidebarCategory.svelte';
  // utils
  import { isSidebarCategory, isSidebarPage, type SidebarCategory as SidebarCategoryType } from './sidebar';

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
