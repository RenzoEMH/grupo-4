const InfoUserModal = ({ user }) => {
  return (
    <div
      className="modal fade"
      id="modalUser"
      tabIndex="-1"
      aria-hidden="true"
      aria-labelledby="modalTitle"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Informacion del Usuario</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>ID: {user._id}</p>
            <p>
              Nombre: {user.name} {user.lastname}
            </p>
            <p>Correo: {user.email}</p>
            <p>DNI: {user.dni}</p>
            <p>Estado: {user.estado ? 'activo' : 'inactivo'}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoUserModal;
