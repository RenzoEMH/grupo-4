import { useNavigate } from 'react-router-dom';
import dateFormatter from '../utils/dateFormatter';

const MisEntradasCard = ({ evento: { date, img, title } }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="card">
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
              backgroundColor: 'lightgreen',
              border: '2px solid green',
              borderRadius: '100%',
              marginRight: '0.5rem',
              padding: '0.05rem 0.7em',
            }}
          ></span>
          ACTIVO
        </div>
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
            <button className="card-button bg-secondary">MI TICKET</button>
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

export default MisEntradasCard;
