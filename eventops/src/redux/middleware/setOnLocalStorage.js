const setOnLocalStorage = (store, action) => {
  switch (action.type) {
    case 'eventos/addNewEvent':
      localStorage.setItem(
        'eventos',
        JSON.stringify({ eventos: store.getState().eventos.eventos })
      );
      break;
    case 'usuarios/addNewUser':
      localStorage.setItem(
        'usuarios',
        JSON.stringify({ usuarios: store.getState().usuarios.usuarios })
      );

    default:
      console.log(action.type);
      break;
  }
};

export default setOnLocalStorage;
