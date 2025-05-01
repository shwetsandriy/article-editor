// copy-md-files.js
import fs from 'fs';
import path from 'path';

const srcDir = './src/articles';
const publicDir = './public/articles';

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (srcPath.endsWith('.md')) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyRecursive(srcDir, publicDir);
console.log('✅ Markdown files copied to public/articles');
