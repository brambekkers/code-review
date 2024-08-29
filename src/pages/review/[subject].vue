<script setup lang="ts">
const { review } = storeToRefs(useReviewStore());

const route = useRoute();
const id = route.params.subject;

const subject = computed(() => review.value[id]);
</script>

<template>
  <div>
    <section class="relative mb-10 mt-5 flex justify-center items-center h-60">
      <img :src="subject.img" class="absolute inset-0 object-cover object-center w-full h-full rounded-lg" alt="Subject cover" />
      <div class="relative z-10 bg-white/80 rounded-md text-center p-4">
        <h3 class="font-bold text-2xl text-gray-800">{{ subject.title }}</h3>
        <p class="max-w-[500px]">{{ subject.description }}</p>
      </div>
    </section>
    <h3 class="font-bold text-xl text-gray-800 mt-6">Topics</h3>
    <Fieldset v-for="topic of subject.topics" :key="topic.title" :legend="topic.title" toggleable class="!mb-5">
      <section class="flex flex-col my-2">
        <div
          v-html="topic?.description"
          class="border-2 border-dashed border-surface-200 h-full rounded bg-slate-50 font-medium p-5 [&>*]:list-disc [&>*]:ms-4"
        />
      </section>
      <ReviewQuestionRow v-for="(question, i) of topic.questions" v-model="topic.questions[i]" class="my-3" :key="question.title" />
    </Fieldset>
  </div>
</template>
