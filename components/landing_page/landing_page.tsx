import { PageLayout } from "#/components/page_layout.tsx";
import { HeroSection } from "./hero_section.tsx";
import { ProjectsSection } from "./projects_section.tsx";
import { RiseSection } from "./rise_section.tsx";
import { FAQsSection } from "./faqs_section.tsx";

export function LandingPage() {
  return (
    <PageLayout>
      <HeroSection />
      <ProjectsSection />
      <RiseSection />
      <FAQsSection />
    </PageLayout>
  );
}
