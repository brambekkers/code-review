<script setup lang="ts">
const { answeredPercentage } = storeToRefs(useReviewStore());
</script>
<template>
  <Message v-if="answeredPercentage < 99" class="max-w-4xl mx-auto mt-16 p-4 bg-slate-50" severity="none">
    <div class="flex gap-6 items-center">
      <Icon v-tooltip="'Azure'" class="!h-32 !w-32" name="teenyicons:exclamation-circle-outline" size="48" />
      <div>
        <h3 class="text-xl">Review Incomplete</h3>
        <p>
          The review process is currently incomplete. To ensure an accurate and comprehensive assessment, please make sure to provide scores for all subjects,
          topics, and individual questions. Your thorough evaluation is essential for generating a complete and meaningful overall score. We know this will take
          some time but we thank you for your attention to detail and commitment to a comprehensive review.
        </p>
        <Button label="Complete Review" class="float-end mt-5" severity="contrast" @click="navigateTo('/review')" />
      </div>
    </div>
  </Message>
</template>

<style scoped></style>
