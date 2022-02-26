import _ from 'lodash';

const getEarliestDate = (eventDates) => {
  const dates = _.cloneDeep(eventDates);
  dates.sort((a, b) => (a.date > b.date ? 1 : -1));
  return dates[0].date;
};

export default getEarliestDate;
