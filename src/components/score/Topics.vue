<script setup lang="ts">
const { subjects } = storeToRefs(useReviewStore());

const hasAnyFeedback = computed(() => subjects.value.some((subject) => subject.topics.some((topic) => topic.comment)));
</script>

<template>
  <Fieldset v-if="hasAnyFeedback" class="!max-w-4xl !mx-auto w-full" legend="Feedback by Subject" pt:content="flex flex-col gap-4" pt:legend="text-xl">
    <template v-for="subject of subjects" :key="subject.key">
      <section v-if="subject.topics.some((t) => t.comment)" class="">
        <Divider align="center" type="solid" class="!mt-4 !mb-3">
          <h3 class="text-base font-semibold">{{ subject.title }}</h3>
        </Divider>
        <div v-for="topic of subject.topics" :key="topic.title" :class="{ 'mb-4': topic.comment }">
          <template v-if="topic.comment">
            <h4 class="text-sm font-semibold">{{ topic.title }}</h4>
            <p :class="{ 'opacity-70': !topic.comment }" class="bg-slate-50 border rounded p-4">
              {{ topic.comment || 'Unfortunately, there is no comment provided for this topic at the moment. Please check back later for updates.' }}
            </p>
          </template>
        </div>
      </section>
    </template>
  </Fieldset>
</template>
