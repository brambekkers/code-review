<script setup lang="ts">
const { subjects } = storeToRefs(useReviewStore());

type Question = {
  question: string;
  score: number;
  weight: number;
  questionType: string;
  comment: string;
}

const hasAnyFeedback = computed(() => subjects.value.some((subject) => subject.topics.some((topic) => topic.comment)));

const hasNonEmptyComment = (questions: Question[]): boolean => {
  return questions.some(question => question.comment.trim() !== "");
}
</script>
<template>
  <Fieldset v-if="hasAnyFeedback" class="max-w-4xl! mx-auto! w-full" legend="Feedback by Subject"
    pt:content="flex flex-col gap-4" pt:legend="text-xl">
    <template v-for="subject of subjects" :key="subject.key">
      <section v-if="subject.topics.some((t) => t.comment)" class="">
        <Divider align="center" type="solid" class="mt-4! mb-3!">
          <h3 class="text-base font-semibold">{{ subject.title }}</h3>
        </Divider>
        <div v-for="topic of subject.topics" :key="topic.title" :class="{ 'mb-4': topic.comment }">
          <template v-if="topic.comment || hasNonEmptyComment(topic.questions)">
            <h4 class="text-sm font-semibold">{{ topic.title }}</h4>
            <div class="bg-slate-50 border rounded-sm p-4">
              <p class="comment text-xl">{{ topic.comment }}</p>
              <div v-for="question of topic.questions" :key="question.question">
                <div v-if="question.comment">
                  <h6 class="mt-2">
                    <strong>{{ question.question }} </strong>
                  </h6>
                  <p class="comment">{{ question.comment }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>
    </template>
  </Fieldset>
</template>
<style scoped>
.comment::first-letter {
  text-transform: capitalize;
}
</style>
