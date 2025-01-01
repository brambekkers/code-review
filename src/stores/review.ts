import type { SubjectsKeys } from '@/types/review';
import { review as newReview } from '@/constants/review';

export const useReviewStore = defineStore(
  'review',
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage()
    },
    state: () => {
      const review = ref(newReview);
      const currentSubject = ref<SubjectsKeys | null>(null);
      const currentTopic = ref<number | null>(null);
      const currentQuestion = ref<number | null>(null);
      const allQuestionsScored = ref(false);

      const subjects = computed(() =>
        Object.entries(review.value).map(([key, subject]) => {
          // Calculate the score for the subject
          const score = subject?.topics?.reduce((acc, topic) => {
            const questionScores = topic.questions?.reduce((acc, question) => {
              const maxScore = (question.score ?? 0) * question.weight;
              return acc + (question.score ? maxScore : 0);
            }, 0);

            const topicScore = topic.applicable ? questionScores : 0;
            return acc + topicScore;
          }, 0);

          // Calculate the total questions for the subject
          const totalQuestions = subject?.topics?.reduce((acc, topic) => {
            const questionAmount = topic.questions.length;
            return acc + questionAmount;
          }, 0);

          // Calculate the answered questions for the subject
          const answeredQuestions = subject?.topics?.reduce((acc, topic) => {
            const answered = topic.questions?.reduce((acc, question) => {
              return acc + (!topic.applicable || question.score ? 1 : 0);
            }, 0);
            return acc + answered;
          }, 0);

          return {
            ...subject,
            key: key as SubjectsKeys,
            score,
            totalQuestions,
            answeredQuestions,
          };
        }),
      );

      const totalQuestions = computed(() => subjects.value.reduce((acc, subject) => acc + subject.totalQuestions, 0));
      const answeredQuestions = computed(() => subjects.value.reduce((acc, subject) => acc + subject.answeredQuestions, 0));
      const answeredPercentage = computed(() => (answeredQuestions.value / totalQuestions.value) * 100);
      const questionsLeft = computed(() => totalQuestions.value - answeredQuestions.value);

      const selectedSubject = computed(() => {
        if (!currentSubject.value) return null;
        return review.value[currentSubject.value];
      });

      const selectedTopic = computed(() => {
        if (typeof currentTopic.value !== 'number') return null;
        return selectedSubject.value?.topics[currentTopic.value];
      });

      const selectedQuestion = computed(() => {
        if (typeof currentQuestion.value !== 'number') return null;
        return selectedTopic.value?.questions[currentQuestion.value];
      });

      const nextQuestion = () => {
        for (let subject of subjects.value) {
          let topicIndex = 0;
          for (let topic of subject.topics) {
            let questionIndex = 0;
            for (let question of topic.questions) {
              if (typeof question.score !== 'number') {
                currentSubject.value = subject.key;
                currentTopic.value = topicIndex;
                currentQuestion.value = questionIndex;
                return;
              }
              questionIndex++;
            }
            topicIndex++;
          }
        }

        // If all questions are submitted
        currentSubject.value = null;
        currentTopic.value = null;
        currentQuestion.value = null;
        allQuestionsScored.value = true;
      };

      return {
        review,
        subjects,
        currentSubject,
        selectedSubject,
        selectedTopic,
        selectedQuestion,
        answeredPercentage,
        totalQuestions,
        questionsLeft,
        allQuestionsScored,
        nextQuestion,
      };
    } 
  }
);
