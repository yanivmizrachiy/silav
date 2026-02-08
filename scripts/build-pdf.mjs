import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.join(ROOT, 'מעצב.pdf');
const PDF_HTML_PATH = path.join(ROOT, 'pdf.html');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });

await page.goto(`file://${PDF_HTML_PATH}`, { waitUntil: 'networkidle' });

await page.pdf({
  path: OUTPUT_PATH,
  format: 'A4',
  printBackground: true,
  margin: {
    top: '0mm',
    right: '0mm',
    bottom: '0mm',
    left: '0mm',
  },
});

await browser.close();

console.log(`PDF created: ${OUTPUT_PATH}`);
