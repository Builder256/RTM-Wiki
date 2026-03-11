<script lang="ts">
  import { page } from '$app/state';
  import type { MainMenuItemPage } from './main-menu';

  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { m } from '$lib/paraglide/messages';
  import type { Locale } from '$lib/paraglide/runtime';

  interface Props {
    item: MainMenuItemPage;
  }

  const { item }: Props = $props();

  const isActive = $derived(item.path === page.url.pathname);
  const locale: Locale = $derived(page.data.locale);
  const isCurrentLocale = $derived(locale === item.locale);

  const getLocalizedLocaleLabel = (locale: Locale) => {
    switch (locale) {
      case 'ja':
        return m['main-menu_alt-locale_ja']();
      case 'en':
        return m['main-menu_alt-locale_en']();
      case 'ko-kr':
        return m['main-menu_alt-locale_ko-kr']();
      case 'zh-tw':
        return m['main-menu_alt-locale_zh-tw']();
      default:
        return (locale as string).toUpperCase(); // localeの取り得る値を全てcaseで網羅しているので、ここでのlocaleはneverになるっぽい
    }
  };
</script>

<li data-slot="main-menu-page">
  <Button
    variant={isActive ? 'default' : 'ghost'}
    size="sm"
    class={['flex w-full justify-start gap-2 px-4', !isActive && 'text-secondary-foreground']}
    href={item.path}
  >
    <span>{item.label}</span>
    {#if !isCurrentLocale}
      <Badge variant="secondary">{getLocalizedLocaleLabel(item.locale)}</Badge>
    {/if}
  </Button>
</li>
