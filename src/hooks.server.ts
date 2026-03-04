import type { Handle } from '@sveltejs/kit';
import { baseLocale, isLocale } from '$lib/paraglide/runtime';

export const handle: Handle = ({ event, resolve }) => {
  /** URLの最初のパス */
  const firstPath = event.url.pathname.split('/')[1];
  /** 判定した現在のロケール */
  const currentLocale = isLocale(firstPath) ? firstPath : baseLocale;
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', currentLocale),
  });
};
