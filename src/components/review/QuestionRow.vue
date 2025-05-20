<script setup lang="ts">
import { reviewPlaceholders } from '@/constants/placeholders';
import type { Question } from '@/types/review.js';
const question = defineModel<Question>({ required: true });

watch(() => question.value.score, useReviewStore().nextQuestion);

// TODO: refactor this and change the if conditions to mark what is set/unset/touched/untouched
const randomPlaceholder = computed(() => {
  if (question.value.score === 0) return '';
  if (typeof question.value.score !== 'number') return 'Score this question...';
  const placeholders = reviewPlaceholders[question.value.score as keyof typeof reviewPlaceholders];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
});

const collapsed = ref(true);
</script>

<template>
  <Panel toggleable :collapsed="collapsed">
    <template #header>
      <div class="flex items-center cursor-pointer w-full" @click="collapsed=!collapsed">
        <Icon
          v-if="question.score === 0"
          class="me-3 text-gray-600 mw-22"
          name="uil:times-circle"
          size="22"
        />
        <Icon
          v-else-if="typeof question.score === 'number' && question.comment"
          class="me-3 text-green-600 mw-22"
          name="uil:comment-check"
          size="22"
        />
        <Icon
          v-else-if="typeof question.score === 'number' && question.comment"
          class="me-3 text-green-600"
          name="uil:check-circle"
          size="22"
        />
        <Icon 
          v-else
          class="me-3 text-gray-600 min-w-[22px]"
          name="uil:circle"
          size="22"
        />
        <h3 class="font-semibold">{{ question.question }}</h3>
      </div>
    </template>
    <div v-if="question" class="flex h-full w-full flex-col items-end">
      <BaseRateSelect v-if="question.questionType === 'rating'" v-model="question.score" class="w-60!" />
      <BaseTrueFalse v-if="question.questionType === 'trueFalse'" v-model="question.score" />

      <Textarea
        v-model="question.comment"
        :placeholder="randomPlaceholder"
        class="w-full mt-4"
        rows="5"
        cols="30"
      />
    </div>
  </Panel>
</template>
