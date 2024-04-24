import { serveDir } from "@std/http/file-server";

Deno.serve((request) =>
  serveDir(request, {
    fsRoot: "static",
  })
);
