import React from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Code, 
  ArrowRight,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { SECURITY_PROJECTS, SecurityProject } from '../data/projectsData';

export const ProjectsView: React.FC = () => {
  const getStatusBadge = (status: SecurityProject['status']) => {
    switch (status) {
      case 'Active':
        return 'text-[#00FF88] bg-[#00FF88]/10 border-[#00FF88]/30';
      case 'Stable':
        return 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30';
      case 'In Development':
        return 'text-[#FFB020] bg-[#FFB020]/10 border-[#FFB020]/30';
    }
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#1B3A2E] rounded text-xs font-mono text-[#00FF88]">
          <FolderGit2 className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Open-Source Research & Tooling</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-[#E6FFF2]">
          8WHIE Projects Showcase
        </h1>
        <p className="text-sm sm:text-base text-[#8CA99B] leading-relaxed font-sans">
          Production utilities, automation scripts, and educational playbooks developed by 8WHIE to advance open-source security intelligence and ethical assessment workflows.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SECURITY_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="p-6 bg-[#101820] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded-lg flex flex-col justify-between space-y-6 transition-all hover:bg-[#111C20] cyber-border group"
          >
            <div className="space-y-4">
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#8CA99B]">
                  Category: <span className="text-[#00FF88]">{proj.category}</span>
                </span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getStatusBadge(proj.status)}`}>
                  {proj.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-mono text-[#E6FFF2] group-hover:text-[#00FF88] transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs font-mono text-[#8CA99B]">
                  {proj.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#8CA99B] font-sans leading-relaxed">
                {proj.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-mono text-[#E6FFF2] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>Key Architectural Features</span>
                </span>
                <ul className="space-y-1 pl-4 text-xs text-[#8CA99B] font-sans">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="list-disc">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8CA99B] block mb-1.5">Technologies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono text-[#E6FFF2] bg-[#080B0F] border border-[#1B3A2E] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#1B3A2E]/60 flex items-center justify-between gap-3">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-xs font-mono font-medium text-[#E6FFF2] bg-[#080B0F] hover:bg-[#111C20] border border-[#1B3A2E] hover:border-[#00FF88]/40 rounded transition-colors"
              >
                <Github className="w-4 h-4 text-[#00FF88]" />
                <span>GitHub Repository</span>
              </a>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8CA99B] hover:text-[#00FF88] bg-[#080B0F] border border-[#1B3A2E] rounded transition-colors"
                title="View Source on GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout Strip */}
      <div className="p-6 bg-[#101820] border border-[#1B3A2E] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold font-mono text-[#E6FFF2]">
            Want to contribute to 8WHIE Open-Source?
          </h3>
          <p className="text-xs text-[#8CA99B] font-sans">
            Submit pull requests, suggest features, or report issues on the official 8WHIE organization on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/8WHIE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-[#080B0F] bg-[#00FF88] hover:bg-[#00FF88]/90 rounded transition-colors shrink-0"
        >
          <Github className="w-4 h-4" />
          <span>Explore 8WHIE on GitHub</span>
        </a>
      </div>

    </div>
  );
};
