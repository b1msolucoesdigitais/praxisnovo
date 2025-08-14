const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Criar pasta de imagens otimizadas
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

// Configurações de otimização
const optimizationConfig = {
  png: {
    quality: 85,
    compressionLevel: 9,
    progressive: true
  },
  webp: {
    quality: 80,
    effort: 6
  },
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  }
};

// Função para otimizar imagem
async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    
    if (format === 'webp') {
      await image
        .webp(optimizationConfig.webp)
        .toFile(outputPath);
    } else if (format === 'png') {
      await image
        .png(optimizationConfig.png)
        .toFile(outputPath);
    } else if (format === 'jpeg') {
      await image
        .jpeg(optimizationConfig.jpeg)
        .toFile(outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% menor)`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
    return null;
  }
}

// Função principal
async function optimizeAllImages() {
  console.log('🚀 Iniciando otimização de imagens...\n');
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg)$/i.test(file) && 
    !file.includes('favicon') && 
    !file.includes('og-')
  );
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const fileName = path.parse(file).name;
    
    // Criar versão WebP (melhor compressão)
    const webpPath = path.join(optimizedDir, `${fileName}.webp`);
    const result = await optimizeImage(inputPath, webpPath, 'webp');
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
  }
  
  // Otimizar favicon separadamente
  const faviconPath = path.join(publicDir, 'favicon.png');
  const optimizedFaviconPath = path.join(optimizedDir, 'favicon-optimized.png');
  await optimizeImage(faviconPath, optimizedFaviconPath, 'png');
  
  // Otimizar og-image
  const ogImagePath = path.join(publicDir, 'og-praxis.png');
  const optimizedOgPath = path.join(optimizedDir, 'og-praxis-optimized.png');
  await optimizeImage(ogImagePath, optimizedOgPath, 'png');
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('\n📊 Resumo da Otimização:');
  console.log(`📁 Pasta criada: ${optimizedDir}`);
  console.log(`💾 Tamanho original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Tamanho otimizado: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎯 Economia total: ${totalSavings}%`);
  console.log('\n✨ Todas as imagens foram otimizadas!');
}

// Executar otimização
optimizeAllImages().catch(console.error);
