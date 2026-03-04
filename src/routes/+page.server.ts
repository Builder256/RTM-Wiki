import { redirect } from '@sveltejs/kit';
import { baseLocale } from '$lib/paraglide/runtime';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  redirect(308, `/${baseLocale}`); // サイトトップのルートにアクセスされた時に、https://example.com/jaにリダイレクトする
};
