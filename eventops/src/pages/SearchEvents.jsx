import { useSelector } from 'react-redux';
import EventCard from '../components/EventCard';
import FilterAndSearchBar from '../components/FilterAndSearchBar';

const SearchEvents = () => {
  const eventos = useSelector((state) => state.eventos.eventos);

  return (
    <>
      <FilterAndSearchBar />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {eventos.map((evento) => {
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
