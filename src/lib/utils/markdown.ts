// unified
import { unified } from 'unified';
import { VFile } from 'vfile';
import { visit } from 'unist-util-visit';
import type { Root as MdastRoot, Yaml } from 'mdast';
import type { Root as HastRoot } from 'hast';
// unified plugins
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeExtractToc, { type Toc } from '@stefanprobst/rehype-extract-toc';
import rehypeSanitize from 'rehype-sanitize';
// other libraries
import yaml from 'js-yaml';

export interface MarkdownResult {
  hast: HastRoot;
  metadata: Record<string, any>;
  toc: Toc;
}

/**
 * YAMLをパースしてVFileに保存する
 */
function remarkMetadata() {
  return (tree: MdastRoot, file: VFile) => {
    visit(tree, 'yaml', (node: Yaml) => {
      const metadata = yaml.load(node.value);
      file.data.matter = metadata;
    });
  };
}

export async function parseMarkdown(raw: string): Promise<MarkdownResult> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, { type: 'yaml', marker: '-' })
    .use(remarkMetadata)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeExtractToc)
    .use(rehypeSanitize);
  const mdast = processor.parse(raw);
  // VFileを使ってメタデータを抽出
  const file = new VFile(raw);
  // mdast → hastに変換（remarkMetadataもここで実行されfile.data.matterにメタデータが保存される）
  const hast = await processor.run(mdast, file);

  return {
    hast: hast as HastRoot,
    metadata: (file.data.matter as Record<string, any>) ?? {},
    toc: file.data.toc as Toc,
  };
}
