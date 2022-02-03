import './CreateEvent.scss';
import { useState } from 'react';
import DetailsEvent from '../../components/crearEvento/DetailsEvent';
import UbicactionEvent from '../../components/crearEvento/UbicationEvent';
import CreationTicket from '../../components/crearEvento/CreationTicket';

const CreateEvent = () => {
  const [page, setPage] = useState(1);
  function goNextPage() {
    if (page === 4) return;
    setPage((page) => page + 1);
  }
  function goPrevPage() {
    setPage((page) => page - 1);
  }
  return (
    <main className="cuerpo">
      {page === 1 && <Detalles />}
      {page === 2 && <Ubicacion />}
      {page === 3 && <CreacionTickets />}
      {page === 4 && <Finalizado />}
      <div className="col-md-12 order-md-1 container" Style="margin-top: 1rem">
        <div className="row">
          {page === 1 && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-end"
            >
              <button className="btn btn-light">Cancelar</button>
            </div>
          )}
          {(page === 2 || page === 3) && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-end"
            >
              <button className="btn btn-light" onClick={goPrevPage}>
                Atras
              </button>
            </div>
          )}
          {page === 4 && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-end"
            >
              <button className="btn btn-light">Ir a Inicio</button>
            </div>
          )}
          {(page === 1 || page === 2) && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-start"
            >
              <button className="btn btn-danger" onClick={goNextPage}>
                Siguiente
              </button>
            </div>
          )}
          {page === 3 && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-start"
            >
              <button className="btn btn-danger" onClick={goNextPage}>
                Crear Evento
              </button>
            </div>
          )}
          {page === 4 && (
            <div
              className="col-md-6 order-md-1"
              Style="display: flex; justify-content: flex-start"
            >
              <button className="btn btn-danger">Crear otro Evento</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CreateEvent;

function Detalles() {
  return (
    <form id="msform">
      <ul id="progressbar">
        <li className="active" id="account">
          <strong>Detalles</strong>
        </li>
        <li id="personal">
          <strong>Ubicación</strong>
        </li>
        <li id="payment">
          <strong>Tickets</strong>
        </li>
        <li id="confirm">
          <strong>Finalizado</strong>
        </li>
      </ul>
      <DetailsEvent />
    </form>
  );
}
function Ubicacion() {
  return (
    <form id="msform">
      <ul id="progressbar">
        <li className="active" id="account">
          <strong>Detalles</strong>
        </li>
        <li className="active" id="personal">
          <strong>Ubicación</strong>
        </li>
        <li id="payment">
          <strong>Tickets</strong>
        </li>
        <li id="confirm">
          <strong>Finalizado</strong>
        </li>
      </ul>

      <UbicactionEvent />
    </form>
  );
}
function CreacionTickets() {
  return (
    <form id="msform">
      <ul id="progressbar">
        <li className="active" id="account">
          <strong>Detalles</strong>
        </li>
        <li className="active" id="personal">
          <strong>Ubicación</strong>
        </li>
        <li className="active" id="payment">
          <strong>Tickets</strong>
        </li>
        <li id="confirm">
          <strong>Finalizado</strong>
        </li>
      </ul>

      <CreationTicket />
    </form>
  );
}
function Finalizado() {
  return (
    <form id="msform">
      <ul id="progressbar">
        <li className="active" id="account">
          <strong>Detalles</strong>
        </li>
        <li className="active" id="personal">
          <strong>Ubicación</strong>
        </li>
        <li className="active" id="payment">
          <strong>Tickets</strong>
        </li>
        <li className="active" id="confirm">
          <strong>Finalizado</strong>
        </li>
      </ul>
    </form>
  );
}
