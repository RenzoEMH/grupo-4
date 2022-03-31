import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStateEventAsync } from '../../redux/features/eventsSlice';
const ChangeStateEvent = ({ evento }) => {
  const dispatch = useDispatch();
  const [confirmChange, setConfirmChange] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const newEvento = {
      state: elements[0].value,
      _id: evento._id,
    };
    dispatch(updateStateEventAsync(newEvento));
    setConfirmChange(true);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="col-md-12">
        <h4 className="card-title"> Opciones de Admin</h4>
        <div className="row mt-4">
          <div className="col-md-3 mt-1">
            <label htmlFor="estado">Estado</label>
          </div>
          <div className="col-md-9">
            <select
              id="estado"
              className="form-select d-block w-100"
              defaultValue={evento.state}
              data-test-id="change-state-event"
            >
              <option value="pendiente">Pendiente</option>
              <option value="active">Activo</option>
              <option value="finalizado">Finalizado</option>
              <option value="suspendido">Suspendido</option>
            </select>
          </div>
          {confirmChange === true && (
            <div
              className="valid-feedback d-block d-flex justify-content-center"
              data-test-id="confirm-state"
            >
              Estado cambiado correctamente
            </div>
          )}
        </div>
        <div className=" d-flex justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-danger mt-4">
                Guardar
              </button>
            </div>
            <div className="col-md-6">
              <Link to="/">
                <button className="btn btn-secondary mt-4">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangeStateEvent;
