import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../_Tiket.scss';
import { useSelector, useDispatch } from 'react-redux';
import mockDB from '../../utils/mockDB';
import { setAllTickets } from '../../redux/features/ticketsSlice';
import { emptyCart } from '../../redux/features/cartSlice';
import { setAtribute } from '../../redux/features/singleSaleSlice';
import { addNewSale } from '../../redux/features/salesSlice';
import parseJwt from '../../utils/ParseJwt';

/**
 * Combines ticket amount of same ticket type and date of specific event for logged user in both storeCart and localCart
 * @param {*} arrayTicketRedux
 * @param {*} arrayTicketLocal
 * @returns cart with combined ticket amounts from both storeCart and localCart
 */
const obtainUnique = (arrayTicketRedux, arrayTicketLocal) => {
  return arrayTicketRedux.map((item) => {
    const matchIndex = arrayTicketLocal.findIndex(
      (object) =>
        item.idUsuario === object.idUsuario &&
        item.evento.idEvento === object.evento.idEvento &&
        item.evento.dateEvent === object.evento.dateEvent &&
        item.evento.typeTicket === object.evento.typeTicket
    );
    if (matchIndex >= 0) {
      const fuseValue =
        item.evento.quantity + arrayTicketLocal[matchIndex].evento.quantity;
      const itemEvento = { ...item.evento, quantity: fuseValue };
      arrayTicketLocal.splice(matchIndex, 1);
      return { ...item, evento: itemEvento };
    }
    return item;
  });
};

const FormPay = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const creditCards = mockDB.creditCard.creditCard;
  const navigate = useNavigate();
  const [creditCard, setcreditCard] = useState(null);
  const users = useSelector((state) => state.usuarios.usuarios);
  const sale = useSelector((state) => state.singleSale.singleSale);
  const tickets = useSelector((state) => state.tickets.tickets);
  const shopCart = useSelector((state) =>
    state.shopCart.cart.filter((cartItem) => cartItem.idUsuario === sesion._id)
  );
  const dispatch = useDispatch();

  let username = '';
  let fare = 0;
  let numero = '';
  let IDtransaction = Math.floor(Math.random() * 100000) + 1;
  //Obtenemos el nombre del usuario de la sesion
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === sesion._id) {
      username = users[i].Nombres + ' ' + users[i].apellidos;
    }
  }
  //Obtenemos el monto total a pagar
  for (let i = 0; i < shopCart.length; i++) {
    fare = fare + shopCart[i].price * shopCart[i].amount;
  }
  //Llenamos los datos del compra (sale)
  useEffect(() => {
    dispatch(
      setAtribute({ key: 'id', value: Math.floor(Math.random() * 10000) + 1 })
    );
    dispatch(setAtribute({ key: 'idUser', value: sesion._id }));
    dispatch(
      setAtribute({
        key: 'numberTransaction',
        value: IDtransaction,
      })
    );
    dispatch(
      setAtribute({
        key: 'token',
        value: Math.floor(Math.random() * 10000) + 1,
      })
    );
    dispatch(
      setAtribute({
        key: 'paymentDate',
        value: Date(Date.now()),
      })
    );
    dispatch(
      setAtribute({
        key: 'client',
        value: username,
      })
    );
    dispatch(setAtribute({ key: 'cardType', value: 'VISA' }));
    dispatch(setAtribute({ key: 'totalFare', value: fare }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Volvemos los datos del shopcart en tickets
  const ticketsLocal = shopCart.map((cartItem) => {
    const ticketObject = {
      id: Math.floor(Math.random() * 10000) + 1,
      idUsuario: sesion._id,
      idTransaction: Math.floor(Math.random() * 10000) + 1,
      evento: {
        idEvento: cartItem.idEvento,
        typeTicket: cartItem.typeTicket,
        dateEvent: cartItem.date,
        quantity: cartItem.amount,
      },
    };
    return ticketObject;
  });
  //Se llena los datos de la tarjeta de credito
  const onInputChange = (inputName) => (inputValue) => {
    setcreditCard({ ...creditCard, [inputName]: inputValue.target.value });
    console.log(creditCard);
  };
  //Se llena el numero de la tarjeta en la boleta de compra (sale)
  if (creditCard) {
    numero = creditCard.numberCard;
    dispatch(setAtribute({ key: 'cardNumber', value: numero }));
  }
  // HandleSubmit del boton Pagar
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sale);
    console.log(creditCard);
    if (creditCard !== null) {
      creditCards.forEach((card) => {
        if (
          creditCard.numberCard === card.numberCard &&
          creditCard.expiryDate === card.expiryDate &&
          creditCard.CVV === card.CVV
        ) {
          const allTickets = [
            ...obtainUnique(tickets, ticketsLocal),
            ...ticketsLocal,
          ];
          console.log(allTickets);
          dispatch(setAllTickets(allTickets));
          dispatch(emptyCart());
          dispatch(addNewSale({ ...sale }));
          navigate('/confirmacion-compra/' + sale.id);
        }
      });
    }
  };

  return (
    <div className="container d-flex flex-column" id="container-fp">
      <form onSubmit={(e) => handleSubmit(e)}>
        <main className="eventops__main row">
          <div id="container-datos-tarjeta">
            <h1 className="text-center text-light">EVENTOPS</h1>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-credit-card-2-front"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nro. Tarjeta"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="numberCard"
                // value={sale.cardNumber}
                onChange={onInputChange('numberCard')}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-calendar-event"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="MM/AA"
                aria-label="CVV"
                id="expiryDate"
                onChange={onInputChange('expiryDate')}
              />
              <span className="input-group-text">
                <i className="bi bi-credit-card"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="CVV"
                aria-label="Server"
                id="CVV"
                onChange={onInputChange('CVV')}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nombres"
                aria-label="CVV"
                id="name"
                onChange={onInputChange('name')}
              />
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
                aria-label="Server"
                id="lastname"
                onChange={onInputChange('lastname')}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Server"
                id="email"
                onChange={onInputChange('email')}
              />
            </div>
          </div>
          <div className="botones-fp">
            <div>
              <Link to={'/metodo-pago'} className="btn btn-secondary py-2">
                Atras
              </Link>
            </div>
            <div>
              <button className="login__btn btn btn-primary " type="submit">
                Pagar
              </button>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};
export default FormPay;
