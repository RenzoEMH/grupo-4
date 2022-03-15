import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPage } from '../../redux/features/singleEventSlice';
import ProgressBar from './ProgressBar';

const FinishCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPage());
  };

  useEffect(() => {
    return () => {
      dispatch(resetPage());
    };
  }, [dispatch]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button ">Creació n Finalizada</h1>
        <div className="accordion-body">
          <div className="col-md-12 order-md-1">
            <div className="d-flex flex-column align-items-center">
              <span>
                <i
                  style={{ color: 'green', fontSize: '7rem' }}
                  className="bi bi-check-circle-fill"
                ></i>
              </span>
              <span style={{ fontSize: '4rem' }}>¡Éxito!</span>
              <p>
                Por favor espere a que su evento sea aprovado por el
                administrador para poder visualizarlo en la pagina de eventos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 order-md-1 container"
        style={{ marginTop: '1rem' }}
      >
        <div className="row">
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-light"
            >
              Ir a Inicio
            </button>
          </div>
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <button type="submit" className="btn btn-danger">
              Crear otro Evento
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FinishCreate;
