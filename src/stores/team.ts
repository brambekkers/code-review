import { team as newTeam } from '@/constants/team';

export const useTeamStore = defineStore('team', () => {
  const team = ref(newTeam);

  const reviewers = computed(() => team.value.reviewers);
  return {
    team,
    reviewers,
  };
});
