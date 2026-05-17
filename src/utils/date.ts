export function formatDateToMonthYear(date: Date, locale = 'es') {
  const format = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  return format.format(date);
}

export function formatDateRange(
  startDate: Date,
  endDate: Date | undefined,
  locale = 'es',
  presentLabel: string,
) {
  const start = formatDateToMonthYear(startDate, locale);
  const end = endDate ? formatDateToMonthYear(endDate, locale) : presentLabel;

  return `${start} - ${end}`;
}
