import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterAndSearchBarGeneral from '../../components/FilterAndSearchBar/general/FilterAndSearchBarGeneral';
import MisEntradasCard from '../../components/EventCards/MisEntradasCard';
import { setFilteredEvents } from '../../redux/features/eventsSlice';
import { load, setLength } from '../../redux/features/filtersSlice';
import { defaultDate, returnDate } from '../../utils/returnDate';
import { SesionContext } from '../../utils/SesionContext';

const perPage = 6;

const filterByTickets = (idEvento, idUsuario, arrayTickets) => {
  const hasTicket = arrayTickets.some(
    (ticket) =>
      ticket.idUsuario === idUsuario && ticket.evento.idEvento === idEvento
  );
  return hasTicket;
};

const MisEntradas = () => {
  const { sesion } = useContext(SesionContext);
  const eventos = useSelector((state) => state.eventos);
  const entradas = useSelector((state) => state.tickets.tickets);
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    const minDate = returnDate(filters.minDate);
    const maxDate = returnDate(filters.maxDate);

    const events = eventos.eventos.filter(
      (event) =>
        filterByTickets(event.id, sesion.id, entradas) &&
        event.category.indexOf(filters.category) >= 0 &&
        event.dates[0] >= minDate &&
        event.dates[0] <=
          (maxDate !== defaultDate ? maxDate : event.dates[0]) &&
        (event.state === filters.state || filters.state === '')
    );

    dispatch(setLength(events.length));
    dispatch(setFilteredEvents(events.slice(0, filters.page * perPage)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, eventos.eventos, filters]);

  return (
    <div className="App">
      <h1 className="m-4">MIS ENTRADAS</h1>
      <FilterAndSearchBarGeneral />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {eventos.filteredEvents?.length &&
                  eventos.filteredEvents?.map((evento) => (
                    <MisEntradasCard evento={evento} key={evento.id} />
                  ))}
              </div>
            </div>
          </section>
          {eventos.eventos.length > filters.page * perPage &&
          filters.length > filters.page * perPage ? (
            <button
              onClick={() => dispatch(load())}
              className="btn btn-primary btn-lg rounded-pill align-self-center px-5"
            >
              Cargar Más
            </button>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default MisEntradas;
