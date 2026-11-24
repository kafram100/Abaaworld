const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// 1. High-precision ABAA World SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Radial Navy Background Gradient -->
    <radialGradient id="navyBg" cx="45%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#142143" />
      <stop offset="60%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#070C18" />
    </radialGradient>

    <!-- Metallic Brushed Gold Gradient -->
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E5B5" />
      <stop offset="28%" stop-color="#D4AF37" />
      <stop offset="65%" stop-color="#B88A28" />
      <stop offset="90%" stop-color="#E2C167" />
      <stop offset="100%" stop-color="#9C731A" />
    </linearGradient>

    <!-- Subtle Gold Horizon Ring -->
    <linearGradient id="goldSoft" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.1" />
      <stop offset="50%" stop-color="#F5E5B5" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  <!-- Deep Midnight Navy Disc -->
  <circle cx="256" cy="256" r="248" fill="url(#navyBg)" />

  <!-- Outer Luxury Gold Bezel (ABAA World Crest) -->
  <circle cx="256" cy="256" r="236" fill="none" stroke="url(#goldMetallic)" stroke-width="12" stroke-linecap="round" />

  <!-- Inner Concentric Orbit Ring -->
  <circle cx="256" cy="256" r="214" fill="none" stroke="url(#goldMetallic)" stroke-width="2.5" opacity="0.45" />

  <!-- ABAA World Celestial Meridian / Latitude Ring -->
  <ellipse cx="256" cy="256" rx="212" ry="68" fill="none" stroke="url(#goldSoft)" stroke-width="2" transform="rotate(-20 256 256)" stroke-dasharray="6 4" />

  <!-- Stylized Monogram A (ABAA) -->
  <g fill="url(#goldMetallic)" stroke="url(#goldMetallic)" stroke-linejoin="round">
    <!-- Top Apex Serif Cut -->
    <path d="M 226,126 L 286,126 L 286,134 L 226,134 Z" stroke-width="1" />

    <!-- Left Architectural Stem (Solid, bold) -->
    <path d="M 235,132 L 267,132 L 165,372 L 128,372 Z" stroke-width="2" />

    <!-- Right Ascending Stem (Refined) -->
    <path d="M 261,132 L 280,132 L 378,372 L 350,372 Z" stroke-width="2" />

    <!-- Left Serif Foot -->
    <path d="M 112,370 L 182,370 L 182,384 L 112,384 Z" stroke-width="1" />

    <!-- Right Serif Foot -->
    <path d="M 332,370 L 394,370 L 394,384 L 332,384 Z" stroke-width="1" />

    <!-- Architectural Crossbar -->
    <path d="M 170,274 L 340,274 L 340,288 L 170,288 Z" stroke-width="1" />
  </g>

  <!-- Central Focal Diamond Star in Radiant Ivory -->
  <g>
    <!-- Gold Under-glow Diamond -->
    <polygon points="256,258 276,281 256,304 236,281" fill="#D4AF37" opacity="0.8" />
    <!-- Core Ivory Star / Diamond -->
    <polygon points="256,262 272,281 256,300 240,281" fill="#FAF8F5" stroke="#F5E5B5" stroke-width="1" />
    <!-- Center Jewel Pin -->
    <circle cx="256" cy="281" r="3" fill="#D4AF37" />
  </g>
