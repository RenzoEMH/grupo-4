import { useDispatch } from 'react-redux';
import {
  addNewSingleEvent,
  prevPage,
} from '../../redux/features/singleEventSlice';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import TicketType from './TicketType';

const newTicket = () => {
  return {
    _id: Math.floor(Math.random() * 100000) + 1,
    type: '',
    price: 0,
    quantity: 0,
    sold: 0,
  };
};

const CreationTicket = () => {
  const [tickets, setTickets] = useState([{ ...newTicket() }]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewSingleEvent(tickets));
  };

  const handleOnClickAddTicket = () => {
    setTickets([
      ...tickets,
      {
        ...newTicket(),
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button ">Creación de Entradas</h1>
        <div className="container">
          <div className="row border-bottom py-3">
            <div className="col-md-3 order-md-1">
              <div className="mb-3">
                <label htmlFor="currency">Moneda</label>
                <select
                  className="form-select d-block w-100"
                  id="currency"
                  // required
                >
                  <option value="">Soles</option>
                  <option>Dolares</option>
                </select>
              </div>
            </div>
            <div className="col-md-9 order-md-1 d-md-flex justify-content-md-end align-items-md-center">
              <button
                type="button"
                className="btn btn-primary col-12 col-md-4"
                onClick={handleOnClickAddTicket}
              >
                Agregar Entrada
              </button>
            </div>
          </div>
          {tickets.map((ticketType, index) => (
            <TicketType
              ticket={ticketType}
              all={tickets}
              setTickets={setTickets}
              index={index}
              key={index}
            />
          ))}
          <div className="cuerpo__terminos">
            <div className="col-md-12 order-md-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" htmlFor="same-address">
                  He leido y acepto los
                  <span
                    type="button"
                    style={{ color: '#9f2d30', fontWeight: '700' }}
                  >
                    {' '}
                    Terminos y Condiciones.
                  </span>
                </label>
              </div>
              <div className="custom-control custom-checkbox" id="checkbox2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Certifico la veracidad de la información ingresada y asumo la
                  absoluta responsabilidad por el evento.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 order-md-1 container"
        style={{ marginTop: '1rem' }}
      >
        <div className="row">
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              className="btn btn-light"
              onClick={() => dispatch(prevPage())}
            >
              Atras
            </button>
          </div>
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <button type="submit" className="btn btn-danger">
              Crear Evento
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreationTicket;
