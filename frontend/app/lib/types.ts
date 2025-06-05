export interface YearWiseQuestionCount {
  [year: string]: number;
}

export interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: YearWiseQuestionCount;
  questionSolved: number;
  status: "Not Started" | "Completed";
  isWeakChapter: boolean;
}

export interface ProcessedChapter extends Chapter {
  totalQuestions: number;
}