import { SECTION } from "@fartlabs/htx";

export interface PageSectionProps {
  class?: string;
  children?: string[];
}

export function PageSection(props: PageSectionProps) {
  const className = `fart-section${props.class ? ` ${props.class}` : ""}`;
  return <SECTION class={className}>{...(props.children ?? [])}</SECTION>;
}
