import { A, DIV, H2, IMG, SCRIPT } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";

export function HeroSection() {
  return (
    <PageSection class="hero">
      <H2 id="imagination" class="page-heading">
        Where imagination becomes great software
      </H2>

      {/* https://github.com/wagerfield/parallax?tab=readme-ov-file#2-configuration */}
      <DIV
        class="hero-animation-container background-blob"
        data-relative-input="true"
      >
        <DIV data-depth="0.1">
          <IMG
            src="baby-goop.png"
            width="250"
            alt="FartLabs logo animation"
          />
        </DIV>
      </DIV>

      <SCRIPT>{PARALLAX_SCRIPT}</SCRIPT>
    </PageSection>
  );
}

const PARALLAX_SCRIPT = `document.addEventListener("DOMContentLoaded", () => {
  new Parallax(
    document.querySelector(".hero-animation-container", {
      relativeInput: true,
    })
  );
});`;
