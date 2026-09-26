/**
 * Image Optimization Script
 * Run this script to compress and optimize large images in the public folder
 * 
 * Usage: node optimize-images.js
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, 'public');
const MAX_WIDTH = 1920; // Maximum width for images
const QUALITY = 80; // JPEG/WebP quality

// Image extensions to process
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function getFiles(dir) {
  const files = [];
  const items = await readdir(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      if (item !== 'docs') { // Skip docs folder
        files.push(...(await getFiles(fullPath)));
      }
    } else if (IMAGE_EXTENSIONS.includes(extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  try {
    const ext = extname(filePath).toLowerCase();
    const stats = await stat(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    // Skip if file is already small (< 200KB)
    if (stats.size < 200 * 1024) {
      console.log(`⏭️  Skipping ${filePath} (${sizeMB}MB - already optimized)`);
      return;
    }

    console.log(`🔄 Processing ${filePath} (${sizeMB}MB)...`);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if image is too large
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Optimize based on format
    if (ext === '.png') {
      pipeline = pipeline.png({
        quality: QUALITY,
        compressionLevel: 9,
        adaptiveFiltering: true,
      });
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      pipeline = pipeline.jpeg({
        quality: QUALITY,
        progressive: true,
        mozjpeg: true,
      });
    }

    // Generate optimized filename
    const outputPath = filePath.replace(extname(filePath), `.optimized${extname(filePath)}`);

    await pipeline.toFile(outputPath);

    const outputStats = await stat(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const savedPercent = (((stats.size - outputStats.size) / stats.size) * 100).toFixed(1);

    console.log(`✅ Saved ${savedPercent}% - ${outputPath} (${outputSizeMB}MB)`);
    console.log(`   Original: ${sizeMB}MB → Optimized: ${outputSizeMB}MB\n`);

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  try {
    const files = await getFiles(PUBLIC_DIR);
    console.log(`Found ${files.length} images to process\n`);

    for (const file of files) {
      await optimizeImage(file);
    }

    console.log('\n✨ Image optimization complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Review the .optimized files in the public folder');
    console.log('2. Replace original files with optimized versions if satisfied');
    console.log('3. Delete the .optimized files after replacing originals');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
