import type { SubjectsKeys } from '@/types/review'
import { review as newReview } from '@/constants/review'

export const useReviewStore = defineStore('review', () => {
  const review = ref(newReview)
  const currentSubject = ref<SubjectsKeys | null>(null)
  const currentTopic = ref<number | null>(null)
  const currentQuestion = ref<number | null>(null)

  const subjects = computed(() =>
    Object.entries(review.value).map(([key, subject]) => {
      const score = subject?.topics?.reduce((acc, topic) => {
        const answered = topic.questions?.reduce((acc, question) => (acc + question.score ? 1 : 0), 0)
        return acc + answered
      }, 0)

      const totalQuestions = subject?.topics?.reduce((acc, topic) => {
        return acc + topic.questions.length
      }, 0)

      return {
        ...subject,
        key: key as SubjectsKeys,
        score,
        totalQuestions
      }
    })
  )

  const totalQuestions = computed(() => subjects.value.reduce((acc, subject) => acc + subject.totalQuestions, 0))
  const answeredQuestions = computed(() => subjects.value.reduce((acc, subject) => acc + subject.score, 0))
  const answeredPercentage = computed(() => (answeredQuestions.value / totalQuestions.value) * 100)

  const selectedSubject = computed(() => {
    if (!currentSubject.value) return null
    return review.value[currentSubject.value]
  })

  const selectedTopic = computed(() => {
    if (typeof currentTopic.value !== 'number') return null
    return selectedSubject.value?.topics[currentTopic.value]
  })

  const selectedQuestion = computed(() => {
    if (typeof currentQuestion.value !== 'number') return null
    return selectedTopic.value?.questions[currentQuestion.value]
  })

  const getRandomElement = <T>(array: T[]): T | null => {
    return array.length ? array[Math.floor(Math.random() * array.length)] : null;
  };
  
  const getNotCompleteItems = <T>(items: T[], isComplete: (item: T) => boolean): T[] => {
    return items.filter(item => !isComplete(item));
  };
  
  const selectRandomQuestion = () => {
    // Get random subject
    const notCompleteSubjects = getNotCompleteItems(subjects.value, subject => subject.score >= subject.totalQuestions);
    const randomSubject = getRandomElement(notCompleteSubjects);
  
    if (!randomSubject) {
      currentSubject.value = null;
      currentTopic.value = null;
      currentQuestion.value = null;
      return;
    }
  


    currentSubject.value = randomSubject.key;
    console.log('currentSubject', currentSubject.value);
  
    // Get random topic
    const notCompleteTopics = getNotCompleteItems(randomSubject.topics, topic => !topic.questions.some(question => !question.score))
      .map((topic, index) => ({ ...topic, index }));
    const randomTopic = getRandomElement(notCompleteTopics);
  
    if (!randomTopic) return;
  
    currentTopic.value = randomTopic.index;
    console.log('currentTopic', currentTopic.value);
  
    // Get random question
    const notCompleteQuestions = getNotCompleteItems(randomTopic.questions, question => question.score)
      .map((_, index) => index);
    const randomQuestion = getRandomElement(notCompleteQuestions);
  
    if (typeof randomQuestion !== 'number') return;
  
    currentQuestion.value = randomQuestion;
  };

  return {
    review,
    subjects,
    selectedSubject,
    selectedTopic,
    selectedQuestion,
    answeredPercentage,
    selectRandomQuestion
  }
})
