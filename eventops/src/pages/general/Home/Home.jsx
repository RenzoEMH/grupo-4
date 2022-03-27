import _ from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../../../components/EventCards/EventCard';
import FilterAndSearchBarHome from '../../../components/FilterAndSearchBar/FilterAndSearchBarHome';
import Carrusel from '../../../components/ManageAdmin/Carrusel';
import { getAllEventsAsync } from '../../../redux/features/eventsSlice';
import './_Home.scss';

const Home = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  const getSortedEventsCards = () => {
    const eventsClone = _.cloneDeep(eventos);
    const sortedEventsCards = eventsClone
      .map((evento) => <EventCard evento={evento} key={evento._id} />)
      .sort((a, b) =>
        a.props.evento.dates.sort((a, b) => a.date > b.date)[0].date >
        b.props.evento.dates.sort((a, b) => a.date > b.date)[0].date
          ? 1
          : -1
      )
      .filter((event, i) => i < 6);
    return sortedEventsCards;
  };

  return (
    <div className="App">
      <Carrusel />

      <FilterAndSearchBarHome />

      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <h1 className="mb-4 text-start">Eventos mas populares</h1>
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {eventos
                  .map((evento) => (
                    <EventCard evento={evento} key={evento._id} />
                  ))
                  .filter((event, i) => i < 6)}
              </div>
            </div>
          </section>
        </div>
      </main>

      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <h1 className="mb-4 text-start">Proximos eventos</h1>
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {getSortedEventsCards()}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
