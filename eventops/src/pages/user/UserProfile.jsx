import './__Profile.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAsync } from '../../redux/features/usersSlice';
import parseJwt from '../../utils/ParseJwt';

const UserProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const users = useSelector((state) => state.usuarios.users);
  const updatedUser = useSelector((state) => state.usuarios.updatedUser);
  const userLogin = users?.find((user) => user._id === sesion.id);
  const path = `/editar-perfil/${userLogin?._id}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path, { state: userLogin });
  };
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);
  useEffect(() => {
    if (updatedUser) dispatch(getAllUsersAsync());
  }, [updatedUser, dispatch]);
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      id="container-main"
    >
      <main className="">
        <div className="row">
          <div className="col-md-2 col-left">
            <div className="row fila-1 mt-1 mb-2">
              <div className="col-xl-6 d-flex justify-content flex-end ">
                {userLogin?.photo === '' ? (
                  <i
                    className="bi bi-person-square"
                    style={{ fontSize: '7rem' }}
                  ></i>
                ) : (
                  <img
                    className="img-fluid"
                    style={{ borderRadius: '50%' }}
                    src={userLogin?.photo}
                    alt="preview"
                  />
                )}
              </div>
              <div className="col-xl-6 mt-6 ">
                <p style={{ color: 'black' }}>
                  {userLogin?.name} {userLogin?.lastname}
                </p>
                <p style={{ color: 'green', fontSize: '13px' }}>
                  Cuenta verificada
                </p>
              </div>
            </div>
            <div className="row mi-perfil" style={{ marginLeft: '10px' }}>
              Mi Perfil
            </div>
            <div
              className="row ml-1"
              style={{ Color: 'black', fontSize: '18px', marginLeft: '10px' }}
            >
              Cerrar Sesion
            </div>
          </div>

          <div className="col-md-7">
            <div className="row mt-2">
              <div className="col-md-11">
                <h1 style={{ Color: 'white', marginLeft: '20px' }}>
                  Mi perfil
                </h1>
              </div>
              <div className="col-md-1">
                <i
                  className="bi bi-pencil-fill"
                  style={{ fontSize: '2rem', color: 'white' }}
                  type="button"
                  onClick={handleClick}
                ></i>
              </div>
            </div>

            <div className="row row-center d-flex flex-row justify-content-between ">
              <div className="">
                <form className="mb-5">
                  <div
                    className="row d-flex flex-wrap "
                    style={{
                      marginTop: '20px',
                      marginLeft: '15px',
                      marginRight: '15px',
                      Color: 'white',
                    }}
                  >
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Nombres
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?.name}</b>
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Apellidos
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?.lastname}</b>
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Tipo de documento
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>DNI</b>
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Número de documento
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?.dni}</b>
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Email
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?.email}</b>
                        </h4>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-row d-flex flex-wrap">
                        <div className="form-group col-md-7">
                          <div className="form-group">
                            <label
                              htmlFor="phoneCode"
                              className="font-weight-light"
                            >
                              Estado
                            </label>
                            <h4 className="h6" style={{ lineHeight: '1' }}>
                              <b>Activo</b>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          ID
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?._id}</b>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="firstName"
                          className="font-weight-light"
                        >
                          Telefono
                        </label>
                        <h4 className="h6" style={{ lineHeight: '1' }}>
                          <b>{userLogin?.phone}</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-right">
            <div className="text-center mb-4">
              <div className="mb-6 class-imagen">
                {userLogin?.photo === '' ? (
                  <i
                    className="bi bi-person-square"
                    style={{ fontSize: '10rem' }}
                  ></i>
                ) : (
                  <img
                    className="img-fluid"
                    style={{ borderRadius: '50%' }}
                    src={userLogin?.photo}
                    alt="preview"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
