<script setup>
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Project information</template>
      <template v-slot:desc>Filling in your info</template>
    </LayoutSectionHead>
    <div class="flex flex-col gap-3 mx-auto mt-16">
      <TeamInfo />
      <div class="flex w-full gap-2">
        <Button label="Start review" severity="contrast" @click="navigateTo('/review')" />
      </div>
    </div>
  </div>
</template>
