import { test } from "@std/front-matter";
import { extract } from "@std/front-matter/any";
import { expandGlobSync } from "@std/fs";
import { isPostAttrs, type Post, type PostAttrs } from "./posts.ts";
import { renderHTML } from "./markdown.ts";

export const posts = readPosts();
export const topics = topicsOf(posts);

/**
 * readPosts reads all the blog posts.
 */
function readPosts(): Post[] {
  const posts: Post[] = [];
  const it = expandGlobSync("blog/*.md");
  for (const file of it) {
    const md = Deno.readTextFileSync(file.path);
    if (!test(md)) {
      throw new Error(`invalid front matter in ${file.path}`);
    }

    const extracted = extract<PostAttrs>(md);
    if (!isPostAttrs(extracted.attrs)) {
      throw new Error(`invalid post attributes in ${file.path}`);
    }

    const post: Post = {
      id: file.name,
      attrs: extracted.attrs,
      html: renderHTML(extracted.body),
    };
    posts.push(post);
  }

  return posts
    .toSorted((a, b) => a.attrs.date.getTime() - b.attrs.date.getTime());
}

/**
 * constTopics counts the topics.
 */
function countTopics(posts: Post[]): Map<string, number> {
  const topics = new Map<string, number>();
  for (const post of posts) {
    for (const topic of post.attrs.topics) {
      topics.set(topic, (topics.get(topic) ?? 0) + 1);
    }
  }

  return topics;
}

/**
 * topicsOf returns the topics of the blog posts sorted by frequency.
 */
function topicsOf(posts: Post[]): string[] {
  return Array.from(countTopics(posts).entries())
    .toSorted(([, a], [, b]) => b - a)
    .map(([topic]) => topic);
}
