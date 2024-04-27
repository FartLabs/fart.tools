import { LandingPage } from "#/components/landing_page/mod.ts";
import {
  BlogPage,
  posts,
  topics,
  toTopicID,
} from "#/components/blog_page/mod.ts";
import { BlogPostPage } from "#/components/blog_page/blog_post_page/mod.ts";

export function generateHTML() {
  const landingPageHTML: string = <LandingPage />;
  Deno.writeTextFileSync("generated/index.html", landingPageHTML);

  const blogPageHTML: string = <BlogPage />;
  Deno.mkdirSync("generated/blog", { recursive: true });
  Deno.writeTextFileSync("generated/blog/index.html", blogPageHTML);

  for (const topic of topics) {
    const topicID = toTopicID(topic);
    const topicPageHTML: string = <BlogPage topicID={topicID} />;
    Deno.mkdirSync(`generated/blog/${topicID}`, { recursive: true });
    Deno.writeTextFileSync(
      `generated/blog/${topicID}/index.html`,
      topicPageHTML,
    );
  }

  for (const post of posts) {
    const postPageHTML: string = <BlogPostPage post={post} />;
    Deno.mkdirSync(`generated/${post.id}`, { recursive: true });
    Deno.writeTextFileSync(
      `generated/${post.id}/index.html`,
      postPageHTML,
    );
  }
}
