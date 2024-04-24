import { A, NAV } from "@fartlabs/htx";

export function PageNav() {
  return (
    <NAV>
      <A class="page-nav-header page-link-visible-on-hover" href="/">
        FartLabs
      </A>

      <A class="page-nav-button" href="/blog">
        Blog
      </A>
    </NAV>
  );
}
