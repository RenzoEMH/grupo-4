import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEventsAsync } from '../../redux/features/eventsSlice';
import FilterAndSearchBarHome from '../FilterAndSearchBar/FilterAndSearchBarHome';
const EventsTable = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  return (
    <>
      <FilterAndSearchBarHome />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Evento</th>
            <th scope="col">Organizador</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento._id}>
              <th scope="row">{evento._id}</th>
              <td>{evento.title}</td>
              <td>{evento.ownerName}</td>
              <td>{evento.state}</td>
              <td>
                <div className="btn-group" id="btn-actions">
                  <button
                    onClick={() => navigate(`/evento-detalle/${evento._id}`)}
                    type="button"
                    className="btn btn-light"
                  >
                    <i className="bi bi-pencil-square"> Editar</i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default EventsTable;
