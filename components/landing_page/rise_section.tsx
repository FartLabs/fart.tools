import { A, DIV, H2, SECTION } from "@fartlabs/htx";
import { TextNode } from "@fartlabs/htx/special";
import { PageSection } from "#/components/page_section.tsx";

export function RiseSection() {
  return (
    <TextNode>
      <PageSection>
        <H2 id="rise" class="page-heading">
          Rise to the occasion
        </H2>
      </PageSection>
      <Cubes />
    </TextNode>
  );
}

function Cubes() {
  return (
    <SECTION class="cubes">
      <DIV class="cube">
        <DIV class="side front fade-in">L</DIV>
        <DIV class="side left fade-in"></DIV>
        <DIV class="side top fade-in">F</DIV>
      </DIV>

      <DIV class="cube">
        <DIV class="side front fade-in">A</DIV>
        <DIV class="side left fade-in"></DIV>
        <DIV class="side top fade-in">A</DIV>
      </DIV>

      <DIV class="cube">
        <DIV class="side front fade-in">B</DIV>
        <DIV class="side left fade-in"></DIV>
        <DIV class="side top fade-in">R</DIV>
      </DIV>

      <DIV class="cube">
        <DIV class="side front fade-in">S</DIV>
        <DIV class="side left fade-in"></DIV>
        <DIV class="side top fade-in">T</DIV>
      </DIV>
    </SECTION>
  );
}
