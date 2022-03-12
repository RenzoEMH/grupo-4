import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersAsync } from '../../redux/features/usersSlice';
import FilterAndSearchBarHome from '../FilterAndSearchBar/FilterAndSearchBarHome';
const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usuarios.users);

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  return (
    <>
      <FilterAndSearchBarHome />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
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
              <td>
                <div className="btn-group" id="btn-actions">
                  <button type="button" className="btn btn-light">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button type="button" className="btn btn-light">
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UsersTable;
