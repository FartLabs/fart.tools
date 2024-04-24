import { A, FOOTER, HR, P, STRONG } from "@fartlabs/htx";

export function PageFoot() {
  return (
    <FOOTER>
      <HR />
      <P>
        © <STRONG>FartLabs</STRONG>
        <A class="fl-icon page-link" href="/">🧪</A>
      </P>
    </FOOTER>
  );
}
