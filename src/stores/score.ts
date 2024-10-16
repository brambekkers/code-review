import type { SubjectsKeys } from '@/types/review';

export const useScoreStore = defineStore('score', () => {
  const { review } = storeToRefs(useReviewStore());

  const getScoreRating = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Great';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Okay';
    if (score >= 50) return 'Bad';
    return 'Very Bad';
  };

  const subjectScores = computed(() => {
    const subjectsKeys = Object.keys(review.value) as SubjectsKeys[];
    type Score = { score: number; maxScore: number; percentage: number };
    const score = {} as Record<SubjectsKeys, Score>;

    for (let key of subjectsKeys) {
      score[key] = scorePerSubject(key);
    }

    return score;
  });

  const totalScore = computed(() => {
    let maxScore = 0;
    let totalScore = 0;
    const scores = Object.values(subjectScores.value);

    for (let subject of scores) {
      maxScore += subject.maxScore;
      totalScore += subject.score;
    }

    const percentage = calcPercentage(maxScore, totalScore);
    return {
      totalScore,
      maxScore,
      percentage,
      score: getScoreRating(percentage),
    };
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
      // Calculate the max score for the topic
      const maxTopicScore = topic.questions.reduce((acc, question) => {
        const questionScore = 6 * question.weight;
        return acc + questionScore;
      }, 0);
      maxScore += topic.applicable ? maxTopicScore : 0;

      // Calculate the score for the topic
      const topicScore = topic.questions.reduce((acc, question) => acc + (question.score || 0), 0);
      return acc + topicScore;
    }, 0);

    const percentage = calcPercentage(maxScore, score);
    return { score, maxScore, percentage };
  };

  return {
    subjectScores,
    totalScore,
  };
});
