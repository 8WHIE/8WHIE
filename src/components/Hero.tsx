import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  ArrowRight, 
  ShieldCheck, 
  Github, 
  BookOpen, 
  Cpu, 
  Network, 
  CheckCircle2,
  Lock,
  CornerDownLeft
} from 'lucide-react';
import { PageId } from './Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

interface CommandHistoryItem {
  command: string;
  output: string | string[];
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    { command: 'whoami', output: '8WHIE' },
    { command: 'mission', output: 'Learn. Secure. Innovate.' },
    { command: 'founder', output: 'Aryan Thakur' },
    { command: 'status', output: 'Knowledge Hub Online [ 100% SECURE & OPERATIONAL ]' }
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output: string | string[] = '';

    switch (cmd) {
      case 'help':
        output = [
          'Available commands:',
          '  whoami       - Display identity',
          '  mission      - Print core organizational mission',
          '  founder      - Founder & owner profile',
          '  status       - System status check',
          '  academy      - Launch Cybersecurity Academy',
          '  tools        - Open Security Tools Library',
          '  projects     - View Open-Source Repositories',
          '  blog         - Read Technical Security Articles',
          '  contact      - View Official Channels & Socials',
          '  clear        - Clear terminal screen'
        ];
        break;
      case 'whoami':
        output = '8WHIE — Worldwide Hackers Intelligence & Ethics';
        break;
      case 'mission':
        output = 'Learn. Secure. Innovate. Practical & responsible cybersecurity education.';
        break;
      case 'founder':
        output = 'Aryan Thakur — Security Researcher & Founder of 8WHIE';
        break;
      case 'status':
        output = 'All educational tracks and documentation online. InfinityFree ready.';
        break;
      case 'academy':
        onNavigate('academy');
        output = 'Routing to Cybersecurity Academy...';
        break;
      case 'tools':
        onNavigate('tools');
        output = 'Opening Security Tools Library...';
        break;
      case 'projects':
        onNavigate('projects');
        output = 'Viewing Open-Source Projects...';
        break;
      case 'blog':
        onNavigate('blog');
        output = 'Navigating to Cybersecurity Blog...';
        break;
      case 'contact':
        onNavigate('contact');
        output = 'Opening Official Contact & Social Channels...';
        break;
      case 'clear':
        setHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available directives.`;
        break;
    }

    setHistory((prev) => [...prev, { command: terminalInput.trim(), output }]);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1B3A2E] overflow-hidden">
      {/* Subtle radial glow in background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00FF88]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
              <Lock className="w-3.5 h-3.5 text-[#00FF88]" />
              <span>Worldwide Hackers Intelligence & Ethics</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#E6FFF2]">
                8WHIE
              </h1>
              <p className="text-lg sm:text-xl font-mono text-[#00FF88] font-semibold tracking-wide">
                Learn. Secure. Innovate.
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed max-w-2xl font-sans">
              Explore ethical hacking, cybersecurity, Linux, networking, security research, and open-source technology through practical educational resources.
            </p>

            {/* Founder Attribution Notice */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
              <span>Official Platform</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E6FFF2] font-medium">Founded by Aryan Thakur</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#00FF88]">8whie.page.gd</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('academy')}
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-mono font-semibold text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Academy</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={() => onNavigate('tools')}
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-mono text-[#E6FFF2] bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-all shrink-0"
              >
                <Cpu className="w-4 h-4 text-[#00FF88]" />
                <span>Browse Security Tools</span>
              </button>

              <a
                href="https://github.com/8WHIE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-mono text-[#8CA99B] hover:text-[#00FF88] bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] rounded transition-all shrink-0"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub</span>
              </a>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="pt-6 border-t border-[#1B3A2E] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#00FF88] tabular-nums">12</div>
                <div className="text-xs text-[#8CA99B]">Learning Tracks</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#00FF88] tabular-nums">13+</div>
                <div className="text-xs text-[#8CA99B]">Vetted Tools</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#00FF88] tabular-nums">100%</div>
                <div className="text-xs text-[#8CA99B]">Authorized & Ethical</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#00FF88]">Static</div>
                <div className="text-xs text-[#8CA99B]">InfinityFree Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#101820] border border-[#1B3A2E] rounded-lg shadow-2xl overflow-hidden cyber-glow">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#080B0F] px-4 py-2.5 border-b border-[#1B3A2E] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
                  <span className="ml-2 text-xs font-mono text-[#8CA99B] flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-[#00FF88]" />
                    <span>8whie-session@terminal:~</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00FF88] bg-[#00FF88]/10 px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Terminal Console Viewport */}
              <div className="p-4 font-mono text-xs text-[#E6FFF2] space-y-3 max-h-[340px] overflow-y-auto">
                {/* Initial Banner */}
                <div className="text-[#8CA99B] text-[11px] leading-relaxed pb-2 border-b border-[#1B3A2E]/60">
                  8WHIE OS v1.0.0 (x86_64-linux-gnu)<br />
                  Type <span className="text-[#00FF88] font-bold">help</span> to list commands or navigate the knowledge platform.
                </div>

                {/* Command Output Log */}
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[#8CA99B]">
                      <span className="text-[#00FF88] font-bold">$</span>
                      <span className="text-[#E6FFF2] font-semibold">{item.command}</span>
                    </div>
                    <div className="pl-3.5 text-[#00FF88] leading-relaxed">
                      {Array.isArray(item.output) ? (
                        item.output.map((line, lIdx) => (
                          <div key={lIdx} className="text-[#8CA99B]">{line}</div>
                        ))
                      ) : (
                        <span>{item.output}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div ref={terminalEndRef} />

                {/* Active Interactive Input Form */}
                <form onSubmit={handleCommandSubmit} className="pt-2 flex items-center gap-1.5">
                  <span className="text-[#00FF88] font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type 'help', 'academy', 'tools'..."
                    className="flex-1 bg-transparent text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none font-mono text-xs caret-[#00FF88]"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="text-[#8CA99B] hover:text-[#00FF88] p-1 transition-colors"
                    aria-label="Execute command"
                  >
                    <CornerDownLeft className="w-3 h-3" />
                  </button>
                </form>
              </div>

              {/* Terminal Footer Info */}
              <div className="bg-[#080B0F]/80 px-4 py-2 border-t border-[#1B3A2E] text-[10px] font-mono text-[#8CA99B] flex items-center justify-between">
                <span>Interactive Linux Shell Sandbox</span>
                <span className="text-[#00FF88]">UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
