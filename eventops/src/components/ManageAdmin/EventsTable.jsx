import { useSelector } from 'react-redux';
import FilterAndSearchBarHome from '../FilterAndSearchBar/FilterAndSearchBarHome';
const EventsTable = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
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
                  <button type="button" className="btn btn-light">
                    <i className="bi bi-check-circle-fill"></i>
                  </button>
                  <button type="button" className="btn btn-light">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button type="button" className="btn btn-light">
                    <i className="bi bi-trash-fill"></i>
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
