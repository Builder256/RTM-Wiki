import { baseLocale, isLocale, type Locale } from '$lib/paraglide/runtime';

/** Markdownファイルのファイルパスと、そのファイルの未加工のMarkdown文字列 */
export interface ContentMap {
  [key: ContentPath]: MarkdownString;
}

interface ResolvedContent {
  /** 未加工のMarkdown文字列 */
  content: MarkdownString;
  /** 実際の言語 */
  lang: Locale;
}

/** 未加工のMarkdown文字列 */
export type MarkdownString = string & { readonly __brand: 'MarkdownString' };
/** Markdownファイルのファイルパス リポジトリのルート相対パス 例：`/content/ja/foo/bar.md` */
export type ContentPath = string & { readonly __brand: 'ContentPath' };
/** 言語コード**なし**の、ページアクセス時のURLパス 例：`/foo/bar` */
type URLPathWithoutLocale = string & {
  readonly __brand: 'URLPathWithoutLocale';
  readonly __isLeadingSlashPresent: true;
};
/** 言語コード**付き**の、ページアクセス時のURLパス  例：`/ja/foo/bar */
type URLPathWithLocale = string & { readonly __brand: 'URLPathWithLocale' };
/** 最初に`/`がない文字列 */
type StringWithoutLeadingSlash = string & { readonly __isLeadingSlashPresent: false };
/** 最初に`/`がある文字列 */
type StringWithLeadingSlash = string & { readonly __isLeadingSlashPresent: true };

export const allContent: ContentMap = import.meta.glob('/content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as ContentMap; // このasを取り除くことはできる？

/**
 * Markdownファイルのファイルパスから、そのファイルの言語を取得する
 * @param path 取得するファイルパス
 * @returns 言語が取得できればその言語コードの文字列 できなければnull
 */
export const getLocaleFromContentPath = (path: ContentPath): Locale | null => {
  const locale = path.split('/')[2];
  return isLocale(locale) ? locale : null;
};

const isStringWithLeadingSlash = (str: string): str is StringWithLeadingSlash => str.startsWith('/');

const removeLeadingSlash = (path: string): StringWithLeadingSlash => {
  const isLeadingSlashPresent = isStringWithLeadingSlash(path);
  return isLeadingSlashPresent ? (path.slice(1) as StringWithLeadingSlash) : (path as StringWithLeadingSlash); // このasを取り除くことはできる？
};

const addLeadingSlash = (path: string): StringWithLeadingSlash => {
  return ('/' + path) as StringWithLeadingSlash;
};

const removeExtension = (path: string): string => {
  const dotIndex = path.lastIndexOf('.');
  return path.slice(0, dotIndex);
};

/**
 * Markdownファイルのファイルパスから、対応するページアクセス時パスを取得する
 * @param path Markdownファイルのファイルパス 例：`"/content/ja/foo/bar.md"`
 * @returns 対応するページアクセス時のパス 例： `"/ja/foo/bar"`
 */
const getURLPathWithLocaleFromContentPath = (path: ContentPath): URLPathWithLocale => {
  const pathWithoutContentDir = path.slice(8); // 最初の`/content`を取り除く
  const pathWithoutIndexMd = pathWithoutContentDir.slice(0, -9); // 最後の`/index.md`を取り除く
  const isIndexFile = path.endsWith('/index.md');
  const result = isIndexFile ? pathWithoutIndexMd : removeExtension(pathWithoutContentDir);
  return result as URLPathWithLocale; // このasを取り除くことはできる？
};

/**
 * Markdownファイルのファイルパスから、対応する言語なしのページアクセス時パスを取得する
 * @param path Markdownファイルのファイルパス 例：`"/content/ja/foo/bar.md"`
 * @returns Localeなしの、対応するページアクセス時のパス 例： `"/foo/bar"`
 */
export const getURLPathWithoutLocaleFromContentPath = (path: ContentPath): URLPathWithoutLocale => {
  const pathWithLocale = getURLPathWithLocaleFromContentPath(path);
  const [_empty, _locale, ...actualPath] = pathWithLocale.split('/');
  const result = addLeadingSlash(actualPath.join('/'));
  return result as URLPathWithoutLocale; // このasを取り除くことはできる？
};

// export const getURLPathWithoutLocaleFromURLPathWithLocale = (path: URLPathWithLocale): URLPathWithoutLocale => {
//   const hoge = removeLeadingSlash(path);
//   return path.split('/');
// };

/**
 * 指定された言語のコンテンツを取得する
 * @param path URLパス (例: "usage/basic", "", "addon")
 * @param lang 言語コード（`/project.inlang/settings.json`の`locales`）
 * @returns Markdown文字列 なければnull
 */
function getContentWithLang(path: string, lang: Locale): MarkdownString | null {
  const candidates =
    path === ''
      ? ([`/content/${lang}/index.md`] as ContentPath[]) // ルートの場合は、/[lang]/index.mdを試す
      : ([`/content/${lang}/${path}.md`, `/content/${lang}/${path}/index.md`] as ContentPath[]); // これらのasを取り除くことはできる？

  for (const candidate of candidates) {
    const raw = allContent[candidate];
    if (raw) return raw as MarkdownString; // あればそれで返す このasを取り除くことはできる？
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
