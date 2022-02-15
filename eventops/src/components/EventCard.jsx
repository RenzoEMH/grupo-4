import './_EventCard.scss';
import dateFormatter from '../utils/dateFormatter';
import { useNavigate } from 'react-router-dom';

const EventCard = ({
  evento: { id, dates, img, lowestPrice, title, startHour },
}) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={img} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-main-text text-start">{title}</h5>
          <p className="card-text d-flex justify-content-center align-items-center gap-3">
            <span>
              <i style={{ fontSize: '1.35rem' }} className="bi bi-calendar"></i>
            </span>
            {dateFormatter(dates[0], startHour)}
          </p>
          <div className="card-detail text-dark">
            S/. {lowestPrice}.00
            <button
              onClick={() => navigate(`/evento-detalle/${id}`)}
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

export default EventCard;
