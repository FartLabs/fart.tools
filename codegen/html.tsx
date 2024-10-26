import { LandingPage } from "#/components/landing_page/mod.ts";
import {
  BlogPage,
  posts,
  topics,
  toTopicID,
} from "#/components/blog_page/mod.ts";
import { BlogPostPage } from "#/components/blog_page/blog_post_page/mod.ts";

export function generateHTML(directory: string = "generated") {
  const landingPageHTML: string = <LandingPage />;
  Deno.writeTextFileSync(`${directory}/index.html`, landingPageHTML);

  const blogPageHTML: string = <BlogPage />;
  Deno.mkdirSync(`${directory}/blog`, { recursive: true });
  Deno.writeTextFileSync(`${directory}/blog/index.html`, blogPageHTML);

  for (const topic of topics) {
    const topicID = toTopicID(topic);
    const topicPageHTML: string = <BlogPage topicID={topicID} />;
    Deno.mkdirSync(`${directory}/blog/${topicID}`, { recursive: true });
    Deno.writeTextFileSync(
      `${directory}/blog/${topicID}/index.html`,
      topicPageHTML,
    );
  }

  for (const post of posts) {
    const postPageHTML: string = <BlogPostPage post={post} />;
    Deno.mkdirSync(`${directory}/${post.id}`, { recursive: true });
    Deno.writeTextFileSync(
      `${directory}/${post.id}/index.html`,
      postPageHTML,
    );
  }
}
