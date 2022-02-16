import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SesionContext } from '../../utils/SesionContext';
import AddTicketsCard from './AddTicketsCard';

const RigthDetailCard = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento.id === parseInt(eventoId))
  );
  const { sesion } = useContext(SesionContext);
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body detail-eventops-body">
          <h3 className="card-title">{evento.title}</h3>
          {sesion?.type === 'user' && <AddTicketsCard />}
          {!sesion && (
            <div className="pt-3 pb-4 d-flex justify-content-center">
              <button
                onClick={() => navigate('/iniciar-sesion')}
                className="btn btn-primary btn-lg"
              >
                Inicie Sesión
              </button>
            </div>
          )}
          <div
            className="col-md-12 pt-3"
            style={{ borderTop: '4px solid #21262a' }}
          >
            <h4 className="card-title">{evento.city}, PE</h4>
            <p>{evento.address}</p>
          </div>
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container col-md-12"
          >
            <iframe
              title="Mapa evento"
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
                {/* <p>{owner}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthDetailCard;
