import React, { useState, useMemo } from 'react';
import { 
  Shield, 
  Search, 
  ExternalLink, 
  Github, 
  Terminal, 
  Copy, 
  Check, 
  Cpu, 
  Filter, 
  CheckCircle,
  HelpCircle,
  Laptop
} from 'lucide-react';
import { SECURITY_TOOLS, TOOLS_CATEGORIES, SecurityTool } from '../data/toolsData';

interface ToolsViewProps {
  initialSearch?: string;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ initialSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');
  const [copiedCmdId, setCopiedCmdId] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return SECURITY_TOOLS.filter((t) => {
      const matchCat = selectedCategory === 'All' || t.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.educationalUseCase.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCmd = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmdId(id);
    setTimeout(() => setCopiedCmdId(null), 2000);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <Shield className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Vetted Open-Source Cybersecurity Utilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          Security Tools Directory
        </h1>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
          Curated index of industry-standard security tools used by network administrators, auditors, and security researchers. Each entry includes verified documentation links and educational use cases.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#8CA99B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools by name, protocol, or function..."
            className="w-full bg-[#101820] border border-[#1B3A2E] rounded-md pl-10 pr-4 py-2.5 text-xs font-mono text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none focus:border-[#00FF88]/60"
          />
        </div>

        {/* Category Filters (Segmented tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" aria-label="Tool Categories">
          {TOOLS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#00FF88] text-[#080B0F] font-bold shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                  : 'bg-[#101820] text-[#8CA99B] hover:text-[#E6FFF2] border border-[#1B3A2E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Cards Grid */}
      {filteredTools.length === 0 ? (
        <div className="p-12 text-center bg-[#101820]/40 border border-[#1B3A2E] rounded-lg space-y-3">
          <p className="text-sm font-mono text-[#8CA99B]">
            No cybersecurity utilities matched your search query.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-[#00FF88] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="p-5 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg flex flex-col justify-between space-y-4 transition-all hover:bg-[#111C20] cyber-border group"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{tool.category}</span>
                  <span>{tool.license}</span>
                </div>

                {/* Tool Name */}
                <h3 className="text-lg font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8CA99B] leading-relaxed font-sans">
                  {tool.description}
                </p>

                {/* Supported Platforms */}
                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-[#8CA99B]">
                  <Laptop className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>Platforms:</span>
                  <div className="flex items-center gap-1.5 text-[#E6FFF2]">
                    {tool.supportedPlatforms.map((plat, idx) => (
                      <span key={plat}>
                        {plat}
                        {idx < tool.supportedPlatforms.length - 1 && <span className="text-[#1B3A2E]"> · </span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Educational Use Case */}
                <div className="p-3 bg-[#080B0F] border border-[#1B3A2E] rounded text-xs space-y-1">
                  <div className="font-mono text-[#00FF88] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Educational Use Case</span>
                  </div>
                  <p className="text-[#8CA99B] font-sans leading-relaxed">
                    {tool.educationalUseCase}
                  </p>
                </div>

                {/* Example Terminal Command */}
                <div className="bg-[#080B0F] border border-[#1B3A2E] rounded overflow-hidden">
                  <div className="px-2.5 py-1 bg-[#111C20] border-b border-[#1B3A2E] flex items-center justify-between text-[11px] font-mono text-[#8CA99B]">
                    <span>Sample Execution</span>
                    <button
                      onClick={() => handleCopyCmd(tool.exampleCommand, tool.id)}
                      className="hover:text-[#00FF88] transition-colors flex items-center gap-1"
                    >
                      {copiedCmdId === tool.id ? (
                        <>
                          <Check className="w-3 h-3 text-[#00FF88]" />
                          <span className="text-[#00FF88]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-2.5 font-mono text-xs text-[#00FF88] overflow-x-auto whitespace-pre">
                    <code>$ {tool.exampleCommand}</code>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Docs & Repo */}
              <div className="pt-3 border-t border-[#1B3A2E]/60 flex items-center gap-2">
                <a
                  href={tool.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono text-[#E6FFF2] bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>Docs</span>
                </a>
                <a
                  href={tool.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
