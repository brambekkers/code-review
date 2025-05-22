<script setup>
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = defineModel("text");
</script>
<template>
  <div>
    <MdEditor :preview="false" language="en-US" v-model="text" />
  </div>
</template>
