import { A, DIV, NAV } from "@fartlabs/htx";

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
      </DIV>
    </NAV>
  );
}
