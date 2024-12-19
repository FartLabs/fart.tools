import { copy, exists, expandGlob } from "@std/fs";
import { generateTubes } from "./tubes.ts";
import { generateHTMLSync } from "./html.tsx";
import { generateFeed } from "./feed.ts";

if (import.meta.main) {
  await removeGeneratedFiles();
  await copyFiles();
  await generateFiles();
}

async function removeGeneratedFiles() {
  if (!(await exists("generated"))) {
    return;
  }

  await Deno.remove("generated", { recursive: true });
}

async function copyFiles() {
  await Deno.mkdir("generated", { recursive: true });
  await copy("deno.json", "generated/deno.json", { overwrite: true });
  await copy("static", "generated", { overwrite: true });

  for await (const file of expandGlob("*.ts")) {
    await copy(file.path, `generated/${file.name}`, { overwrite: true });
  }
}

async function generateFiles() {
  await generateTubes();
  await generateHTMLSync();
  await generateFeed();
}
