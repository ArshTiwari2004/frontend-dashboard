import data from "@/assets/data/all_subjects_chapter_data.json";
import { Chapter } from "./types";
import { RootState } from "../store/store";

export const getFilteredChapters = (
  activeSubject: string,
  filters: {
    class: string[];
    unit: string[];
    status: string[];
    weakChapters: boolean;
  },
  sortOrder: "asc" | "desc"
): Chapter[] => {
  // Filter by subject first
  let filtered = data.filter((chapter) => chapter.subject === activeSubject);

  // Calculate total questions for each chapter
  filtered = filtered.map((chapter) => ({
    ...chapter,
    totalQuestions: Object.values(chapter.yearWiseQuestionCount).reduce((a, b) => a + b, 0),
  }));

  // Apply filters
  filtered = filtered.filter((chapter) => {
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
  return filtered.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.chapter.localeCompare(b.chapter);
    } else {
      return b.chapter.localeCompare(a.chapter);
    }
  });
};

// Get unique classes for current subject
export const getUniqueClasses = (activeSubject: string) => {
  return [...new Set(
    data
      .filter((chapter) => chapter.subject === activeSubject)
      .map((chapter) => chapter.class)
  )];
};

// Get unique units for current subject
export const getUniqueUnits = (activeSubject: string) => {
  return [...new Set(
    data
      .filter((chapter) => chapter.subject === activeSubject)
      .map((chapter) => chapter.unit)
  )];
};

// Get chapter count for display
export const getChapterCount = (
  activeSubject: string,
  filters: {
    class: string[];
    unit: string[];
    status: string[];
    weakChapters: boolean;
  }
) => {
  return getFilteredChapters(activeSubject, filters, "desc").length;
};