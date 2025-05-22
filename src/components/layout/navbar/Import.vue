<script setup lang="ts">
import type { FileUploadUploaderEvent } from 'primevue';

const { review } = storeToRefs(useReviewStore());
const { team } = storeToRefs(useTeamStore());

const modalOpen = ref(false);
const toast = useToast();

const showSuccessMessage = () => {
  toast.add({ severity: 'success', summary: 'Import success', detail: 'You successfully imported a review file', life: 3000 });
};

const showErrorMessage = () => {
  toast.add({ severity: 'error', summary: 'Error', detail: 'There was an error while uploading a review file', life: 3000 });
};

const isReviewFile = (content: any) => {
  const keys = Object.keys(review.value);
  const newKeys = Object.keys(content.review);
  const hasAllTheKeysKeys = keys.filter((key) => !content.review[key]).length === 0;
  const hasIncorrectKeys = newKeys.some((key) => !review.value[key]);
  return content && hasAllTheKeysKeys && !hasIncorrectKeys;
};

const upload = (input: FileUploadUploaderEvent) => {
  if (!input.files || Array.isArray(input.files) && input.files.length < 1) {
    console.log('No file selected');
    return;
  }

  const file = Array.isArray(input.files) ? input.files[0] : input.files;
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const content = JSON.parse(e.target?.result as string);
      if (!isReviewFile(content)) throw new Error('Invalid review file');

      content.team.date = new Date(content.team.date);
      review.value = content.review;
      team.value = content.team;

      modalOpen.value = false;
      showSuccessMessage();
    } catch (error) {
      console.error('Error parsing JSON:', error);
      showErrorMessage();
    }
  };

  reader.onerror = (error) => {
    console.error('Error reading file:', error);
  };

  reader.readAsText(file as File);
};
</script>

<template>
  <div>
    <Toast />
    <Button label="Import" class="px-6! py-3!" severity="contrast" @click="modalOpen = !modalOpen" />
    <Dialog v-model:visible="modalOpen" modal header="Import" class="min-w-[350px] text-center" :draggable="false" pt:header="pb-1!">
      Select a review file to import
      <div class="w-full h-full flex items-center justify-center mt-2">
        <FileUpload
          mode="basic"
          accept=".json"
          auto
          :multiple="false"
          :maxFileSize="1000000"
          customUpload
          @uploader="upload"
          pt:pc-choose-button:root="bg-black! border border-black! outline-black! text-white"
        />
      </div>
    </Dialog>
  </div>
</template>
