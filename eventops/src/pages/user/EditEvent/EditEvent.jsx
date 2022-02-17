import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditCreationTicket from '../../../components/EditEvent/EditCreationTicket';
import EditEventDetails from '../../../components/EditEvent/EditEventDetails';
import EditEventUbication from '../../../components/EditEvent/EditEventUbication';
import FinishEdit from '../../../components/EditEvent/FinishEdit';
import { setAllEditAtributes } from '../../../redux/features/singleEventSlice';

const EditEvent = () => {
  const page = useSelector((state) => state.singleEvent.editPage);
  const { eventoId } = useParams();
  const evento = useSelector((state) =>
    state.eventos.eventos.find(({ id }) => id === parseInt(eventoId))
  );
  const dispatch = useDispatch();
  dispatch(
    setAllEditAtributes({
      ...evento,
      typeTicket: [{ type: '', price: 0, quantity: 0, date: '' }],
    })
  );

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
