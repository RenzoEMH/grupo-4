import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AddTicketsCard from './AddTicketsCard';
import parseJwt from '../../utils/ParseJwt';
import ChangeStateEvent from './ChangeStateEvent';

const RigthDetailCard = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === eventoId)
  );
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body detail-eventops-body">
          <h3 className="card-title">{evento.title}</h3>
          {sesion?.type === 'usuario' && <AddTicketsCard />}
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
            <h4 className="card-title">{evento.city.split(',', 1)}, Peru</h4>
            <p>{evento.address}</p>
          </div>
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container col-md-12"
          >
            <iframe
              title="Mapa evento"
              src={`https://maps.google.com/maps?q=${
                evento.address.length !== 0
                  ? `${evento.address.replaceAll(' ', '+')},`
                  : ''
              }${
                evento.city.length !== 0 ? evento.city : 'Lima,Lima'
              }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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
          {sesion?.type === 'admin' && <ChangeStateEvent evento={evento} />}
        </div>
      </div>
    </div>
  );
};

export default RigthDetailCard;
