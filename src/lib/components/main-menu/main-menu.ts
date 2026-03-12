import type { Locale } from '$lib/paraglide/runtime';
import {
  getURLPathWithoutLocaleFromContentPath,
  type ContentMap,
  type ContentPath,
  type MarkdownString,
} from '$lib/utils/content';

export interface MainMenuItemCategory {
  type: 'category';
  label: string;
  items: MainMenuItem[];
}
export interface MainMenuItemPage {
  type: 'page';
  label: string;
  path: string;
  locale: Locale;
}
type MainMenuItem = MainMenuItemCategory | MainMenuItemPage;
export type MainMenuTree = MainMenuItem[];

export const isMainMenuItemCategory = (item: MainMenuItem): item is MainMenuItemCategory => item.type === 'category';
export const isMainMenuItemPage = (item: MainMenuItem): item is MainMenuItemPage => item.type === 'page';

export const createMainMenuItemCategory = (label: string, items: MainMenuItem[]): MainMenuItemCategory => ({
  type: 'category',
  label,
  items,
});

export const createMainMenuItemPage = (label: string, path: string, locale: Locale): MainMenuItemPage => ({
  type: 'page',
  label,
  path,
  locale,
});

// TODO: 自動生成を実装
export const createMainMenuTree = (locale: Locale, allContent: ContentMap): MainMenuTree => {
  const result: MainMenuTree = [];
  // このasを取り除くことはできる？
  for (const [contentPath, content] of Object.entries(allContent) as [ContentPath, MarkdownString][]) {
    const urlPath = getURLPathWithoutLocaleFromContentPath(contentPath);
    const [_, ...segments] = urlPath.split('/');
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const isPage = i === segments.length - 1; // 最後のセグメントはページ
      if (!isPage) {
      } else {
      }
    }
  }

  // return result;
  return [
    // test
    {
      type: 'page',
      label: 'ホーム',
      path: '/ja',
      locale: 'ja',
    },
    {
      type: 'category',
      label: 'モデルパック制作',
      items: [
        {
          type: 'page',
          label: '基本',
          path: '/ja/dev/basic',
          locale: 'ja',
        },
      ],
    },
    {
      type: 'page',
      label: 'EN Only',
      path: '/en/en-only',
      locale: 'en', // 現在の言語版になければ、他のある言語版へのリンクを表示する
    },
  ];
};
