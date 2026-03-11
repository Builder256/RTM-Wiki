import type { PageServerLoad } from './$types';
import { resolveContent } from '$lib/utils/content';
import { parseMarkdown } from '$lib/utils/markdown';
import { error } from '@sveltejs/kit';
import { createLanguageNotFoundError, createPageNotFoundError } from '$lib/utils/page-error';
import { createMainMenuTree } from '$lib/components/main-menu/main-menu';
import { allContent } from '$lib/utils/content';

export const load: PageServerLoad = async ({ params }) => {
  const { lang, path } = params;
  /** 解決されたMarkdownコンテンツを含むオブジェクト なければnull */
  const resolvedContent = resolveContent(path, lang);

  if (!resolvedContent) error(404, createPageNotFoundError());
  if (resolvedContent.lang !== lang) error(404, createLanguageNotFoundError());

  const content = await parseMarkdown(resolvedContent.content);
  const mainMenuTree = createMainMenuTree(lang, allContent);

  return {
    hast: content.hast,
    metadata: content.metadata,
    toc: content.toc,
    mainMenuTree,
    locale: lang,
  };
};
