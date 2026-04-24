export function formatDateToMonthYear(date: Date, locale = 'es') {
  const format = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  return format.format(date);
}
