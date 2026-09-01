/**
 * One-off asset optimisation.
 *
 * The site's photographs were committed as full-size PNGs (~30 MB total), which
 * dominated page weight. This re-encodes them as progressive JPEGs at the
 * largest size they are actually displayed at, and writes the result alongside
 * the originals. Logos and marks keep their alpha channel and are left alone.
 *
 * Run with:  npm run optimize:images
 */
import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const DIR = path.resolve('src/assets/images');

// Max rendered width per image, based on where each one appears in the layout.
const WIDTHS = {
  'real_gallery_': 1600, // hero slides + full-width gallery tiles
  'about':         1200, // editorial column image
  'g':              900, // programme card thumbnails
  'product_':      1000, // product detail images
  'chairman':       600, // portraits
  'director':       600,
  'mahadevan':      600,
  'kuppusamy':      600,
  'boopathy':       600,
  'pandian':        600,
  'hero':          1600,
};

function widthFor(name) {
  const key = Object.keys(WIDTHS)
    .sort((a, b) => b.length - a.length)
    .find((prefix) => name.startsWith(prefix));
  return WIDTHS[key] ?? 1200;
}

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const name = path.parse(file).name;
  const out = path.join(DIR, `${name}.jpg`);

  const original = (await stat(src)).size;
  const image = sharp(src);
  const meta = await image.metadata();

  // Anything with real transparency stays a PNG — flattening would wreck it.
  if (meta.hasAlpha) {
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const opaque = !data.some((_, i) => i % info.channels === info.channels - 1 && data[i] < 250);
    if (!opaque) {
      console.log(`skip (alpha)  ${file}`);
      before += original;
      after += original;
      continue;
    }
  }

  const width = Math.min(widthFor(name), meta.width ?? widthFor(name));
  await image
    .resize({ width, withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toFile(out);

  const size = (await stat(out)).size;
  before += original;
  after += size;
  console.log(
    `${file.padEnd(30)} ${(original / 1024).toFixed(0).padStart(6)} KB -> ${(size / 1024).toFixed(0).padStart(5)} KB  (${width}px)`
  );

  if (path.resolve(src) !== path.resolve(out)) await unlink(src);
}

console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB ` +
  `(${(100 - (after / before) * 100).toFixed(0)}% smaller)`
);
