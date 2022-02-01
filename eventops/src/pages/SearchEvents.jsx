import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBothArrayEvents,
  setFilteredEvents,
} from '../redux/features/eventsSlice';
import EventCard from '../components/EventCard';
import FilterAndSearchBar from '../components/FilterAndSearchBar/FilterAndSearchBar';
import misEventos from '../utils/eventos';

const returnNumber = (string) => {
  const number = parseInt(string === '' ? '0' : string);
  return number;
};

const SearchEvents = () => {
  const eventos = useSelector((state) => state.eventos);
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBothArrayEvents(misEventos));
  }, [dispatch]);

  useEffect(() => {
    const min = returnNumber(filters.minPrice);
    const max = returnNumber(filters.maxPrice);
    const events = eventos.allEvents.filter(
      (event) =>
        event.title.toLowerCase().indexOf(filters.titleSearch.toLowerCase()) >=
          0 &&
        event.price >= min &&
        event.price <= (max !== 0 ? max : event.price)
    );
    dispatch(setFilteredEvents(events));
  }, [dispatch, eventos.allEvents, filters]);

  return (
    <>
      <FilterAndSearchBar />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {eventos.filteredEvents.map((evento) => {
                  return <EventCard evento={evento} key={evento.id} />;
                })}
              </div>
            </div>
          </section>
          <button className="btn btn-primary btn-lg rounded-pill align-self-center px-5">
            Cargar Más
          </button>
        </div>
      </main>
    </>
  );
};

export default SearchEvents;
