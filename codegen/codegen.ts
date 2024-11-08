import { copySync, existsSync, expandGlobSync } from "@std/fs";
import { generateTubes } from "./tubes.ts";
import { generateHTMLSync } from "./html.tsx";
import { generateFeed } from "./feed.ts";

if (import.meta.main) {
  removeGeneratedFiles();
  copyFiles();
  generateFiles();
}

function removeGeneratedFiles() {
  if (!existsSync("generated")) {
    return;
  }

  Deno.removeSync("generated", { recursive: true });
}

function copyFiles() {
  Deno.mkdirSync("generated", { recursive: true });
  copySync("deno.json", "generated/deno.json", { overwrite: true });
  copySync("static", "generated", { overwrite: true });

  for (const file of expandGlobSync("*.ts")) {
    copySync(file.path, `generated/${file.name}`, { overwrite: true });
  }
}

function generateFiles() {
  generateTubes();
  generateHTMLSync();
  generateFeed();
}
