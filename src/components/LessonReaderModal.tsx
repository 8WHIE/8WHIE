import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  ShieldAlert,
  BookOpen
} from 'lucide-react';
import { Lesson, ACADEMY_LESSONS } from '../data/academyData';

interface LessonReaderModalProps {
  lesson: Lesson | null;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export const LessonReaderModal: React.FC<LessonReaderModalProps> = ({
  lesson,
  onClose,
  onSelectLesson
}) => {
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  if (!lesson) return null;

  // Find prev / next lesson
  const currentIndex = ACADEMY_LESSONS.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? ACADEMY_LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < ACADEMY_LESSONS.length - 1 ? ACADEMY_LESSONS[currentIndex + 1] : null;

  const handleCopy = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(index);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const getDifficultyColor = (diff: Lesson['difficulty']) => {
    switch (diff) {
      case 'Beginner':
        return 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/30';
      case 'Intermediate':
        return 'text-[#FFB020] bg-[#FFB020]/10 border-[#FFB020]/30';
      case 'Advanced':
        return 'text-[#FF5F56] bg-[#FF5F56]/10 border-[#FF5F56]/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl bg-[#080B0F] border border-[#1B3A2E] rounded-xl shadow-2xl overflow-hidden my-auto cyber-glow flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#101820] border-b border-[#1B3A2E] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className={`px-2.5 py-0.5 text-xs font-mono rounded border ${getDifficultyColor(lesson.difficulty)}`}>
              {lesson.difficulty}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8CA99B]">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.readingTime}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8CA99B] hover:text-[#00FF88] hover:bg-[#080B0F] rounded-md transition-colors"
            aria-label="Close lesson reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#E6FFF2]">
          
          {/* Title & Overview */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[#E6FFF2]">
              {lesson.title}
            </h2>
            <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed">
              {lesson.content.overview}
            </p>
          </div>

          {/* Legal & Security Compliance Warning */}
          <div className="p-4 bg-[#111C20] border border-[#FFB020]/40 rounded-lg flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#FFB020] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm font-mono text-[#FFB020]/90">
              <span className="font-bold text-[#FFB020]">LEGAL COMPLIANCE MANDATE:</span>
              <p className="text-xs text-[#8CA99B] leading-relaxed">
                {lesson.securityNote}
              </p>
            </div>
          </div>

          {/* Learning Objectives & Prerequisites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Objectives */}
            <div className="p-4 bg-[#101820] border border-[#1B3A2E] rounded-lg space-y-2">
              <span className="text-xs font-mono font-semibold text-[#00FF88] flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Learning Objectives</span>
              </span>
              <ul className="space-y-1.5 text-xs text-[#8CA99B] font-sans">
                {lesson.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00FF88] font-mono">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-4 bg-[#101820] border border-[#1B3A2E] rounded-lg space-y-2">
              <span className="text-xs font-mono font-semibold text-[#8CA99B] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#00FF88]" />
                <span>Prerequisites</span>
              </span>
              <ul className="space-y-1.5 text-xs text-[#8CA99B] font-sans">
                {lesson.prerequisites.map((prereq, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00FF88] font-mono">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8 pt-2">
            {lesson.content.sections.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold font-mono text-[#00FF88]">
                  {sec.heading}
                </h3>
                <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed whitespace-pre-line font-sans">
                  {sec.body}
                </p>

                {sec.codeBlock && (
                  <div className="bg-[#101820] border border-[#1B3A2E] rounded-lg overflow-hidden mt-3">
                    <div className="bg-[#080B0F] px-3.5 py-2 border-b border-[#1B3A2E] flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                      <span>{sec.codeBlock.caption || sec.codeBlock.language}</span>
                      <button
                        onClick={() => handleCopy(sec.codeBlock!.code, secIdx)}
                        className="flex items-center gap-1 text-[#8CA99B] hover:text-[#00FF88] transition-colors"
                      >
                        {copiedCodeIdx === secIdx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#00FF88]" />
                            <span className="text-[#00FF88]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-[#00FF88] overflow-x-auto leading-relaxed bg-[#080B0F]/50">
                      <code>{sec.codeBlock.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Tutorials */}
          {lesson.relatedTutorialIds.length > 0 && (
            <div className="pt-6 border-t border-[#1B3A2E] space-y-3">
              <span className="text-xs font-mono text-[#8CA99B] uppercase tracking-wider">
                Related Educational Tutorials
              </span>
              <div className="flex flex-wrap gap-2">
                {lesson.relatedTutorialIds.map((relId) => {
                  const relLesson = ACADEMY_LESSONS.find((l) => l.id === relId);
                  if (!relLesson) return null;
                  return (
                    <button
                      key={relId}
                      onClick={() => onSelectLesson(relLesson)}
                      className="px-3 py-1.5 text-xs font-mono text-[#E6FFF2] bg-[#101820] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-colors"
                    >
                      {relLesson.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Previous / Next navigation */}
        <div className="p-4 bg-[#101820] border-t border-[#1B3A2E] flex items-center justify-between gap-3 shrink-0">
          {prevLesson ? (
            <button
              onClick={() => onSelectLesson(prevLesson)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#8CA99B] hover:text-[#00FF88] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous: {prevLesson.title.slice(0, 24)}...</span>
              <span className="sm:hidden">Previous</span>
            </button>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <button
              onClick={() => onSelectLesson(nextLesson)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-colors"
            >
              <span className="hidden sm:inline">Next: {nextLesson.title.slice(0, 24)}...</span>
              <span className="sm:hidden">Next Lesson</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#00FF88] bg-[#080B0F] border border-[#00FF88]/40 rounded hover:bg-[#00FF88]/10 transition-colors"
            >
              Complete Tutorial
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
