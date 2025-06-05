import data from "@/assets/data/all_subjects_chapter_data.json";
import { Chapter } from "./types";
import { RootState } from "../store/store";


interface ProcessedChapter extends Chapter {
  totalQuestions: number;
}

export const getFilteredChapters = (
  activeSubject: string,
  filters: {
    class: string[];
    unit: string[];
    status: string[];
    weakChapters: boolean;
  },
  sortOrder: "asc" | "desc"
): ProcessedChapter[] => {
  // Filter by subject first
  let filtered = (data as Chapter[]).filter((chapter) => chapter.subject === activeSubject);

  // Calculate total questions for each chapter
  const processed: ProcessedChapter[] = filtered.map((chapter) => ({
    ...chapter,
    totalQuestions: Object.values(chapter.yearWiseQuestionCount).reduce((a, b) => a + b, 0),
  }));

  // Apply filters
  const result = processed.filter((chapter) => {
    // Filter by class
    if (filters.class.length > 0 && !filters.class.includes(chapter.class)) {
      return false;
    }
    
    // Filter by unit
    if (filters.unit.length > 0 && !filters.unit.includes(chapter.unit)) {
      return false;
    }
    
    // Filter by status
    if (filters.status.length > 0 && !filters.status.includes(chapter.status)) {
      return false;
    }
    
    // Filter by weak chapters
    if (filters.weakChapters && !chapter.isWeakChapter) {
      return false;
    }
    
    return true;
  });

  // Apply sorting
  return result.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.chapter.localeCompare(b.chapter);
    } else {
      return b.chapter.localeCompare(a.chapter);
    }
  });
};

export const getUniqueClasses = (activeSubject: string): string[] => {
  const chapters = (data as Chapter[]).filter((chapter) => chapter.subject === activeSubject);
  return Array.from(new Set(chapters.map((chapter) => chapter.class)));
};

export const getUniqueUnits = (activeSubject: string): string[] => {
  const chapters = (data as Chapter[]).filter((chapter) => chapter.subject === activeSubject);
  return Array.from(new Set(chapters.map((chapter) => chapter.unit)));
};

export const getChapterCount = (
  activeSubject: string,
  filters: {
    class: string[];
    unit: string[];
    status: string[];
    weakChapters: boolean;
  }
): number => {
  return getFilteredChapters(activeSubject, filters, "desc").length;
};