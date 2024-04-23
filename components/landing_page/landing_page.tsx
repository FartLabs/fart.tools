import { PageLayout } from "#/components/page_layout.tsx";
import { Hero } from "./hero.tsx";

export function LandingPage() {
  return (
    <PageLayout
      title="FartLabs, where imagination becomes software"
      description="Software out the wazoo! We specialize in imagination-driven development."
    >
      <Hero />
    </PageLayout>
  );
}
