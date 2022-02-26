import { useNavigate } from 'react-router-dom';
import dateFormatter from '../../utils/dateFormatter';

const EventosCreadosCard = ({ evento: { _id, dates, img, title, state } }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="card">
        <div className="contenedor-imagen">
          <img src={img} alt={title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-main-text text-start">{title}</h5>
          <p className="card-text d-flex justify-content-center align-items-center gap-3">
            <span>
              <i style={{ fontSize: '1.35rem' }} className="bi bi-calendar"></i>
            </span>
            {dateFormatter(dates)}
          </p>
          <div className="card-detail text-dark">
            {state === 'active' ? (
              <div className="card-state">
                <span
                  style={{
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: 'green',
                    border: '2px solid lightgreen',
                    borderRadius: '100%',
                    marginRight: '0.5rem',
                  }}
                ></span>
                ACTIVO
              </div>
            ) : (
              <div className="card-state">
                <span
                  style={{
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: 'red',
                    border: '2px solid lightpink',
                    borderRadius: '100%',
                    marginRight: '0.5rem',
                  }}
                ></span>
                INACTIVO
              </div>
            )}

            <button
              onClick={() => navigate(`/evento-detalle/${_id}`)}
              className="card-button"
            >
              DETALLES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventosCreadosCard;
