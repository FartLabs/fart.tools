import { copySync } from "@std/fs";
import { generateTubes } from "./tubes.ts";
import { generateHTML } from "./html.tsx";

if (import.meta.main) {
  copySync("static", "generated", { overwrite: true });
  generateTubes();
  generateHTML();
}
