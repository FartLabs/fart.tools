import { A, DIV, NAV, SMALL } from "@fartlabs/htx";

export function PageNav() {
  return (
    <NAV>
      <A class="page-nav-header page-link-visible-on-hover" href="/">
        FartLabs
      </A>

      <DIV class="page-nav-buttons">
        <A class="page-button" href="/blog">
          Blog
        </A>
        <A
          class="page-button"
          href="https://go.fart.tools/chat"
          target="_blank"
        >
          Chat<Outbound />
        </A>
        <A
          class="page-button"
          href="https://github.com/FartLabs"
          target="_blank"
        >
          GitHub<Outbound />
        </A>
      </DIV>
    </NAV>
  );
}

function Outbound() {
  return <SMALL>&#8599;</SMALL>;
}
