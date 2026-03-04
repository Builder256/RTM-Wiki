import type { PageServerLoad } from './$types';
import { resolveContent } from '$lib/utils/content';
import { parseMarkdown } from '$lib/utils/markdown';
import { error } from '@sveltejs/kit';
import { createLanguageNotFoundError, createPageNotFoundError } from '$lib/utils/page-error';

export const load: PageServerLoad = async ({ params }) => {
  const { lang, path } = params;
  /** 解決されたMarkdownコンテンツを含むオブジェクト なければnull */
  const resolvedContent = resolveContent(path, lang);

  if (!resolvedContent) error(404, createPageNotFoundError());
  if (resolvedContent.lang !== lang) error(404, createLanguageNotFoundError());

  const content = await parseMarkdown(resolvedContent.content);

  return {
    hast: content.hast,
    metadata: content.metadata,
    // TODO: 目次データを出力
    // toc
  };
};
