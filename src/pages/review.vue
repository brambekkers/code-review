<script setup>
const showReviewModal = ref(false);
const { review, subjects, answeredPercentage } = storeToRefs(useReviewStore());
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Review</template>
      <template v-slot:desc>Overview of review process</template>
    </LayoutSectionHead>
    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800 mt-2">Project Code Review</h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Dive deep into collaborative code reviews, track progress, and provide constructive feedback to enhance the quality of development projects. Empower
        your team with detailed insights and ensure best practices are followed across all coding endeavors.
      </p>

      <div class="mx-auto my-8">
        <Button label="Start review" severity="contrast" class="!px-12 !py-5 !text-xl" @click="showReviewModal = true" />
      </div>
      <label class="text-sm text-slate-500">Progress</label>
      <ProgressBar :value="answeredPercentage"> {{ Math.round(answeredPercentage) }}% </ProgressBar>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-8">
      <div v-for="item of subjects" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.img"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.score }} / {{ item.totalQuestions }}</h3>
        </div>
      </div>
    </div>

    <ReviewQuestion v-model="showReviewModal" />
  </div>
</template>
