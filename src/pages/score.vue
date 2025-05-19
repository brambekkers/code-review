<script setup>
const createPdf = () => {
    window.print();
}
</script>

<style>
@media print {
   #review-warning, #review-actions { /* Add the elements you want to hide */
      display: none; 
   }
}
</style>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Score</template>
      <template v-slot:desc>The complete review ready to be shared</template>
    </LayoutSectionHead>
    <ScoreWarning />

    <div id="review-actions" class="flex justify-end gap-2 mx-auto max-w-4xl mt-16">
      <Button label="Print" outlined severity="contrast" @click="createPdf" />
      <Button label="Publish" severity="contrast" disabled />
    </div>

    <section id="output" class="flex flex-col gap-6">
      <ScoreProductDetails />
      <ScoreIntroduction />
      <ScoreSubjectScore />
      <ScoreTopics />

      <!-- <Fieldset class="max-w-4xl! mx-auto! w-full" legend="Review"> Rest of the written review... </Fieldset> -->
    </section>
  </div>
</template>
