<script setup>
const { team } = storeToRefs(useTeamStore());
</script>

<template>
  <Fieldset legend="Project details" class="!mx-auto !max-w-4xl !bg-slate-50" pt:content="!pb-0" pt:legend="text-xl !bg-transparent">
    <ul>
      <li v-for="(item, key) in team" class="flex py-3 [&:not(:last-child)]:border-b border-secondary">
        <div class="w-1/3 capitalize">{{ formatKey(key) }}</div>

        <!-- On Date -->
        <div v-if="key === 'date'">{{ formatDate(item) }}</div>

        <!-- On array -->
        <div v-else-if="key === 'reviewers'">
          <span v-for="name of item" class="me-3">{{ name }}</span>
        </div>
        <div v-else>{{ item }}</div>
      </li>
    </ul>
  </Fieldset>
</template>
