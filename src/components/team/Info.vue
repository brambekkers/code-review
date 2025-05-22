<script setup lang="ts">
const { team, reviewers } = storeToRefs(useTeamStore());
const visible = ref(false);
const nameField = ref("");

const addReviewer = () => {
  if (!nameField.value) return;
  if (reviewers.value.includes(nameField.value)) return;
  team.value.reviewers.push(nameField.value);
  nameField.value = "";
};

const removeReviewer = (remover: string) => {
  team.value.reviewers = team.value.reviewers.filter(
    (reviewer) => reviewer !== remover
  );
};
</script>

<template>
  <div class="w-full">
    <p class="text-sm mt-2 mb-5">
      Please fill out the following fields with the relevant information:
    </p>
    <Fieldset
      legend="Project details"
      class="mx-auto !bg-slate-50 w-full "
      pt:content="pb-0!"
      pt:legend="text-xl bg-transparent!"
    >
      <ul class="grid grid-cols-2 gap-x-6">
          <li
            v-for="(item, key) in team"
            class="flex py-3 not-last:border-b border-secondary !w-full"
          >
            <!-- Keys -->
            <div class="w-1/3 capitalize flex items-center">{{ formatKey(key) }}</div>

            <!-- Value if Date -->
            <div v-if="key === 'date'" class="flex items-center !w-full mr-auto">
              <!-- {{ formatDate(item.date) }} -->
              <div class="">
                <DatePicker :id="key" v-model="team[key]" />
              </div>
            </div>

            <!-- Value if Array -->
            <div v-else-if="key === 'reviewers'" class="w-full">
              <div class="flex !w-full gap-2">
                <InputText
                  type="text"
                  v-model="nameField"
                  class="grow !w-full"
                  placeholder="Reviewer name"
                />
                <Button
                  label="Add reviewer"
                  severity="contrast"
                  @click="addReviewer()"
                  :disabled="!nameField"
                  class=" whitespace-nowrap px-9!"
                />
              </div>
              <div v-if="!reviewers.length" class="text-sm mt-2 text-gray-500">
                Fill in name to add reviewer(s) for this project
              </div>
              <div v-else class="flex gap-3 mt-2 pt-2">
                <OverlayBadge
                  v-for="reviewer of reviewers"
                  severity="danger"
                  value="x"
                  size="small"
                  pt:pcbadge:root="cursor-pointer min-w-4! h-4!"
                  @click="removeReviewer(reviewer)"
                >
                  <Chip :label="reviewer" class="text-sm! py-1!" />
                </OverlayBadge>
              </div>
            </div>
            <div class="w-full" v-else>
              <InputText
                type="text"
                class="w-full"
                :id="key"
                v-model="team[key]"
              />
            </div>
          </li>
      </ul>
    </Fieldset>
  </div>
</template>
