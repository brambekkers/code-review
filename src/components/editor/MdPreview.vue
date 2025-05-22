<script setup>
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <MdPreview language="en-US" :modelValue="text" />
  </div>
</template>
