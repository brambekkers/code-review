<script setup lang="ts">
import type { Question } from '@/types/review.js';
const question = defineModel<Question>({ required: true });

watch(() => question.value.score, useReviewStore().nextQuestion);
</script>

<template>
  <Panel toggleable collapsed>
    <template #header>
      <div class="flex items-center">
        <Icon v-if="question.score && question.comment" class="me-3 text-green-600" name="uil:check-circle" size="22" />
        <Icon v-else-if="question.score || question.comment" class="me-3 text-orange-600" name="uil:info-circle" size="22" />
        <Icon v-else class="me-3 text-red-600" name="uil:times-circle" size="22" />
        <h3 class="font-semibold">{{ question.question }}</h3>
      </div>
    </template>
    <div v-if="question" class="flex h-full w-full flex-col items-end">
      <BaseRateSelect v-model="question.score" class="!w-60" />
      <Textarea v-model="question.comment" placeholder="Add a small description" class="w-full mt-4" rows="5" cols="30" />
    </div>
  </Panel>
</template>
