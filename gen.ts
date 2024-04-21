// deno run --allow-read gen.ts empty-tube.svg
//
if (import.meta.main) {
  const svg = await Deno.readTextFile(Deno.args[0]);
  console.log(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
}
