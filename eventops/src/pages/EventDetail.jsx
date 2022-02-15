import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LeftDetailCard from '../components/LeftDetailCard';
import RigthDetailCard from '../components/RigthDetailCard';
import './EventDetail.scss';

const EventDetail = () => {
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento.id === parseInt(eventoId))
  );

  return (
    <main className="detalles_cuerpo">
      <section>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {evento ? (
            <>
              <LeftDetailCard />
              <RigthDetailCard EventDetail={evento} />
            </>
          ) : (
            <h1>Evento no existe</h1>
          )}
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
