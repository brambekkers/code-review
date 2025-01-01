<script setup lang="ts">
const { team } = storeToRefs(useTeamStore());
const { totalScore } = storeToRefs(useScoreStore());

const reviewersString = computed(() => {
  const reviewers = team.value.reviewers.join(', ');
  const lastCommaIndex = reviewers.lastIndexOf(',');
  return lastCommaIndex === -1 ? reviewers : `${reviewers.slice(0, lastCommaIndex)} and ${reviewers.slice(lastCommaIndex + 2)}`;
});
</script>

<template>
  <Fieldset class="!mx-auto !max-w-4xl" pt:legend="text-xl" legend="Introduction">
    <p>
      This is the review for the team <strong>{{ team.teamName || '<developer-anonimous>' }} </strong>.
      This review is written by <strong>{{ reviewersString || '<anon>' }}</strong> and is about the application <strong>{{ team.applicationName || '<my-app>' }}</strong>. 
      On average, the team scored <strong>{{ totalScore.totalScore }} of {{ totalScore.maxScore }}</strong> possible points.
      That means
      <strong> {{ formatPercentage(totalScore.percentage, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</strong> of the total score, with this rating the
      application evaluation is: <strong></strong>
    </p>

    <h3 class="text-lg text-gray-800 text-center my-6 font-bold border rounded w-max px-5 py-3 mx-auto bg-slate-50">{{ totalScore.score }}</h3>

    <p>
      In this review, we will take a further look at certain key aspects of the application. These include its quality gates, dependencies, setup, styling,
      technology, best practices, testing, accessibility and versioning. In the chart below, you can see how the team scored in each of these categories.
    </p>
  </Fieldset>
</template>
