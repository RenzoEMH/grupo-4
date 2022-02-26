import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ageRestrictionText = (ageRestriction) => {
  switch (ageRestriction) {
    case 'allAges':
      return 'Evento apto para publico en general.';
    case 'withAdult':
      return 'Evento apto para menores de 18 años en compañía de un adulto.';
    default:
      return 'Evento apto para mayores de 18 años.';
  }
};

const LeftDetailCard = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === parseInt(eventoId))
  );

  return (
    <div className="col-md-8">
      <div className="card">
        <img src={evento.img} className="card-img-top" alt={evento.title} />
        <div className="card-body detail-eventops-body">
          <div className="row">
            <div className="col-md-10">
              <h2 className="card-title">{evento.title}</h2>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger">
                <i className="bi bi-share"></i>
              </button>
            </div>
          </div>

          <p className="card-text detail-eventops-text">{evento.description}</p>
          <h4 className="card-title">Información Adicional</h4>
          <p className="card-text detail-eventops-text">
            {ageRestrictionText(evento.ageRestriction)} <br />
            {evento.infoExtra}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftDetailCard;
