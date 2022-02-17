import { useContext, useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setCart } from '../../redux/features/cartSlice';
import dateOnlyFormatter from '../../utils/dateOnlyFormatter';
import hourOnlyFormatter from '../../utils/hourOnlyFormatter';
import { SesionContext } from '../../utils/SesionContext';

const setupCart = (evento, idSesion) => {
  const cart = evento.typeTicket.map((tTycket) => {
    return {
      id: Math.floor(Math.random() * 10000) + 1,
      city: evento.city,
      date: tTycket.date,
      hour: evento.startHour,
      idUsuario: idSesion,
      idEvento: evento.id,
      img: evento.img,
      amount: 0,
      price: tTycket.price,
      title: evento.title,
      typeTicket: tTycket.type,
    };
  });
  return cart;
};

/**
 * Combines ticket amount of same ticket type and date of specific event for logged user in both storeCart and localCart
 * @param {*} storeCart
 * @param {*} shopCart
 * @returns cart with combined ticket amounts from both storeCart and localCart
 */
const obtainUnique = (storeCart, shopCart) => {
  return storeCart.map((item) => {
    const matchIndex = shopCart.findIndex(
      (object) =>
        item.idUsuario === object.idUsuario &&
        item.idEvento === object.idEvento &&
        item.date === object.date &&
        item.typeTicket === object.typeTicket
    );
    if (matchIndex >= 0) {
      const fuseValue = item.amount + shopCart[matchIndex].amount;
      shopCart.splice(matchIndex, 1);
      return { ...item, amount: fuseValue };
    }
    return item;
  });
};

/**
 *
 * @param {*} fCart
 * @param {*} event
 * @returns
 */
const obtainCapped = (fCart, event) => {
  const capped = fCart.map((item) => {
    const quantity = event.typeTicket.find(
      (element) =>
        element.type === item.typeTicket && element.date === item.date
    )?.quantity;
    console.log(quantity);
    return item.amount >= quantity ? { ...item, amount: quantity } : item;
  });
  return capped;
};

const AddTicketsCard = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento.id === parseInt(eventoId))
  );
  const rCart = useSelector((state) => state.shopCart.cart);
  const { sesion } = useContext(SesionContext);
  const cart = useMemo(
    () => [...setupCart(evento, sesion.id)],
    [evento, sesion.id]
  );
  const [filterCart, setFilterCart] = useState([...cart]);
  const [filterDate, setFilterDate] = useState(cart[0].date);
  const [errorTicket, setErrorTicket] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const crt = cart.filter((itemCrt) => itemCrt.date === filterDate);

    setFilterCart(crt);
  }, [cart, filterDate]);

  const findQuantity = (eventTTickets, cartTTicket, cartTDate) => {
    const quantity = eventTTickets.find(
      (item) => item.type === cartTTicket && item.date === cartTDate
    ).quantity;
    return quantity;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItems = filterCart.filter((item) => item.amount > 0);
    cartItems.length === 0 && setErrorTicket(true);
    if (cartItems.length > 0) {
      const fusedCart = [...obtainUnique(rCart, cartItems), ...cartItems];
      const cappedCart = [...obtainCapped(fusedCart, evento)];
      dispatch(setCart([...cappedCart]));
      navigate('/carrito-compra');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {evento.dates.length === 1 && (
        <p className="card-text detail-eventops-text">
          Fecha: {dateOnlyFormatter(evento.dates[0])} <br />
          Hora: {hourOnlyFormatter(evento.startHour)}
        </p>
      )}
      {evento.dates.length > 1 && (
        <div className="col-md-12">
          <label htmlFor="city">Fecha</label>
          <select
            id="date"
            className="form-select d-block w-100"
            defaultValue={evento.dates[0]}
            onChange={(e) => {
              setFilterDate(e.target.value);
            }}
          >
            {evento.dates.map((date, index) => (
              <option value={date} key={`${date}${index}`}>
                {date}
              </option>
            ))}
          </select>
        </div>
      )}
      <h4 className="card-title">Entradas</h4>
      {filterCart.map((item, i) => (
        <div className="row mb-3" key={`${item.id}${item.title}`}>
          <div className="col-md-8">
            <label>{`${item.typeTicket} (${findQuantity(
              [...evento.typeTicket],
              item.typeTicket,
              item.date
            )} disp.):`}</label>
            <p className="m-0">S/. {item.price}.00</p>
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={item.amount}
              onChange={(e) => {
                setErrorTicket(false);
                e.target.value !== '' &&
                  e.target.value >= 0 &&
                  e.target.value <=
                    findQuantity(
                      [...evento.typeTicket],
                      item.typeTicket,
                      item.date
                    ) &&
                  setFilterCart([
                    ...filterCart.map((unit) => {
                      return item.id === unit.id
                        ? { ...unit, amount: parseInt(e.target.value) }
                        : { ...unit };
                    }),
                  ]);
              }}
              required
            />
          </div>
        </div>
      ))}
      {errorTicket && (
        <div className="invalid-feedback d-block">
          Debe tener por lo menos un ticket agregado
        </div>
      )}
      <div className="custom-control custom-checkbox" id="checkbox2">
        <div className="row">
          <div className="col-md-1">
            <input
              type="checkbox"
              className="custom-control-input"
              id="save-info"
              required
            />
          </div>
          <div className="col-md-11">
            <p className="terminos">
              Te informamos que tus datos personales seran compartidos con el
              organizador del evento
            </p>
          </div>
        </div>
      </div>
      <div className="pb-3 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Agregar a carrito
        </button>
      </div>
    </form>
  );
};

export default AddTicketsCard;
