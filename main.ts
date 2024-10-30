import { serveDir } from "@std/http/file-server";
import { useGoogleAnalytics } from "./google-analytics.ts";

Deno.serve(useGoogleAnalytics(
  (request) => serveDir(request, { fsRoot: Deno.args[0] ?? "." }),
));
