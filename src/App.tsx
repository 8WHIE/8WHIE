/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeSections } from './components/HomeSections';
import { AcademyView } from './components/AcademyView';
import { KnowledgeBaseView } from './components/KnowledgeBaseView';
import { ToolsView } from './components/ToolsView';
import { ProjectsView } from './components/ProjectsView';
import { BlogView } from './components/BlogView';
import { VideosView } from './components/VideosView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/MatrixBackground';
import { GlobalSearchModal, SearchResultItem } from './components/GlobalSearchModal';
import { InfinityFreeModal } from './components/InfinityFreeModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetItemId, setTargetItemId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [deployModalOpen, setDeployModalOpen] = useState(false);
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  // Sync with URL Hash for InfinityFree static routing & bookmarks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      // Check if hash points to a main page
      const validPages: PageId[] = [
        'home',
        'academy',
        'knowledge',
        'tools',
        'projects',
        'blog',
        'videos',
        'about',
        'contact'
      ];

      const matchedPage = validPages.find((p) => hash === p || hash.startsWith(`${p}-`));
      if (matchedPage) {
        setCurrentPage(matchedPage);
        if (hash.includes('-')) {
          const extra = hash.substring(matchedPage.length + 1);
          setTargetItemId(extra);
        } else {
          setTargetItemId(null);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, extraId?: string) => {
    setCurrentPage(page);
    setTargetItemId(extraId || null);
    if (page === 'home') {
      window.history.pushState(null, '', ' ');
    } else if (extraId) {
      window.location.hash = `${page}-${extraId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectItemFromSearch = (item: SearchResultItem) => {
    setSearchOpen(false);
    navigateTo(item.pageTarget, item.id);
  };

  return (
    <div className="min-h-screen bg-[#080B0F] text-[#E6FFF2] flex flex-col relative selection:bg-[#00FF88]/20 selection:text-[#00FF88]">
      
      {/* Background Matrix Digital Rain Canvas */}
      <MatrixBackground enabled={matrixEnabled} />

      {/* Subtle Scanline Overlay */}
      <div className="fixed inset-0 scanline-overlay pointer-events-none z-10 opacity-30" aria-hidden="true" />

      {/* Sticky Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenDeployModal={() => setDeployModalOpen(true)}
        matrixEnabled={matrixEnabled}
        onToggleMatrix={() => setMatrixEnabled((prev) => !prev)}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 relative z-20">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <HomeSections onNavigate={navigateTo} onOpenDeployModal={() => setDeployModalOpen(true)} />
          </>
        )}

        {currentPage === 'academy' && (
          <AcademyView initialLessonId={targetItemId} />
        )}

        {currentPage === 'knowledge' && (
          <KnowledgeBaseView initialArticleId={targetItemId} />
        )}

        {currentPage === 'tools' && (
          <ToolsView initialSearch={targetItemId || undefined} />
        )}

        {currentPage === 'projects' && (
          <ProjectsView />
        )}

        {currentPage === 'blog' && (
          <BlogView initialPostId={targetItemId} />
        )}

        {currentPage === 'videos' && (
          <VideosView />
        )}

        {currentPage === 'about' && (
          <AboutView />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={navigateTo} onOpenDeployModal={() => setDeployModalOpen(true)} />

      {/* Unified Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectItem={handleSelectItemFromSearch}
      />

      {/* InfinityFree Deployment & ZIP Modal */}
      <InfinityFreeModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />

    </div>
  );
}
