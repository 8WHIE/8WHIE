import React, { useState } from 'react';
import { 
  X, 
  CloudDownload, 
  Check, 
  FolderCheck, 
  Terminal, 
  ExternalLink, 
  Server, 
  FileText, 
  HelpCircle,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import JSZip from 'jszip';

interface InfinityFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfinityFreeModal: React.FC<InfinityFreeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();

      // Read current HTML
      const htmlContent = document.documentElement.outerHTML;

      // Add files to zip
      zip.file(
        'index.html',
        `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>8WHIE | Cybersecurity & Ethical Hacking</title>
    <meta name="description" content="Worldwide Hackers Intelligence & Ethics. Practical cybersecurity education, Linux, ethical hacking, and open-source research. Founded by Aryan Thakur." />
    <meta name="author" content="Aryan Thakur" />
    <link rel="canonical" href="https://8whie.page.gd" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#080B0F] text-[#E6FFF2]">
    <div id="root"></div>
    <!-- 8WHIE Production Assets -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
      );

      // Add .htaccess for InfinityFree Apache server
      zip.file(
        '.htaccess',
        `# 8WHIE - InfinityFree Apache Web Server Configuration
# Target Domain: https://8whie.page.gd
# Target Directory: /htdocs

RewriteEngine On
RewriteBase /

# Ensure HTTPS redirection
RewriteCond %{HTTP:X-Forwarded-Proto} !https [NC]
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Route all client-side navigation to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L,QSA]

# Security Headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
`
      );

      // Add robots.txt
      zip.file(
        'robots.txt',
        `User-agent: *\nAllow: /\n\nSitemap: https://8whie.page.gd/sitemap.xml\n`
      );

      // Add sitemap.xml
      zip.file(
        'sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://8whie.page.gd/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://8whie.page.gd/#academy</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://8whie.page.gd/#tools</loc>
    <priority>0.8</priority>
  </url>
</urlset>`
      );

      // Add instructions file
      zip.file(
        'DEPLOY_TO_INFINITYFREE_HTDOCS.txt',
        `====================================================================
8WHIE OFFICIAL INFINITYFREE DEPLOYMENT INSTRUCTIONS
Website: https://8whie.page.gd
Founder: Aryan Thakur
Brand: 8WHIE (Worldwide Hackers Intelligence & Ethics)
====================================================================

STEP 1: LOGIN TO INFINITYFREE
--------------------------------------------------------------------
1. Log in to your InfinityFree Control Panel (https://dash.infinityfree.com).
2. Select your hosting account associated with domain '8whie.page.gd'.

STEP 2: OPEN FILE MANAGER OR FTP
--------------------------------------------------------------------
Option A (Browser File Manager):
- Click on "Online File Manager" inside InfinityFree cPanel.
- Navigate inside the "htdocs" folder:
  /8whie.page.gd/htdocs/

Option B (FTP client like FileZilla):
- Host: ftpupload.net
- Port: 21
- Username: Your InfinityFree vPanel username (e.g. if0_xxxxxxxx)
- Password: Your InfinityFree account password
- Remote path: /htdocs/

STEP 3: UPLOAD WEBSITE FILES
--------------------------------------------------------------------
If you run 'npm run build' locally:
- Upload all contents of the generated 'dist/' folder directly into 'htdocs'.
- Ensure 'index.html' is located at the root of 'htdocs':
  /htdocs/index.html
  /htdocs/.htaccess
  /htdocs/robots.txt
  /htdocs/sitemap.xml
  /htdocs/assets/ (all JS & CSS bundles)

STEP 4: VERIFY ON LIVE DOMAIN
--------------------------------------------------------------------
Visit https://8whie.page.gd in your browser!
The static site runs without requiring Node.js, Express, or backend databases.

====================================================================
`
      );

      const blob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = '8WHIE-InfinityFree-htdocs.zip';
      link.click();
      URL.revokeObjectURL(link.href);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } catch (err) {
      console.error('Failed to create zip', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#080B0F] border border-[#1B3A2E] rounded-xl shadow-2xl overflow-hidden my-auto cyber-glow flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#101820] border-b border-[#1B3A2E] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-[#00FF88]" />
            <h2 className="text-base sm:text-lg font-bold font-mono text-[#E6FFF2]">
              InfinityFree Deployment Guide (htdocs)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] hover:bg-[#080B0F] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm font-sans text-[#E6FFF2]">
          
          <div className="p-4 bg-[#101820] border border-[#00FF88]/40 rounded-lg space-y-2">
            <span className="font-mono font-bold text-[#00FF88] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Target Domain: https://8whie.page.gd</span>
            </span>
            <p className="text-xs text-[#8CA99B] leading-relaxed">
              8WHIE is architected as a 100% static client-side single page application (SPA). It requires zero Node.js runtime, zero Docker containers, and zero external relational databases. It drops directly into InfinityFree’s <code className="text-[#00FF88]">htdocs</code> folder.
            </p>
          </div>

          {/* Step by Step list */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-[#E6FFF2] text-sm">
              Deployment Workflow to InfinityFree
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#101820] border border-[#1B3A2E] rounded flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-[#080B0F] text-[#00FF88] flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <span className="font-bold text-[#E6FFF2]">Run Build locally or Download ZIP</span>
                  <p className="text-[#8CA99B] text-[11px] font-sans mt-0.5">
                    Executing <code className="text-[#00FF88]">npm run build</code> generates a <code className="text-[#00FF88]">dist/</code> directory containing optimized <code className="text-[#00FF88]">index.html</code> and bundled JavaScript/CSS.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#101820] border border-[#1B3A2E] rounded flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-[#080B0F] text-[#00FF88] flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <span className="font-bold text-[#E6FFF2]">Open InfinityFree Online File Manager</span>
                  <p className="text-[#8CA99B] text-[11px] font-sans mt-0.5">
                    Navigate to <code className="text-[#00FF88]">/8whie.page.gd/htdocs/</code> (or connect via FileZilla FTP to <code className="text-[#00FF88]">ftpupload.net</code>).
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#101820] border border-[#1B3A2E] rounded flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-[#080B0F] text-[#00FF88] flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <span className="font-bold text-[#E6FFF2]">Upload All Files into htdocs</span>
                  <p className="text-[#8CA99B] text-[11px] font-sans mt-0.5">
                    Ensure <code className="text-[#00FF88]">index.html</code> and <code className="text-[#00FF88]">.htaccess</code> sit directly at the root of <code className="text-[#00FF88]">htdocs</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Files Manifest */}
          <div className="p-4 bg-[#101820] border border-[#1B3A2E] rounded space-y-2">
            <span className="font-mono text-xs text-[#00FF88] font-bold">Files included in htdocs:</span>
            <div className="font-mono text-[11px] text-[#8CA99B] space-y-1">
              <div>📄 <span className="text-[#E6FFF2]">htdocs/index.html</span> (Root entry point)</div>
              <div>⚙️ <span className="text-[#E6FFF2]">htdocs/.htaccess</span> (Apache HTTPS & SPA routing)</div>
              <div>🤖 <span className="text-[#E6FFF2]">htdocs/robots.txt</span> (Search engine rules)</div>
              <div>🗺️ <span className="text-[#E6FFF2]">htdocs/sitemap.xml</span> (SEO page index)</div>
              <div>🛡️ <span className="text-[#E6FFF2]">htdocs/favicon.svg</span> (8WHIE cyber brand mark)</div>
              <div>📁 <span className="text-[#E6FFF2]">htdocs/assets/</span> (Bundled JS & Tailwind CSS)</div>
            </div>
          </div>

        </div>

        {/* Modal Footer with One-Click Zip Download */}
        <div className="p-4 bg-[#101820] border-t border-[#1B3A2E] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#8CA99B] hover:text-[#E6FFF2]"
          >
            Close
          </button>

          <button
            onClick={handleDownloadZip}
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] disabled:opacity-50"
          >
            {downloading ? (
              <span>Packing ZIP...</span>
            ) : downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <CloudDownload className="w-4 h-4" />
                <span>Download 8WHIE-htdocs.zip</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
