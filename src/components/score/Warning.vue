<script setup lang="ts">
const { answeredPercentage, questionsLeft } = storeToRefs(useReviewStore());
const showReviewModal = ref(false);
</script>
<template>
  <Message v-if="answeredPercentage < 99" class="max-w-4xl mx-auto mt-16 p-4 bg-slate-50" severity="none" id="review-warning">
    <div class="flex gap-6 items-center">
      <Icon class="h-32! w-32!" name="teenyicons:exclamation-circle-outline" size="48" />
      <div>
        <h3 class="text-xl">Review Incomplete</h3>
        <p>
          The review process is currently incomplete. To ensure an accurate and comprehensive assessment, please make sure to provide scores for all subjects,
          topics, and individual questions. Your thorough evaluation is essential for generating a complete and meaningful overall score. We know this will take
          some time but we thank you for your attention to detail and commitment to a comprehensive review.
        </p>
        <div class="mx-auto my-8">
          
        </div>
        <ReviewQuestion v-model="showReviewModal" />
        Questions left 
        <Tag severity="warn">{{ questionsLeft }}</Tag>
        <div class="float-end mt-5">
          <Button label="Go to Review page" class="mr-5" severity="contrast" @click="navigateTo('/review')" />
          <Button
            severity="contrast"
            @click="showReviewModal = true"
            :disabled="answeredPercentage === 100">
            Continue review
          </Button>
        </div>
      </div>
    </div>
  </Message>
</template>
