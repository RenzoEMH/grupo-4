import { useNavigate } from 'react-router-dom';
import dateFormatter from '../utils/dateFormatter';

const EventosCreadosCard = ({ evento: { date, img, title } }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="card">
        <img src={img} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-main-text text-start">{title}</h5>
          <p className="card-text d-flex justify-content-center align-items-center gap-3">
            <span>
              <i style={{ fontSize: '1.35rem' }} className="bi bi-calendar"></i>
            </span>
            {dateFormatter(date)}
          </p>
          <div className="card-detail text-dark">
            <div className="card-state">
              {/* <img src="img/g-state.png" width="20" /> */}
              <span
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: 'lightgreen',
                  border: '2px solid green',
                  borderRadius: '100%',
                  marginRight: '0.5rem',
                }}
              ></span>
              ACTIVO
            </div>

            <button
              onClick={() => navigate('/evento-detalle')}
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
