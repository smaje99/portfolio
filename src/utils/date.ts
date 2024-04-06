export function formatDateToMonthYear(date: Date) {
  const format = new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric' });
  return format.format(date);
}
