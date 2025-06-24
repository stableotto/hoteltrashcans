#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const bucket = 'hoteltrashcans-images';

// Collection numbers to names mapping
const collectionMapping = {
  1: 'portola',
  2: 'canon', 
  3: 'hillcrest',
  4: 'metro',
  5: 'facet',
  6: 'rodeo',
  7: 'piru',
  8: 'montecito',
  9: 'fillmore'
};

// Color variations per collection
const colorsByCollection = {
  1: ['black', 'white', 'chrome', 'gold', 'bronze', 'silver', 'copper', 'brass', 'nickel', 'pewter', 'titanium', 'steel', 'aluminum', 'zinc', 'iron', 'lead', 'tin', 'cobalt', 'platinum', 'palladium'],
  2: ['black', 'white', 'gray', 'charcoal', 'navy', 'beige', 'cream', 'taupe', 'stone', 'slate', 'ash', 'smoke', 'pearl', 'ivory', 'bone', 'linen', 'sand', 'dove', 'silver', 'platinum'],
  3: ['mahogany', 'oak', 'walnut', 'cherry', 'maple', 'pine', 'cedar', 'birch', 'ash', 'elm', 'beech', 'hickory', 'poplar', 'willow', 'bamboo', 'teak', 'rosewood', 'ebony', 'redwood', 'chestnut'],
  4: ['bamboo', 'cork', 'hemp', 'jute', 'linen', 'cotton', 'wool', 'silk', 'flax', 'kenaf', 'ramie', 'nettle', 'yak', 'alpaca', 'cashmere', 'mohair', 'angora', 'camel', 'llama', 'vicuna'],
  5: ['white', 'black', 'gray', 'cream', 'beige', 'ivory', 'pearl', 'snow', 'chalk', 'milk', 'vanilla', 'eggshell', 'linen', 'cotton', 'paper', 'cloud', 'fog', 'mist', 'ash', 'stone'],
  6: ['steel', 'iron', 'aluminum', 'copper', 'brass', 'bronze', 'zinc', 'nickel', 'chrome', 'titanium', 'tungsten', 'cobalt', 'lead', 'tin', 'pewter', 'silver', 'gold', 'platinum', 'palladium', 'rhodium'],
  7: ['rose-gold', 'champagne', 'blush', 'nude', 'peach', 'coral', 'salmon', 'pink', 'magenta', 'fuchsia', 'lavender', 'lilac', 'mauve', 'plum', 'burgundy', 'wine', 'maroon', 'crimson', 'scarlet', 'ruby'],
  8: ['sage', 'mint', 'eucalyptus', 'jade', 'emerald', 'forest', 'pine', 'olive', 'lime', 'chartreuse', 'aqua', 'teal', 'turquoise', 'cyan', 'azure', 'cerulean', 'cobalt', 'navy', 'indigo', 'violet'],
  9: ['ebony', 'charcoal', 'graphite', 'slate', 'onyx', 'jet', 'coal', 'soot', 'obsidian', 'midnight', 'shadow', 'storm', 'thunder', 'smoke', 'ash', 'pewter', 'gunmetal', 'steel', 'iron', 'titanium']
};

