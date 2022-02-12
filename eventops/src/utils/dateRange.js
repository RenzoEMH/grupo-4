const addDays = (date, days = 1) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const dateRange = (start, end, range = []) => {
  if (start > end) return range;
  const next = addDays(start, 1);
  return dateRange(next, end, [...range, start]);
};

export default dateRange;
