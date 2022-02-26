import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditButtonBar from '../../../components/EventDetailComponents/EditButtonBar';
import LeftDetailCard from '../../../components/EventDetailComponents/LeftDetailCard';
import RigthDetailCard from '../../../components/EventDetailComponents/RigthDetailCard';
import { SesionContext } from '../../../utils/SesionContext';
import './EventDetail.scss';

const EventDetail = () => {
  const { eventoId } = useParams();
  const { sesion } = useContext(SesionContext);
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === parseInt(eventoId))
  );

  return (
    <>
      {sesion?.id === evento.idOwner && <EditButtonBar />}
      <main className="detalles_cuerpo">
        <section>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {evento ? (
              <>
                <LeftDetailCard />
                <RigthDetailCard EventDetail={evento} />
              </>
            ) : (
              <h1>El evento que busca no existe</h1>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default EventDetail;
