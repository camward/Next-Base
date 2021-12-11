/**
 * Вернет строку. 1-я буква будет заглавной
 * @param str
 */
export const ucFirst = (str: string) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};
