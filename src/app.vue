<script setup lang="ts">
onMounted(() => {
  useReviewStore().nextQuestion();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
