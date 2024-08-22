<script setup lang="ts">
const { review } = storeToRefs(useReviewStore());

const modalOpen = ref(false);

const upload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) {
    console.log('No file selected');
    return;
  }

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const jsonContent = JSON.parse(e.target?.result as string);
      review.value = jsonContent;
    } catch (error) {
      console.error('Error parsing JSON:', error);
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
    <Button label="Import" class="!px-6 !py-3" severity="contrast" @click="modalOpen = !modalOpen" />

    <Dialog v-model:visible="modalOpen" header="Import" class="min-w-[350px]" :draggable="false">
      <div class="w-full h-full flex items-center justify-center">
        <FileUpload mode="basic" accept=".json" auto :multiple="false" :maxFileSize="1000000" customUpload @uploader="upload" />
      </div>
    </Dialog>
  </div>
</template>
