import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditCreationTicket from '../../../components/EditEvent/EditCreationTicket';
import EditEventDetails from '../../../components/EditEvent/EditEventDetails';
import EditEventUbication from '../../../components/EditEvent/EditEventUbication';
import FinishEdit from '../../../components/EditEvent/FinishEdit';
import { getAllEventsAsync } from '../../../redux/features/eventsSlice';
import { setAllEditAtributes } from '../../../redux/features/singleEventSlice';

const EditEvent = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.singleEvent.editPage);
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find(({ _id }) => _id === eventoId)
  );

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (evento && Object.keys(evento).length !== 0) {
      dispatch(
        setAllEditAtributes({
          ...evento,
          dates: evento.dates.map((date) => {
            return { ...date, ticketCategories: [] };
          }),
        })
      );
    }
  }, [dispatch, evento]);

  return (
    <main className="cuerpo">
      {page === 1 && <EditEventDetails />}
      {page === 2 && <EditEventUbication />}
      {page === 3 && <EditCreationTicket />}
      {page === 4 && <FinishEdit />}
    </main>
  );
};

export default EditEvent;
