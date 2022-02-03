import LeftDetailCard from '../components/LeftDetailCard';
import RigthDetailCard from '../components/RigthDetailCard';
import eventDetail from '../utils/eventDetail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailCard } from '../redux/features/eventDetailSlice';
import './EventDetail.scss';

const EventDetail = () => {
  const eventDetailList = useSelector((state) => state.eventDetail.eventDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCard(eventDetail));
  }, [dispatch]);

  return (
    <main className="detalles_cuerpo">
      <section>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {eventDetailList.map((eventDetail) => {
            return (
              <LeftDetailCard EventDetail={eventDetail} key={eventDetail.id} />
            );
          })}
          {eventDetailList.map((eventDetail) => {
            return (
              <RigthDetailCard EventDetail={eventDetail} key={eventDetail.id} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
