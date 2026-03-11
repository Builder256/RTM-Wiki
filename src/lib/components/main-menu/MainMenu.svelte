<script lang="ts">
  import { isMainMenuItemCategory, isMainMenuItemPage, type MainMenuTree } from '$lib/components/main-menu/main-menu';
  import MainMenuPage from './MainMenuPage.svelte';
  import MainMenuCategory from './MainMenuCategory.svelte';

  interface Props {
    tree: MainMenuTree;
  }

  const { tree: items }: Props = $props();
</script>

<ul class="w-full">
  {#each items as item}
    {#if isMainMenuItemCategory(item)}
      <MainMenuCategory {item} />
    {:else if isMainMenuItemPage(item)}
      <MainMenuPage {item} />
    {/if}
  {/each}
</ul>
