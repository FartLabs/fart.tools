import { A, H2, H3, P, STRONG } from "@fartlabs/htx";
import { TextNode } from "@fartlabs/htx/special";
import { PageSection } from "#/components/page_section.tsx";
import {
  BlogButton,
  ChatButton,
  GitHubButton,
} from "#/components/page_button/buttons/mod.ts";

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
            in <STRONG class="sparkle">imagination-driven</STRONG>{" "}
            development. Learn more about us on our <BlogButton />.
          </P>
        }
      />

      <FAQSection
        id="join-community"
        questionHTML="How do I join the community?"
        answerHTML={
          <P>
            Join our <ChatButton />{" "}
            to hang out with us and other members of the community. Also, check
            out our org on <GitHubButton />.
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
