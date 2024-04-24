import { A, FOOTER, P, STRONG } from "@fartlabs/htx";
import { PageBreak } from "#/components/page_break.tsx";

export function PageFoot() {
  return (
    <FOOTER>
      <PageBreak />
      <P>
        © <STRONG>FartLabs</STRONG>
        <A class="fl-icon page-link-visible-on-hover" href="/">🧪</A>
      </P>
    </FOOTER>
  );
}
