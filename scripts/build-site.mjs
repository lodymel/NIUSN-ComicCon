import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");
const outputDir = resolve(rootDir, "public-dist");

if (basename(outputDir) !== "public-dist" || outputDir === rootDir) {
  throw new Error("Refusing to clean an unexpected output directory");
}

const publicEntries = [
  "index.html",
  "booth-event.html",
  "styles.css",
  "toss-skin.css",
  "preloader.css",
  "preloader.js",
  "i18n.js",
  "contact-mailto.js",
  "wireframe.js",
  "assets",
  "css",
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of publicEntries) {
  const source = resolve(rootDir, entry);
  if (!existsSync(source)) throw new Error(`Missing public asset: ${entry}`);
  cpSync(source, join(outputDir, entry), { recursive: true });
}

const mapBuild = resolve(rootDir, "uploads/niusn-map/dist");
if (!existsSync(mapBuild)) throw new Error("Missing built map application");
cpSync(mapBuild, join(outputDir, "uploads/niusn-map/dist"), { recursive: true });
