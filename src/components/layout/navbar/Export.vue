<script setup lang="ts">
const { review } = storeToRefs(useReviewStore());

const exportData = () => {
  const jsonString = JSON.stringify(review.value, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);

  a.href = url;
  a.download = 'CodeReview.json';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<template>
  <NuxtLink to="#" @click.prevent="exportData">Export</NuxtLink>
</template>
