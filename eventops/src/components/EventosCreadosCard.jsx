const EventosCreadosCard = ({ evento: { date, img, title } }) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 ">
        <div className="card">
          <img src={img} alt={title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-main-text">{title}</h5>
            <p className="card-text">Lunes 20 dic - 5:00 pm</p>
            <div class="card-detail text-dark">
              <div class="card-state">
                {/* <img src="img/g-state.png" width="20" /> */}
                ACTIVO
              </div>
  
              <button class="card-button">DETALLES</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EventosCreadosCard;
  