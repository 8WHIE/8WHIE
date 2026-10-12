import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Network, 
  Globe, 
  Code, 
  Search, 
  Key, 
  Compass, 
  UserCheck, 
  ShieldCheck, 
  Flag,
  Clock,
  BookOpen,
  Filter,
  CheckCircle,
  ArrowRight,
  Shield
} from 'lucide-react';
import { ACADEMY_CATEGORIES, ACADEMY_LESSONS, Lesson, AcademyCategory } from '../data/academyData';
import { LessonReaderModal } from './LessonReaderModal';

interface AcademyViewProps {
  initialLessonId?: string | null;
}

export const AcademyView: React.FC<AcademyViewProps> = ({ initialLessonId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(() => {
    if (initialLessonId) {
      return ACADEMY_LESSONS.find((l) => l.id === initialLessonId) || null;
    }
    return null;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#00FF88]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#00FF88]" />;
      case 'CommandLine': return <Terminal className="w-5 h-5 text-[#00FF88]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#00FF88]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#00FF88]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#00FF88]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#00FF88]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#00FF88]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#00FF88]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#00FF88]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#00FF88]" />;
      case 'Flag': return <Flag className="w-5 h-5 text-[#00FF88]" />;
      default: return <BookOpen className="w-5 h-5 text-[#00FF88]" />;
    }
  };

  const filteredLessons = useMemo(() => {
    return ACADEMY_LESSONS.filter((l) => {
      const matchCat = selectedCategory === 'all' || l.categoryId === selectedCategory;
      const matchDiff = difficultyFilter === 'All' || l.difficulty === difficultyFilter;
      const matchSearch = !searchQuery.trim() || 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchDiff && matchSearch;
    });
  }, [selectedCategory, difficultyFilter, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Academy Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <Shield className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>8WHIE Cybersecurity Academy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          Practical Hacking & Defense Curriculum
        </h1>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed">
          Structured, hands-on educational tracks covering offensive techniques, defensive countermeasures, network protocol analysis, and ethical security research. Built for students, developers, and aspiring security researchers.
        </p>
      </div>

      {/* Legal & Authorization Notice Banner */}
      <div className="p-4 sm:p-5 bg-[#101820] border border-[#1B3A2E] rounded-lg flex items-start gap-4">
        <div className="w-9 h-9 rounded-lg bg-[#080B0F] border border-[#FFB020]/40 flex items-center justify-center shrink-0 text-[#FFB020]">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm font-sans">
          <span className="font-mono font-bold text-[#FFB020]">ETHICAL PRACTICE GUIDELINE</span>
          <p className="text-[#8CA99B] leading-relaxed">
            All techniques demonstrated in the 8WHIE Academy are for authorized educational research, defensive security hardening, and vulnerability testing within private virtual sandboxes or sanctioned bug bounty programs. Unauthorized access to computer networks is illegal under international cyber law.
          </p>
        </div>
      </div>

      {/* 12 Categories Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2] flex items-center gap-2">
            <span>Core Disciplines</span>
            <span className="text-xs font-normal text-[#8CA99B] font-sans">({ACADEMY_CATEGORIES.length} Specialized Tracks)</span>
          </h2>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-mono text-[#00FF88] hover:underline"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ACADEMY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                className={`p-4 rounded-lg text-left border transition-all flex flex-col justify-between gap-3 group ${
                  isSelected
                    ? 'bg-[#101820] border-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                    : 'bg-[#101820]/60 border-[#1B3A2E] hover:border-[#00FF88]/40 hover:bg-[#101820]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-[#080B0F] border border-[#1B3A2E] flex items-center justify-center">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-[#8CA99B]">{cat.lessonCount} Modules</span>
                  </div>
                  <h3 className="text-sm font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#8CA99B] line-clamp-2 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#00FF88] flex items-center gap-1 opacity-80 group-hover:opacity-100">
                  <span>{isSelected ? 'Viewing Track' : 'View Track'}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Catalog Section */}
      <div className="space-y-6 pt-4 border-t border-[#1B3A2E]">
        
        {/* Controls Bar: Search + Difficulty Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8CA99B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials, commands, techniques..."
              className="w-full bg-[#101820] border border-[#1B3A2E] rounded-md pl-9 pr-4 py-2 text-xs font-mono text-[#E6FFF2] placeholder-[#8CA99B]/50 focus:outline-none focus:border-[#00FF88]/60"
            />
          </div>

          {/* Difficulty Segmented Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#101820] border border-[#1B3A2E] rounded-md shrink-0">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                  difficultyFilter === diff
                    ? 'bg-[#080B0F] text-[#00FF88] font-bold border border-[#00FF88]/30 shadow-sm'
                    : 'text-[#8CA99B] hover:text-[#E6FFF2]'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons List / Cards */}
        {filteredLessons.length === 0 ? (
          <div className="p-12 text-center bg-[#101820]/40 border border-[#1B3A2E] rounded-lg space-y-3">
            <p className="text-sm font-mono text-[#8CA99B]">
              No educational lessons found matching your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDifficultyFilter('All');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-[#00FF88] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className="p-5 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/50 rounded-lg cursor-pointer transition-all hover:bg-[#111C20] flex flex-col justify-between space-y-4 group cyber-border"
              >
                <div className="space-y-2.5">
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8CA99B]">
                    <span className="text-[#00FF88]">{lesson.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.readingTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">Track: {lesson.categoryId}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8CA99B] leading-relaxed line-clamp-2 font-sans">
                    {lesson.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1B3A2E]/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#8CA99B] font-sans">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF88]" />
                    <span>{lesson.learningObjectives.length} Key Objectives</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#00FF88] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Start Tutorial
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Active Lesson Modal */}
      <LessonReaderModal
        lesson={activeLesson}
        onClose={() => setActiveLesson(null)}
        onSelectLesson={(lesson) => setActiveLesson(lesson)}
      />

    </div>
  );
};
