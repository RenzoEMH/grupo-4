import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBothArrayEvents,
  setFilteredEvents,
} from '../redux/features/eventsSlice';
import EventCard from '../components/EventCard';
import FilterAndSearchBar from '../components/FilterAndSearchBar/FilterAndSearchBar';
import misEventos from '../utils/eventos';
import { load } from '../redux/features/filtersSlice';

const defaultDate = '0000-01-01T05:08:12.000Z';
const perPage = 6;

const returnNumber = (string) => {
  const number = parseInt(string === '' ? '0' : string);
  return number;
};

const returnDate = (string) => {
  const date = string === '' ? defaultDate : string;
  return date;
};

const SearchEvents = () => {
  const eventos = useSelector((state) => state.eventos);
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBothArrayEvents(misEventos));
  }, [dispatch]);

  useEffect(() => {
    const minPrice = returnNumber(filters.minPrice);
    const maxPrice = returnNumber(filters.maxPrice);
    const minDate = returnDate(filters.minDate);
    const maxDate = returnDate(filters.maxDate);

    const events = eventos.allEvents.filter(
      (event) =>
        event.title.toLowerCase().indexOf(filters.titleSearch.toLowerCase()) >=
          0 &&
        event.price >= minPrice &&
        event.price <= (maxPrice !== 0 ? maxPrice : event.price) &&
        event.category.indexOf(filters.category) >= 0 &&
        new Date(event.date) >= new Date(minDate) &&
        new Date(event.date) <=
          new Date(maxDate !== defaultDate ? maxDate : event.date)
    );

    dispatch(setFilteredEvents(events.slice(0, filters.page * perPage)));
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
          {eventos.allEvents.length > filters.page * perPage ? (
            <button
              onClick={() => dispatch(load())}
              className="btn btn-primary btn-lg rounded-pill align-self-center px-5"
            >
              Cargar Más
            </button>
          ) : null}
        </div>
      </main>
    </>
  );
};

export default SearchEvents;
