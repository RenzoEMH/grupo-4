import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LeftDetailCard from '../../../components/EventDetailComponents/LeftDetailCard';
import RigthDetailCard from '../../../components/EventDetailComponents/RigthDetailCard';
import { getAllEventsAsync } from '../../../redux/features/eventsSlice';
import './EventDetail.scss';

const EventDetail = () => {
  const dispatch = useDispatch();
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === eventoId)
  );

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  return (
    <>
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
