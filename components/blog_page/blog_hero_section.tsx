import { A, H2 } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";
import { BlogTopics } from "./blog_topics.tsx";
import { topics } from "./data.ts";

export function BlogHeroSection() {
  return (
    <PageSection class="blog-hero">
      <H2 id="blog" class="page-heading">
        <A class="page-link-visible-on-hover" href="#blog">
          Blog
        </A>
      </H2>

      <BlogTopics topics={topics} />
    </PageSection>
  );
}
