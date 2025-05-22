<script setup>
import { ref } from "vue";
import VCodeBlock from "@wdns/vue-code-block";

const code = ref(`const foo = 'bar';`);

const value = ref("");

const hello = (text) => {
  value.value = text.htmlValue;
};
</script>

<template>
  <div>
    <OverviewHero />
    <OverviewFeatures />
    <OverviewJustification />
    <OverviewLogos />
    <OverviewCta />
    <div class="card">
      <Editor
        @text-change="hello"
        v-model="value"
        editorStyle="height: 320px"
      />
      <p>{{ value }}</p>
      <VCodeBlock
        :code="value"
        highlightjs
        label="Hello World"
        lang="javascript"
        theme="neon-bunny"
      />
    </div>
  </div>
</template>
