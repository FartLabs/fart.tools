import { A, BLOCKQUOTE, CODE, DIV, EM, H2, H3, P, SPAN } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";

export function ProjectsSection() {
  return (
    <PageSection>
      <H2 id="projects" class="page-heading">
        Notable projects
      </H2>

      <DIV class="projects">
        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/jsonx" class="page-link">
              jsonx
            </A>
          }
          descriptionHTML={
            <P>
              JSX runtime and compiler for composing JSON data. Visit the
              official{" "}
              <A href="https://jsonx.fart.tools/" class="page-link">
                jsonx website
              </A>{" "}
              to play with JSON like never before!
            </P>
          }
          tubeColor="magenta"
          tubeGlow={true}
          topics={["deno", "jsr.io", "jsx/tsx"]}
        />

        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/htx" class="page-link">htx</A>
          }
          descriptionHTML={
            <P>
              Library of <CODE>@fartlabs/jsonx</CODE>{" "}
              components for composing HTML content. Visit the generated{" "}
              <A href="https://jsr.io/@fartlabs/htx" class="page-link">
                API documentation
              </A>{" "}
              to learn more!
            </P>
          }
          tubeColor="purple"
          tubeGlow={true}
          topics={["deno", "html", "jsr.io", "jsx/tsx"]}
        />

        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/rtx" class="page-link">rtx</A>
          }
          descriptionHTML={
            <P>
              Library of <CODE>@fartlabs/jsonx</CODE> components for composing
              {" "}
              <CODE>@fartlabs/rt</CODE> routers. Visit the generated{" "}
              <A href="https://jsr.io/@fartlabs/rtx" class="page-link">
                API documentation
              </A>{" "}
              to learn more!
            </P>
          }
          tubeColor="blue"
          tubeGlow={true}
          topics={["deno", "http", "jsr.io", "jsx/tsx"]}
        />

        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/labs" class="page-link">
              Labs
            </A>
          }
          descriptionHTML={
            <P>
              Labs are data structures designed for composable and type-safe
              management of variables and procedures at scale.
            </P>
          }
          tubeColor="green"
          tubeGlow={true}
          topics={["codegen", "deno", "typescript"]}
        />

        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/deno_blocks" class="page-link">
              Deno Blocks
            </A>
          }
          descriptionHTML={
            <P>
              Blockly IDE integration with Fresh and Deno Subhosting.{" "}
              <SPAN class="sparkle">
                <EM>Winner</EM>
              </SPAN>{" "}
              of Deno Subhosting Hackathon (Ryan Dahl's favorite). Visit{" "}
              <A
                href="https://blocks.deno.dev/"
                class="page-link"
              >
                Deno Blocks
              </A>!
            </P>
          }
          tubeColor="orange"
          tubeGlow={true}
          topics={["blockly", "deno", "fresh", "subhosting"]}
        />
      </DIV>
    </PageSection>
  );
}

type TubeColor =
  | "blue"
  | "turquoise"
  | "purple"
  | "yellow"
  | "magenta"
  | "green"
  | "orange";

export interface ProjectSectionProps {
  titleHTML: string;
  descriptionHTML: string;
  topics: string[];
  tubeColor?: TubeColor;
  tubeGlow: boolean;
}

function ProjectSection(props: ProjectSectionProps) {
  const className = `project${
    props.tubeColor ? ` border-tube-${props.tubeColor}` : ""
  }${props.tubeGlow ? " glow" : ""}`;
  return (
    <DIV class={className}>
      <H3 class="project-title">{props.titleHTML}</H3>
      {props.descriptionHTML}
      <ProjectTopics topics={props.topics} />
    </DIV>
  );
}

function ProjectTopics(props: { topics: string[] }) {
  return (
    <DIV class="topics">
      {props.topics.map((topic) => <ProjectTopic topic={topic} />)}
    </DIV>
  );
}

function ProjectTopic(props: { topic: string }) {
  return <SPAN class="topic">{props.topic}</SPAN>;
}
