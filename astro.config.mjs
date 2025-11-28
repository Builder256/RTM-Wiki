// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import yaml from '@rollup/plugin-yaml';

import remarkBreaks from 'remark-breaks';
import svelte from '@astrojs/svelte';
// import remarkDirective from 'remark-directive';
// import remarkEmbedYouTubePlugin from './src/remarkEmbedYouTubePlugin/remarkEmbedYouTube/index.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://builder256.github.io',
  base: 'RTM-Wiki',
  integrations: [
    starlight({
      title: 'RTM Wiki',
      description:
        '2025年に新しく設立されたRealTrainMod（RTM）のWiki、中級者以上のユーザーに向けた高度な情報を掲載',
      logo: {
        src: './src/assets/images/logos/wiki-logo.svg',
        alt: 'RTM Wiki Logo',
      },
      // tableOfContents
      // editLink
      editLink: {
        baseUrl: 'https://github.com/Builder256/RTM-Wiki/tree/starlight',
      },
      sidebar: [
        { label: 'トップ', translations: { en: 'Home' }, link: '/' },
        {
          label: 'RealTrainMod入門',
          translations: { en: 'Getting Started' },
          items: [
            { label: 'はじめに', link: 'getting-started/overview/' },
            {
              label: '初心者向け導入方法',
              link: 'getting-started/installing/',
            },
          ],
        },
        {
          label: 'RealTrainModの使い方',
          translations: { en: 'How to use RealTrainMod' },
          items: [
            { label: 'RealTrainModをプレイする理由', link: 'usage/why/' },
            {
              label: 'インストール方法 Mod経験者向け',
              link: 'usage/installing/',
            },
            { label: 'レシピ', link: 'usage/recipe/' },
            {
              label: 'アイテム',
              translations: { en: 'Items' },
              items: [{ label: 'アイテム一覧', link: 'usage/items/list/' }],
            },
            {
              label: 'ブロック',
              translations: { en: 'Blocks' },
              items: [
                { label: 'ブロック一覧', link: 'usage/blocks/list/' },
                { label: 'マーカー（ブロック）', link: 'usage/blocks/marker/' },
              ],
            },
            {
              label: '操作',
              translations: { en: 'Operation' },
              items: [{ label: '列車', link: 'usage/operation/train/' }],
            },
            { label: '用語集', link: 'usage/glossary/' },
            { label: 'Tips', link: 'usage/tips/' },
            { label: 'よくある質問と回答', link: 'usage/faq/' },
            { label: '既知の不具合', link: 'usage/bugs/' },
            { label: '競合Mod', link: 'usage/incompatibility/' },
            { label: '問題を報告する', link: 'usage/report-problem/' },
          ],
        },
        {
          label: 'モデルパック制作',
          translations: { en: 'Develop ModelPack' },
          items: [
            {
              label: '車両制作チュートリアル',
              collapsed: true,
              translations: { en: 'Developing Train Tutorial' },
              autogenerate: { directory: 'dev/tutorial/' },
            },
            { label: '基礎', link: 'dev/basic/' },
            { label: 'ディレクトリ構成とファイル名', link: 'dev/structure/' },
            { label: 'モデルファイル', link: 'dev/file/model/' },
            { label: 'テクスチャファイル', link: 'dev/file/texture/' },
            { label: 'スクリプトファイル', link: 'dev/file/script/' },
            { label: 'JSONファイル', link: 'dev/file/json/' },
            { label: 'モデル設定用JSONファイル', link: 'dev/file/json/model/' },
            { label: '逆引きリファレンス', link: 'dev/reverse-reference/' },
            { label: '方向幕', link: 'dev/rollsign/' },
            { label: 'トラブルシューティング', link: 'dev/troubleshooting/' },
            {
              label: 'リファレンス',
              translations: { en: 'Reference' },
              items: [
                {
                  label: 'JSON',
                  autogenerate: { directory: 'dev/reference/json/' },
                },
                {
                  label: 'スクリプト',
                  autogenerate: { directory: 'dev/reference/script/' },
                },
              ],
            },
          ],
        },
        {
          label: '関連Mod',
          translations: { en: 'Related Mods' },
          autogenerate: {
            directory: 'mods/integrated/',
          },
        },
        {
          label: '外部Mod',
          translations: { en: 'External Mods' },
          autogenerate: {
            directory: 'mods/external/',
          },
        },
        {
          label: 'RealTrainMod関連サイト',
          translations: { en: 'Related Websites' },
          items: [
            {
              label: 'realtrainmodWiki',
              link: 'https://gamerch.com/realtrainmod/',
              attrs: {
                target: '_blank',
              },
            },
            {
              label: 'RTM Addon Search',
              link: 'https://rtmaddon-search.com/',
              attrs: {
                target: '_blank',
              },
            },
            {
              label: 'RealTrainMod - CurseForge',
              link: 'https://www.curseforge.com/minecraft/mc-mods/realtrainmod',
              attrs: {
                target: '_blank',
              },
            },
          ],
        },
        {
          label: 'RTM Wikiを編集する',
          translations: { en: 'Edit RTM Wiki' },
          collapsed: true,
          autogenerate: {
            directory: 'edit/',
          },
        },
      ],
      defaultLocale: 'ja',
      locales: {
        ja: {
          label: '日本語',
          lang: 'ja',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
        'zh-tw': {
          label: '繁體中文',
          lang: 'zh-TW',
        },
        'ko-kr': {
          label: '한국어',
          lang: 'ko-KR',
        },
      },
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/jStPTdmjpS',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Builder256/RTM-Wiki',
        },
      ],
      customCss: [
        './src/styles/custom.css',
        '@fontsource-variable/noto-sans-jp',
      ],
      // expressiveCode
      // pagefind
      // prerender
      head: [
        {
          // <meta name="darkreader-lock">
          tag: 'meta',
          attrs: {
            name: 'darkreader-lock',
          },
        },
        {
          // <meta name="robots" content="noindex">
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'noindex',
          },
        },
      ],
      lastUpdated: true,
      pagination: false,
      favicon: '/images/favicon.svg',
      // titleDelimiter
      // disable404Route
      // components
      components: {
        MarkdownContent: './src/components/CustomMarkdownContent.astro',
      },
      plugins: [starlightThemeGalaxy()],
      // credits: true,
    }),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [
      remarkBreaks, // 改行をbrにする
      // remarkDirective,
      // remarkEmbedYouTubePlugin,
    ],
  },

  vite: {
    plugins: [yaml()],
  },
});
