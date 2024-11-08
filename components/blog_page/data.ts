import { getFeaturedPosts, getSortedTopics, readPostsSync } from "./posts.ts";

export const posts = readPostsSync();
export const featuredPosts = getFeaturedPosts(posts);
export const topics = getSortedTopics(posts);
