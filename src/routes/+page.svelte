<script lang="ts">
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
  import { parseMarkdown } from '$lib/utils/markdown';

  interface Contents {
    [key: string]: string;
  }

  /**
   * `/content/`内のmdファイル
   * ```typescript
   * {
   *   'ルート相対パス': 'ファイルの内容',
   *   '/content/foo.md': 'foo.mdの内容',
   * }
   * ```
   */
  const allContent: Contents = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' });

  const rawContent = allContent['/content/ja/index.md'];
  const { content, metadata } = parseMarkdown(rawContent);

  console.log(metadata);
</script>

<MarkdownRenderer {content} />
