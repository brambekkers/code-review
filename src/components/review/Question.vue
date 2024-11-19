<script setup lang="ts">
const visible = defineModel<boolean>({ required: true });
const { selectedSubject, selectedTopic, selectedQuestion, allQuestionsScored, currentSubject } = storeToRefs(useReviewStore());

const questionIsAnswered = computed(() => typeof selectedQuestion.value?.score === 'number');
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
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-leave-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <section :key="selectedTopic?.description" class="flex flex-col">
        <div
          v-html="selectedTopic?.description"
          class="border-2 border-dashed border-surface-200 h-full rounded bg-slate-50 font-medium description p-5 [&>*]:list-disc"
        />
        <div class="flex justify-end text-sm my-1 text-red-600 font-semibold">
          <nuxt-link to="/review/qualityGates">See all questions in this category</nuxt-link>
        </div>
      </section>
    </Transition>

    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-leave-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <section :key="selectedQuestion.question" v-if="selectedQuestion" class="mt-2">
        <h3 class="font-bold text-lg">Question:</h3>
        <p>{{ selectedQuestion?.question }}</p>
        <BaseRateSelect v-if="selectedQuestion.questionType === 'rating'" v-model="selectedQuestion.score" class="!w-full mt-3" />
        <BaseTrueFalse v-if="selectedQuestion.questionType === 'trueFalse'" v-model="selectedQuestion.score" class="mt-3 border border-slate-300" />
        <Textarea v-model="selectedQuestion.comment" class="w-full mt-4" rows="5" cols="30" />
      </section>
    </Transition>
    <div class="flex justify-end mt-2">
      <Button label="Submit" severity="contrast" class="!px-12 !py-2 !text-xl" @click="nextQuestion" :disabled="!questionIsAnswered" />
    </div>
  </Dialog>
</template>

<style scoped>
:deep(.description) {
  ul {
    margin: 1rem 0;
    padding: 0 3rem;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
