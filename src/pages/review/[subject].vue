<script setup lang="ts">
const { review } = storeToRefs(useReviewStore());

const route = useRoute();
const id = route.params.subject;

const subject = computed(() => review.value[id]);

const tiers = ref([
  { name: 'S', score: 7, color: '#fe7f7e' },
  { name: 'A ', score: 6, color: '#ffbf7e' },
  { name: 'B ', score: 5, color: '#feff7f' },
  { name: 'C ', score: 4, color: '#7fff7f' },
  { name: 'D', score: 3, color: '#7ffffe' },
  { name: 'E', score: 2, color: '#807fff' },
  { name: 'F', score: 1, color: '#ff7ffe' },
]);

const valueData = (score: number) => {
  return tiers.value.find((t) => t.score === score);
};
</script>

<template>
  <div>
    {{ subject }}

    <h3 class="font-bold text-xl text-gray-800 mt-2">Topics</h3>
    <Fieldset v-for="topic of subject.topics" :key="topic.title" :legend="topic.title" toggleable>
      <Panel v-for="item of topic.questions" :header="item.question" class="my-3" :key="topic.title" toggleable collapsed>
        <div class="flex h-full w-full flex-col items-end">
          <Select v-model="item.score" :options="tiers" option-label="name" option-value="score">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center">
                <Avatar :label="valueData(slotProps.value as number).name" :style="`background-color: ${valueData(slotProps.value).color}`" />
              </div>
              <span v-else>
                <Avatar label="X" :style="`background-color: red`" />
              </span>
            </template>
            <template #option="slotProps">
              <Avatar :label="slotProps.option.name" :style="`background-color: ${slotProps.option.color}`" />
              <!-- <div class="flex items-center">
                <img
                  :alt="slotProps.option.label"
                  src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                  :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                  style="width: 18px"
                />
                <div>{{ slotProps.option.name }}</div>
              </div> -->
            </template>
          </Select>
          <Textarea v-model="item.comment" class="w-full mt-4" rows="5" cols="30" />
        </div>
      </Panel>
    </Fieldset>
  </div>
</template>
