import { generateTubes } from "./tubes.ts";
import { generateHTML } from "./html.tsx";

if (import.meta.main) {
  generateTubes();
  generateHTML();
}
