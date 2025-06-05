declare module "*.json" {
  const value: {
    subject: string;
    chapter: string;
    class: string;
    unit: string;
    yearWiseQuestionCount: Record<string, number>;
    questionSolved: number;
    status: "Not Started" | "Completed";
    isWeakChapter: boolean;
  }[];
  export default value;
}