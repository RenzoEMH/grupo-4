const emptySingleEvent = {
  _id: 0,
  title: '',
  img: '',
  ticketImg: '',
  lowestPrice: 0,
  category: '',
  ageRestriction: '',
  description: '',
  infoExtra: '',
  currency: '',
  dates: [
    {
      _id: 0,
      date: '',
      startHour: '',
      endHour: '',
      isEditable: true,
      ticketCategories: [],
    },
  ],
  city: '',
  address: '',
  refference: '',
  idOwner: 0,
  ownerName: '',
  state: 'active',
};

export default emptySingleEvent;
