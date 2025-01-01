<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <slot name="title">Section title goes here</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600">
      <slot name="desc">Section description goes here</slot>
    </p>
  </div>
</template>
