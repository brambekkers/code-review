<script setup lang="ts">
const modelValue = defineModel();

const tiers = ref([
  { code: 'S', name: 'S-tier', score: 7, color: '#fe7f7e' },
  { code: 'A ', name: 'S-tier', score: 6, color: '#ffbf7e' },
  { code: 'B ', name: 'S-tier', score: 5, color: '#feff7f' },
  { code: 'C ', name: 'S-tier', score: 4, color: '#7fff7f' },
  { code: 'D', name: 'S-tier', score: 3, color: '#7ffffe' },
  { code: 'E', name: 'S-tier', score: 2, color: '#807fff' },
  { code: 'F', name: 'S-tier', score: 1, color: '#ff7ffe' },
]);

const valueData = (score: number) => {
  return tiers.value.find((t) => t.score === score);
};
</script>

<template>
  <Select v-model="modelValue" :options="tiers" option-label="name" option-value="score">
    <template #value="{ value }: { value: number }">
      <div v-if="value" class="flex items-center">
        <Avatar :label="valueData(value)?.code" :style="`background-color: ${valueData(value)?.color}`" />
        <p class="ms-1">- tier</p>
      </div>
      <div v-else class="flex items-center">
        <Avatar label="X" :style="`background-color: red`" />
        <p class="ms-2">Not set</p>
      </div>
    </template>
    <template #option="{ option }">
      <Avatar :label="option.code" :style="`background-color: ${option.color}`" />
      <p class="ms-1">- tier</p>
    </template>
  </Select>
</template>
