const LeftDetailCard = ({
  EventDetail: { img, title, description, infoExtra },
}) => {
  return (
    <div className="col-md-8">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-md-10">
              <h2 className="card-title">{title}</h2>
            </div>
            <div class="col-md-2">
              <button class="btn btn-danger">
                <i class="bi bi-share"></i>
              </button>
            </div>
          </div>

          <p className="card-text">{description}</p>
          <h4 className="card-title">Información Adicional</h4>
          <p className="card-text">
            Evento apto para mayores de 18 años. <br />
            <br />
            Link de la redes sociales de la banda:
            <br />
            https://twitter.com
            <br />
            https://instagram.com
            <br />
            https://facebook.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftDetailCard;
