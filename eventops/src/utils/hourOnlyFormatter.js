const hourAMPM = [
  '12',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];

const hourOnlyFormatter = (time) => {
  const [hours, minutes] = time.split(':');
  return `${hourAMPM[parseInt(hours)]}:${minutes} ${
    parseInt(hours) >= 11 ? 'PM' : 'AM'
  }`;
};

export default hourOnlyFormatter;
