import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  FileText, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Hash, 
  ChevronDown,
  Layers,
  Shield,
  ArrowUpRight
} from 'lucide-react';
import { KNOWLEDGE_BASE_ARTICLES, DocArticle, DocSection } from '../data/knowledgeBaseData';

interface KnowledgeBaseViewProps {
  initialArticleId?: string | null;
}

export const KnowledgeBaseView: React.FC<KnowledgeBaseViewProps> = ({ initialArticleId }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialArticleId || KNOWLEDGE_BASE_ARTICLES[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCodeKey, setCopiedCodeKey] = useState<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const selectedArticle = useMemo(() => {
    return (
      KNOWLEDGE_BASE_ARTICLES.find((a) => a.id === selectedArticleId) ||
      KNOWLEDGE_BASE_ARTICLES[0]
    );
  }, [selectedArticleId]);

  // Group articles by category for left sidebar
  const categorizedArticles = useMemo(() => {
    const map: { [key: string]: { title: string; articles: DocArticle[] } } = {};
    KNOWLEDGE_BASE_ARTICLES.forEach((art) => {
      if (!map[art.categoryId]) {
        map[art.categoryId] = {
          title: art.categoryTitle,
          articles: []
        };
      }
      map[art.categoryId].articles.push(art);
    });
    return map;
  }, []);

  // Filter articles based on search
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return KNOWLEDGE_BASE_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.categoryTitle.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = el.offsetHeight;
      const visibleScrolled = Math.max(0, -rect.top);
      const progress = Math.min(100, Math.round((visibleScrolled / (totalHeight - windowHeight + 100)) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticleId]);

  const handleCopyCode = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeKey(key);
    setTimeout(() => setCopiedCodeKey(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      {/* Reading Progress Bar (Top) */}
      <div 
        className="fixed top-16 left-0 right-0 h-1 bg-[#00FF88] z-30 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* KB Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <BookOpen className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>8WHIE Technical Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#E6FFF2]">
          Knowledge Base & Architecture
        </h1>
        <p className="text-sm text-[#8CA99B] max-w-2xl font-sans">
          Standardized cybersecurity references, protocol specifications, responsible disclosure policies, and operating system security runbooks.
        </p>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
        
        {/* Left Sidebar: Categories & Article Navigation (Cols: 3) */}
        <div className="lg:col-span-3 space-y-4 bg-[#101820] border border-[#1B3A2E] rounded-lg p-4 sticky top-24 max-h-[80vh] overflow-y-auto">
          
          {/* Quick Doc Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#8CA99B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter docs..."
              className="w-full bg-[#080B0F] border border-[#1B3A2E] rounded pl-8 pr-3 py-1.5 text-xs font-mono text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none focus:border-[#00FF88]"
            />
          </div>

          {/* Navigation Tree */}
          <nav className="space-y-4 pt-2">
            {filteredArticles ? (
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#8CA99B] uppercase tracking-wider">
                  Search Results ({filteredArticles.length})
                </span>
                {filteredArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      setSelectedArticleId(art.id);
                      setSearchQuery('');
                    }}
                    className={`w-full text-left p-2 rounded text-xs font-mono transition-colors block ${
                      selectedArticleId === art.id
                        ? 'text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 font-semibold'
                        : 'text-[#8CA99B] hover:text-[#E6FFF2] hover:bg-[#080B0F]'
                    }`}
                  >
                    {art.title}
                  </button>
                ))}
              </div>
            ) : (
              Object.entries(categorizedArticles).map(([catId, cat]) => (
                <div key={catId} className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#00FF88] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#00FF88]" />
                    <span>{cat.title}</span>
                  </div>
                  <div className="space-y-1 pl-2 border-l border-[#1B3A2E]">
                    {cat.articles.map((art) => {
                      const isCurrent = art.id === selectedArticleId;
                      return (
                        <button
                          key={art.id}
                          onClick={() => {
                            setSelectedArticleId(art.id);
                            window.scrollTo({ top: 120, behavior: 'smooth' });
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-mono transition-all block truncate ${
                            isCurrent
                              ? 'text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 font-semibold'
                              : 'text-[#8CA99B] hover:text-[#E6FFF2] hover:bg-[#080B0F]'
                          }`}
                          title={art.title}
                        >
                          {art.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </nav>
        </div>

        {/* Center: Documentation Content (Cols: 6) */}
        <div ref={contentRef} className="lg:col-span-6 space-y-8 bg-[#101820] border border-[#1B3A2E] rounded-lg p-6 sm:p-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
            <span>Knowledge Base</span>
            <ChevronRight className="w-3 h-3 text-[#1B3A2E]" />
            <span>{selectedArticle.categoryTitle}</span>
            <ChevronRight className="w-3 h-3 text-[#1B3A2E]" />
            <span className="text-[#00FF88] truncate">{selectedArticle.title}</span>
          </div>

          {/* Article Header */}
          <div className="space-y-3 pb-6 border-b border-[#1B3A2E]">
            <h2 className="text-2xl sm:text-3xl font-black font-mono text-[#E6FFF2] tracking-tight">
              {selectedArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-[#8CA99B] font-sans leading-relaxed">
              {selectedArticle.summary}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#8CA99B] pt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#00FF88]" />
                {selectedArticle.readingTime}
              </span>
              <span aria-hidden="true">·</span>
              <span>Updated {selectedArticle.lastUpdated}</span>
            </div>
          </div>

          {/* Document Sections */}
          <div className="space-y-10">
            {selectedArticle.sections.map((section, sIdx) => (
              <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-2 group">
                  <h3 className="text-lg sm:text-xl font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                    {section.heading}
                  </h3>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className="text-[#8CA99B] opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Anchor Link"
                  >
                    <Hash className="w-4 h-4 text-[#00FF88]" />
                  </a>
                </div>

                <p className="text-sm text-[#8CA99B] leading-relaxed whitespace-pre-line font-sans">
                  {section.body}
                </p>

                {section.code && (
                  <div className="bg-[#080B0F] border border-[#1B3A2E] rounded-lg overflow-hidden mt-3">
                    <div className="bg-[#111C20] px-3.5 py-2 border-b border-[#1B3A2E] flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                      <span>{section.code.caption || section.code.language}</span>
                      <button
                        onClick={() => handleCopyCode(section.code!.code, `${section.id}-${sIdx}`)}
                        className="flex items-center gap-1 text-[#8CA99B] hover:text-[#00FF88] transition-colors"
                      >
                        {copiedCodeKey === `${section.id}-${sIdx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#00FF88]" />
                            <span className="text-[#00FF88]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-[#00FF88] overflow-x-auto leading-relaxed">
                      <code>{section.code.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Related Articles Footer */}
          <div className="pt-8 border-t border-[#1B3A2E] space-y-3">
            <span className="text-xs font-mono text-[#8CA99B] uppercase tracking-wider">
              Explore More Documentation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {KNOWLEDGE_BASE_ARTICLES.filter((a) => a.id !== selectedArticle.id).slice(0, 2).map((other) => (
                <button
                  key={other.id}
                  onClick={() => {
                    setSelectedArticleId(other.id);
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="p-3 bg-[#080B0F] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded text-left space-y-1 transition-all group"
                >
                  <span className="text-[10px] font-mono text-[#00FF88]">{other.categoryTitle}</span>
                  <div className="text-xs font-mono font-semibold text-[#E6FFF2] group-hover:text-[#00FF88] truncate">
                    {other.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: Table of Contents (Cols: 3) */}
        <div className="hidden lg:block lg:col-span-3 space-y-3 bg-[#101820] border border-[#1B3A2E] rounded-lg p-4 sticky top-24">
          <span className="text-xs font-mono text-[#00FF88] uppercase tracking-wider font-bold flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5" />
            <span>On This Page</span>
          </span>
          <nav className="space-y-1.5 pt-1">
            {selectedArticle.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-1 text-xs font-mono transition-colors block leading-tight ${
                  activeSectionId === section.id
                    ? 'text-[#00FF88] font-semibold pl-2 border-l-2 border-[#00FF88]'
                    : 'text-[#8CA99B] hover:text-[#E6FFF2] pl-2 border-l border-[#1B3A2E]'
                }`}
              >
                {section.heading}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#1B3A2E] space-y-2">
            <div className="text-[11px] font-mono text-[#8CA99B]">
              Need technical help or want to suggest a doc improvement?
            </div>
            <a
              href="https://t.me/whiee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#00FF88] hover:underline"
            >
              <span>Join 8WHIE Telegram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
