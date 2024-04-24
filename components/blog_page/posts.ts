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
  date: string;
}

/**
 * PostAuthor represents the author of a post.
 */
export interface PostAuthor {
  name: string;
  username: string;
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
