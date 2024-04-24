import MarkdownIt from "markdown-it";
import anchorPlugin from "markdown-it-anchor";
import hljs from "highlight.js";

/**
 * renderHTML renders HTML from markdown content.
 */
export function renderHTML(md: string): string {
  return renderer.render(md);
}

/**
 * renderer is the markdown renderer used for rendering markdown content.
 *
 * @see
 * https://github.com/markdown-it/markdown-it/blob/0fe7ccb4b7f30236fb05f623be6924961d296d3d/README.md?plain=1#L154
 */
const renderer: MarkdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(content: string, language?: string) {
    const html = language && hljs.getLanguage(language)
      ? hljs.highlight(
        content,
        { language, ignoreIllegals: true },
      ).value
      : renderer.utils.escapeHtml(content);
    return `<pre data-lang="${language}" class="border-tube-green"><code class="hljs">${html}</code></pre>`;
  },
});

renderer.use(anchorPlugin, {
  permalink: anchorPlugin.permalink.headerLink({
    class: "page-link-visible-on-hover",
  }),
});
