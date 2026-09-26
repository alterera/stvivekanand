// One-off image compression for files in public/. Run with: node scripts/optimize-images.mjs
// Converts heavy PNG/JPEG files to WebP (max 1920px wide) next to the original and
// writes a 1200x630 Open Graph JPEG. Originals are kept; delete them once references
// have been updated.
import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..", "public");

const TO_WEBP = [
  "assets/background/hero-bg.png",
  "assets/sports/sports.jpeg",
  "assets/sports/sports-2.jpeg",
  "assets/sports/cricket.jpeg",
  "assets/sports/basketball.jpeg",
  "assets/sports/gymnasium.jpeg",
  "assets/sports/tennis.jpeg",
  "assets/about/msn.jpeg",
  "assets/background/bg-2.jpeg",
  "assets/background/bg-3.jpeg",
  "assets/patterns/science-lab.png",
  "assets/patterns/micro.png",
  "assets/about/principal.png",
  "assets/about/Nipun_Gupta.png",
  "assets/background/cricket-2.png",
  "assets/background/co-curricular.png",
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function toWebp(relative) {
  const input = path.join(ROOT, relative);
  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = (await stat(input)).size;

  await sharp(input)
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);

  const after = (await stat(output)).size;
  console.log(`${relative}: ${kb(before)} -> ${path.basename(output)} ${kb(after)}`);
}

async function ogImage() {
  const input = path.join(ROOT, "st-og.png");
  const output = path.join(ROOT, "st-og.jpg");
  await sharp(input)
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
  console.log(`st-og.png: ${kb((await stat(input)).size)} -> st-og.jpg ${kb((await stat(output)).size)}`);
}

for (const file of TO_WEBP) {
  try {
    await toWebp(file);
  } catch (error) {
    console.warn(`Skipped ${file}: ${error.message}`);
  }
}
await ogImage();
