<script setup lang="ts">
import type { Subject } from '~/types/review';

const { review, subjects } = storeToRefs(useReviewStore());

const route = useRoute();
const subjectId = Array.isArray(route.params.subject) ? route.params.subject[0] : route.params.subject as string;
const confirm = useConfirm();
const subject = computed(() => subjectId && subjectId in review.value ? review.value[subjectId as keyof typeof review.value] as Subject : undefined);

/**
 * Finds the subject and allows to pass a shift to get a defined amount of indexes back and forth on the subjects array
 * Allows you to find the previous or nexts subjects
 */
const findSubject = (shift: number) => subjects.value[subjects.value.findIndex((s: {key: string}) => s.key === subjectId) + shift]

const nextSubject = computed(() => findSubject(1));
const previousSubject = computed(() => findSubject(-1));

const findSubjectIndex = (title: string) => {
  if (!subject.value) return -1;
  return subject.value.topics.findIndex((t: {title: string}) => t.title === title);
}

const markAsNotApplicable = (title: string) => {
  const topicIndex = findSubjectIndex(title);
  if (subject?.value?.topics?.[topicIndex]) {
    subject.value.topics[topicIndex].applicable = false;
    subject.value.topics[topicIndex].comment = '';
    subject.value.topics[topicIndex].questions.forEach((q) => {
      q.score = 0;
      q.comment = '';
    });
  }
};

const markAsUnset = (title: string) => {
  const topicIndex = findSubjectIndex(title);
  if(subject?.value?.topics?.[topicIndex]) {
    subject.value.topics[topicIndex].applicable = true;
    subject.value.topics[topicIndex].questions.forEach((q) => {
      q.score = 0;
    });
  }
};

const confirmNotApplicable = (title: string) => {
  confirm.require({
    message: `Are you sure you want to proceed? All questions in "${title}" will be marked as "Not Applicable" and the feedback that is given will be lost.`,
    header: 'Confirmation',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: `I'm sure`,
      severity: 'contrast',
    },
    accept: () => {
      markAsNotApplicable(title);
    },
    reject: () => {
      console.log('reject');
    },
  });
};
</script>

<template>
  <div>
    <section class="relative mb-10 mt-5 flex justify-center items-center h-60">
      <img :src="subject?.img" class="absolute inset-0 object-cover object-center w-full h-full rounded-lg" alt="Subject cover" />
      <div class="relative z-10 bg-white/80 rounded-md text-center p-4">
        <h3 class="font-bold text-2xl text-gray-800">{{ subject?.title }}</h3>
        <p class="max-w-[500px]">{{ subject?.description }}</p>
      </div>
    </section>
    <h3 class="font-bold text-4xl text-gray-800 my-6">
      <Button aria-label="Back" variant="link" @click="navigateTo('/review#review-progress')">
        <Icon 
          class="me-3 text-gray-600 min-w-[22px]"
          name="uil:angle-left-b"
          size="22"
        />
      </Button>
      {{ subject?.title }}
    </h3>
    <div class="grid grid-cols-1 mt-16 gap-16">
      <Fieldset v-for="topic of subject?.topics" :key="topic.title" :legend="topic.title" pt:legend="font-bold text-xl" class="mb-6!">
        <div
          v-html="topic?.description"
          class="border-2 border-dashed border-surface-200 h-full rounded-sm bg-slate-50 font-medium p-5 description *:list-disc"
        />
        <FloatLabel class="mt-6" variant="on">
          <label :for="topic.title + 'label'">Your feedback for the whole topic...</label>
          <Textarea v-model="topic.comment" :id="topic.title + 'label'" :disabled="!topic.applicable" class="w-full" rows="5" cols="30" />
        </FloatLabel>
        

        <Fieldset :legend="topic.title + ' Checks'" toggleable class="mb-5! bg-slate-50!" pt:legend="bg-transparent!">
          <div class="flex flex-wrap justify-end">
            <Button
              v-if="topic.applicable"
              severity="secondary"
              @click="confirmNotApplicable(topic.title)"
            >
              Mark checks as 'Not Applicable'
              <Icon 
                class="min-w-[22px]"
                name="uil:times-circle"
                size="22"
              />
            </Button>
            <Button
              severity="secondary"
              @click="markAsUnset(topic.title)"
            >
              Mark checks as 'Unset'
              <Icon 
                class="min-w-[22px]"
                name="uil:circle"
                size="22"
              />
            </Button>
          </div>
          <span v-for="(question, i) of topic.questions" :key="question.question">
            <ReviewQuestionRow 
              :modelValue="question" 
              @update:modelValue="topic.questions[i] = $event" 
              class="my-3" 
            />
          </span>
        </Fieldset>
      </Fieldset>
    </div>
  </div>
  <div class="mt-16 w-full flex justify-center">
    <Button
      v-if="previousSubject"
      variant="link"
      severity="secondary"
      @click="navigateTo('/review/' + previousSubject.key)"
    >
      <Icon 
        class="text-gray-600 min-w-[22px]"
        name="uil:angle-left-b"
        size="22"
      />
      {{ previousSubject.title }}
    </Button>
    <Button
      v-if="nextSubject"
      variant="link"
      severity="secondary"
      @click="navigateTo('/review/'+ nextSubject.key)"
    >
      {{ nextSubject.title }}
      <Icon 
        class="text-gray-600 min-w-[22px]"
        name="uil:angle-right-b"
        size="22"
      />
    </Button>
    <Button
      v-else
      variant="link"
      severity="secondary"
      @click="navigateTo('/score')"
    >
      Go to score
      <Icon 
        class="me-3 text-gray-600 min-w-[22px]"
        name="uil:angle-right-b"
        size="22"
      />
    </Button>
  </div>
</template>

<style scoped>
:deep(.description) {
  ul {
    margin: 1rem 0;
    padding: 0 3rem;
  }

  p {
    margin-bottom: 1rem;
  }
}
</style>
