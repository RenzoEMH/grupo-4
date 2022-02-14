import LeftDetailCard from '../components/LeftDetailCard';
import RigthDetailCard from '../components/RigthDetailCard';
import mockDB from '../utils/mockDB';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailCard } from '../redux/features/eventDetailSlice';
import './EventDetail.scss';

const EventDetail = () => {
  const eventDetailList = useSelector((state) => state.eventDetail.eventDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCard(mockDB));
  }, [dispatch]);

  return (
    <main className="detalles_cuerpo">
      <section>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {eventDetailList.map((mockDB) => {
            return (
              <LeftDetailCard
                EventDetail={mockDB.eventos}
                key={mockDB.eventos.id}
              />
            );
          })}
          {eventDetailList.map((mockDB) => {
            return (
              <RigthDetailCard
                EventDetail={mockDB.eventos}
                key={mockDB.eventos.id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
