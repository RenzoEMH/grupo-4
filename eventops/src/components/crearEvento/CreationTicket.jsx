import { useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../../redux/features/singleEventSlice';
import ProgressBar from './ProgressBar';

const CreationTicket = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextPage());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button ">Creación de Entradas</h1>
        <div className="accordion-body">
          <div className="col-md-12 order-md-1">
            <div className="row">
              <div className="col-md-2 order-md-1">
                <div className="mb-3">
                  <select
                    className="form-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Soles</option>
                    <option>Dolares</option>
                  </select>
                </div>
              </div>
              <div className="col-md-9 order-md-1">
                <div className="mb-3" id="crearEntrada">
                  <button className="btn btn-danger">Crear Entrada</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 order-md-1">
            <div className="row">
              <div className="col-md-7 order-md-1">
                <div className="mb-3">
                  <label htmlFor="address">Nombre de la Entrada</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. VIP, General "
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 order-md-1">
                <div className="mb-3">
                  <label htmlFor="address">Cantidad disponible</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 "
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 order-md-1">
                <div className="mb-3">
                  <label htmlFor="address">Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 "
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <div className="row">
              <div className="mb-3">
                <label htmlFor="address">
                  Finalización de la venta de entradas
                </label>
                <select
                  className="form-select d-block w-100"
                  id="state"
                  required
                >
                  <option value="">
                    Hasta 1 hora antes que empiece el evento
                  </option>
                  <option>Hasta que empiece el evento</option>
                  <option>Hasta 1 dia antes que empiece el evento</option>
                </select>
              </div>
            </div>
          </div>
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
