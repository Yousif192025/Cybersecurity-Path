const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/assets/images');

async function optimizeImages() {
  try {
    const files = await imagemin([`${IMAGES_DIR}/*.{jpg,jpeg,png,svg}`], {
      destination: IMAGES_DIR,
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
        svgo()
      ]
    });
    console.log(`Optimized ${files.length} images.`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
