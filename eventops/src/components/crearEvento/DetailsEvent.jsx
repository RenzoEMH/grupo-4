const DetailsEvent = () => {
  return (
    <div className="accordion-item">
      <h1 className="accordion-button">Detalles del Evento</h1>
      <div className="accordion-body">
        <div className="col-md-12 order-md-1">
          <div className="row">
            <div className="col-md-6 order-md-1">
              <div className="mb-3">
                <label htmlFor="address">Nombre del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ponle un nombre llamativo "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Categoría del Evento</label>
                <select className="form-select d-block w-100" required>
                  <option value="">Elige una categoría para tu Evento</option>
                  <option>Cine</option>
                  <option>Arte</option>
                  <option>Deportes</option>
                  <option>Teatro</option>
                  <option>Conciertos</option>
                  <option>Salud y Bienestar</option>
                  <option>Otros</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Descripción del Evento</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="3"
                  placeholder="Escribe un parráfo corto que describa lo mejor posible tu evento. "
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Información Adicional</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="6"
                  placeholder="Detalla toda la información extra de tu evento. "
                ></textarea>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="address">Fecha de Inicio</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="address">Fecha de Fin</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 order-md-2">
              <div className="form-element">
                <label>Imagen del Evento</label>
                <div className="image-picker">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    + Cargar
                  </button>
                </div>
              </div>
              <div className="form-element" Style="padding-top: 14px">
                <label>Imagen del Ticket</label>
                <div className="image-ticket">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    + Cargar
                  </button>
                </div>
              </div>
              <div className="col-md-3 mb-3" Style="margin-top: 15px">
                <label htmlFor="address">Hora de Inicio</label>
                <input type="time" id="inputMDEx1" className="form-control" />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="address">Hora de Fin</label>
                <input type="time" id="inputMDEx1" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 order-md-1">
          <div className="mb-1">
            <label htmlFor="address">Restriccion de Edad </label>
            <div className="d-block my-2">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="credit">
                  Apto para todo público
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="debit">
                  Apto para menores de 18 años en compañia de un adulto
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="paypal">
                  Apto solo para mayores de 18 años
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;
