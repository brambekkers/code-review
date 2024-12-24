<script setup lang="ts">
const { team, reviewers } = storeToRefs(useTeamStore());
const visible = ref(false);

const nameField = ref('');

const addReviewer = () => {
  if (!nameField.value) return;
  if (reviewers.value.includes(nameField.value)) return;
  team.value.reviewers.push(nameField.value);
  nameField.value = '';
};

const removeReviewer = (remover: string) => {
  team.value.reviewers = team.value.reviewers.filter((reviewer) => reviewer !== remover);
};
</script>

<template>
  <div class="max-w-[400px]">
    <OverlayBadge severity="danger">
      <Button class="text-contrast" label="Team info" @click="visible = !visible">
        <Icon name="fluent:people-team-20-filled" size="22" />
        Add the team & review base information here
        <Dialog v-model:visible="visible" modal class="w-[95%] md:!w-5/6 max-w-[1000px] pb-6" header="Team information">
          <p class="text-sm">
            Here you provide the necessary details about the team that you are reviewing. This information is crucial and it will help us maintain accurate
            records and facilitate effective collaboration within the team.
          </p>
          <p class="text-sm mt-2 mb-5">Please fill out the following fields with the relevant information:</p>
          <div class="text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(item, key) of team">
              <template v-if="key === 'reviewers'"> </template>
              <template v-else-if="key === 'date'">
                <div class="flex flex-col gap-2">
                  <label :for="key" class="text-xs font-bold -mb-2 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</label>
                  <DatePicker :id="key" v-model="team[key]" />
                </div>
              </template>
              <template v-else>
                <div class="flex flex-col gap-2">
                  <label :for="key" class="text-xs font-bold -mb-2 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</label>
                  <InputText type="text" :id="key" v-model="team[key]" />
                </div>
              </template>
            </div>
          </div>
          <Divider class="!mt-7" />
          <label class="text-xs font-bold -mb-2">Reviewers</label>

          <div class="flex w-full gap-2">
            <InputText type="text" v-model="nameField" class="flex-grow" placeholder="Reviewer name" />
            <Button label="Add reviewer" severity="contrast" @click="addReviewer()" :disabled="!nameField" />
          </div>
          <div v-if="!reviewers.length" class="text-sm mt-2 text-gray-500">Fill in name to add reviewer(s) for this project</div>
          <div v-else class="flex gap-3 mt-2 pt-2">
            <OverlayBadge
              v-for="reviewer of reviewers"
              severity="danger"
              value="x"
              size="small"
              pt:pcbadge:root="cursor-pointer !min-w-4 !h-4"
              @click="removeReviewer(reviewer)"
            >
              <Chip :label="reviewer" class="!text-sm !py-1" />
            </OverlayBadge>
          </div>
        </Dialog>
      </Button>
    </OverlayBadge>
  </div>
</template>
