import EventosCreadosCard from '../components/EventosCreadosCard';
import eventos from '../utils/eventos';

const MisEntradas = () => {
  return (
    <div className="App">
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <h1 className="mb-4 text-start">Mis entradas</h1>
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {eventos.map((evento) => (
                  <EventosCreadosCard evento={evento} key={evento.id} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MisEntradas;
