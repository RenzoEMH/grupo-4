const LeftDetailCard = ({
  EventDetail: { img, title, description, infoExtra },
}) => {
  return (
    <div className="col-md-8">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body detail-eventops-body">
          <div className="row">
            <div className="col-md-10">
              <h2 className="card-title">{title}</h2>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger">
                <i className="bi bi-share"></i>
              </button>
            </div>
          </div>

          <p className="card-text detail-eventops-text">{description}</p>
          <h4 className="card-title">Información Adicional</h4>
          <p className="card-text detail-eventops-text">
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
