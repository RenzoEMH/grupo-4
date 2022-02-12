import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const page = useSelector((state) => state.singleEvent.page);
  return (
    <ul id="progressbar">
      <li className={page >= 1 ? 'active' : ''} id="account">
        <strong>Detalles</strong>
      </li>
      <li className={page >= 2 ? 'active' : ''} id="personal">
        <strong>Ubicación</strong>
      </li>
      <li className={page >= 3 ? 'active' : ''} id="payment">
        <strong>Tickets</strong>
      </li>
      <li className={page === 4 ? 'active' : ''} id="confirm">
        <strong>Finalizado</strong>
      </li>
    </ul>
  );
};

export default ProgressBar;
