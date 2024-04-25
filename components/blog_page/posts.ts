/**
 * Post represents a blog post.
 */
export interface Post {
  id: string;
  attrs: PostAttrs;
  html: string;
}

/**
 * PostAttrs represents a blog post's attributes.
 */
export interface PostAttrs {
  title: string;
  description: string;
  authors: PostAuthor[];
  topics: string[];
  date: Date;
}

/**
 * isPostAttrs checks if an object is a PostAttrs.
 */
// deno-lint-ignore no-explicit-any
export function isPostAttrs(obj: any): obj is PostAttrs {
  return (
    typeof obj.title === "string" &&
    typeof obj.description === "string" &&
    Array.isArray(obj.authors) &&
    // deno-lint-ignore no-explicit-any
    obj.authors.every((author: any) => isPostAuthor(author)) &&
    Array.isArray(obj.topics) &&
    // deno-lint-ignore no-explicit-any
    obj.topics.every((topic: any) => typeof topic === "string") &&
    obj.date instanceof Date
  );
}

/**
 * PostAuthor represents the author of a post.
 */
export interface PostAuthor {
  name: string;
  username: string;
}

/**
 * isPostAuthor checks if an object is a PostAuthor.
 */
// deno-lint-ignore no-explicit-any
export function isPostAuthor(obj: any): obj is PostAuthor {
  return (
    typeof obj.name === "string" &&
    typeof obj.username === "string"
  );
}

/**
 * toTopicIDs converts topic strings to topic IDs.
 */
export function toTopicIDs(topics: string[]) {
  return topics.map((topic) => toTopicID(topic));
}

/**
 * toTopicID converts a topic string to a topic ID.
 */
export function toTopicID(topic: string) {
  return topic.toLowerCase().replace(" ", "-");
}
