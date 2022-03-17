import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersAsync } from '../../redux/features/usersSlice';
import FilterAndSearchBarHome from '../FilterAndSearchBar/FilterAndSearchBarHome';
import InfoUserModal from './InfoUserModal';
import DisableUserModal from './DisableUserModal';
import // disableUser,
// selectShowModalInfoUser,
// selectShowModalDisableUser,
'../../redux/features/usersSlice';
const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usuarios.users);
  const updatedUser = useSelector((state) => state.usuarios.updatedUser);
  const userEmpty = {
    name: '',
    email: '',
    _id: '',
    dni: '',
    lastname: '',
    estado: '',
  };
  const [userSelected, setUserSelected] = useState(userEmpty);

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);
  useEffect(() => {
    if (updatedUser) dispatch(getAllUsersAsync());
  }, [updatedUser]);

  const InfoUser = (user) => {
    setUserSelected(user);
  };
  const DisableUser = (user) => {
    setUserSelected(user);
  };

  return (
    <>
      <FilterAndSearchBarHome />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <th scope="row">{user._id}</th>
              <td>
                {user.name + ' '}
                {user.lastname}
              </td>
              <td>{user.email}</td>
              <td>{user.estado ? 'activo' : 'inactivo'}</td>
              <td>
                <div className="btn-group" id="btn-actions">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => InfoUser(user)}
                    data-bs-toggle="modal"
                    data-bs-target="#modalUser"
                  >
                    <i className="bi bi-info-circle-fill"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => DisableUser(user)}
                    data-bs-toggle="modal"
                    data-bs-target="#modalDisableUser"
                  >
                    {user.estado === true ? (
                      <i className="bi bi-dash-circle-fill"></i>
                    ) : (
                      <i className="bi bi-patch-check-fill"></i>
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <InfoUserModal user={userSelected} />
      <DisableUserModal user={userSelected} />
    </>
  );
};
export default UsersTable;
