import { H2 } from "@fartlabs/htx";
import type { Post } from "#/components/blog_page/posts.ts";
import { BlogPostPreviewList } from "#/components/blog_page/blog_post_preview_list.tsx";
import { PageSection } from "#/components/page_section.tsx";

export interface FeaturedBlogPostsSectionProps {
  posts: Post[];
}

export function FeaturedBlogPostsSection(props: FeaturedBlogPostsSectionProps) {
  return (
    <PageSection>
      <H2 id="blog-posts" class="page-heading">
        Featured blog posts
      </H2>

      <BlogPostPreviewList posts={props.posts} />
    </PageSection>
  );
}
