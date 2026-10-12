import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Shield, 
  Terminal, 
  FolderGit2, 
  Newspaper, 
  Youtube, 
  Send, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  Check, 
  Cpu, 
  Lock,
  Play,
  Github,
  Globe2
} from 'lucide-react';
import { ACADEMY_LESSONS } from '../data/academyData';
import { SECURITY_TOOLS } from '../data/toolsData';
import { BLOG_POSTS } from '../data/blogData';
import { SECURITY_PROJECTS } from '../data/projectsData';
import { VIDEO_SERIES } from '../data/videosData';
import { BRAND_INFO, OFFICIAL_SOCIAL_LINKS } from '../data/brandData';
import { PageId } from './Navbar';

interface HomeSectionsProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenDeployModal: () => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({ onNavigate, onOpenDeployModal }) => {
  const featuredTutorials = ACADEMY_LESSONS.slice(0, 3);
  const latestArticles = BLOG_POSTS.slice(0, 3);
  const featuredTools = SECURITY_TOOLS.slice(0, 3);
  const featuredProjects = SECURITY_PROJECTS.slice(0, 2);

  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* SECTION 1: Featured Tutorials */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PRACTICAL ACADEMY MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6FFF2]">
              Featured Security Tutorials
            </h2>
            <p className="text-xs sm:text-sm text-[#8CA99B] font-sans">
              Hand-crafted step-by-step guides for mastering authorized security assessments.
            </p>
          </div>
          <button
            onClick={() => onNavigate('academy')}
            className="flex items-center gap-1.5 text-xs font-mono text-[#00FF88] hover:underline shrink-0"
          >
            <span>View All Academy Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTutorials.map((tut) => (
            <div
              key={tut.id}
              onClick={() => onNavigate('academy', tut.id)}
              className="p-5 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg cursor-pointer flex flex-col justify-between space-y-4 transition-all hover:bg-[#111C20] cyber-border group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{tut.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00FF88]" />
                    {tut.readingTime}
                  </span>
                </div>
                <h3 className="text-base font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors leading-snug">
                  {tut.title}
                </h3>
                <p className="text-xs text-[#8CA99B] line-clamp-2 leading-relaxed font-sans">
                  {tut.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1B3A2E]/60 flex items-center justify-between text-xs font-mono text-[#00FF88]">
                <span>Read Tutorial</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Learning Paths */}
      <section className="p-8 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-8 cyber-glow">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
            <Terminal className="w-3.5 h-3.5" />
            <span>PROGRESSIVE SYLLABUS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6FFF2]">
            Structured Cybersecurity Learning Paths
          </h2>
          <p className="text-xs sm:text-sm text-[#8CA99B] font-sans">
            Choose your specialization path to transition from command-line fundamentals to professional security research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Path 1 */}
          <div className="p-5 bg-[#080B0F] border border-[#1B3A2E] rounded-lg space-y-3">
            <span className="text-xs font-mono text-[#00FF88] font-bold">Path 01</span>
            <h3 className="text-base font-bold font-mono text-[#E6FFF2]">Offensive Pentesting</h3>
            <p className="text-xs text-[#8CA99B] font-sans leading-relaxed">
              Master Kali Linux, network discovery with Nmap, web vulnerability testing (OWASP Top 10), and bug bounty reconnaissance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('academy')}
                className="text-xs font-mono text-[#00FF88] hover:underline flex items-center gap-1"
              >
                <span>Enter Pathway</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Path 2 */}
          <div className="p-5 bg-[#080B0F] border border-[#1B3A2E] rounded-lg space-y-3">
            <span className="text-xs font-mono text-[#00E5FF] font-bold">Path 02</span>
            <h3 className="text-base font-bold font-mono text-[#E6FFF2]">Defensive Operations</h3>
            <p className="text-xs text-[#8CA99B] font-sans leading-relaxed">
              Linux server hardening, stateful firewalls (UFW/iptables), packet dissection in Wireshark, and log analysis triage with Fail2ban.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('academy')}
                className="text-xs font-mono text-[#00E5FF] hover:underline flex items-center gap-1"
              >
                <span>Enter Pathway</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Path 3 */}
          <div className="p-5 bg-[#080B0F] border border-[#1B3A2E] rounded-lg space-y-3">
            <span className="text-xs font-mono text-[#A78BFA] font-bold">Path 03</span>
            <h3 className="text-base font-bold font-mono text-[#E6FFF2]">Open-Source Intelligence (OSINT)</h3>
            <p className="text-xs text-[#8CA99B] font-sans leading-relaxed">
              Digital footprint mapping, certificate transparency queries, threat feed automation with Python, and legal intelligence governance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('academy')}
                className="text-xs font-mono text-[#A78BFA] hover:underline flex items-center gap-1"
              >
                <span>Enter Pathway</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Latest Articles */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
              <Newspaper className="w-3.5 h-3.5" />
              <span>DISPATCHES & RESEARCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6FFF2]">
              Latest Security Research Articles
            </h2>
            <p className="text-xs sm:text-sm text-[#8CA99B] font-sans">
              Authored by Aryan Thakur on network architecture, Linux security, and ethics.
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center gap-1.5 text-xs font-mono text-[#00FF88] hover:underline shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onNavigate('blog', art.id)}
              className="p-5 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg cursor-pointer flex flex-col justify-between space-y-4 transition-all hover:bg-[#111C20] cyber-border group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readingTime}</span>
                </div>
                <h3 className="text-base font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#8CA99B] font-sans line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1B3A2E]/60 flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                <span>By {art.author}</span>
                <span className="text-[#00FF88] group-hover:translate-x-1 transition-transform">Read</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Open-Source Projects */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>CODEBASE & REPOSITORIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6FFF2]">
              Open-Source Security Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#8CA99B] font-sans">
              Practical utilities built and maintained under the 8WHIE organization.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-1.5 text-xs font-mono text-[#00FF88] hover:underline shrink-0"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-lg flex flex-col justify-between space-y-4 hover:border-[#00FF88]/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{p.category}</span>
                  <span className="px-2 py-0.5 rounded bg-[#080B0F] border border-[#1B3A2E]">{p.status}</span>
                </div>
                <h3 className="text-lg font-bold font-mono text-[#E6FFF2]">{p.name}</h3>
                <p className="text-xs text-[#8CA99B] font-sans leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.techStack.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-[#E6FFF2] bg-[#080B0F] px-2 py-0.5 rounded border border-[#1B3A2E]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1B3A2E] flex items-center justify-between">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#00FF88] hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Featured YouTube Videos */}
      <section className="p-8 bg-[#101820] border border-[#1B3A2E] rounded-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF5F56]">
              <Youtube className="w-4 h-4 text-[#FF5F56]" />
              <span>OFFICIAL YOUTUBE CHANNEL: @8WHIE</span>
            </div>
            <h2 className="text-2xl font-bold font-mono text-[#E6FFF2]">
              Hands-On Video Demonstrations
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@8WHIE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-white bg-[#CC0000] hover:bg-[#FF0000] rounded transition-colors shrink-0"
          >
            <span>Visit @8WHIE Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VIDEO_SERIES.slice(0, 3).map((v) => (
            <div key={v.id} className="p-4 bg-[#080B0F] border border-[#1B3A2E] rounded-lg space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8CA99B]">
                <span className="text-[#00FF88]">{v.level}</span>
                <span>{v.duration}</span>
              </div>
              <h3 className="text-sm font-bold font-mono text-[#E6FFF2] line-clamp-1">{v.title}</h3>
              <p className="text-xs text-[#8CA99B] font-sans line-clamp-2">{v.description}</p>
              <a
                href={v.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-xs font-mono text-[#00FF88] hover:underline flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Watch Stream</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: Cybersecurity Topics Grid */}
      <section className="space-y-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
            <Cpu className="w-3.5 h-3.5" />
            <span>KNOWLEDGE SCOPE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6FFF2]">
            Core Cybersecurity Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            'Kali Linux',
            'Network Sniffing',
            'Bash Automation',
            'OWASP Top 10',
            'Memory Forensics',
            'Cryptography',
            'OSINT Gathering',
            'Security Auditing',
            'Port Scanning',
            'Incident Triage',
            'Sysctl Tuning',
            'Safe Harbor Law'
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => onNavigate('academy')}
              className="p-3 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded text-center text-xs font-mono text-[#E6FFF2] transition-colors truncate"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 7: About 8WHIE Summary */}
      <section className="p-8 bg-[#101820] border border-[#1B3A2E] rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF88]">
            <Shield className="w-3.5 h-3.5" />
            <span>FOUNDED BY ARYAN THAKUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-mono text-[#E6FFF2]">
            Worldwide Hackers Intelligence & Ethics
          </h2>
          <p className="text-sm text-[#8CA99B] font-sans leading-relaxed">
            &quot;{BRAND_INFO.mission}&quot;
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 text-xs font-mono font-medium text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-colors"
            >
              Learn More About 8WHIE
            </button>
            <button
              onClick={onOpenDeployModal}
              className="px-4 py-2 text-xs font-mono text-[#00FF88] bg-[#080B0F] border border-[#00FF88]/40 rounded hover:bg-[#00FF88]/10 transition-colors"
            >
              InfinityFree Hosting Info
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 p-5 bg-[#080B0F] border border-[#1B3A2E] rounded-lg space-y-3 font-mono text-xs">
          <div className="text-[#00FF88] font-bold">8WHIE Manifesto:</div>
          <div className="text-[#8CA99B] space-y-1 text-[11px] leading-relaxed">
            <div>1. Always obtain documented authorization.</div>
            <div>2. Cause no collateral disruption or loss.</div>
            <div>3. Practice responsible vulnerability disclosure.</div>
            <div>4. Empower defenders through open education.</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Community and Social Links */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2]">
            Connect With The 8WHIE Community
          </h2>
          <p className="text-xs text-[#8CA99B]">
            Official communication channels, verified Telegram groups, and code repositories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href="https://t.me/whiee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded flex items-center justify-between text-xs font-mono text-[#E6FFF2] group transition-colors"
          >
            <span className="group-hover:text-[#00FF88]">Telegram Channel</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8CA99B]" />
          </a>

          <a
            href="https://github.com/8WHIE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded flex items-center justify-between text-xs font-mono text-[#E6FFF2] group transition-colors"
          >
            <span className="group-hover:text-[#00FF88]">GitHub Repos</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8CA99B]" />
          </a>

          <a
            href="https://www.youtube.com/@8WHIE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#FF5F56]/40 rounded flex items-center justify-between text-xs font-mono text-[#E6FFF2] group transition-colors"
          >
            <span className="group-hover:text-[#FF5F56]">YouTube @8WHIE</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8CA99B]" />
          </a>

          <a
            href="https://x.com/im_aryanthakur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded flex items-center justify-between text-xs font-mono text-[#E6FFF2] group transition-colors"
          >
            <span className="group-hover:text-[#00FF88]">X @im_aryanthakur</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8CA99B]" />
          </a>
        </div>
      </section>

    </div>
  );
};
