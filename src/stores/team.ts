import { team as newTeam } from '@/constants/team';

export const useTeamStore = defineStore('team', {
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  },
  state: () => {
    const team = ref(newTeam);

    const reviewers = computed(() => team.value.reviewers);
    return {
      team,
      reviewers,
    };
  }
});
