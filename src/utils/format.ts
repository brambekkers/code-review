export const formatPercentage = (value = 0, options?: Intl.NumberFormatOptions): string => {
  return (value / 100).toLocaleString('nl-NL', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
};

export const formatDate = (date = new Date(), options?: Intl.DateTimeFormatOptions): string => {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
};

export const formatKey = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').trim();
};
