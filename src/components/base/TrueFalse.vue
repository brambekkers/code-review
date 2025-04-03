<script setup lang="ts">
const modelValue = defineModel();
const options = ref([
  { label: 'Yes', value: 6 },
  { label: 'No', value: 1 },
  { label: 'Not applicable', value: 0 },
]);
</script>

<template>
  <SelectButton v-model="modelValue" :options="options" optionLabel="label" option-value="value" :allow-empty="false" />
</template>
