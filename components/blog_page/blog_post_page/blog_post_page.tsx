import { DIV, LINK } from "@fartlabs/htx";
import { TextNode } from "@fartlabs/htx/special";
import { PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
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
      headHTML={
        <TextNode>
          <LINK rel="stylesheet" href="/blog.css" />
          <LINK rel="stylesheet" href="/blog-post.css" />
        </TextNode>
      }
    >
      <PageSection>
        <BlogPostPreview post={props.post} />
      </PageSection>

      <PageSection>
        <DIV class="markdown-body">{props.post.html}</DIV>
      </PageSection>
    </PageLayout>
  );
}
