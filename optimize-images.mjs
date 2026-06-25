import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const optimizedDir = path.join(publicDir, 'optimized');

// Criar pasta de imagens otimizadas
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

console.log('🚀 Iniciando otimização de imagens...\n');

// Otimizar dashpraxis2.png (266KB)
try {
  await sharp(path.join(publicDir, 'dashpraxis2.png'))
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(optimizedDir, 'dashpraxis2.webp'));
  console.log('✅ dashpraxis2.png → dashpraxis2.webp');
} catch (error) {
  console.log('❌ Erro ao otimizar dashpraxis2.png:', error.message);
}

// Otimizar dashpraxis3.png (254KB)
try {
  await sharp(path.join(publicDir, 'dashpraxis3.png'))
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(optimizedDir, 'dashpraxis3.webp'));
  console.log('✅ dashpraxis3.png → dashpraxis3.webp');
} catch (error) {
  console.log('❌ Erro ao otimizar dashpraxis3.png:', error.message);
}

// Otimizar dashpraxis4.png (197KB)
try {
  await sharp(path.join(publicDir, 'dashpraxis4.png'))
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(optimizedDir, 'dashpraxis4.webp'));
  console.log('✅ dashpraxis4.png → dashpraxis4.webp');
} catch (error) {
  console.log('❌ Erro ao otimizar dashpraxis4.png:', error.message);
}

// Otimizar dashpraxis5.png (200KB)
try {
  await sharp(path.join(publicDir, 'dashpraxis5.png'))
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(optimizedDir, 'dashpraxis5.webp'));
  console.log('✅ dashpraxis5.png → dashpraxis5.webp');
} catch (error) {
  console.log('❌ Erro ao otimizar dashpraxis5.png:', error.message);
}

// Otimizar favicon.png (60KB)
try {
  await sharp(path.join(publicDir, 'favicon.png'))
    .png({ quality: 85, compressionLevel: 9, progressive: true })
    .toFile(path.join(optimizedDir, 'favicon-optimized.png'));
  console.log('✅ favicon.png → favicon-optimized.png');
} catch (error) {
  console.log('❌ Erro ao otimizar favicon.png:', error.message);
}

console.log('\n✨ Otimização concluída! Verifique a pasta public/optimized/');
