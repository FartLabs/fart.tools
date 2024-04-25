import { BODY, HEAD, HTML, LINK, META, SCRIPT, TITLE } from "@fartlabs/htx";
import { TextNode } from "@fartlabs/htx/special";
import { PageNav } from "./page_nav.tsx";
import { PageFoot } from "./page_foot.tsx";
import { PageBreak } from "#/components/page_break.tsx";

export interface PageLayoutProps {
  title: string;
  description: string;
  headHTML?: string;
  children?: string[];
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <TextNode>
      {"<!DOCTYPE html>"}
      <HTML lang="en">
        <HEAD>
          <META charset="UTF-8" />
          <META
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <TITLE>{props.title}</TITLE>
          <META name="description" content={props.description} />
          <Favicon />
          {stylesheets
            .map((href) => <LINK rel="stylesheet" href={href} />)
            .join("")}
          {scripts
            .map((src) => <SCRIPT src={src} />)
            .join("")}
          {props.headHTML ?? ""}
        </HEAD>
        <BODY>
          <PageNav />
          {(props.children ?? []).join("")}
          <PageBreak />
          <PageFoot />
        </BODY>
      </HTML>
    </TextNode>
  );
}

function Favicon() {
  return <LINK rel="icon" href="/fl-logo.png" />;
}

const stylesheets = [
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.min.css",
  "/background-blob.css",
  "/tube-green.css",
  "/tube-purple.css",
  "/tube-yellow.css",
  "/tube-turquoise.css",
  "/tube-magenta.css",
  "/tube-orange.css",
  "/tube-blue.css",
  "/tube-empty.css",
  "/keyframes.css",
  "/index.css",
];

const scripts = [
  "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js",
  "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js",
];
