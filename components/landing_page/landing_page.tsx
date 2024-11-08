import { PageLayout } from "#/components/page_layout.tsx";
import { HeroSection } from "./hero_section.tsx";
import { FeaturedBlogPostsSection } from "./featured_blog_posts_section.tsx";
import { FeaturedProjectsSection } from "./featured_projects_section.tsx";
import { RiseSection } from "./rise_section.tsx";
import { FAQsSection } from "./faqs_section.tsx";
import { featuredPosts } from "#/components/blog_page/data.ts";

export function LandingPage() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedBlogPostsSection posts={featuredPosts} />
      <FeaturedProjectsSection />
      <RiseSection />
      <FAQsSection />
    </PageLayout>
  );
}
