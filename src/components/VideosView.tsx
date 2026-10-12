import React, { useState } from 'react';
import { 
  Video, 
  Youtube, 
  ExternalLink, 
  Play, 
  Clock, 
  CheckCircle2, 
  User, 
  ArrowRight,
  Terminal,
  ShieldCheck,
  Bell
} from 'lucide-react';
import { YOUTUBE_CHANNEL, VIDEO_SERIES, VideoTrack } from '../data/videosData';

export const VideosView: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('All');

  const seriesList = [
    'All',
    'Ethical Hacking Zero to Hero',
    'Network Defense & Analysis',
    'Linux Mastery for Hackers',
    'Web Application Security',
    'Recon & Security Auditing',
    'Open-Source Intelligence'
  ];

  const filteredVideos = VIDEO_SERIES.filter(
    (v) => selectedSeries === 'All' || v.series === selectedSeries
  );

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Channel Header Banner */}
      <div className="bg-[#101820] border border-[#1B3A2E] rounded-xl p-6 sm:p-8 space-y-6 cyber-glow">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-[#080B0F] border-2 border-[#FF0000]/60 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,0,0,0.2)] text-[#FF0000]">
              <Youtube className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black font-mono text-[#E6FFF2]">
                  8WHIE YouTube
                </h1>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FF0000]/10 border border-[#FF0000]/30 text-[#FF5F56]">
                  Official Channel
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#8CA99B]">
                YouTube Handle: <span className="text-[#00FF88]">{YOUTUBE_CHANNEL.handle}</span> · Founded by Aryan Thakur
              </p>
            </div>
          </div>

          {/* Subscribe Call to Action */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/@8WHIE?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-mono font-semibold text-white bg-[#CC0000] hover:bg-[#FF0000] rounded-md transition-all shadow-[0_0_15px_rgba(204,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] shrink-0"
            >
              <Bell className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>

            <a
              href={YOUTUBE_CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-mono text-[#E6FFF2] bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] rounded-md transition-colors"
            >
              <span>Visit Channel</span>
              <ExternalLink className="w-4 h-4 text-[#8CA99B]" />
            </a>
          </div>

        </div>

        <p className="text-xs sm:text-sm text-[#8CA99B] font-sans max-w-3xl leading-relaxed pt-2 border-t border-[#1B3A2E]">
          {YOUTUBE_CHANNEL.description} Practical demonstrations of packet sniffing, Linux privilege escalation, network auditing, and ethical penetration testing methodologies.
        </p>
      </div>

      {/* Featured Video Spotlight */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2] flex items-center gap-2">
            <Play className="w-5 h-5 text-[#00FF88]" />
            <span>Featured Educational Spotlight</span>
          </h2>
          <span className="text-xs font-mono text-[#00FF88]">
            Curated Lesson
          </span>
        </div>

        <div className="p-6 bg-[#101820] border border-[#00FF88]/40 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono text-[#00FF88] uppercase tracking-wider font-semibold">
              Series: {VIDEO_SERIES[0].series}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#E6FFF2]">
              {VIDEO_SERIES[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8CA99B] font-sans leading-relaxed">
              {VIDEO_SERIES[0].description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {VIDEO_SERIES[0].topics.map((top) => (
                <span
                  key={top}
                  className="px-2 py-0.5 text-xs font-mono text-[#8CA99B] bg-[#080B0F] border border-[#1B3A2E] rounded"
                >
                  {top}
                </span>
              ))}
            </div>
            <div className="pt-3">
              <a
                href={VIDEO_SERIES[0].youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-mono font-medium text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch on YouTube (@8WHIE)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#080B0F] border border-[#1B3A2E] rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#8CA99B]">
              <span>Format: Hands-on Lab</span>
              <span className="text-[#00FF88]">{VIDEO_SERIES[0].duration}</span>
            </div>
            <div className="aspect-video bg-[#111C20] rounded border border-[#1B3A2E] flex flex-col items-center justify-center text-center p-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FF0000]/20 border border-[#FF0000]/50 flex items-center justify-center text-[#FF5F56]">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <span className="text-xs font-mono text-[#E6FFF2]">Direct Official Video Stream</span>
              <span className="text-[11px] font-mono text-[#8CA99B]">https://youtube.com/@8WHIE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Series Curriculum Cards */}
      <div className="space-y-6 pt-4 border-t border-[#1B3A2E]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold font-mono text-[#E6FFF2]">
            Complete Video Syllabus & Guides
          </h2>

          {/* Series filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {seriesList.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSeries(s)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                  selectedSeries === s
                    ? 'bg-[#00FF88] text-[#080B0F] font-bold'
                    : 'bg-[#101820] text-[#8CA99B] hover:text-[#E6FFF2] border border-[#1B3A2E]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg flex flex-col justify-between space-y-4 transition-all hover:bg-[#111C20] cyber-border group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8CA99B]">
                  <span className="text-[#00FF88]">{item.series}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00FF88]" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#8CA99B] font-sans leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-[#8CA99B] bg-[#080B0F] px-2 py-0.5 rounded border border-[#1B3A2E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1B3A2E]/60">
                <a
                  href={item.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono text-[#E6FFF2] bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-colors group-hover:text-[#00FF88]"
                >
                  <Play className="w-3.5 h-3.5 text-[#FF5F56] fill-current" />
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-[#8CA99B]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
