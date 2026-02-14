<script lang="ts">
  import { page } from '$app/state';
  import type { MainMenuItemPage } from './main-menu';

  import { Button } from '$lib/components/ui/button/index.js';

  interface Props {
    item: MainMenuItemPage;
  }

  let { item }: Props = $props();

  const isActive = $derived(item.path === page.url.pathname);
</script>

<li>
  <Button
    variant={isActive ? 'default' : 'ghost'}
    size="lg"
    class={['flex w-full justify-between px-4', { 'text-secondary-foreground': !isActive }]}
    href={item.path}>{item.title}</Button
  >
</li>
