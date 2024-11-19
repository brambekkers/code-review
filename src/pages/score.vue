<script setup>
import html2pdf from 'html2pdf.js';

const createPdf = () => {
  const element = document.querySelector('#output');
  const options = {
    margin: 20,
    filename: 'myfile.pdf',
    image: { type: 'png', quality: 1 },
    pagebreak: { mode: 'avoid-all', before: '#page2el' },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait', hotfixes: ['px_scaling'] },
  };
  html2pdf(element, options);
};
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Score</template>
      <template v-slot:desc>The complete review ready to submit</template>
    </LayoutSectionHead>
    <ScoreWarning />

    <div class="flex justify-end gap-2 mx-auto max-w-4xl mt-16">
      <Button label="Export PDF" outlined severity="contrast" @click="createPdf" />
      <Button label="Publish" severity="contrast" disabled />
    </div>

    <section id="output" class="flex flex-col gap-6">
      <ScoreProductDetails />
      <ScoreIntroduction />
      <ScoreSubjectScore />
      <ScoreTopics />

      <!-- <Fieldset class="!max-w-4xl !mx-auto w-full" legend="Review"> Rest of the written review... </Fieldset> -->
    </section>
  </div>
</template>
