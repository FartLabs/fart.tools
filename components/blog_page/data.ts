import { test } from "@std/front-matter";
import { extract } from "@std/front-matter/any";
import type { WalkEntry } from "@std/fs";
import { expandGlobSync } from "@std/fs";
import type { Post, PostAttrs } from "./posts.ts";
import { isPostAttrs } from "./posts.ts";
import { renderHTML } from "./markdown.ts";

export const posts = readPosts();
export const topics = topicsOf(posts);

/**
 * readPosts reads all the blog posts.
 */
function readPosts(): Post[] {
  const posts: Post[] = [];
  for (const file of expandGlobSync("blog/*.md")) {
    posts.push(readPost(file));
  }

  return posts.toSorted((a, b) => {
    return a.attrs.date.getTime() - b.attrs.date.getTime();
  });
}

/**
 * readPost reads a blog post.
 */
export function readPost(entry: WalkEntry): Post {
  const md = Deno.readTextFileSync(entry.path);
  if (!test(md)) {
    throw new Error(`invalid front matter in ${entry.path}`);
  }

  const extracted = extract<PostAttrs>(md);
  if (!isPostAttrs(extracted.attrs)) {
    throw new Error(`invalid post attributes in ${entry.path}`);
  }

  const id = entry.name.replace(/\.md$/, "");
  return {
    id,
    attrs: extracted.attrs,
    html: renderHTML(extracted.body),
  };
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
