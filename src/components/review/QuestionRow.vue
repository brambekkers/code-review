<script setup lang="ts">
import { reviewPlaceholders } from '@/constants/placeholders';
import type { Question } from '@/types/review.js';
const question = defineModel<Question>({ required: true });

watch(() => question.value.score, useReviewStore().nextQuestion);

const randomPlaceholder = computed(() => {
  if (question.value.score === 0) return '';
  if (typeof question.value.score !== 'number') return 'Score this question...';
  const placeholders = reviewPlaceholders[question.value.score as keyof typeof reviewPlaceholders];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
});
</script>

<template>
  <Panel toggleable collapsed>
    <template #header>
      <div class="flex items-center">
        <Icon
          v-if="(typeof question.score === 'number' && question.comment) || question.score === 0"
          class="me-3 text-green-600"
          name="uil:check-circle"
          size="22"
        />
        <Icon v-else-if="typeof question.score === 'number' || question.comment" class="me-3 text-orange-600" name="uil:info-circle" size="22" />
        <Icon v-else class="me-3 text-red-600" name="uil:times-circle" size="22" />
        <h3 class="font-semibold">{{ question.question }}</h3>
      </div>
    </template>
    <div v-if="question" class="flex h-full w-full flex-col items-end">
      <BaseRateSelect v-if="question.questionType === 'rating'" v-model="question.score" class="!w-60" />
      <BaseTrueFalse v-if="question.questionType === 'trueFalse'" v-model="question.score" />
      <Textarea v-model="question.comment" :placeholder="randomPlaceholder" :disabled="question.score === 0" class="w-full mt-4" rows="5" cols="30" />
    </div>
  </Panel>
</template>
