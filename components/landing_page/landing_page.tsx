import { PageLayout } from "#/components/page_layout.tsx";
import { ExampleSection } from "./example_section.tsx";
import { HeroSection } from "./hero_section.tsx";

export function LandingPage() {
  return (
    <PageLayout
      title="FartLabs, where imagination becomes software"
      description="Software out the wazoo! We specialize in imagination-driven development."
    >
      <HeroSection />
      <ExampleSection />
    </PageLayout>
  );
}
