import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function zipDist() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist! Run npm run build first.');
    process.exit(1);
  }

  const zip = new JSZip();

  function addFolderToZip(folderPath, zipFolder) {
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const fullPath = path.join(folderPath, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const subZip = zipFolder.folder(file);
        addFolderToZip(fullPath, subZip);
      } else {
        const content = fs.readFileSync(fullPath);
        zipFolder.file(file, content);
      }
    }
  }

  addFolderToZip(distDir, zip);

  // Add deploy guide directly into zip root
  const deployReadme = `====================================================================
8WHIE OFFICIAL INFINITYFREE HTDOCS DEPLOYMENT GUIDE
Target Domain: https://8whie.page.gd
Founder: Aryan Thakur
Brand: 8WHIE (Worldwide Hackers Intelligence & Ethics)
====================================================================

HOW TO DEPLOY TO INFINITYFREE:
1. Log in to your InfinityFree control panel (https://dash.infinityfree.com).
2. Open the Online File Manager (or connect using FileZilla FTP).
3. Open the "htdocs" folder for 8whie.page.gd.
4. Upload all files and folders extracted from this ZIP directly into "htdocs":
   - index.html
   - .htaccess
   - robots.txt
   - sitemap.xml
   - favicon.svg
   - assets/ (all JavaScript and CSS bundles)
5. Visit https://8whie.page.gd in your browser!
====================================================================`;
  zip.file('README-INFINITYFREE.txt', deployReadme);

  const buffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  const outputPath = path.resolve('8WHIE-htdocs.zip');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Successfully generated ${outputPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

zipDist().catch(console.error);
