const UbicactionEvent = () => {
  return (
    <div className="accordion-item">
      <h1 className="accordion-button">Ubicación del Evento</h1>
      <div className="accordion-body">
        <div className="col-md-12 order-md-1">
          <div className="row">
            <div className="col-md-6 order-md-1">
              <div className="mb-3">
                <label htmlFor="address">Ciudad</label>
                <select
                  className="form-select d-block w-100"
                  id="state"
                  required
                >
                  <option value="">Elige una ciudad</option>
                  <option>Lima</option>
                  <option>Arequipa</option>
                  <option>Cuzco</option>
                  <option>Piura</option>
                  <option>Tacna</option>
                  <option>Puno</option>
                  <option>Madre de Dios</option>
                  <option>Cajamarca</option>
                  <option>San Martin</option>
                  <option>Loreto</option>
                  <option>Ayacucho</option>
                  <option>Tumbes</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe la dirección del Evento "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Referencia</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Al frente del metro de Lima "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">
                  Plataforma del evento (Eventos virtuales)
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Facebook (Solo para eventos virtuales) "
                  required
                />
              </div>
            </div>
            <div className="col-md-6 order-md-2">
              <div className="mb-3">
                <label htmlFor="address">Coloca el punto en el mapa</label>
                <div
                  id="map-container-google-1"
                  className="z-depth-1-half map-container"
                  Style="height: 100px"
                >
                  <iframe
                    title="Mapa de crear evento"
                    src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    Style="border: 0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicactionEvent;
