export const defaultDate = '0000-01-01';

export const returnDate = (string) => {
  const date = string === '' ? defaultDate : string;
  return date;
};
