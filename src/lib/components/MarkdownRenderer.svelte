<script lang="ts">
  import Markdown, { type Plugin } from 'svelte-exmarkdown';

  import remarkDirective from 'remark-directive';
  import remarkBreaks from 'remark-breaks';

  interface Props {
    content: string;
  }

  const { content: md }: Props = $props();

  const plugins: Plugin[] = [{ remarkPlugin: remarkDirective }, { remarkPlugin: remarkBreaks }];
</script>

<!-- 日本語のtypographyについて: https://gist.github.com/tak-dcxi/0f8b924d6dd81aaeb58dc2e287f2ab3a -->
<div data-slot="markdown-renderer" class="space-y-4 wrap-anywhere [line-break:strict]" data-md-content>
  <Markdown {md} {plugins} />
</div>
