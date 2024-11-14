import { HEAD, HTML, META, TITLE } from "@fartlabs/htx";

export function PageRedirect(props: { to: string }) {
  return (
    <HTML>
      <HEAD>
        <TITLE>Redirecting to {props.to}</TITLE>
        <META
          http-equiv="refresh"
          content={`0; URL='${props.to}'`}
        />
      </HEAD>
    </HTML>
  );
}
