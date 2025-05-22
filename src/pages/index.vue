<script setup>
import { ref } from "vue";
import MdEditor from "~/components/editor/MdEditor.vue";
import MdPreview from "~/components/editor/MdPreview.vue";
const text = ref("");
</script>

<template>
  <div>
    <OverviewHero />
    <OverviewFeatures />
    <OverviewJustification />
    <OverviewLogos />
    <OverviewCta />
    <MdEditor v-model:text="text" />
    <MdPreview :text="text" />
  </div>
</template>
