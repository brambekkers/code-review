<script setup lang="ts">
import type { TrueFalseQuestion } from '~/types/review';

const modelValue = defineModel();

const { options } = defineProps<{
  options?: TrueFalseQuestion['options']
}>()

const OPTIONS = [
  { label: 'Yes', value: 6 },
  { label: 'No', value: 1 },
  { label: 'Not applicable', value: 0 },
]

const opts = options ? OPTIONS.map(
  (option, index) => ({ 
  ...option,
  label: options[index] ?? option.label
})
) : OPTIONS

</script>

<template>
  <SelectButton v-model="modelValue" :options="opts" optionLabel="label" option-value="value" :allow-empty="false" />
</template>
