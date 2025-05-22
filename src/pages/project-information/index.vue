<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

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
    navigateTo("/review");
  }
};

v$.value.$touch()
</script>

<template>
  <div>
    <LayoutSectionHead>
      <template v-slot:title>Project information</template>
      <template v-slot:desc>Filling in your info</template>
    </LayoutSectionHead>
    <div class="flex flex-col gap-3 mx-auto mt-16 items-center max-w-4xl!">
      <TeamInfo />

      <div class="flex w-full gap-2">
        <Button
          :severity="v$.$errors.length > 0 ? 'secondary' : 'success'"
          label="Start review"
          @click="checkFields()"
          class="ml-auto"
          :class="[v$.$errors.length > 0 ? 'pointer-events-none' : '']"
          >
          <Icon name="ic:baseline-rate-review" size="22" />
          Start review
        </Button>
      </div>
      <div v-if="v$.team.$error" class="text-red-500 text-sm">
        <ul>
          <li v-if="v$.team.teamName.$error">Team Name is required.</li>
          <li v-if="v$.team.applicationName.$error">
            Application Name is required.
          </li>
          <li v-if="v$.team.reviewers.$error">
            At least one Reviewer is required.
          </li>
          <li v-if="v$.team.repoUrl.$error">Repository URL is required.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
