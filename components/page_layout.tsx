import { BODY, HEAD, HTML, LINK, META, SCRIPT, TITLE } from "@fartlabs/htx";
import { PageSection } from "./page_section.tsx";
import { PageNav } from "./page_nav.tsx";

export interface PageLayoutProps {
  title: string;
  description: string;
  children?: string[];
}

export function PageLayout(props: PageLayoutProps) {
  return "<!DOCTYPE html>" + (
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
        {scripts.map((src) => <SCRIPT src={src} />).join("")}
      </HEAD>
      <BODY>
        <PageSection>
          <PageNav />
        </PageSection>

        {(props.children ?? []).join("")}
      </BODY>
    </HTML>
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
