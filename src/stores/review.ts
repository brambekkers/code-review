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

  const selectRandomQuestion = () => {
    // Get random subject
    const notCompleteSubject = subjects.value.filter((subject) => subject.score < subject.totalQuestions)
    const randomSubject = notCompleteSubject[Math.floor(Math.random() * notCompleteSubject.length)]

    if (!randomSubject) {
      currentSubject.value = null
      currentTopic.value = null
      currentQuestion.value = null
      return
    }

    currentSubject.value = randomSubject.key
    console.log('currentSubject', currentSubject.value)

    // Get random topic
    const notCompleteTopic = randomSubject.topics
      .map((topic, index) => {
        return topic.questions.some((question) => !question.score) ? { ...topic, index } : null
      })
      .filter((topic) => topic)
    const randomTopic = notCompleteTopic[Math.floor(Math.random() * notCompleteTopic.length)]
    if (!randomTopic) return
    currentTopic.value = randomTopic.index
    console.log('currentTopic', currentTopic.value)

    // Get random question
    const notCompleteQuestion = randomTopic.questions
      .map((question, index) => (!question.score ? index : null))
      .filter((question) => question !== null)
    const randomQuestion = notCompleteQuestion[Math.floor(Math.random() * notCompleteQuestion.length)]
    console.log('randomQuestion', randomQuestion)
    if (typeof randomQuestion !== 'number') return
    currentQuestion.value = randomQuestion
  }

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
