import { copySync } from "@std/fs";
import { generateTubes } from "./tubes.ts";
import { generateHTML } from "./html.tsx";

if (import.meta.main) {
  copyFiles();
  generateFiles();
}

function copyFiles() {
  Deno.mkdirSync("generated", { recursive: true });
  copySync("deno.json", "generated/deno.json", { overwrite: true });
  copySync("main.ts", "generated/main.ts", { overwrite: true });
  copySync("static", "generated", { overwrite: true });
}

function generateFiles() {
  generateTubes();
  generateHTML();
}
