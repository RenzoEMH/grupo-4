const returnNumber = (string) => {
  const number = parseInt(string === '' ? '0' : string);
  return number;
};

export default returnNumber;
