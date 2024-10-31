<script setup lang="ts">
const visible = defineModel<boolean>({ required: true });
const { selectedSubject, selectedTopic, selectedQuestion, allQuestionsScored } = storeToRefs(useReviewStore());

const nextQuestion = () => {
  if (allQuestionsScored.value) {
    visible.value = false;
  }
  useReviewStore().nextQuestion();
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    maximizable
    modal
    :header="`Topic: ${selectedSubject?.title}`"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <section class="flex flex-col">
      <div
        v-html="selectedTopic?.description"
        class="border-2 border-dashed border-surface-200 h-full rounded bg-slate-50 font-medium p-5 [&>*]:list-disc [&>*]:ms-4"
      />
    </section>
    <section v-if="selectedQuestion" class="mt-4">
      <h3 class="font-bold text-lg">Question:</h3>
      <p>{{ selectedQuestion?.question }}</p>
      <Textarea v-model="selectedQuestion.comment" class="w-full mt-4" rows="5" cols="30" />
      <BaseRateSelect v-if="selectedQuestion.questionType === 'rating'" v-model="selectedQuestion.score" class="!w-full mt-3" />
      <BaseTrueFalse v-if="selectedQuestion.questionType === 'trueFalse'" v-model="selectedQuestion.score" class="mt-3 border border-slate-300" />

      <Divider class="mb-5 mt-8" />
      <div class="flex justify-end">
        <Button label="Submit" severity="contrast" class="!px-12 !py-2 !text-xl" @click="nextQuestion" />
      </div>
    </section>
  </Dialog>
</template>
