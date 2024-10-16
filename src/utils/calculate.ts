export const calcPercentage = (totalValue: number, value: number): number => {
  if (totalValue === 0) return 100;
  const percentage = value / (totalValue / 100);
  return typeof percentage === 'number' && !isNaN(percentage) ? percentage : 0;
};
