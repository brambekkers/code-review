<script setup lang="ts">
const { subjects } = storeToRefs(useReviewStore());
</script>

<template>
  <Fieldset class="!max-w-4xl !mx-auto w-full" legend="Feedback by Subject" pt:content="flex flex-col gap-6" pt:legend="text-xl">
    <template v-for="subject of subjects" :key="subject.key">
      <section v-if="subject.topics.some((t) => t.comment)" class="mb-4">
        <h3 class="text-base font-semibold">{{ subject.title }}</h3>
        <div v-for="topic of subject.topics" :key="topic.title" class="mb-4">
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
