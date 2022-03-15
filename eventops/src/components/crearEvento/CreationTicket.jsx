import { useDispatch } from 'react-redux';
import { prevPage } from '../../redux/features/singleEventSlice';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import TicketType from './TicketType';
import { createEventAsync } from '../../redux/features/eventsSlice';

const errors = {
  currency: 'Debe escoger un tipo de moneda',
  ticketCategories:
    'Ingrese todo los datos sobre la(s) categoria(s) de ticket(s) del evento',
};

const eventTicketsDetailsAreValid = (details) => {
  const validation = { isValid: true, formErrors: {} };

  if (details.currency === '') {
    validation.isValid = false;
    validation.formErrors.currency = errors.currency;
  }

  if (
    details.ticketCategories.some(
      (ticketCategory) =>
        !ticketCategory.type ||
        !ticketCategory.price ||
        !ticketCategory.quantity
    )
  ) {
    validation.isValid = false;
    validation.formErrors.ticketCategories = errors.ticketCategories;
  }

  return validation;
};

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
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, formErrors } = eventTicketsDetailsAreValid({
      currency: e.target[0].value,
      ticketCategories: tickets,
    });

    if (isValid) {
      dispatch(createEventAsync(tickets));
      setFormErrors({});
    } else {
      setFormErrors(formErrors);
    }
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
                <select className="form-select d-block w-100" id="currency">
                  <option value="S/.">Soles</option>
                  <option value="$">Dolares</option>
                </select>
                {!!formErrors && (
                  <div className="invalid-feedback d-block">
                    {formErrors.currency}
                  </div>
                )}
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
          {!!formErrors && (
            <div className="invalid-feedback d-block">
              {formErrors.ticketCategories}
            </div>
          )}
          <div className="cuerpo__terminos">
            <div className="col-md-12 order-md-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                  required
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
                  required
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
