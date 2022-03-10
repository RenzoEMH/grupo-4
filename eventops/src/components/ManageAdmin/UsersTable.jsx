import { useSelector } from 'react-redux';
import FilterAndSearchBarHome from '../FilterAndSearchBar/FilterAndSearchBarHome';
const UsersTable = () => {
  const users = useSelector((state) => state.usuarios.usuarios);
  return (
    <>
      <FilterAndSearchBarHome />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>
                {user.Nombres + ' '}
                {user.apellidos}
              </td>
              <td>{user.Correo}</td>
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
