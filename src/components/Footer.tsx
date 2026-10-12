import React from 'react';
import { 
  Shield, 
  Terminal, 
  Github, 
  Youtube, 
  Send, 
  Twitter, 
  Instagram, 
  Heart,
  ExternalLink,
  Lock,
  ArrowUp
} from 'lucide-react';
import { PageId } from './Navbar';
import { OFFICIAL_SOCIAL_LINKS, BRAND_INFO } from '../data/brandData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeployModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B0F] border-t border-[#1B3A2E] text-[#8CA99B] text-xs font-mono transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column (Cols: 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#101820] border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88] font-bold">
                8W
              </div>
              <span className="text-xl font-bold font-mono text-[#E6FFF2] tracking-wider">
                8WHIE
              </span>
            </div>
            
            <p className="text-xs text-[#8CA99B] leading-relaxed max-w-sm font-sans">
              Worldwide Hackers Intelligence & Ethics. A premier cybersecurity education and research platform dedicated to accessible, practical, and legally responsible security training.
            </p>

            <div className="p-3 bg-[#101820] border border-[#1B3A2E] rounded space-y-1">
              <div className="text-xs text-[#E6FFF2] font-semibold">
                Founded by Aryan Thakur
              </div>
              <div className="text-[11px] text-[#00FF88]">
                Official Domain: https://8whie.page.gd
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/8WHIE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 text-[#8CA99B] hover:text-[#00FF88] rounded transition-colors"
                title="GitHub @8WHIE"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@8WHIE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#FF5F56]/40 text-[#8CA99B] hover:text-[#FF5F56] rounded transition-colors"
                title="YouTube @8WHIE"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/whiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 text-[#8CA99B] hover:text-[#00FF88] rounded transition-colors"
                title="Telegram @whiee"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/im_aryanthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 text-[#8CA99B] hover:text-[#00FF88] rounded transition-colors"
                title="X / Twitter @im_aryanthakur"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/8whie_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 text-[#8CA99B] hover:text-[#E6FFF2] rounded transition-colors"
                title="Instagram @8whie_"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Educational Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#E6FFF2] uppercase tracking-wider">
              Educational Hub
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('academy')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Cybersecurity Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knowledge')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Knowledge Base Docs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Security Tools Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Technical Blog & Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('videos')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Video Masterclasses
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Organization & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#E6FFF2] uppercase tracking-wider">
              Organization
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  About 8WHIE
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Open-Source Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#00FF88] transition-colors"
                >
                  Contact & Direct Support
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeployModal}
                  className="text-[#00FF88] hover:underline transition-colors flex items-center gap-1"
                >
                  <span>InfinityFree Deploy Pack</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#E6FFF2] uppercase tracking-wider">
              Official Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/Iaaryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF88] flex items-center gap-1"
                >
                  <span>Telegram: @Iaaryan</span>
                  <ExternalLink className="w-3 h-3 text-[#1B3A2E]" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/whiee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF88] flex items-center gap-1"
                >
                  <span>Channel: @whiee</span>
                  <ExternalLink className="w-3 h-3 text-[#1B3A2E]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/imarykt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF88] flex items-center gap-1"
                >
                  <span>Instagram: @imarykt</span>
                  <ExternalLink className="w-3 h-3 text-[#1B3A2E]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/8WHIE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00FF88] flex items-center gap-1"
                >
                  <span>GitHub: @8WHIE</span>
                  <ExternalLink className="w-3 h-3 text-[#1B3A2E]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="p-4 bg-[#101820] border border-[#1B3A2E] rounded text-[11px] leading-relaxed space-y-1">
          <div className="text-[#FFB020] font-bold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>ETHICAL RESEARCH & LEGAL COMPLIANCE DISCLAIMER</span>
          </div>
          <p className="font-sans text-[#8CA99B]">
            8WHIE (Worldwide Hackers Intelligence & Ethics) provides strictly educational, defensive, and authorized cybersecurity content. All scanning tools, packet analyzers, and penetration testing methods discussed are intended exclusively for systems where the researcher holds verified, written authorization. 8WHIE and its founder Aryan Thakur explicitly disclaim liability for unauthorized usage.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#1B3A2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} <span className="text-[#E6FFF2] font-semibold">8WHIE</span> · Founded by <span className="text-[#00FF88]">Aryan Thakur</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="/sitemap.xml" className="hover:text-[#00FF88]">sitemap.xml</a>
            <a href="/robots.txt" className="hover:text-[#00FF88]">robots.txt</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#00FF88] hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
