import { VFile } from 'vfile';
import { matter } from 'vfile-matter';

export interface MarkdownResult {
  content: string;
  metadata: Record<string, any>;
}

export function parseMarkdown(raw: string): MarkdownResult {
  const file = new VFile(raw);
  matter(file, { strip: true });

  return {
    content: String(file),
    metadata: file.data.matter ?? {},
  };
}
