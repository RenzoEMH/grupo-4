import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEventsAsync } from '../../redux/features/eventsSlice';
import FilterEventsAdmin from '../FilterAndSearchBar/filterEventsAdmin/FilterEventsAdmin';
import { setFilteredEvents } from '../../redux/features/eventsSlice';
const EventsTable = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
  const eventFilter = useSelector((state) => state.filtros.titleSearch);
  const eventsFiltered = useSelector((state) => state.eventos.filteredEvents);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);
  useEffect(() => {
    if (eventos?.length > 0) {
      const eventsFiltered = eventos?.filter(
        (evento) =>
          evento.title.toLowerCase().indexOf(eventFilter.toLowerCase()) >= 0 ||
          evento.state.toLowerCase().indexOf(eventFilter.toLowerCase()) >= 0 ||
          evento._id.toLowerCase().indexOf(eventFilter.toLowerCase()) >= 0
      );
      dispatch(setFilteredEvents(eventsFiltered));
    }
  }, [dispatch, eventos, eventFilter]);

  return (
    <div className="col-12 col-md-10 table-responsive">
      <FilterEventsAdmin />
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
        <tbody data-test-id="event-table">
          {eventsFiltered.map((evento) => (
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
    </div>
  );
};
export default EventsTable;
