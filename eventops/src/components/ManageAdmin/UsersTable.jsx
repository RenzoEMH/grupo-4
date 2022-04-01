import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUsersAsync,
  setUsersFiltered,
} from '../../redux/features/usersSlice';
import InfoUserModal from './InfoUserModal';
import DisableUserModal from './DisableUserModal';
import FilterUsers from '../FilterAndSearchBar/filterUsers/FilterUsers';
const UsersTable = () => {
  const dispatch = useDispatch();
  const userFilter = useSelector((state) => state.filtros.nameUser);
  const users = useSelector((state) => state.usuarios.users);
  const updatedUser = useSelector((state) => state.usuarios.updatedUser);
  const usersFiltered = useSelector((state) => state.usuarios.filteredUsers);
  const userState = useSelector((state) => state.filtros.stateUser);
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
  }, [updatedUser, dispatch]);
  useEffect(() => {
    if (users?.length > 0) {
      const usersFiltered = users?.filter(
        (user) =>
          (user.name.toLowerCase().indexOf(userFilter.toLowerCase()) >= 0 ||
            user.email.toLowerCase().indexOf(userFilter.toLowerCase()) >= 0 ||
            user._id.toLowerCase().indexOf(userFilter.toLowerCase()) >= 0) &&
          user.estado.toString() === userState
      );
      dispatch(setUsersFiltered(usersFiltered));
    }
  }, [dispatch, users, userFilter, userState]);

  const InfoUser = (user) => {
    setUserSelected(user);
  };
  const DisableUser = (user) => {
    setUserSelected(user);
  };

  return (
    <div className="col-12 col-md-10">
      <FilterUsers />
      <div className="table-responsive ">
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
          <tbody data-test-id="event-user">
            {usersFiltered?.map((user) => (
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
      </div>
      <InfoUserModal user={userSelected} />
      <DisableUserModal user={userSelected} />
    </div>
  );
};
export default UsersTable;
