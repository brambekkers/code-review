<script setup lang="ts">
const config = useRuntimeConfig();
const version = config.public.currentVersion;
</script>

<template>
  <footer class="my-20">
    <p class="text-center text-sm text-slate-500">Copyright © {{ new Date().getFullYear() }}. All rights reserved.</p>
    <p class="text-center text-xs text-slate-500 mt-1">
      Made by
      <NuxtLink to="https://github.com/brambekkers" target="_blank" rel="noopener" class="hover:underline"> Bram Bekkers & Aliens </NuxtLink>
    </p>
    <span class="hidden">
      {{ version }}
    </span>
  </footer>
</template>
