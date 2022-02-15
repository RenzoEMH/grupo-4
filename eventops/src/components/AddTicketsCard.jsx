import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fuseCarts } from '../redux/features/cartSlice';
import dateOnlyFormatter from '../utils/dateOnlyFormatter';
import hourOnlyFormatter from '../utils/hourOnlyFormatter';
import { SesionContext } from '../utils/SesionContext';

const setupCart = (evento, idSesion) => {
  const cart = evento.typeTicket.map((tTycket) => {
    return {
      id: Math.floor(Math.random() * 10000) + 1,
      city: evento.city,
      date: '',
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

const AddTicketsCard = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento.id === parseInt(eventoId))
  );
  const { sesion } = useContext(SesionContext);
  const [cart, setCart] = useState([...setupCart(evento, sesion.id)]);
  const [errorDate, setErrorDate] = useState(false);
  const [errorTicket, setErrorTicket] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * si solo hay una fecha en el evento, poner esa fecha para todos los tickets
   */
  useEffect(() => {
    evento.dates.length === 1 &&
      setCart([...cart.map((item) => (item.date = evento.dates[0]))]);
  }, [cart, evento.dates]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItems = cart.filter((item) => item.amount > 0);
    cartItems.length === 0 && setErrorTicket(true);
    e.target[0].value === 'DEFAULT' && setErrorDate(true);
    if (cartItems.length > 0 && e.target[0].value !== 'DEFAULT') {
      dispatch(fuseCarts([...cartItems]));
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
            defaultValue={'DEFAULT'}
            onChange={(e) => {
              setErrorDate(false);
              setCart([
                ...cart.map((item) => {
                  return { ...item, date: e.target.value };
                }),
              ]);
            }}
          >
            <option value="DEFAULT" disabled>
              Elige una fecha
            </option>
            {evento.dates.map((date, index) => (
              <option value={date} key={`${date}${index}`}>
                {date}
              </option>
            ))}
          </select>
          {errorDate && (
            <div className="invalid-feedback d-block">
              Debe seleccionar una fecha
            </div>
          )}
        </div>
      )}
      <h4 className="card-title">Entradas</h4>
      {cart.map((item, i) => (
        <div className="row mb-3" key={`${item.id}${item.title}`}>
          <div className="col-md-8">
            <label>{`${item.typeTicket} (${evento.typeTicket[i].quantity} disp.):`}</label>
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
                  e.target.value <= evento.typeTicket[i].quantity &&
                  setCart([
                    ...cart.map((unit) => {
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
