import './ManageEventsApproval.scss';
import { useState } from 'react';
import EventsTable from '../../components/ManageAdmin/EventsTable';
import UsersTable from '../../components/ManageAdmin/UsersTable';
import Carrusel from '../../components/ManageAdmin/Carrusel';
const ManageEventsApproval = () => {
  const [indice, setIndice] = useState(0);

  const ChangeIndice = (e) => {
    setIndice(parseInt(e));
  };

  return (
    <main className="body_admin mx-3">
      <section className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col-md-3" id="sideBar">
          <div className="list-group w-75">
            <button
              type="button"
              className={
                indice === 0
                  ? 'list-group-item list-group-item-action active'
                  : 'list-group-item list-group-item-action'
              }
              value="0"
              onClick={(e) => ChangeIndice(e.target.value)}
            >
              Previsualizar banner
            </button>
            <button
              type="button"
              className={
                indice === 1
                  ? 'list-group-item list-group-item-action active'
                  : 'list-group-item list-group-item-action'
              }
              value="1"
              onClick={(e) => ChangeIndice(e.target.value)}
            >
              Gestionar eventos
            </button>
            <button
              type="button"
              className={
                indice === 2
                  ? 'list-group-item list-group-item-action active'
                  : 'list-group-item list-group-item-action'
              }
              value="2"
              onClick={(e) => ChangeIndice(e.target.value)}
            >
              Gestionar usuarios
            </button>
          </div>
        </div>
        <div className="col-md-9 d-flex" id="manageInfo">
          {indice === 0 && <Carrusel />}
          {indice === 1 && <EventsTable />}
          {indice === 2 && <UsersTable />}
        </div>
      </section>
    </main>
  );
};

export default ManageEventsApproval;
