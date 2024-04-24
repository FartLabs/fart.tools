import { A, FOOTER, P, STRONG } from "@fartlabs/htx";
import { PageBreak } from "#/components/page_break.tsx";

export function PageFoot() {
  return (
    <FOOTER>
      <PageBreak />
      <P>
        © FartLabs <A class="fl-icon" href="/">🧪</A>
      </P>
    </FOOTER>
  );
}
