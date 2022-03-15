import './CreateEvent.scss';
import DetailsEvent from '../../../components/crearEvento/DetailsEvent';
import UbicactionEvent from '../../../components/crearEvento/UbicationEvent';
import CreationTicket from '../../../components/crearEvento/CreationTicket';
import FinishCreate from '../../../components/crearEvento/FinishCreate';
import { useSelector } from 'react-redux';

const CreateEvent = () => {
  const page = useSelector((state) => state.singleEvent.page);

  return (
    <main className="cuerpo">
      {page === 1 && <DetailsEvent />}
      {page === 2 && <UbicactionEvent />}
      {page === 3 && <CreationTicket />}
      {page === 4 && <FinishCreate />}
    </main>
  );
};

export default CreateEvent;
