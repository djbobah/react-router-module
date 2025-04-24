export const LocalDate = (date: string) => {
  const localDate = new Date(date);

  return localDate.toLocaleDateString();
};
