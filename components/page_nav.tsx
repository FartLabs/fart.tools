import { A, DIV, NAV } from "@fartlabs/htx";
import {
  BlogButton,
  ChatButton,
  GitHubButton,
} from "#/components/page_button/buttons/mod.ts";
import {} from "#/components/page_button/buttons/chat_button.tsx";

export function PageNav() {
  return (
    <NAV>
      <A class="page-nav-header page-link-visible-on-hover" href="/">
        FartLabs
      </A>

      <DIV class="page-nav-buttons">
        <BlogButton />
        <ChatButton />
        <GitHubButton />
      </DIV>
    </NAV>
  );
}
