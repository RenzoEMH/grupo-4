import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredEvents } from '../../../redux/features/eventsSlice';
import EventCard from '../../../components/EventCards/EventCard';
import FilterAndSearchBar from '../../../components/FilterAndSearchBar/busqueda/FilterAndSearchBar';
import { load, setLength } from '../../../redux/features/filtersSlice';
import returnNumber from '../../../utils/returnNumber';
import { defaultDate, returnDate } from '../../../utils/returnDate';
import getEarliestDate from '../../../utils/getEarliestDate';

const perPage = 6;

const SearchEvents = () => {
  const eventos = useSelector((state) => state.eventos);
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    const minPrice = returnNumber(filters.minPrice);
    const maxPrice = returnNumber(filters.maxPrice);
    const minDate = returnDate(filters.minDate);
    const maxDate = returnDate(filters.maxDate);

    const events = eventos.eventos
      .filter((event) => event.state === 'active')
      .filter(
        (event) =>
          event.title
            .toLowerCase()
            .indexOf(filters.titleSearch.toLowerCase()) >= 0 &&
          event.lowestPrice >= minPrice &&
          event.lowestPrice <=
            (maxPrice !== 0 ? maxPrice : event.lowestPrice) &&
          event.category.indexOf(filters.category) >= 0 &&
          getEarliestDate(event.dates) >= minDate &&
          getEarliestDate(event.dates) <=
            (maxDate !== defaultDate ? maxDate : getEarliestDate(event.dates))
      );

    dispatch(setLength(events.length));
    dispatch(setFilteredEvents(events.slice(0, filters.page * perPage)));
  }, [dispatch, eventos.eventos, filters]);

  return (
    <>
      <FilterAndSearchBar />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {eventos.filteredEvents?.map((evento) => {
                  return <EventCard evento={evento} key={evento._id} />;
                })}
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
    </>
  );
};

export default SearchEvents;
