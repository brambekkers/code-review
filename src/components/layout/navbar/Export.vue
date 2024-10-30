<script setup lang="ts">
const { team } = storeToRefs(useTeamStore());
const { review } = storeToRefs(useReviewStore());
const { countdown, isRunning, stoppedForever } = storeToRefs(useSaveStore());
const toast = useToast();
const neverShow = ref(false);
const stringifiedData = () => JSON.stringify({ review: review.value, team: team.value }, null, 2);

const exportData = () => {
  if (neverShow.value) {
    stopForever();
  }
  const blob = new Blob([stringifiedData()], { type: 'application/json' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);

  a.href = url;
  a.download = 'CodeReview.json';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showSuccessMessage();
  useSaveStore().restart();
};

const showSuccessMessage = () => {
  toast.add({ severity: 'success', summary: 'Export success', detail: 'Your review is successfully downloaded', life: 3000 });
};

const stopForever = () => {
  stoppedForever.value = true;
};
</script>

<template>
  <div>
    <OverlayBadge v-if="!isRunning" severity="danger">
      <NuxtLink to="#" @click.prevent="exportData">Export </NuxtLink>
    </OverlayBadge>
    <Dialog
      :visible="!isRunning && !stoppedForever"
      modal
      :closable="false"
      class="!w-11/12 md:!w-[80vw] !max-w-[600px] !border-none !overflow-hidden"
      pt:header="!bg-slate-950 text-white !py-3 font-semibold text-xl mb-4 gap-4 !justify-start"
    >
      <template #header>
        <Icon name="icon-park-outline:save-one" size="22" />
        <h3>Don't forget to save</h3>
      </template>
      <p class="mb-2">
        <span class="font-bold me-1">Please note:</span>
        You have not saved your data for a while.
      </p>
      <p>
        <span class="font-semibold me-1"> This application does not save your data automatically.</span>
        To prevent data loss, remember to regularly export/save your data.
      </p>
      <div class="flex items-center mt-4">
        <Checkbox v-model="neverShow" inputId="neverShow" binary severity="contrast" />
        <label for="neverShow" class="ml-2"> Never show this message again </label>
      </div>

      <template #footer>
        <div class="flex justify-end gap-4 w-full">
          <Button type="button" label="Cancel" outlined severity="contrast" class="!px-6" @click="neverShow ? stopForever() : useSaveStore().restart()" />
          <Button type="button" label="Export" severity="contrast" class="!px-6" @click="exportData" />
        </div>
      </template>
    </Dialog>
    <NuxtLink v-if="isRunning" :key="countdown" to="#" @click.prevent="exportData">Export </NuxtLink>
  </div>
</template>
