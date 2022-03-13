import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditButtonBar from '../../../components/EventDetailComponents/EditButtonBar';
import LeftDetailCard from '../../../components/EventDetailComponents/LeftDetailCard';
import RigthDetailCard from '../../../components/EventDetailComponents/RigthDetailCard';
import parseJwt from '../../../utils/ParseJwt';
import './EventDetail.scss';

const EventDetail = () => {
  const { eventoId } = useParams();
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === eventoId)
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
