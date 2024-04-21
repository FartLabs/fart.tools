import { createNoise2D } from "simplex-noise";

const noise = createNoise2D();

// deno run gen.ts
//
if (import.meta.main) {
  // M 16,16 L 84,16 L 84,84 L 16,84 Z
  const path = [
    { x: 16, y: 16 },
    { x: 84, y: 16 },
    { x: 84, y: 84 },
    { x: 16, y: 84 },
  ];
  const verticesAmount = Deno.args[0] ? parseInt(Deno.args[0]) : 100;
  const vertices = generateVertices(path, verticesAmount, Math.random());
  console.log(renderVertices(vertices));
}

// path="M 16,16 L 84,16 L 84,84 L 16,84 Z"
function renderVertices(vertices: Vertex[]): string {
  let path = "M ";
  for (const vertex of vertices) {
    path += `${vertex.x},${vertex.y} `;
  }

  return path.trim() + " Z";
}

interface Vertex {
  x: number;
  y: number;
}

/**
 * iteratePath iterates over a path of vertices divided into `amount` segments.
 */
function* iteratePath(
  path: Vertex[],
  amount: number,
): Iterable<Vertex> {
  const pathLength = path.length;
  for (let i = 0; i < amount; i++) {
    const t = i / (amount - 1);
    const index = t * (pathLength - 1);
    const indexFloor = Math.floor(index);
    const indexCeil = Math.ceil(index);
    const vertexA = path[indexFloor];
    const vertexB = path[indexCeil];
    const vertex = lerpVertex(vertexA, vertexB, index - indexFloor);
    yield vertex;
  }
}

/**
 * lerpVertex returns a vertex that is `t` percent between `a` and `b`.
 */
function lerpVertex(a: Vertex, b: Vertex, t: number): Vertex {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
  };
}

/**
 * lerp returns a value that is `t` percent between `a` and `b`.
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * getOffset returns a random offset based on the noise at the given position.
 */
function getOffset(
  maxOffset: number,
  theta: number,
  offsetX = 0,
  offsetY = offsetX,
  offsetR = 16,
) {
  const x = Math.cos(theta) * offsetR + offsetX;
  const y = Math.sin(theta) * offsetR + offsetY;
  return (noise(x, y) - 0.5) * maxOffset;
}

function generateVertices(
  path: Vertex[],
  amount: number,
  seed: number,
  fractionDigits = 2,
) {
  if (
    path[0].x !== path[path.length - 1].x ||
    path[0].y !== path[path.length - 1].y
  ) {
    path.push({ x: path[0].x, y: path[0].y });
  }

  const seedX = seed * 1e3;
  const seedY = seedX * -1;
  return Array.from(iteratePath(path, amount))
    .map((v, i, { length }) => {
      const theta = (i / length) * Math.PI * 2;
      const offsetX = getOffset(1, theta, seedX);
      const offsetY = getOffset(1, theta, seedY);
      return {
        x: Number((v.x + offsetX).toFixed(fractionDigits)),
        y: Number((v.y + offsetY).toFixed(fractionDigits)),
      };
    });
}
