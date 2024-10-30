import { useInactiveTimer } from '@fitx/inactive-timer';

// const FIVE_MINUTES_IN_SECONDS = 60 * 5;
const TEN_MINUTES_IN_SECONDS = 60 * 10;

export const useSaveStore = defineStore('save', () => {
  const lastSaved = ref<Date>();
  const { start, stop, countdown, isRunning, onTimerDone, time } = useInactiveTimer();
  countdown.value = TEN_MINUTES_IN_SECONDS;
  const stoppedForever = ref(false);

  start();
  const restart = start;

  return {
    stoppedForever,
    lastSaved,
    countdown,
    isRunning,
    time,
    start,
    restart,
    stop,
    onTimerDone,
  };
});
