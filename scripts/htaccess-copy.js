import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source .htaccess file in project root (script is in 'scripts' folder)
const sourceFile = path.join(__dirname, '..', '.htaccess');
// Destination folder based on build input
const destFile = path.join(__dirname, '..', '', '.htaccess');

try {
  // Check if source file exists
  if (!fs.existsSync(sourceFile)) {
    console.error('❌ Error: .htaccess template file not found in project root');
    process.exit(1);
  }

  // Ensure build directory exists
  const buildDir = path.join(__dirname, '..', '');
  if (!fs.existsSync(buildDir)) {
    console.error(`❌ Error: ${buildDir} directory not found. Run build first.`);
    process.exit(1);
  }

  // Copy .htaccess file
  fs.copyFileSync(sourceFile, destFile);
  console.log('✅ .htaccess file copied to  folder successfully');
} catch (error) {
  console.error('❌ Error copying .htaccess file:', error.message);
  process.exit(1);
}
