<script setup lang="ts">
const { review } = storeToRefs(useReviewStore());

const route = useRoute();
const id = route.params.subject;

const subject = computed(() => review.value[id]);

const markAsNotApplicable = (title: string) => {
  const topicIndex = subject.value.topics.findIndex((t) => t.title === title);
  subject.value.topics[topicIndex].applicable = false;
  subject.value.topics[topicIndex].questions.forEach((q) => {
    q.score = 0;
    q.comment = '';
  });
};

const markAsUnset = (title: string) => {
  const topicIndex = subject.value.topics.findIndex((t) => t.title === title);
  subject.value.topics[topicIndex].applicable = true;
  subject.value.topics[topicIndex].questions.forEach((q) => {
    q.score = null;
  });
};
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
    <h3 class="font-bold text-4xl text-gray-800 my-6">Topics</h3>

    <Fieldset v-for="topic of subject.topics" :key="topic.title" :legend="topic.title" pt:legend="font-bold text-xl" class="!mb-6">
      <div v-html="topic?.description" class="font-medium [&>*]:list-disc [&>*]:ms-4 px-2" />
      <FloatLabel class="mt-6" variant="on">
        <label :for="topic.title + 'label'">Your feedback for the whole topic...</label>
        <Textarea :id="topic.title + 'label'" :disabled="!topic.applicable" class="w-full" rows="5" cols="30" />
      </FloatLabel>
      <div class="flex justify-end px-1">
        <a v-if="topic.applicable" class="text-red-600 font-medium text-sm cursor-pointer" @click="markAsNotApplicable(topic.title)"
          >Mark entire category as <b>'Not Applicable'</b></a
        >
        <a v-if="!topic.applicable" class="font-medium text-sm cursor-pointer" @click="markAsUnset(topic.title)">Mark entire category as <b>'Unset'</b></a>
      </div>

      <Fieldset legend="questions" toggleable class="!mb-5 !bg-slate-50" pt:legend="!bg-transparent">
        <ReviewQuestionRow v-for="(question, i) of topic.questions" v-model="topic.questions[i]" class="my-3" :key="question.title" />
      </Fieldset>
    </Fieldset>
  </div>
</template>
