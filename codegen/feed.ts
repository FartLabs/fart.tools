import { Feed } from "feed";
import { posts } from "#/components/blog_page/data.ts";

const ORIGIN = "https://fart.tools";
const ID = `${ORIGIN}/blog`;
const COPYRIGHT = `Copyright ${new Date().getFullYear()} FartLabs`;

export function generateFeed() {
  const feed = new Feed({
    id: ID,
    link: ID,
    copyright: COPYRIGHT,
    language: "en",
    title: "FartLabs Blog",
    description: "Keep up with the latest from FartLabs!",
    favicon: `${ORIGIN}/fl-logo.png`,
    generator: "Feed (https://github.com/jpmonette/feed)",
    feedLinks: {
      rss: `${ID}/feed.xml`,
      atom: `${ID}/feed.atom`,
    },
  });
  posts.forEach((post) => {
    feed.addItem({
      id: `${ORIGIN}/${post.id}`,
      link: `${ORIGIN}/${post.id}`,
      title: post.attrs.title,
      description: post.attrs.description,
      date: new Date(post.attrs.date),
      published: new Date(post.attrs.date),
      copyright: COPYRIGHT,
      category: post.attrs.topics.map((topic) => ({
        name: topic.toLowerCase(),
      })),
      author: post.attrs.authors.map((author) => ({
        name: author.name,
        link: author.username
          ? `https://github.com/${author.username}`
          : undefined,
      })),
    });
  });

  Deno.writeTextFileSync("generated/feed.xml", feed.rss2());
  Deno.writeTextFileSync("generated/feed.atom", feed.atom1());
}
