<script setup lang="ts">
  onMounted(() => {
    useReviewStore().selectRandomQuestion()
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
