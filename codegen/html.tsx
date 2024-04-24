import { LandingPage } from "#/components/landing_page/mod.ts";

export function generateHTML() {
  const landingPageHTML = <LandingPage /> as string;
  Deno.writeTextFileSync("generated/index.html", landingPageHTML);
}
