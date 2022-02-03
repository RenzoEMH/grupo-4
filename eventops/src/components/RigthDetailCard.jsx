const RigthDetailCard = ({
  EventDetail: { title, date, typeTicket, price, city, address, owner },
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body detail-eventops-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text detail-eventops-text">
            Fecha: Lunes 20 de diciembre, 2021 <br />
            Hora: 5:00pm
          </p>
          <h4 className="card-title">Entradas</h4>
          <div className="row">
            <div className="col-md-8">
              <p>
                {typeTicket.general}: S/. {price.general}
              </p>
            </div>
            <div className="col-md-4">
              <select className="form-select d-block h-60" id="state" required>
                <option value="">0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p>
                {typeTicket.vip}: S/. {price.vip}
              </p>
            </div>
            <div className="col-md-4">
              <select className="form-select d-block h-60" id="state" required>
                <option value="">0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p>
                {typeTicket.platinum}: S/. {price.platinum}
              </p>
            </div>
            <div className="col-md-4">
              <select className="form-select d-block h-60" id="state" required>
                <option value="">0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="custom-control custom-checkbox" id="checkbox2">
            <div className="row">
              <div className="col-md-1">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
              </div>
              <div className="col-md-11">
                <p className="terminos">
                  Te informamos que tus datos personales seran compartidos con
                  el organizador del evento
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12" id="btnComprar">
            <button className="btn btn-danger">Comprar Ahora</button>
          </div>
          <div
            className="col-md-12 mt-4 pt-3"
            Style="border-top: 4px solid #21262a"
          >
            <h4 className="card-title">{city}, PE</h4>
            <p>{address}</p>
          </div>
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container col-md-12"
          >
            <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="col-md-9 mt-2">
                <h6>Organizado por:</h6>
                <p>{owner}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthDetailCard;
