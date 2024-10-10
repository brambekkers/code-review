<script setup lang="ts">
const modelValue = defineModel();
const options = ref([
  { label: 'True', value: 6 },
  { label: 'False', value: 1 },
  { label: 'Not applicable', value: 0 },
]);
</script>

<template>
  <div>
    <SelectButton v-model="modelValue" :options="options" optionLabel="label" option-value="value" :allow-empty="false" />
  </div>
</template>
