import { baseLocale, locales, type Locale } from '$lib/paraglide/runtime';

interface ContentMap {
  [key: string]: string;
}

interface ResolvedContent {
  /** 未加工のMarkdown文字列 */
  content: MarkdownString;
  /** 実際の言語 */
  lang: Locale;
}

/** 未加工のMarkdown文字列 */
type MarkdownString = string & { __brand: 'MarkdownString' };

const allContent: ContentMap = import.meta.glob('/content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

/**
 * 指定された言語のコンテンツを取得する
 * @param path URLパス (例: "usage/basic", "", "addon")
 * @param lang 言語コード（`/project.inlang/settings.json`の`locales`）
 * @returns Markdown文字列 なければnull
 */
function getContentWithLang(path: string, lang: Locale): MarkdownString | null {
  const candidates =
    path === ''
      ? [`/content/${lang}/index.md`] // ルートの場合は、/[lang]/index.mdを試す
      : [`/content/${lang}/${path}.md`, `/content/${lang}/${path}/index.md`];

  for (const candidate of candidates) {
    const raw = allContent[candidate];
    if (raw) return raw as MarkdownString; // あればそれで返す
  }
  return null;
}

// TODO: ページが存在するが指定された言語版がない場合、エラーページで他の言語版の選択肢を提示するようにする
/**
 * 指定されたパスのコンテンツを利用可能なすべての言語を取得する
 * @param path URLパス (例: "usage/basic", "", "addon")
 * @returns コンテンツの情報を含むResolvedContent なければnull
 */
// const getContentLocale = (path: string): Locale[] => {
//   const createCandidates = (path: string, locale: Locale): string[] => {
//     return path === ''
//       ? [`/content/${locale}/index.md`] // ルートの場合は、/index.mdを試す
//       : [`/content/${locale}/${path}.md`, `/content/${locale}/${path}/index.md`];
//   };

//   const availableLocales: Locale[] = locales.filter(locale => {
//     const candidates = createCandidates(path, locale);
//     return candidates.some(candidate => allContent[candidate]);
//   });

//   for (const locale of locales) {
//   }
//   return availableLocales;
// };

/**
 * URLパスから対応するMarkdownコンテンツを解決する
 *
 * @param path URLパス (例: "usage/basic", "", "addon")
 * @param preferentialLang 優先して試す言語
 * @returns コンテンツの情報を含むResolvedContent なければnull
 */
export function resolveContent(path: string, preferentialLang: Locale): ResolvedContent | null {
  const preferentialLangContent = getContentWithLang(path, preferentialLang);
  if (preferentialLangContent) return { content: preferentialLangContent, lang: preferentialLang };

  const fallbackLangContent = getContentWithLang(path, baseLocale);
  if (fallbackLangContent) return { content: fallbackLangContent, lang: baseLocale };

  return null;
}
