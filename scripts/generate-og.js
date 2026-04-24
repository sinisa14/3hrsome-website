const sharp = require('sharp');

async function generate() {
  // Load the logo
  const logo = await sharp('public/images/3hrsome-logo-transparent.png')
    .resize(500, null, { fit: 'inside' })
    .toBuffer();

  const logoMeta = await sharp(logo).metadata();

  const width = 1200;
  const height = 630;
  const logoX = Math.round((width - logoMeta.width) / 2);
  const logoY = Math.round((height - logoMeta.height) / 2) - 30;

  // Create branded background with logo centered
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 46, g: 45, b: 95, alpha: 1 }, // brand blue #2E2D5F
    },
  })
    .composite([
      {
        input: logo,
        left: logoX,
        top: logoY,
      },
    ])
    .png()
    .toFile('public/og-image.png');

  console.log('OG image created with centered logo');
}

generate().catch(console.error);
