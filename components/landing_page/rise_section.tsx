import { DIV, SECTION } from "@fartlabs/htx";

export function RiseSection() {
  return <Cubes />;
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
