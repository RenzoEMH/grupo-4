import MisEntradasCard from '../components/MisEntradasCard';
import eventos from '../utils/eventos';
import FilterAndSearchMisEntradas from '../components/FilterAndSearchBar/FilterAndSearchMisEntradas';

const MisEntradas = () => {
  return (
    <div className="App">
      <h1 className="m-4">MIS ENTRADAS</h1>
      <FilterAndSearchMisEntradas />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {eventos.map((evento) => (
                  <MisEntradasCard evento={evento} key={evento.id} />
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
