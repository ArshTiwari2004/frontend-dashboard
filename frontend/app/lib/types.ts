export interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: Record<string, number>;
  questionSolved: number;
  totalQuestions?: number;
  status: "Not Started" | "Completed";
  isWeakChapter: boolean;
}