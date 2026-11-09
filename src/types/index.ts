export type CategoryId = 
  | 'general-it'
  | 'network-cloud'
  | 'hardware-os'
  | 'programming-algo'
  | 'ai-datascience';

export interface CategoryInfo {
  id: CategoryId;
  nameTh: string;
  nameEn: string;
  iconName: string;
  description: string;
  color: string;
  topicsCount?: number;
}

export interface ContentCallout {
  type: 'note' | 'tip' | 'warning' | 'exam';
  title: string;
  content: string;
}

export interface ContentTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ContentCodeSnippet {
  language: string;
  title?: string;
  code: string;
}

export interface ContentImage {
  url: string;
  caption?: string;
  alt?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string; // Markdown or paragraphs with line breaks
  keyTakeaways?: string[];
  callouts?: ContentCallout[];
  tables?: ContentTable[];
  codeSnippets?: ContentCodeSnippet[];
  images?: ContentImage[];
}

export interface ImportantTerm {
  term: string;
  definition: string;
  category?: string;
}

export interface ExampleCase {
  title: string;
  description: string;
  detail?: string;
}

export interface ReferenceItem {
  title: string;
  url?: string;
  description?: string;
}

export interface StudyTopic {
  id: string;
  lessonNumber?: number;
  title: string;
  category: CategoryId;
  description: string;
  tags: string[];
  coverImage?: string;
  readingTime: number; // in minutes
  updatedAt: string;
  sourcePages?: string; // Exact citation in UTCC Study Guide, e.g. "หน้า 2–5"
  isSampleTopic?: boolean;
  sections: ContentSection[];
  summary?: string;
  keyPoints?: string[];
  importantTerms?: ImportantTerm[];
  examples?: ExampleCase[];
  references?: ReferenceItem[];
}

export interface ReadingProgressState {
  completedTopicIds: string[];
  bookmarkedTopicIds: string[];
  lastReadTopicId?: string;
  history: {
    topicId: string;
    timestamp: number;
    scrollPercentage?: number;
  }[];
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  readingWidth: 'compact' | 'standard' | 'wide';
}
