<script lang="ts">
  import { page } from '$app/state';
  import type { SidebarPage } from './sidebar';

  import { Button } from '$lib/components/ui/button/index.js';

  interface Props {
    item: SidebarPage;
  }

  let { item }: Props = $props();

  const isActive = $derived(item.path === page.url.pathname);
</script>

<Button
  variant={isActive ? 'default' : 'ghost'}
  size="lg"
  class={['flex w-full justify-between px-4', { 'text-secondary-foreground': !isActive }]}
  href={item.path}>{item.title}</Button
>
