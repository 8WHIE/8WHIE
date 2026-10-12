import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Shield, FileText, Newspaper, FolderGit2, ArrowRight } from 'lucide-react';
import { ACADEMY_LESSONS } from '../data/academyData';
import { SECURITY_TOOLS } from '../data/toolsData';
import { BLOG_POSTS } from '../data/blogData';
import { KNOWLEDGE_BASE_ARTICLES } from '../data/knowledgeBaseData';
import { SECURITY_PROJECTS } from '../data/projectsData';
import { PageId } from './Navbar';

export interface SearchResultItem {
  id: string;
  type: 'academy' | 'tools' | 'blog' | 'knowledge' | 'projects';
  title: string;
  category: string;
  snippet: string;
  pageTarget: PageId;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: SearchResultItem) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Build searchable corpus
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // Academy
    ACADEMY_LESSONS.forEach((l) => {
      list.push({
        id: l.id,
        type: 'academy',
        title: l.title,
        category: `Academy · ${l.difficulty}`,
        snippet: l.description,
        pageTarget: 'academy'
      });
    });

    // Tools
    SECURITY_TOOLS.forEach((t) => {
      list.push({
        id: t.id,
        type: 'tools',
        title: t.name,
        category: `Tool · ${t.category}`,
        snippet: t.description,
        pageTarget: 'tools'
      });
    });

    // Blog
    BLOG_POSTS.forEach((b) => {
      list.push({
        id: b.id,
        type: 'blog',
        title: b.title,
        category: `Blog · ${b.category}`,
        snippet: b.summary,
        pageTarget: 'blog'
      });
    });

    // Knowledge Base
    KNOWLEDGE_BASE_ARTICLES.forEach((k) => {
      list.push({
        id: k.id,
        type: 'knowledge',
        title: k.title,
        category: `Docs · ${k.categoryTitle}`,
        snippet: k.summary,
        pageTarget: 'knowledge'
      });
    });

    // Projects
    SECURITY_PROJECTS.forEach((p) => {
      list.push({
        id: p.id,
        type: 'projects',
        title: p.name,
        category: `Project · ${p.category}`,
        snippet: p.description,
        pageTarget: 'projects'
      });
    });

    return list;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allSearchableItems.slice(0, 8);
    }
    const q = query.toLowerCase();
    return allSearchableItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.snippet.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [query, allSearchableItems]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle global shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search handled in parent
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
      } else if (e.key === 'Enter') {
        if (filteredResults[selectedIndex]) {
          e.preventDefault();
          onSelectItem(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, onSelectItem]);

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'academy':
        return <BookOpen className="w-3.5 h-3.5 text-[#00FF88]" />;
      case 'tools':
        return <Shield className="w-3.5 h-3.5 text-[#FFB020]" />;
      case 'blog':
        return <Newspaper className="w-3.5 h-3.5 text-[#00E5FF]" />;
      case 'knowledge':
        return <FileText className="w-3.5 h-3.5 text-[#A78BFA]" />;
      case 'projects':
        return <FolderGit2 className="w-3.5 h-3.5 text-[#34D399]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#080B0F] border border-[#1B3A2E] rounded-lg shadow-2xl overflow-hidden cyber-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-3 sm:p-4 border-b border-[#1B3A2E] flex items-center gap-3 bg-[#101820]">
          <Search className="w-5 h-5 text-[#00FF88] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search tutorials, security tools, Linux docs, projects..."
            className="w-full bg-transparent text-sm sm:text-base font-mono text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#8CA99B] hover:text-[#E6FFF2] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#8CA99B] hover:text-[#00FF88] px-2 py-1 bg-[#080B0F] border border-[#1B3A2E] rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-[#1B3A2E]/50">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-sm font-mono text-[#8CA99B]">
              No resources found matching &quot;{query}&quot;. Try terms like <span className="text-[#00FF88]">Nmap</span>, <span className="text-[#00FF88]">Wireshark</span>, <span className="text-[#00FF88]">SSH</span>, or <span className="text-[#00FF88]">OWASP</span>.
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.id}`}
                  onClick={() => onSelectItem(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded cursor-pointer transition-colors flex items-center justify-between gap-4 ${
                    isSelected ? 'bg-[#101820] border-l-2 border-[#00FF88]' : 'hover:bg-[#101820]/60'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(item.type)}
                      <span className="text-xs font-mono text-[#8CA99B]">{item.category}</span>
                    </div>
                    <div className="text-sm font-semibold font-mono text-[#E6FFF2] truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#8CA99B] line-clamp-1">
                      {item.snippet}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#00FF88] translate-x-1' : 'text-transparent'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-[#101820] border-t border-[#1B3A2E] flex items-center justify-between text-[11px] font-mono text-[#8CA99B]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#00FF88]">8WHIE Intelligence Index</span>
        </div>
      </div>
    </div>
  );
};
