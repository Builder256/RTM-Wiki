import { parseMarkdown, type MarkdownResult } from './markdown';

interface ContentMap {
  [key: string]: string;
}

/**
 * `/content/ja/` 内のすべてのMarkdownファイルを読み込む
 */
export function getAllContent(): ContentMap {
  return import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' }) as ContentMap;
}

/**
 * URLパスから対応するMarkdownコンテンツを解決する
 *
 * @param path - URLパス (例: "usage/basic", "", "addon")
 * @returns パースされたMarkdownコンテンツ、または見つからない場合はnull
 */
export function resolveContent(path: string): MarkdownResult | null {
  const allContent = getAllContent();
  const normalizedPath = path.replace(/^\/|\/$/g, '');

  // 候補パスを優先順位順に試す
  const candidates =
    normalizedPath === ''
      ? ['/content/ja/index.md']
      : [`/content/ja/${normalizedPath}.md`, `/content/ja/${normalizedPath}/index.md`];

  for (const candidate of candidates) {
    const raw = allContent[candidate];
    if (raw) {
      return parseMarkdown(raw);
    }
  }

  return null;
}
