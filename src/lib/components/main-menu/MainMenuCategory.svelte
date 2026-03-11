<script lang="ts">
  // lucide
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  // shadcn-svelte
  import { buttonVariants } from '$lib/components/ui/button';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import { cn } from '$lib/utils';
  // custom components
  import MainMenuPage from './MainMenuPage.svelte';
  import MainMenuCategory from './MainMenuCategory.svelte';
  // sidebar types
  import { isMainMenuItemCategory, isMainMenuItemPage, type MainMenuItemCategory } from './main-menu';

  interface Props {
    item: MainMenuItemCategory;
  }

  const { item }: Props = $props();

  let isOpen = $state(true);
</script>

<li>
  <Collapsible.Root bind:open={isOpen}>
    <Collapsible.Trigger class={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'flex w-full justify-between')}>
      <span>{item.label}</span>
      {#if isOpen}
        <ChevronDown />
      {:else}
        <ChevronLeft />
      {/if}
    </Collapsible.Trigger>
    <Collapsible.Content>
      <ul class="ps-4">
        {#each item.items as child}
          {#if isMainMenuItemCategory(child)}
            <MainMenuCategory item={child} />
          {:else if isMainMenuItemPage(child)}
            <MainMenuPage item={child} />
          {/if}
        {/each}
      </ul>
    </Collapsible.Content>
  </Collapsible.Root>
</li>
