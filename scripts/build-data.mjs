import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const root = process.cwd();
const dataDir = path.join(root, 'data');
const imageFolderName = fs.existsSync(path.join(root, 'Images'))
  ? 'Images'
  : fs.existsSync(path.join(root, 'images'))
    ? 'images'
    : 'Images';
const imagesDir = path.join(root, imageFolderName);

fs.mkdirSync(dataDir, { recursive: true });

function readExcel(fileName) {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`No existe ${filePath}`);
    return [];
  }
  const wb = XLSX.readFile(filePath);
  return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: '' });
}

function writeJson(fileName, rows) {
  fs.writeFileSync(path.join(dataDir, fileName), JSON.stringify(rows, null, 2), 'utf8');
  console.log(`Generado data/${fileName}: ${rows.length} filas`);
}

function buildImagesManifest() {
  const manifest = {};
  if (!fs.existsSync(imagesDir)) return manifest;
  for (const folder of fs.readdirSync(imagesDir)) {
    const full = path.join(imagesDir, folder);
    if (!fs.statSync(full).isDirectory()) continue;
    const files = fs.readdirSync(full)
      .filter(file => /\.(jpe?g|png|webp)$/i.test(file))
      .sort()
      .map(file => `${imageFolderName}/${folder}/${file}`);
    if (files.length) manifest[folder] = files;
  }
  return manifest;
}

writeJson('products.json', readExcel('datos-stock-codigo.xlsx'));
writeJson('customers.json', readExcel('bbdd-clientes.xlsx'));
fs.writeFileSync(path.join(dataDir, 'collections-images.json'), JSON.stringify(buildImagesManifest(), null, 2), 'utf8');
console.log('Generado data/collections-images.json');
