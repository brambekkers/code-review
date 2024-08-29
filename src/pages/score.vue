<script setup>
const { team } = storeToRefs(useTeamStore());
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Score</template>
      <template v-slot:desc>The complete review ready to submit</template>
    </LayoutSectionHead>

    <div class="flex justify-end gap-2 mx-auto max-w-4xl mt-16">
      <Button label="Export PDF" outlined severity="contrast" />
      <Button label="Publish" severity="contrast" />
    </div>

    <Panel header="Project details" class="mx-auto max-w-4xl mt-4">
      <ul class="list-disc">
        <li v-for="(item, key) in team" class="flex py-3 border-b border-secondary">
          <div class="w-1/3 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</div>

          <!-- On Date -->
          <div v-if="key === 'date'">{{ item.toDateString() }}</div>

          <!-- On array -->
          <div v-else-if="key === 'reviewers'">
            <span v-for="name of item" class="me-3">{{ name }}</span>
          </div>
          <div v-else>{{ item }}</div>
        </li>
      </ul>
    </Panel>
  </div>
</template>
