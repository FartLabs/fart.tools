import { LandingPage } from "#/components/landing_page/mod.ts";

export function generateHTML() {
  const landingPageHTML = <LandingPage /> as string;
  Deno.writeTextFileSync("generated/index.html", landingPageHTML);

  // TODO: Generate blog page, post pages, and label filtered pages.
}

// /topics/deno/index.html
// /topics/index.html
// /post/index.html
