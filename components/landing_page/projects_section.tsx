import { A, CODE, DIV, EM, H2, H3, P, SPAN } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";

export function ProjectsSection() {
  return (
    <PageSection>
      <H2 id="projects" class="page-heading">
        <A class="page-link-visible-on-hover" href="#projects">
          Notable projects
        </A>
      </H2>

      <P class="projects-subtitle page-heading-2">Software out the wazoo!</P>

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
          tubeColor="blue"
          tubeGlow={true}
          topics={["deno", "jsr.io", "jsx/tsx"]}
        />

        <ProjectSection
          titleHTML={
            <A href="https://github.com/FartLabs/ht" class="page-link">ht</A>
          }
          descriptionHTML={
            <P>
              Type-safe HTML rendering library for Deno. Visit the generated
              {" "}
              <A
                href="https://jsr.io/@fartlabs/ht"
                class="page-link"
              >
                API documentation
              </A>{" "}
              to learn more!
            </P>
          }
          tubeColor="turquoise"
          tubeGlow={true}
          topics={["deno", "html", "jsr.io"]}
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
            <A href="https://github.com/FartLabs/rt" class="page-link">rt</A>
          }
          descriptionHTML={
            <P>
              Minimal HTTP router library based on the URLPattern API. Visit the
              generated{" "}
              <A href="https://jsr.io/@fartlabs/rt" class="page-link">
                API documentation
              </A>{" "}
              to learn more!
            </P>
          }
          tubeColor="yellow"
          tubeGlow={true}
          topics={["deno", "http", "jsr.io"]}
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
          tubeColor="magenta"
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
      <H3>{props.titleHTML}</H3>
      {props.descriptionHTML}
      <DIV class="topics">
        {props.topics
          .map((topic) => <SPAN class="topic">{topic}</SPAN>)
          .join("")}
      </DIV>
    </DIV>
  );
}
