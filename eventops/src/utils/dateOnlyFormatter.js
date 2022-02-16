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
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const dateOnlyFormatter = (stringDate) => {
  const date = new Date(stringDate);
  return `${daysText[date.getDay()]} ${date.getDate() + 1} de ${
    monthText[date.getMonth()]
  }, ${date.getFullYear()}`;
};

export default dateOnlyFormatter;
