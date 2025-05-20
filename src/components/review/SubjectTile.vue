<script setup lang="ts">
const { subjects } = storeToRefs(useReviewStore());

type Subject = typeof subjects.value[0];

const props = defineProps<{
  subject: Subject;
}>();
</script>

<template>
  <div class="group">
    <div
      class="relative w-full aspect-square bg-cover rounded-sm transition flex items-center group-hover:-translate-y-1 group-hover:shadow-xl group-hover:scale-105 cursor-pointer"
      :style="`background-image: url(..${subject.img});`"
      @click="navigateTo(`/review/${props.subject.key}`)"
    >
      <div class="absolute z-0 inset-0 bg-gray-700 opacity-60 rounded-md"></div>

      <div class="relative z-10 mx-auto text-center text-white">
        <h2 class="text-2xl font-extralight">{{ subject.title }}</h2>
        <h3 class="text-md font-semibold">{{ subject.answeredQuestions }} / {{ subject.totalQuestions }}</h3>
      </div>
    </div>
  </div>
</template>
