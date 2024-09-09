export const calcPercentage = (totalValue: number, value: number): number => {
  const percentage = value / (totalValue / 100);
  return typeof percentage === 'number' && !isNaN(percentage) ? percentage : 0;
};
