import { useNavigate } from 'react-router-dom';
import dateFormatter from '../../utils/dateFormatter';

const MisEntradasCard = ({ evento: { _id, dates, img, title, state } }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="card">
        {state === 'active' ? (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '0.7rem',
              boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 1px 1px',
              borderRadius: '5px',
            }}
          >
            <span
              style={{
                backgroundColor: 'green',
                border: '2px solid lightgreen',
                borderRadius: '100%',
                marginRight: '0.5rem',
                padding: '0.05rem 0.7em',
              }}
            ></span>
            ACTIVO
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '0.7rem',
              boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 1px 1px',
              borderRadius: '5px',
            }}
          >
            <span
              style={{
                backgroundColor: 'red',
                border: '2px solid lightpink',
                borderRadius: '100%',
                marginRight: '0.5rem',
                padding: '0.05rem 0.7em',
              }}
            ></span>
            INACTIVO
          </div>
        )}
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
            <button
              onClick={() => navigate(`/mi-ticket/${_id}`)}
              className="card-button bg-secondary"
            >
              MI TICKET
            </button>
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

export default MisEntradasCard;
