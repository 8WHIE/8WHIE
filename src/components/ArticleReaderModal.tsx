import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Copy, 
  Check, 
  Twitter, 
  Send, 
  ArrowLeft,
  Newspaper
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  post,
  onClose,
  onSelectPost
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  if (!post) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#blog-${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${post.title}" by ${post.author} on 8WHIE`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareTelegram = () => {
    const text = encodeURIComponent(`"${post.title}" by ${post.author} on 8WHIE: ${window.location.href}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#080B0F] border border-[#1B3A2E] rounded-xl shadow-2xl overflow-hidden my-auto cyber-glow flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#101820] border-b border-[#1B3A2E] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
            <span className="text-[#00FF88]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#00FF88]" />
              {post.readingTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share buttons */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="Copy article link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#00FF88]" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={handleShareTwitter}
              className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="Share on X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareTelegram}
              className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
              title="Share on Telegram"
            >
              <Send className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] hover:bg-[#080B0F] rounded ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#E6FFF2]">
          
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[#E6FFF2]">
              {post.title}
            </h1>

            {/* Author & Date metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8CA99B] pb-4 border-b border-[#1B3A2E]">
              <div className="flex items-center gap-1.5 text-[#E6FFF2]">
                <User className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>By {post.author}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishDate}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="text-[#00FF88]">Worldwide Hackers Intelligence & Ethics</span>
            </div>

            {/* Lead text */}
            <p className="text-sm sm:text-base text-[#8CA99B] font-sans leading-relaxed italic">
              &quot;{post.content.lead}&quot;
            </p>
          </div>

          {/* Body Sections */}
          <div className="space-y-8 pt-2">
            {post.content.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold font-mono text-[#00FF88]">
                  {section.heading}
                </h2>
                
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
                    {p}
                  </p>
                ))}

                {section.code && (
                  <div className="bg-[#101820] border border-[#1B3A2E] rounded-lg overflow-hidden mt-3">
                    <div className="bg-[#080B0F] px-3.5 py-2 border-b border-[#1B3A2E] flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                      <span>{section.code.caption || section.code.language}</span>
                      <button
                        onClick={() => handleCopyCode(section.code!.content, sIdx)}
                        className="flex items-center gap-1 text-[#8CA99B] hover:text-[#00FF88] transition-colors"
                      >
                        {copiedCodeIdx === sIdx ? (
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
                    <pre className="p-4 font-mono text-xs sm:text-sm text-[#00FF88] overflow-x-auto leading-relaxed bg-[#080B0F]/50">
                      <code>{section.code.content}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="p-4 bg-[#101820] border border-[#1B3A2E] rounded-lg space-y-2">
            <span className="text-xs font-mono font-bold text-[#00FF88] uppercase tracking-wider">
              Summary Takeaway
            </span>
            <p className="text-xs sm:text-sm text-[#8CA99B] font-sans leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-[#8CA99B] bg-[#101820] border border-[#1B3A2E] rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          <div className="pt-6 border-t border-[#1B3A2E] space-y-3">
            <span className="text-xs font-mono text-[#8CA99B] uppercase tracking-wider">
              More Security Articles
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPosts.map((rel) => (
                <button
                  key={rel.id}
                  onClick={() => onSelectPost(rel)}
                  className="p-3 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded text-left space-y-1 transition-all group"
                >
                  <span className="text-[10px] font-mono text-[#00FF88]">{rel.category}</span>
                  <div className="text-xs font-mono font-semibold text-[#E6FFF2] group-hover:text-[#00FF88] truncate">
                    {rel.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#101820] border-t border-[#1B3A2E] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono text-[#8CA99B] hover:text-[#00FF88]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>
          <span className="text-xs font-mono text-[#00FF88]">8WHIE Intelligence Dispatch</span>
        </div>
      </div>
    </div>
  );
};
