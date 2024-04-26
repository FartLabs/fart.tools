import { defaultTitle, PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
import { PageBreak } from "#/components/page_break.tsx";
import { BlogHeroSection } from "./blog_hero_section.tsx";
import { BlogPostPreview } from "./blog_post_preview.tsx";
import { toTopicID } from "./posts.ts";
import { posts } from "./data.ts";

export interface BlogPageProps {
  topicID?: string;
}

export function BlogPage(props: BlogPageProps) {
  return (
    <PageLayout title={`Blog | ${defaultTitle}`}>
      <BlogHeroSection />

      <PageBreak />

      <PageSection>
        {getPosts(props.topicID)
          .map((post) => <BlogPostPreview post={post} />)
          .join("")}
      </PageSection>
    </PageLayout>
  );
}

function getPosts(topicID?: string) {
  if (!topicID) {
    return posts;
  }

  return posts.filter((post) =>
    post.attrs.topics.some((t) => toTopicID(t) === topicID)
  );
}
