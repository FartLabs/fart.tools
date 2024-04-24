import { A, H2, H3, P, STRONG } from "@fartlabs/htx";
import { TextNode } from "@fartlabs/htx/special";
import { PageSection } from "#/components/page_section.tsx";

export function FAQsSection() {
  return (
    <PageSection class="faq">
      <H2 id="faq" class="page-heading">
        FAQs
      </H2>

      <FAQSection
        id="what-is-fartlabs"
        questionHTML="What is FartLabs?"
        answerHTML={
          <P>
            We maintain ethical, economically-sustainable, built-to-last,
            organic, open-source software&hellip; out the wazoo! We specialize
            in <STRONG class="sparkle">imagination-driven</STRONG> development.
          </P>
        }
      />

      <FAQSection
        id="join-community"
        questionHTML="How do I join the community?"
        answerHTML={
          <P>
            Join our{" "}
            <A href="https://go.fart.tools/chat" class="page-link">
              Discord server
            </A>{" "}
            to chat with us and other members of the community. Also, check out
            our{" "}
            <A href="https://github.com/FartLabs" class="page-link">
              GitHub org
            </A>.
          </P>
        }
      />
    </PageSection>
  );
}

interface FAQSectionProps {
  id: string;
  questionHTML: string;
  answerHTML: string;
}

function FAQSection(props: FAQSectionProps) {
  return (
    <TextNode>
      <H3 id={props.id} class="page-heading-2">
        <A class="page-link-visible-on-hover" href={`#${props.id}`}>
          {props.questionHTML}
        </A>
      </H3>
      {props.answerHTML}
    </TextNode>
  );
}