// Simple filename to R2 path mapping
const imageMapping = {
  // Site images
  'hero.jpg': 'hero.webp',
  'client1.jpg': 'client1.webp',
  'client2.jpg': 'client2.webp',
  'client3.jpg': 'client3.webp',
  'client4.jpg': 'client4.webp',
  'client5.jpg': 'client5.webp',
  'client6.jpg': 'client6.webp',
  'cta.jpg': 'cta.webp',
  'showcase1.jpg': 'showcase1.webp',
  'showcase2.jpg': 'showcase2.webp',
  'showcase3.jpg': 'showcase3.webp',
  'showcase4.jpg': 'showcase4.webp',
  'showcase5.jpg': 'showcase5.webp',
  'showcase6.jpg': 'showcase6.webp',
  
  // Collection covers
  'cover1.jpg': 'portola-cover.webp',
  'cover2.jpg': 'canon-cover.webp',
  'cover3.jpg': 'hillcrest-cover.webp',
  'cover4.jpg': 'metro-cover.webp',
  'cover5.jpg': 'facet-cover.webp',
  'cover6.jpg': 'rodeo-cover.webp',
  'cover7.jpg': 'piru-cover.webp',
  'cover8.jpg': 'montecito-cover.webp',
  'cover9.jpg': 'fillmore-cover.webp',
  
  // Collection heroes
  'collection-hero1.jpg': 'portola-hero.webp',
  'collection-hero2.jpg': 'canon-hero.webp',
  'collection-hero3.jpg': 'hillcrest-hero.webp',
  'collection-hero4.jpg': 'metro-hero.webp',
  'collection-hero5.jpg': 'facet-hero.webp',
  'collection-hero6.jpg': 'rodeo-hero.webp',
  'collection-hero7.jpg': 'piru-hero.webp',
  'collection-hero8.jpg': 'montecito-hero.webp',
  'collection-hero9.jpg': 'fillmore-hero.webp',
  
  // Collection main products
  'main1.jpg': 'portola-main.webp',
  'main2.jpg': 'canon-main.webp',
  'main3.jpg': 'hillcrest-main.webp',
  'main4.jpg': 'metro-main.webp',
  'main5.jpg': 'facet-main.webp',
  'main6.jpg': 'rodeo-main.webp',
  'main7.jpg': 'piru-main.webp',
  'main8.jpg': 'montecito-main.webp',
  'main9.jpg': 'fillmore-main.webp'
};

// Add color variations to imageMapping
Object.keys(collectionMapping).forEach(collectionNum => {
  const collectionName = collectionMapping[collectionNum];
  const colors = colorsByCollection[collectionNum];
  
  colors.forEach(color => {
    const sourceFile = `variation${collectionNum}-${color}.jpg`;
    const targetFile = `${collectionName}-${color}.webp`;
    imageMapping[sourceFile] = targetFile;
  });
});

async function main() {
  const sourceDir = './source-images';
  
  if (!fs.existsSync(sourceDir)) {
    console.log('❌ source-images folder not found');
    console.log('💡 Create it and add your images');
    return;
  }
  
  const files = fs.readdirSync(sourceDir).filter(f => 
    f.toLowerCase().endsWith('.jpg') || 
    f.toLowerCase().endsWith('.jpeg') || 
    f.toLowerCase().endsWith('.png')
  );
  
  if (files.length === 0) {
    console.log('❌ No image files found in source-images/');
    return;
  }
  
  console.log('🚀 SMART UPLOAD COMMANDS\n');
  console.log('Copy & paste these commands:\n');
  
  const commands = [];
  let processedCount = 0;
  let totalVariations = 0;
  
  // Track which collections have variations
  const variationCounts = {};
  
  files.forEach(filename => {
    const targetPath = imageMapping[filename];
    
    if (targetPath) {
      const sourcePath = path.join(sourceDir, filename);
      const command = `wrangler r2 object put ${bucket}/${targetPath} --file="${sourcePath}"`;
      commands.push(command);
      
      // Track if this is a variation
      if (filename.startsWith('variation')) {
        const collectionNum = filename.match(/variation(\d+)/)[1];
        variationCounts[collectionNum] = (variationCounts[collectionNum] || 0) + 1;
        totalVariations++;
      }
      
      processedCount++;
      console.log(`✅ ${filename} → ${targetPath}`);
      console.log(`   ${command}\n`);
    } else {
      console.log(`❓ ${filename} → No mapping found (skipped)\n`);
    }
  });
  
  console.log('=' * 60);
  console.log(`📊 SUMMARY:`);
  console.log(`   Found: ${files.length} files`);
  console.log(`   Mapped: ${processedCount} files`);
  console.log(`   Color variations: ${totalVariations}/180 total`);
  
  if (Object.keys(variationCounts).length > 0) {
    console.log('\n📈 Color variations by collection:');
    Object.keys(variationCounts).forEach(num => {
      const collectionName = collectionMapping[num];
      const count = variationCounts[num];
      console.log(`   ${collectionName}: ${count}/20 colors`);
    });
  }
  
  console.log('\n💡 TO UPLOAD ALL AT ONCE:');
  console.log('Copy all commands above and paste into terminal\n');
  
  // Write commands to file for easy copying
  fs.writeFileSync('upload-commands.txt', commands.join('\n'));
  console.log('📄 Commands saved to: upload-commands.txt');
}

main().catch(console.error); 