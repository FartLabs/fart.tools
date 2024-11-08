import { LandingPage } from "#/components/landing_page/mod.ts";
import { PeoplePage } from "#/components/people_page/mod.ts";
import { posts, topics } from "#/components/blog_page/data.ts";
import { toTopicID } from "#/components/blog_page/posts.ts";
import { BlogPage } from "#/components/blog_page/blog_page.tsx";
import { BlogPostPage } from "#/components/blog_page/blog_post_page.tsx";
import people from "#/static/people.json" with { type: "json" };

/**
 * generateHTMLSync generates the HTML files for the website synchronously.
 */
export function generateHTMLSync(directory: string = "generated") {
  const landingPageHTML: string = <LandingPage />;
  Deno.writeTextFileSync(`${directory}/index.html`, landingPageHTML);

  const peoplePageHTML: string = <PeoplePage people={people} />;
  Deno.mkdirSync(`${directory}/people`, { recursive: true });
  Deno.writeTextFileSync(`${directory}/people/index.html`, peoplePageHTML);

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
