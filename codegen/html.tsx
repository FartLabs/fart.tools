import { LandingPage } from "#/components/landing_page/mod.ts";
import { BlogPage, posts } from "#/components/blog_page/mod.ts";

export function generateHTML() {
  const landingPageHTML = <LandingPage /> as string;
  Deno.writeTextFileSync("generated/index.html", landingPageHTML);

  const blogPageHTML = <BlogPage posts={posts} /> as string;
  Deno.mkdirSync("generated/blog", { recursive: true });
  Deno.writeTextFileSync("generated/blog/index.html", blogPageHTML);

  // TODO: Generate blog page, post pages, and label filtered pages.
}

// /topics/deno/index.html
// /topics/index.html
// /post/index.html
