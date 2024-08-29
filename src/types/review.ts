import { review } from '@/constants/review';

export type SubjectsKeys = keyof typeof review;

export type Question = {
  score: number;
  question: string;
  comment: string;
};
