import { A, DIV, H2, H3, P } from "@fartlabs/htx";
import { PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
import type { Post } from "./posts.ts";
import { BlogHeroSection } from "./blog_hero_section.tsx";
import { BlogTopics } from "./blog_topics.tsx";

export interface BlogPageProps {
  posts: Post[];
}

export function BlogPage(props: BlogPageProps) {
  return (
    <PageLayout
      title="Blog | FartLabs, where imagination becomes software"
      description="Software out the wazoo! We specialize in imagination-driven development."
    >
      <BlogHeroSection />

      <PageSection>
        {props.posts
          .map((post) => <PostPreview post={post} />)
          .join("\n")}
      </PageSection>
    </PageLayout>
  );
}

function PostPreview(props: { post: Post }) {
  return (
    <DIV class="post-preview">
      <H3 class="page-heading-2">
        <A class="page-link-visible-on-hover" href={`/${props.post.id}`}>
          {props.post.attrs.title}
        </A>
      </H3>
      <P>{props.post.attrs.description}</P>
      <BlogTopics topics={props.post.attrs.topics} />
    </DIV>
  );
}
