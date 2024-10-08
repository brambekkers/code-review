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
      This is the review for the team: <strong>{{ team.teamName || 'teamName' }} </strong>. This review is written by {{ reviewersString }} and is about the
      application <strong>{{ team.applicationName || 'applicationName' }}</strong
      >. On average, the team scored <strong>{{ totalScore.totalScore }} of {{ totalScore.maxScore }}</strong> points. That means
      <strong> {{ formatPercentage(totalScore.percentage, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</strong> on average, with this number the
      application is called: <strong></strong>
    </p>

    <h3 class="text-lg text-gray-800 text-center my-6 font-bold border rounded w-max px-5 py-3 mx-auto bg-slate-50">{{ totalScore.score }}</h3>

    <p>
      In this review, we will take a further look at certain key aspects of the application. These include its qualityGates, dependencies, setup, styling,
      technology, bestPractices, testing, accessibility and versioning. In the chart below, you can see how the team scored in each of these categories.
    </p>
  </Fieldset>
</template>
