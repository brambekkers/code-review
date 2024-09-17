import type { SubjectsKeys } from '@/types/review';
import { doc } from 'firebase/firestore';

export const useScoreStore = defineStore('score', () => {
  // Generate unique id based on time
  const id = uniqueId();
  const db = useFirestore();
  const docRef = doc(db, `generate/${id}`);

  const { review } = storeToRefs(useReviewStore());

  const subjectScores = computed(() => {
    const subjectsKeys = Object.keys(review.value) as SubjectsKeys[];
    type Score = { score: number; maxScore: number; percentage: number };
    const score = {} as Record<SubjectsKeys, Score>;

    for (let key of subjectsKeys) {
      score[key] = scorePerSubject(key);
    }

    return score;
  });

  const scorePerSubject = (subjectKey: SubjectsKeys) => {
    const subject = review.value[subjectKey];
    if (!subject)
      return {
        score: 0,
        maxScore: 0,
        percentage: 0,
      };

    let maxScore = 0;
    let score = subject.topics.reduce((acc, topic) => {
      maxScore += topic.questions.length * 7;
      const topicScore = topic.questions.reduce((acc, question) => acc + (question.score || 0), 0);
      return acc + topicScore;
    }, 0);
    const percentage = calcPercentage(maxScore, score);
    return { score, maxScore, percentage };
  };

  const AIScore = useDocument(docRef);

  const createReview = async () => {
    try {
      console.log('Creating review...');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    subjectScores,
    createReview,
    AIScore,
  };
});
