<script setup lang="ts">
const modelValue = defineModel();

const tiers = ref([
  { code: 'A', name: 'Excellent', score: 6, color: '#386641', textColor: 'white' },
  { code: 'B ', name: 'Great', score: 5, color: '#6a994e', textColor: 'white' },
  { code: 'C ', name: 'Good', score: 4, color: '#a7c957', textColor: 'black' },
  { code: 'D ', name: 'Okay', score: 3, color: '#fdf7d6', textColor: 'black' },
  { code: 'E', name: 'Bad', score: 2, color: '#de6560', textColor: 'white' },
  { code: 'F', name: 'Very Bad', score: 1, color: '#ca3d3f', textColor: 'white' },
]);

const valueData = (score: number) => {
  return tiers.value.find((t) => t.score === score);
};

const avatarStyle = (score: number) => ({
  backgroundColor: valueData(score)?.color,
  color: valueData(score)?.textColor,
});
</script>

<template>
  <Select v-model="modelValue" :options="tiers" option-label="name" option-value="score">
    <template #value="{ value }: { value: number }">
      <div v-if="value" class="flex items-center">
        <Avatar :label="valueData(value)?.code" :style="avatarStyle(value)" />
        <p class="ms-1">- {{ valueData(value)?.name }}</p>
      </div>
      <div v-else class="flex items-center">
        <Avatar label="X" />
        <p class="ms-2">Not set</p>
      </div>
    </template>
    <template #option="{ option }">
      <Avatar :label="option.code" :style="avatarStyle(option.score)" />
      <p class="ms-1">- {{ option.name }}</p>
    </template>
  </Select>
</template>
