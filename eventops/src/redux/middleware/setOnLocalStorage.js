const setOnLocalStorage = (store, action) => {
  switch (action.type) {
    case 'eventos/addNewEvent':
      localStorage.setItem(
        'eventos',
        JSON.stringify({ eventos: store.getState().eventos })
      );
      break;

    default:
      console.log(action.type);
      break;
  }
};

export default setOnLocalStorage;
