const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// List of images that need optimization
const imagesToOptimize = [
  'retail-audit.jpg',
  'trade-margin.jpg',
  'transforming.jpg',
  'office-cheer.png',
  'Census-option.jpg',
  'MerchandizingAudit.jpg',
  'trademargin.jpg',
  'Hussnain.jpg',
  'ar-day-awards.png',
  'ar-day-celebration.png',
  'ar-day-games.png',
  'ar-day-memory1.png',
  'ar-day-talent.png',
  'collaborative-code.png',
  'collaborative-construction.png',
  'collaborative-puzzle.png',
  'collaborative-success.png',
  'connected-play.png',
  'interconnected-responsibility.png'
];

async function optimizeImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputPath = path.join(PUBLIC_DIR, `optimized-${filename}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > 1920) {
      height = Math.round((height * 1920) / width);
      width = 1920;
    }
    
    // Optimize the image
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    
    console.log(`Optimized ${filename}`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  for (const filename of imagesToOptimize) {
    await optimizeImage(filename);
  }
}

optimizeAllImages().then(() => {
  console.log('Image optimization complete');
}); 