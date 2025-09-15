// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// import tailwindcss from '@tailwindcss/vite';

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
        { label: 'トップ', link: '/' },
        {
          label: 'RealTrainMod入門',
          items: [{ label: 'はじめに', link: 'getting-started/overview' }],
        },
        {
          label: 'RealTrainModの使い方',
          // items: [
          //   { label: '基本情報・魅力', link: 'usage/basic' },
          //   {
          //     label: 'RealTrainModのインストール方法 Mod経験者向け',
          //     link: 'usage/installing',
          //   },
          //   { label: '用語集', link: 'usage/glossary' },
          //   { label: 'Tips', link: 'usage/tips' },
          //   { label: 'よくある質問と回答', link: 'usage/faq' },
          // ],
          autogenerate: {
            directory: 'usage/',
          },
        },
        {
          label: 'アドオン制作',
          items: [
            { label: 'アドオン制作概要', link: 'dev/overview' },
            {
              label: 'ファイルとディレクトリ',
              collapsed: true,
              items: [
                {
                  label: 'ディレクトリ構成とファイル名',
                  link: 'dev/file/directory-structure-and-file-name',
                },
                {
                  label: 'JSONファイル',
                  items: [
                    {
                      label: 'JSONファイルの概要',
                      link: 'dev/file/json/overview',
                    },
                    {
                      label: 'モデル設定用JSONファイル',
                      link: 'dev/file/json/model',
                    },
                  ],
                },
                {
                  label: 'スクリプト',
                  items: [
                    {
                      label: 'スクリプトの概要',
                      link: 'dev/file/script/overview',
                    },
                  ],
                },
              ],
            },
            { label: '逆引きリファレンス', link: 'dev/reverse-reference' },
            { label: 'トラブルシューティング', link: 'dev/troubleshooting' },
          ],
        },
        {
          label: '拡張Mod',
          autogenerate: {
            directory: 'mods/integrated',
          },
        },
        {
          label: '外部Mod',
          autogenerate: {
            directory: 'mods/external',
          },
        },
        {
          label: 'RealTrainMod関連サイト',
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
      },
      social: [
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
      // lastUpdated
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
  ],

  //   vite: {
  //     plugins: [tailwindcss()],
  //   },
});
