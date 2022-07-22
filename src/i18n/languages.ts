export const languages = ['pl', 'en'];

export const detectLanguage = (): string => {
  const lng = navigator.language;

  return lng;
};
