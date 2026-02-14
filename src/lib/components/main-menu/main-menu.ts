// import { parseMarkdown } from '../../utils/markdown';

export interface MainMenuItemCategory {
  type: 'category';
  title: string;
  items: MainMenuItem[];
}

export interface MainMenuItemPage {
  type: 'page';
  title: string;
  path: string;
}

export type MainMenuItem = MainMenuItemCategory | MainMenuItemPage;

interface ContentMap {
  [key: string]: string;
}

export const isMainMenuItemCategory = (item: MainMenuItem): item is MainMenuItemCategory => item.type === 'category';
export const isMainMenuItemPage = (item: MainMenuItem): item is MainMenuItemPage => item.type === 'page';

// TODO: 自動生成を検討
/**
 * `/content/ja/` 内のMarkdownファイルからサイドバーツリーを構築する
 */
// export function buildSidebarTree(allContent: ContentMap): SidebarItem[] {
//   const items: Map<string, SidebarItem> = new Map();

//   for (const [filePath, raw] of Object.entries(allContent)) {
//     // /content/ja/usage/basic.md → usage/basic
//     const match = filePath.match(/^\/content\/ja\/(.+)\.md$/);
//     if (!match) continue;

//     const relativePath = match[1]!;
//     const { metadata } = parseMarkdown(raw);
//     const title = metadata.title || relativePath.split('/').pop() || '';
//     const order = metadata.order ?? 999;

//     // URLパスを構築: index.md → 親パス, それ以外 → そのまま
//     const urlPath = relativePath.endsWith('/index')
//       ? '/' + relativePath.slice(0, -6) // /usage/index → /usage
//       : relativePath === 'index'
//         ? '/'
//         : '/' + relativePath;

//     const segments = relativePath.split('/');

//     if (segments.length === 1) {
//       // トップレベルページ (index.md, etc.)
//       if (relativePath === 'index') {
//         // トップページはサイドバーに表示しない
//         continue;
//       }
//       items.set(relativePath, { title, path: urlPath, order, children: [] });
//     } else {
//       // ネストされたページ
//       const category = segments[0]!;

//       // カテゴリノードがなければ作成
//       if (!items.has(category)) {
//         items.set(category, {
//           title: category,
//           path: '',
//           order: 999,
//           children: [],
//         });
//       }

//       const categoryNode = items.get(category)!;

//       if (segments[segments.length - 1] === 'index') {
//         // index.md → カテゴリ自体の情報を更新
//         categoryNode.title = title;
//         categoryNode.path = urlPath;
//         categoryNode.order = order;
//       } else {
//         // 通常ページ → カテゴリの子に追加
//         categoryNode.children.push({
//           title,
//           path: urlPath,
//           order,
//           children: [],
//         });
//       }
//     }
//   }

//   // ソート
//   const result = Array.from(items.values());
//   result.sort((a, b) => a.order - b.order);
//   for (const item of result) {
//     item.children.sort((a, b) => a.order - b.order);
//   }

//   return result;
// }
