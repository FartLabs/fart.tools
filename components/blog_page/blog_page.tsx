import { A, DIV, H3, LINK, P, TIME } from "@fartlabs/htx";
import { PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
import type { Post, PostAuthor } from "./posts.ts";
import { toTopicID } from "./posts.ts";
import { BlogHeroSection } from "./blog_hero_section.tsx";
import { BlogTopics } from "./blog_topics.tsx";
import { posts } from "./data.ts";

export interface BlogPageProps {
  topicID?: string;
}

export function BlogPage(props: BlogPageProps) {
  return (
    <PageLayout
      title="Blog | FartLabs, where imagination becomes software"
      description="Software out the wazoo! We specialize in imagination-driven development."
      headHTML={<LINK rel="stylesheet" href="/blog.css" />}
    >
      <BlogHeroSection />
      <PageSection>
        {getPosts(props.topicID)
          .map((post) => <PostPreview post={post} />)
          .join("")}
      </PageSection>
    </PageLayout>
  );
}

function PostPreview(props: { post: Post }) {
  return (
    <DIV class="post-preview">
      <H3 class="page-heading-2">
        <A class="page-link-visible-on-hover" href={`/${props.post.id}`}>
          {props.post.attrs.title}
        </A>
      </H3>
      <TIME datetime={props.post.attrs.date.toISOString()} class="post-date">
        {Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(props.post.attrs.date)}
      </TIME>
      <P class="post-authors">
        By {props.post.attrs.authors
          .map((author) => <Author author={author} />)
          .join(", ")}
      </P>
      <P>{props.post.attrs.description}</P>
      <BlogTopics topics={props.post.attrs.topics} />
    </DIV>
  );
}

function Author(props: { author: PostAuthor }) {
  return (
    <A href={`https://github.com/${props.author.username}`} class="page-link">
      {props.author.name}
    </A>
  );
}

function getPosts(topicID?: string) {
  if (!topicID) {
    return posts;
  }

  return posts.filter((post) =>
    post.attrs.topics.some((t) => toTopicID(t) === topicID)
  );
}
