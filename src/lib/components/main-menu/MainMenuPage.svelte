<script lang="ts">
  import { page } from '$app/state';
  import type { MainMenuItemPage } from './main-menu';

  import { Button } from '$lib/components/ui/button/index.js';

  interface Props {
    item: MainMenuItemPage;
  }

  const { item }: Props = $props();

  const isActive = $derived(item.path === page.url.pathname);
</script>

<li data-slot="main-menu-page">
  <Button
    variant={isActive ? 'default' : 'ghost'}
    size="sm"
    class={['flex w-full justify-start gap-2 px-4', !isActive && 'text-secondary-foreground']}
    href={item.path}
  >
    <span>{item.label}</span>
  </Button>
</li>
