const SlideCreatorModal = () => {
  return (
    <>
      <button
        className="btn btn-primary btn-lg d-flex justify-content-center align-items-center gap-2 rounded-pill my-4"
        data-bs-toggle="modal"
        data-bs-target="#slideModal"
      >
        Agregar
        <i className="bi bi-plus-lg"></i>
      </button>
      <div
        className="modal fade"
        id="slideModal"
        tabIndex="-1"
        aria-labelledby="slideModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header text-primary flex-column">
              <h4
                className="modal-title text-center fw-bold"
                id="slideModalLabel"
              >
                Nuevo Slider
              </h4>
            </div>
            <div className="modal-body text-dark">
              <form
                action=""
                className="slider d-grid col-12 col-lg-6 mx-auto mt-5 mb-4"
              >
                <div className="mb-4">
                  <select
                    className="form-select"
                    aria-label="select para nuevo slider"
                  >
                    <option disabled defaultValue hidden>
                      Seleccionar evento...
                    </option>
                    <option value="1">Concierto Rock SADS SDSD</option>
                    <option value="2">Recital Teatro Nacional</option>
                    <option value="3">Eva Ayllon</option>
                  </select>
                </div>
                <div className="mb-4 d-flex gap-4">
                  <input
                    type="text"
                    className="register__names form-control"
                    id="date"
                    placeholder="Fecha de inicio..."
                    onFocus={(e) => {
                      e.target.type = 'date';
                    }}
                    onBlur={(e) => {
                      e.target.type = 'text';
                    }}
                  />
                  <select
                    className="form-select"
                    aria-label="select para nuevo slider"
                  >
                    <option disabled defaultValue hidden>
                      orden...
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">Último</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button className="btn btn-primary btn-lg" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCreatorModal;
