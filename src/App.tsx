import React, { useState } from 'react';
import { useStudyState } from './hooks/useStudyState';
import { Header, NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { BackgroundEffects } from './components/ui/BackgroundEffects';

import { HomeView } from './views/HomeView';
import { StudyLibraryView } from './views/StudyLibraryView';
import { ReadingPageView } from './views/ReadingPageView';
import { RevisionView } from './views/RevisionView';
import { BookmarksHistoryView } from './views/BookmarksHistoryView';
import { ContentAuditView } from './views/ContentAuditView';
import { CompetitionView } from './views/CompetitionView';
import { AboutView } from './views/AboutView';

import { CategoryId } from './types';
import { STUDY_TOPICS } from './data/studyContent';

export function App() {
  const {
    state,
    theme,
    toggleTheme,
    toggleBookmark,
    toggleCompleted,
    recordTopicVisit,
    setFontSize,
    setReadingWidth,
    isBookmarked,
    isCompleted,
  } = useStudyState();

  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    state.lastReadTopicId || STUDY_TOPICS[0]?.id || ''
  );
  const [libraryCategoryFilter, setLibraryCategoryFilter] = useState<CategoryId | 'all'>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigate to a specific topic and switch to reading tab
  const handleOpenTopic = (topicId: string, sectionId?: string) => {
    setSelectedTopicId(topicId);
    setCurrentTab('reading');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-200">
      {/* Background Graphic Ambient Lighting */}
      <BackgroundEffects />

      {/* Global Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        bookmarkedCount={state.bookmarkedTopicIds.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 relative z-10">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenTopic={handleOpenTopic}
            onSelectCategoryFilter={cat => {
              setLibraryCategoryFilter(cat);
              setCurrentTab('library');
            }}
            completedIds={state.completedTopicIds}
            bookmarkedIds={state.bookmarkedTopicIds}
            lastReadTopicId={state.lastReadTopicId}
          />
        )}

        {currentTab === 'library' && (
          <StudyLibraryView
            onOpenTopic={handleOpenTopic}
            selectedCategory={libraryCategoryFilter}
            onSelectCategory={setLibraryCategoryFilter}
            isBookmarked={isBookmarked}
            isCompleted={isCompleted}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {currentTab === 'reading' && (
          <ReadingPageView
            currentTopicId={selectedTopicId}
            onSelectTopic={handleOpenTopic}
            isBookmarked={isBookmarked}
            isCompleted={isCompleted}
            onToggleBookmark={toggleBookmark}
            onToggleCompleted={toggleCompleted}
            onRecordVisit={recordTopicVisit}
            fontSize={state.fontSize}
            onChangeFontSize={setFontSize}
            readingWidth={state.readingWidth}
            onChangeReadingWidth={setReadingWidth}
          />
        )}

        {currentTab === 'revision' && (
          <RevisionView onOpenTopic={handleOpenTopic} />
        )}

        {currentTab === 'audit' && (
          <ContentAuditView onOpenLesson={handleOpenTopic} />
        )}

        {currentTab === 'bookmarks' && (
          <BookmarksHistoryView
            bookmarkedIds={state.bookmarkedTopicIds}
            completedIds={state.completedTopicIds}
            history={state.history}
            onOpenTopic={handleOpenTopic}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {currentTab === 'competition' && <CompetitionView />}

        {currentTab === 'about' && <AboutView />}
      </div>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={handleOpenTopic}
      />
    </div>
  );
}

export default App;
