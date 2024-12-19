import { Feed } from "feed";
import { posts } from "#/components/blog_page/data.ts";

const ORIGIN = "https://fartlabs.org";
const ID = `${ORIGIN}/blog`;
const COPYRIGHT = `Copyright ${new Date().getFullYear()} FartLabs`;

export async function generateFeed(directory: string) {
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
    const authors = post.attrs.authors.map((author) => ({
      name: author.name,
      link: author.username
        ? `https://github.com/${author.username}`
        : undefined,
    }));
    const date = new Date(post.attrs.date);
    feed.addItem({
      id: `${ORIGIN}/${post.id}`,
      link: `${ORIGIN}/${post.id}`,
      title: post.attrs.title,
      description: post.attrs.description,
      date,
      published: date,
      copyright: COPYRIGHT,
      category: post.attrs.topics.map((topic) => ({
        name: topic,
        term: topic.toLowerCase(),
      })),
      author: authors,
      contributor: authors,
    });
  });

  await Deno.writeTextFile(`${directory}/feed.xml`, feed.rss2());
  await Deno.writeTextFile(`${directory}/feed.atom`, feed.atom1());
}
