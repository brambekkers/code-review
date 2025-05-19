import { review } from '@/constants/review';

export type Review = typeof review;
export type SubjectsKeys = keyof typeof review;
export type QuestionType = 'trueFalse' | 'rating';

export type Question = {
  score: number | null;
  question: string;
  comment: string;
  weight: number;
  questionType: QuestionType;
};

export type Subject = {
  title: string;
  description: string;
  img: string;
  topics: Array<{
    title: string;
    description: string;
    applicable: boolean;
    comment: string;
    questions: Question[];
  }>;
}