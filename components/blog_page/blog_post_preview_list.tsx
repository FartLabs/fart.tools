import { DIV } from "@fartlabs/htx";
import type { Post } from "#/components/blog_page/posts.ts";
import { BlogPostPreview } from "./blog_post_preview.tsx";

export interface BlogPostPreviewListProps {
  posts: Post[];
}

export function BlogPostPreviewList(props: BlogPostPreviewListProps) {
  return (
    <DIV class="blog-post-preview-list">
      {props.posts
        .map((post) => <BlogPostPreview post={post} />)
        .join("")}
    </DIV>
  );
}
