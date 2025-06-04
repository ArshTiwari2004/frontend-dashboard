import { Chapter } from "./types";
import { RootState } from "@/store/store";

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
  // In a real app, this would fetch from your JSON data
  // For now, we'll return mock data 
  
  const mockChapters: Chapter[] = [
    {
      chapter: "Gravitation",
      class: "Class 11",
      unit: "Mechanics 1",
      yearWiseQuestionCount: {
        "2024": 60,
        "2025": 80,
      },
      questionSolved: 113,
      totalQuestions: 205,
      status: "Completed",
      isWeakChapter: false,
    },
    {
      chapter: "Math in Physics",
      class: "Class 11",
      unit: "Mechanics 1",
      yearWiseQuestionCount: {
        "2024": 60,
        "2025": 20,
      },
      questionSolved: 113,
      totalQuestions: 205,
      status: "Completed",
      isWeakChapter: false,
    },
    // Add more chapters as needed to match your screenshots
  ];

  return mockChapters
    .filter((chapter) => {
      // Filter by subject (though in our mock all are Physics)
      // In real app, you'd filter by activeSubject
      
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
    })
    .sort((a, b) => {
      // Simple sort by chapter name
      if (sortOrder === "asc") {
        return a.chapter.localeCompare(b.chapter);
      } else {
        return b.chapter.localeCompare(a.chapter);
      }
    });
};