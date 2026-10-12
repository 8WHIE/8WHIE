import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  Github, 
  Menu, 
  X, 
  Terminal, 
  Activity, 
  CloudDownload,
  BookOpen,
  FileText,
  FolderGit2,
  Newspaper,
  Video,
  Info,
  Mail
} from 'lucide-react';

export type PageId = 'home' | 'academy' | 'knowledge' | 'tools' | 'projects' | 'blog' | 'videos' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenDeployModal: () => void;
  matrixEnabled: boolean;
  onToggleMatrix: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenDeployModal,
  matrixEnabled,
  onToggleMatrix
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'academy', label: 'Academy', icon: BookOpen },
    { id: 'knowledge', label: 'Knowledge Base', icon: FileText },
    { id: 'tools', label: 'Security Tools', icon: Shield },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'blog', label: 'Blog', icon: Newspaper },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080B0F]/90 backdrop-blur-md border-b border-[#1B3A2E] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
          aria-label="8WHIE Home"
        >
          <div className="w-9 h-9 rounded-lg bg-[#101820] border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88] group-hover:border-[#00FF88] group-hover:shadow-[0_0_12px_rgba(0,255,136,0.3)] transition-all">
            <span className="font-mono font-black text-lg tracking-tight">8W</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-lg text-[#E6FFF2] tracking-wider group-hover:text-[#00FF88] transition-colors">
                8WHIE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 text-[#00FF88] bg-[#00FF88]/10 rounded border border-[#00FF88]/30">
                v1.0
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 shadow-[0_0_10px_rgba(0,255,136,0.15)]'
                    : 'text-[#8CA99B] hover:text-[#E6FFF2] hover:bg-[#101820]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Compact Navigation for Medium Screens (Tablets / Laptops) */}
        <nav className="hidden md:flex xl:hidden items-center gap-1">
          {navLinks.slice(0, 5).map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#00FF88] bg-[#00FF88]/10' : 'text-[#8CA99B] hover:text-[#E6FFF2]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Global Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono text-[#8CA99B] bg-[#101820] hover:text-[#00FF88] hover:bg-[#111C20] border border-[#1B3A2E] rounded-md transition-colors"
            title="Global Search (Ctrl+K)"
            aria-label="Search across 8WHIE"
          >
            <Search className="w-3.5 h-3.5 text-[#00FF88]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden lg:inline text-[10px] bg-[#080B0F] px-1.5 py-0.5 rounded text-[#8CA99B] border border-[#1B3A2E]">
              ⌘K
            </kbd>
          </button>

          {/* Matrix Rain Toggle */}
          <button
            onClick={onToggleMatrix}
            className={`p-1.5 rounded-md border text-xs font-mono transition-colors ${
              matrixEnabled
                ? 'bg-[#00FF88]/10 border-[#00FF88]/40 text-[#00FF88]'
                : 'bg-[#101820] border-[#1B3A2E] text-[#8CA99B] hover:text-[#E6FFF2]'
            }`}
            title={matrixEnabled ? 'Disable Matrix Rain animation' : 'Enable Matrix Rain animation'}
            aria-label="Toggle Matrix Rain"
          >
            <Activity className="w-4 h-4" />
          </button>

          {/* InfinityFree Deploy Guide Button */}
          <button
            onClick={onOpenDeployModal}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#00FF88] bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 hover:bg-[#00FF88]/10 rounded-md transition-all whitespace-nowrap"
            title="InfinityFree Hosting & htdocs Deployment Pack"
          >
            <CloudDownload className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Deploy</span>
            <span className="lg:hidden">htdocs</span>
          </button>

          {/* GitHub Organization Link */}
          <a
            href="https://github.com/8WHIE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-md transition-colors"
            title="8WHIE GitHub Organization"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#8CA99B] hover:text-[#00FF88] bg-[#101820] border border-[#1B3A2E] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#080B0F] border-b border-[#1B3A2E] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#1B3A2E]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-mono rounded text-left transition-colors ${
                    isActive
                      ? 'text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 font-semibold'
                      : 'text-[#8CA99B] hover:text-[#E6FFF2] hover:bg-[#101820]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#00FF88]" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono text-[#00FF88] bg-[#101820] border border-[#00FF88]/30 rounded"
            >
              <CloudDownload className="w-4 h-4" />
              <span>InfinityFree htdocs Deployment Pack</span>
            </button>
            <div className="text-center text-[11px] font-mono text-[#8CA99B] pt-1">
              Worldwide Hackers Intelligence & Ethics · Founded by Aryan Thakur
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
