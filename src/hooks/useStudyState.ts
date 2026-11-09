import { useState, useEffect } from 'react';
import { ReadingProgressState } from '../types';

const STORAGE_KEY = 'utcc_study_progress_v1';
const THEME_KEY = 'utcc_theme_mode';

const DEFAULT_STATE: ReadingProgressState = {
  completedTopicIds: [],
  bookmarkedTopicIds: [],
  lastReadTopicId: undefined,
  history: [],
  fontSize: 'base',
  readingWidth: 'standard',
};

export function useStudyState() {
  const [state, setState] = useState<ReadingProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load study state from localStorage', e);
    }
    return DEFAULT_STATE;
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // fallback
    }
    return 'dark'; // Dark theme default as requested in prompt
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Save state to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save study state to localStorage', e);
    }
  }, [state]);

  const toggleBookmark = (topicId: string) => {
    setState(prev => {
      const exists = prev.bookmarkedTopicIds.includes(topicId);
      const updated = exists
        ? prev.bookmarkedTopicIds.filter(id => id !== topicId)
        : [...prev.bookmarkedTopicIds, topicId];
      return { ...prev, bookmarkedTopicIds: updated };
    });
  };

  const toggleCompleted = (topicId: string) => {
    setState(prev => {
      const exists = prev.completedTopicIds.includes(topicId);
      const updated = exists
        ? prev.completedTopicIds.filter(id => id !== topicId)
        : [...prev.completedTopicIds, topicId];
      return { ...prev, completedTopicIds: updated };
    });
  };

  const recordTopicVisit = (topicId: string, scrollPercentage?: number) => {
    setState(prev => {
      const filteredHistory = prev.history.filter(h => h.topicId !== topicId);
      const newEntry = {
        topicId,
        timestamp: Date.now(),
        scrollPercentage: scrollPercentage ?? 0,
      };
      return {
        ...prev,
        lastReadTopicId: topicId,
        history: [newEntry, ...filteredHistory].slice(0, 30), // keep last 30
      };
    });
  };

  const setFontSize = (size: 'sm' | 'base' | 'lg' | 'xl') => {
    setState(prev => ({ ...prev, fontSize: size }));
  };

  const setReadingWidth = (width: 'compact' | 'standard' | 'wide') => {
    setState(prev => ({ ...prev, readingWidth: width }));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return {
    state,
    theme,
    toggleTheme,
    toggleBookmark,
    toggleCompleted,
    recordTopicVisit,
    setFontSize,
    setReadingWidth,
    isBookmarked: (id: string) => state.bookmarkedTopicIds.includes(id),
    isCompleted: (id: string) => state.completedTopicIds.includes(id),
  };
}
