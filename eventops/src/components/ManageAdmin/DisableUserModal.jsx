import { updateUserAsync } from '../../redux/features/usersSlice';
import { useDispatch } from 'react-redux';

const DisableUserModal = ({ user }) => {
  const dispatch = useDispatch();

  const disableUser = async (user) => {
    const updatedUser = {
      estado: user.estado === true ? false : true,
    };
    await dispatch(updateUserAsync({ id: user._id, ...updatedUser }));
  };

  return (
    <div
      className="modal fade"
      id="modalDisableUser"
      tabIndex="-1"
      aria-hidden="true"
      aria-labelledby="modalTitle"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>
              {user.estado === true ? 'Deshabilitar' : 'Habilitar'} Usuario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              ¿Seguro que deseas{' '}
              {user.estado === true ? 'deshabilitar' : 'habilitar'} a este
              usuario?
            </p>
            <p>ID: {user._id}</p>
            <p>
              Nombre: {user.name} {user.lastname}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => disableUser(user)}
            >
              Si
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisableUserModal;
