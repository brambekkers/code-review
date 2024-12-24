<script setup>
const { subjects, answeredPercentage } = storeToRefs(useReviewStore());
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Review</template>
      <template v-slot:desc>Overview of review process</template>
    </LayoutSectionHead>
    <div class="flex flex-col gap-3 mx-auto max-w-6xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800 mt-2 flex justify-between">
        Project Code Review
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Dive deep into a collaborative code review with the project team, track progress, and provide constructive feedback to enhance the quality of development projects. 
        Empower the reviewed team with detailed insights and ensure best practices are followed across all coding endeavors.
      </p>

      <TeamInfo />

      <label class="text-sm text-slate-500 flex justify-between item-end -mb-2 mt-16" for="progressBar">
        Your review progress
        <div class="font-bold">{{ Math.round(answeredPercentage) }}%</div>
      </label>
      <ProgressBar id="progressBar" :value="answeredPercentage" :show-value="false"> </ProgressBar>
    </div>

    <div class="grid md:grid-cols-4 gap-10 mx-auto max-w-6xl mt-8">
      <div v-for="subject of subjects" class="group">
        <ReviewSubjectTile :subject="subject" />
      </div>
    </div>
  </div>
</template>
