const sharp = require('sharp');
const width = 1200;
const height = 630;
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#2E2D5F"/>
  <text x="600" y="260" text-anchor="middle" font-family="sans-serif" font-size="52" font-weight="800" fill="white">Stop Paying $180K for a Role</text>
  <text x="600" y="330" text-anchor="middle" font-family="sans-serif" font-size="52" font-weight="800" fill="white">That Costs $75K.</text>
  <text x="600" y="410" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#FF4500" font-weight="600">Pre-vetted remote talent from Eastern Europe. Delivered in 7 days.</text>
  <text x="600" y="520" text-anchor="middle" font-family="sans-serif" font-size="32" fill="rgba(255,255,255,0.8)" font-weight="600">3HRsome.com</text>
</svg>`;
sharp(Buffer.from(svg)).png().toFile('public/og-image.png').then(() => console.log('OG image created'));
