<script setup lang="ts">
onMounted(() => {
  useReviewStore().nextQuestion();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <ConfirmDialog class="max-w-[30rem]"></ConfirmDialog>
  </NuxtLayout>
</template>
