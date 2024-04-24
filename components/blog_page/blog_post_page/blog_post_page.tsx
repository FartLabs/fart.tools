import { LINK } from "@fartlabs/htx";
import { PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
import { PageBreak } from "#/components/page_break.tsx";
import { BlogPostPreview } from "#/components/blog_page/blog_post_preview.tsx";
import type { Post } from "#/components/blog_page/mod.ts";

export interface BlogPostPageProps {
  post: Post;
}

export function BlogPostPage(props: BlogPostPageProps) {
  return (
    <PageLayout
      title={props.post.attrs.title}
      description={props.post.attrs.description}
      headHTML={<LINK rel="stylesheet" href="/blog-post.css" />}
    >
      <PageSection>
        <BlogPostPreview post={props.post} level={1} />
      </PageSection>

      <PageBreak />

      <PageSection class="markdown-body">
        {props.post.html}
      </PageSection>
    </PageLayout>
  );
}
