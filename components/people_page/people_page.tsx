import { PageLayout } from "#/components/page_layout.tsx";
import { PageSection } from "#/components/page_section.tsx";
import { CODE, H1, P, PRE } from "@fartlabs/htx";

export interface PeoplePageProps {
  people: Person[];
}

export interface Person {
  id: string;
  name: string;
  title: string[];
  reportsTo?: string[];
}

export function PeoplePage(props: PeoplePageProps) {
  return (
    <PageLayout>
      <PageSection>
        <H1>People</H1>
        <P>Meet the people behind FartLabs.</P>

        {/* TODO: Render data visualization here. */}
        {/* https://en.wikipedia.org/wiki/Organizational_chart */}
        <PRE>
          <CODE>{JSON.stringify(props.people, null, 2)}</CODE>
        </PRE>
      </PageSection>
    </PageLayout>
  );
}
