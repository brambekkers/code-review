<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const { team, reviewers } = useTeamStore();

const rules = {
  team: {
    teamName: { required },
    applicationName: { required },
    reviewers: { required },
    repoUrl: { required },
  },
};

const v$ = useVuelidate(rules, { team });

const checkFields = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    navigateTo('/review');
  }
};

</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Project information</template>
      <template v-slot:desc>Filling in your info</template>
    </LayoutSectionHead>
    <div class="flex flex-col gap-3 mx-auto mt-16">
      <TeamInfo />
      <div v-if="v$.team.$error" class="text-red-500 text-sm">
        Please fill in all required fields.
      </div>
      <div class="flex w-full gap-2">
        <Button label="Start review" severity="contrast" @click="checkFields()" />
      </div>
    </div>
  </div>
</template>
