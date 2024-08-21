<script setup lang="ts">
  const visible = defineModel()
  const { selectedSubject, selectedTopic, selectedQuestion } = storeToRefs(useReviewStore())

  const tiers = ref([
    { name: 'S-tier ', score: 7 },
    { name: 'A-tier ', score: 6 },
    { name: 'B-tier ', score: 5 },
    { name: 'C-tier ', score: 4 },
    { name: 'D-tier ', score: 3 },
    { name: 'E-tier ', score: 2 },
    { name: 'F-tier ', score: 1 }
  ])

  const nextQuestion = () => {
    // todo check if all questions are answered
    useReviewStore().selectRandomQuestion()
  }
</script>

<template>
  <Dialog
    v-model:visible="visible"
    maximizable
    modal
    :header="`Topic: ${selectedSubject?.title}`"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <section class="flex flex-col min-h-48">
      <div
        v-html="selectedTopic?.description"
        class="border-2 border-dashed border-surface-200 h-full rounded bg-slate-50 font-medium p-5 [&>*]:list-disc [&>*]:ms-4" />
    </section>
    <section
      v-if="selectedQuestion"
      class="mt-4">
      <h3 class="font-bold text-lg">Question:</h3>
      <p>{{ selectedQuestion?.question }}</p>
      <Textarea
        v-model="selectedQuestion.comment"
        class="w-full mt-4"
        rows="5"
        cols="30" />
      <Select
        v-model="selectedQuestion.score"
        :options="tiers"
        option-label="name"
        option-value="score"
        placeholder="Select rating"
        class="w-full mt-3" />
      <Divider class="mb-5 mt-8" />
      <div class="flex justify-end">
        <Button
          label="Submit"
          severity="contrast"
          class="!px-12 !py-2 !text-xl"
          @click="nextQuestion" />
      </div>
    </section>
  </Dialog>
</template>
