import { locales, type Locale } from '$lib/paraglide/runtime';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is Locale => {
  return locales.some(locale => locale === param);
}) satisfies ParamMatcher;
