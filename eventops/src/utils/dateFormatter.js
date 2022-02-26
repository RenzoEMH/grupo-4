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

const dateFormatter = (dates) => {
  const { date: lowestDate, startHour: time } = [...dates].sort((a, b) =>
    a.date > b.date ? 1 : -1
  )[0];
  const date = new Date(lowestDate);
  const [hours, minutes] = time.split(':');
  return `${daysText[date.getDay()]} ${date.getDate() + 1} ${
    monthText[date.getMonth()]
  } - ${hourAMPM[parseInt(hours)]}:${minutes} ${
    parseInt(hours) >= 11 ? 'PM' : 'AM'
  }`;
};

export default dateFormatter;
