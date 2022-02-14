const daysText = [
  'Domingo',
  'Lunes',
  'Marte',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

const monthText = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Oct',
  'Nov',
  'Dic',
];

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

const dateFormatter = (string) => {
  const date = new Date(string);
  return `${daysText[date.getDay()]} ${date.getDate()} ${
    monthText[date.getMonth()]
  } - ${hourAMPM[date.getHours()]}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  } ${date.getHours() >= 11 ? 'PM' : 'AM'}`;
};

export default dateFormatter;