</svg>
`;

// 2. Pure Node.js PNG encoder with subpixel antialiasing
function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ -1) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const toCrc = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);
  return Buffer.concat([lenBuf, toCrc, crcBuf]);
}

function createPng(width, height, pixelFn) {
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk('IHDR', ihdrData);

  const scanlines = Buffer.alloc((1 + width * 4) * height);
  let offset = 0;
  for (let y = 0; y < height; y++) {
    scanlines[offset++] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelFn(x, y, width, height);
      scanlines[offset++] = r;
      scanlines[offset++] = g;
      scanlines[offset++] = b;
      scanlines[offset++] = a;
    }
  }

  const deflated = zlib.deflateSync(scanlines);
  const idat = makeChunk('IDAT', deflated);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

function pointInPoly(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

const leftStem = [[235,132], [267,132], [165,372], [128,372]];
const rightStem = [[261,132], [280,132], [378,372], [350,372]];
const apex = [[226,126], [286,126], [286,134], [226,134]];
const leftSerif = [[112,370], [182,370], [182,384], [112,384]];
const rightSerif = [[332,370], [394,370], [394,384], [332,384]];
const crossbar = [[170,274], [340,274], [340,288], [170,288]];
const coreDiamond = [[256,262], [272,281], [256,300], [240,281]];
const outerDiamond = [[256,258], [276,281], [256,304], [236,281]];

function renderSample(px, py) {
  const d2 = (px - 256)**2 + (py - 256)**2;
  if (d2 > 248**2) return [0, 0, 0, 0]; // Transparent outside disc

  // Outer gold bezel (230px to 244px)
  if (d2 >= 228**2 && d2 <= 244**2) {
    const t = (px + py) / 1024; // subtle diagonal gradient
    const r = Math.round(212 + t * 30);
    const g = Math.round(175 + t * 35);
    const b = Math.round(55 + t * 40);
    return [Math.min(255, r), Math.min(255, g), Math.min(255, b), 255];
  }

  // Inner gold concentric ring (212px to 216px)
  if (d2 >= 211**2 && d2 <= 216**2) {
    return [212, 175, 55, 140];
  }

  // Core Diamond Star
  if (pointInPoly(px, py, coreDiamond)) {
    return [250, 248, 245, 255]; // Ivory
  }
  if (pointInPoly(px, py, outerDiamond)) {
    return [212, 175, 55, 230]; // Gold border around star
  }

  // Monogram Stems, Apex, Serifs, Crossbar
  if (pointInPoly(px, py, leftStem) ||
      pointInPoly(px, py, rightStem) ||
      pointInPoly(px, py, apex) ||
      pointInPoly(px, py, leftSerif) ||
      pointInPoly(px, py, rightSerif) ||
      pointInPoly(px, py, crossbar)) {
    const t = px / 512;
    const r = Math.round(200 + t * 40);
    const g = Math.round(165 + t * 35);
    const b = Math.round(50 + t * 45);
    return [Math.min(255, r), Math.min(255, g), Math.min(255, b), 255];
  }

  // Deep Midnight Navy radial background
  const distRatio = Math.sqrt(d2) / 248;
  const nr = Math.round(20 - distRatio * 12);
  const ng = Math.round(33 - distRatio * 20);
  const nb = Math.round(65 - distRatio * 40);
  return [Math.max(7, nr), Math.max(12, ng), Math.max(24, nb), 255];
}

function renderPixel(x, y, w, h) {
  // 4x subpixel supersampling
  const scale = 512 / w;
  const samples = [
    [x + 0.25, y + 0.25],
    [x + 0.75, y + 0.25],
    [x + 0.25, y + 0.75],
    [x + 0.75, y + 0.75]
  ];
  let r = 0, g = 0, b = 0, a = 0;
  for (const [sx, sy] of samples) {
    const [sr, sg, sb, sa] = renderSample(sx * scale, sy * scale);
    r += sr * (sa / 255);
    g += sg * (sa / 255);
    b += sb * (sa / 255);
    a += sa;
  }
  const avgA = a / 4;
  if (avgA === 0) return [0, 0, 0, 0];
  return [
    Math.round((r / 4) * (255 / avgA)),
    Math.round((g / 4) * (255 / avgA)),
    Math.round((b / 4) * (255 / avgA)),
    Math.round(avgA)
  ];
}

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirSize = 16 * count;
  let imgOffset = 6 + dirSize;
  const dirBuffers = [];
  const imgDataBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(imgOffset, 12);

    dirBuffers.push(entry);
    imgDataBuffers.push(img.buffer);
    imgOffset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirBuffers, ...imgDataBuffers]);
}

// Generate all assets
console.log('Generating ABAA World Favicon assets...');

// 1. Write favicon.svg
fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), svgContent, 'utf8');
console.log('✓ public/favicon.svg created');

// 2. Generate PNGs
const sizes = [16, 32, 48, 64, 180, 192, 512];
const generated = {};

for (const s of sizes) {
  const buf = createPng(s, s, renderPixel);
  generated[s] = buf;
  if (s === 16) fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), buf);
  if (s === 32) fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), buf);
  if (s === 48) fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'), buf);
  if (s === 180) fs.writeFileSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'), buf);
  if (s === 192) fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'), buf);
  if (s === 512) fs.writeFileSync(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'), buf);
}
console.log('✓ PNG icons created (16x16, 32x32, 48x48, 180x180, 192x192, 512x512)');

// 3. Create multi-size favicon.ico
const icoBuf = createIco([
  { width: 16, height: 16, buffer: generated[16] },
  { width: 32, height: 32, buffer: generated[32] },
  { width: 48, height: 48, buffer: generated[48] },
  { width: 64, height: 64, buffer: generated[64] }
]);
fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuf);
console.log('✓ public/favicon.ico created (size:', icoBuf.length, 'bytes)');
