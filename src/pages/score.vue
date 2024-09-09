<script setup>
const { AIScore } = storeToRefs(useScoreStore());
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Score</template>
      <template v-slot:desc>The complete review ready to submit</template>
    </LayoutSectionHead>

    <div class="flex justify-end gap-2 mx-auto max-w-4xl mt-16">
      <Button label="Export PDF" outlined severity="contrast" />
      <Button label="Publish" severity="contrast" />
    </div>

    <ScoreProductDetails class="!my-6" />
    <ScoreSubjectScore class="!my-6" />

    <Panel class="!max-w-4xl !mx-auto">
      <div class="min-h-48 !flex !flex-col !justify-center !items-center">
        <MDC v-if="AIScore?.output" :value="AIScore.output" tag="article" />
        <p v-if="!AIScore?.output">Generate written code review</p>
        <Button v-if="!AIScore?.output" label="test" class="mx-auto !px-8 mt-3" severity="contrast" @click="useScoreStore().createReview()" />
      </div>
    </Panel>
  </div>
</template>
