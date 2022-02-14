import { useDispatch, useSelector } from 'react-redux';
import {
  nextPage,
  prevPage,
  resetAllAtribute,
  setAtribute,
} from '../../redux/features/singleEventSlice';
import { addNewEvent } from '../../redux/features/eventsSlice';
import ProgressBar from './ProgressBar';
import TicketType from './TicketType';
import { SesionContext } from '../../utils/SesionContext';
import { useContext } from 'react';

const getLowestPrice = (arrayTypeTickets) => {
  const lowestPrice = arrayTypeTickets.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  return lowestPrice;
};

const CreationTicket = () => {
  const evento = useSelector((state) => state.singleEvent.singleEvent);
  const { sesion } = useContext(SesionContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setAtribute({ key: 'id', value: Math.floor(Math.random() * 10000) + 1 })
    );
    dispatch(setAtribute({ key: 'idOwner', value: sesion.id }));
    dispatch(
      setAtribute({
        key: 'lowestPrice',
        value: getLowestPrice(evento.typeTicket),
      })
    );
    dispatch(addNewEvent({ ...evento }));
    dispatch(resetAllAtribute());
    dispatch(nextPage());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button ">Creación de Entradas</h1>
        <div className="container">
          <div className="row border-bottom py-3">
            <div className="col-md-3 order-md-1">
              <div className="mb-3">
                <select
                  className="form-select d-block w-100"
                  id="state"
                  // required
                >
                  <option value="">Soles</option>
                  <option>Dolares</option>
                </select>
              </div>
            </div>
            <div className="col-md-9 order-md-1">
              <div className="mb-3" id="crearEntrada">
                <button
                  onClick={() => {
                    dispatch(
                      setAtribute({
                        key: 'typeTicket',
                        value: [
                          ...evento.typeTicket,
                          {
                            type: '',
                            price: 0,
                            quantity: 0,
                          },
                        ],
                      })
                    );
                  }}
                  type="button"
                  className="btn btn-danger"
                >
                  Crear Entrada
                </button>
              </div>
            </div>
          </div>
          {evento.typeTicket.map((ticketType, index) => (
            <TicketType
              ticket={ticketType}
              all={evento.typeTicket}
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
