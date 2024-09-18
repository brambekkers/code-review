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

    <Fieldset class="!max-w-4xl !mx-auto" legend="Review"> test </Fieldset>
  </div>
</template>
