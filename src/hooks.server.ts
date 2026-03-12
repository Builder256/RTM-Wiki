import type { Handle } from '@sveltejs/kit';
import { baseLocale, isLocale } from '$lib/paraglide/runtime';

export const handle: Handle = ({ event, resolve }) => {
  /** URLの最初のパス */
  const firstPath = event.url.pathname.split('/')[1];
  /** 判定した現在のロケール */
  const currentLocale = isLocale(firstPath) ? firstPath : baseLocale;
  // TODO: ページ内リンクで他言語のページに遷移したときに、lang属性が遷移前のページから変わらない問題を修正する
  // 再読み込みしたり、アドレスバーから直接リンクを入力すると正常に動作する
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', currentLocale),
  });
};
