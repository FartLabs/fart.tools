import { LandingPage } from "#/components/landing_page/mod.ts";
import {
  BlogPage,
  posts,
  topics,
  toTopicID,
} from "#/components/blog_page/mod.ts";

export function generateHTML() {
  const landingPageHTML = <LandingPage /> as string;
  Deno.writeTextFileSync("generated/index.html", landingPageHTML);

  const blogPageHTML = <BlogPage /> as string;
  Deno.mkdirSync("generated/blog", { recursive: true });
  Deno.writeTextFileSync("generated/blog/index.html", blogPageHTML);

  for (const topic of topics) {
    const topicID = toTopicID(topic);
    const topicPageHTML = <BlogPage topicID={topicID} /> as string;
    Deno.mkdirSync(`generated/blog/${topicID}`, { recursive: true });
    Deno.writeTextFileSync(
      `generated/blog/${topicID}/index.html`,
      topicPageHTML,
    );
  }

  for (const post of posts) {
    // TODO: Generate individual post pages.
    console.log(post);
  }
}
