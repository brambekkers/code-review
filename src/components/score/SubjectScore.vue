<script setup>
const { subjectScores } = storeToRefs(useScoreStore());
</script>

<template>
  <Fieldset legend="Subject scores" class="!mx-auto !max-w-4xl w-full" pt:legend="text-xl">
    <ul>
      <li v-for="(item, key) in subjectScores" class="py-3 border-secondary">
        <div class="flex justify-between items-end">
          <p class="capitalize font-bold">{{ formatKey(key) }}</p>
          <div>
            <div class="text-sm font-bold">{{ formatPercentage(item.percentage, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) }}</div>
          </div>
        </div>
        <ProgressBar :value="item.percentage" class="!h-4"> {{ item.score }}/ {{ item.maxScore }} </ProgressBar>
      </li>
    </ul>
  </Fieldset>
</template>
