import React from 'react';
import { 
  Shield, 
  Terminal, 
  User, 
  CheckCircle2, 
  Target, 
  Eye, 
  Globe2, 
  ExternalLink, 
  Github, 
  Youtube, 
  Send, 
  Twitter,
  Instagram,
  Lock,
  Layers
} from 'lucide-react';
import { BRAND_INFO, OFFICIAL_SOCIAL_LINKS } from '../data/brandData';

export const AboutView: React.FC = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Brand Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <Shield className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>About Worldwide Hackers Intelligence & Ethics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          8WHIE
        </h1>
        <p className="text-lg font-mono text-[#00FF88] font-semibold">
          Worldwide Hackers Intelligence & Ethics
        </p>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
          {BRAND_INFO.description}
        </p>
        <div className="p-3 bg-[#101820] border border-[#1B3A2E] rounded-md inline-block">
          <span className="text-xs font-mono text-[#E6FFF2]">
            Official Platform: <span className="text-[#00FF88]">https://8whie.page.gd</span> · Founded by <span className="text-[#00FF88] font-semibold">Aryan Thakur</span>
          </span>
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission */}
        <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-3 cyber-glow">
          <div className="w-10 h-10 rounded-lg bg-[#080B0F] border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88]">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2]">
            Our Mission
          </h2>
          <p className="text-sm text-[#8CA99B] font-sans leading-relaxed">
            &quot;{BRAND_INFO.mission}&quot;
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#080B0F] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
            <Eye className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2]">
            Our Vision
          </h2>
          <p className="text-sm text-[#8CA99B] font-sans leading-relaxed">
            {BRAND_INFO.vision}
          </p>
        </div>
      </div>

      {/* Founder Information Section */}
      <div className="bg-[#101820] border border-[#1B3A2E] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1B3A2E]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#080B0F] border-2 border-[#00FF88]/50 flex items-center justify-center text-[#00FF88] shrink-0 font-mono font-black text-2xl shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              AT
            </div>
            <div>
              <span className="text-xs font-mono text-[#00FF88] uppercase tracking-wider">
                Founder & Owner
              </span>
              <h2 className="text-2xl font-black font-mono text-[#E6FFF2]">
                Aryan Thakur
              </h2>
              <span className="text-xs font-mono text-[#8CA99B]">
                Creator of 8WHIE · Security Researcher & Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://x.com/im_aryanthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="X / Twitter @im_aryanthakur"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/imarykt/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="Personal Instagram @imarykt"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/Iaaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="Telegram @Iaaryan"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#8CA99B] font-sans leading-relaxed">
          <p>
            Founded by <strong className="text-[#E6FFF2] font-semibold">Aryan Thakur</strong>, 8WHIE was created to bridge the critical gap between theoretical computing concepts and applied cybersecurity proficiency. Rather than treating security as an inaccessible craft, 8WHIE emphasizes transparent methodology, open-source tooling, and strict legal accountability.
          </p>
          <p>
            Every resource published on 8WHIE adheres strictly to responsible vulnerability disclosure principles and authorized research standards. We advocate for a defensive-first mindset where understanding offensive attack mechanisms serves solely to build resilient systems.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-mono text-[#E6FFF2] flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#00FF88]" />
          <span>Core Values & Principles</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_INFO.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#101820] border border-[#1B3A2E] rounded-lg space-y-2.5 transition-all hover:border-[#00FF88]/40 cyber-border"
            >
              <span className="text-xs font-mono text-[#00FF88]">0{idx + 1}. Principle</span>
              <h3 className="text-base font-bold font-mono text-[#E6FFF2]">
                {val.title}
              </h3>
              <p className="text-xs text-[#8CA99B] font-sans leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Official Community and Social Links */}
      <div className="space-y-6 pt-4 border-t border-[#1B3A2E]">
        <div>
          <h2 className="text-2xl font-bold font-mono text-[#E6FFF2]">
            Official Brand & Social Channels
          </h2>
          <p className="text-xs sm:text-sm text-[#8CA99B] font-sans">
            Connect directly with 8WHIE and Aryan Thakur across verified platforms:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFICIAL_SOCIAL_LINKS.map((soc) => (
            <a
              key={soc.id}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg flex items-start justify-between gap-3 transition-all hover:bg-[#111C20] group"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#00FF88] uppercase">
                  {soc.category}
                </span>
                <h3 className="text-sm font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                  {soc.name}
                </h3>
                <span className="text-xs font-mono text-[#8CA99B] block">
                  {soc.handle}
                </span>
                <p className="text-xs text-[#8CA99B] font-sans pt-1">
                  {soc.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#8CA99B] group-hover:text-[#00FF88] shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
