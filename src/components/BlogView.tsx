import React, { useState, useMemo } from 'react';
import { 
  Newspaper, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Filter
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { ArticleReaderModal } from './ArticleReaderModal';

interface BlogViewProps {
  initialPostId?: string | null;
}

export const BlogView: React.FC<BlogViewProps> = ({ initialPostId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(() => {
    if (initialPostId) {
      return BLOG_POSTS.find((p) => p.id === initialPostId) || null;
    }
    return null;
  });

  const categories = ['All', 'Ethics & Policy', 'Linux', 'Networking', 'Web Security'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <Newspaper className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>8WHIE Security Research & Analysis</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          Cybersecurity Insights & Research
        </h1>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
          Technical dispatches, packet forensics, vulnerability analysis, and ethical hacking methodology published by Aryan Thakur and the 8WHIE research collective.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#8CA99B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or tags..."
            className="w-full bg-[#101820] border border-[#1B3A2E] rounded-md pl-10 pr-4 py-2.5 text-xs font-mono text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none focus:border-[#00FF88]/60"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
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

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="p-12 text-center bg-[#101820]/40 border border-[#1B3A2E] rounded-lg space-y-3">
          <p className="text-sm font-mono text-[#8CA99B]">
            No cybersecurity articles matched your search filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-[#00FF88] hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="p-6 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg cursor-pointer flex flex-col justify-between space-y-5 transition-all hover:bg-[#111C20] cyber-border group"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00FF88]" />
                    {post.readingTime}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publishDate}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#8CA99B] font-sans leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#8CA99B] bg-[#080B0F] px-2 py-0.5 rounded border border-[#1B3A2E]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#1B3A2E]/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#8CA99B]">
                  <User className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>By {post.author}</span>
                </div>
                <span className="text-xs font-mono text-[#00FF88] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reader Modal */}
      <ArticleReaderModal
        post={activePost}
        onClose={() => setActivePost(null)}
        onSelectPost={(post) => setActivePost(post)}
      />

    </div>
  );
};
