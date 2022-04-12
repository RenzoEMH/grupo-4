import './__Profile.scss';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { updateUserAsync } from '../../redux/features/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloudinaryProfileImg from '../../components/EditProfile/CloudinaryProfileImg';

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let userLogin = location.state;
  const userPhoto = useSelector((state) => state.singleUser.singleUser.userImg);
  if (userPhoto) userLogin.photo = userPhoto;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const updateUser = {
      id: userLogin._id,
      name: elements[0].value,
      lastname: elements[1].value,
      dni: elements[3].value,
      phone: elements[7].value,
      photo: userPhoto,
    };
    dispatch(updateUserAsync(updateUser));
    navigate('/perfil');
  };
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      id="container-main"
    >
      <main className="">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-3 col-left">
              <div className="row fila-1 mt-1 mb-2 align-items-center">
                <div className="col-xl-6 d-flex justify-content-center">
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
                <div className="col-xl-6 mt-3 ">
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
            </div>

            <div className="col-md-6 order-1 order-md-0">
              <div className="row m-2">
                <div className="col-10">
                  <h1 style={{ Color: 'white' }}>Mi perfil</h1>
                </div>
                <div className="col-2">
                  <Link to="/perfil">
                    <i
                      type="button"
                      className="bi bi-x-circle-fill"
                      style={{ color: 'white', fontSize: '30px' }}
                    ></i>
                  </Link>
                </div>
              </div>

              <div className="row row-center d-flex flex-row justify-content-between ">
                <div className="">
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
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Nombres
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?.name || ''}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Apellidos
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?.lastname || ''}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Tipo de documento
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue="DNI"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Numero Documento
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?.dni || ''}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Email
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?.email || ''}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Estado
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue="Activo"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>ID</p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?._id || ''}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <p style={{ color: 'white', fontSize: '16px' }}>
                          Telefono
                        </p>
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          defaultValue={userLogin?.phone || ''}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center mt-3"
                    style={{ marginBottom: '10px' }}
                  >
                    <button type="submit" className="btn btn-danger">
                      Actualizar Datos
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CloudinaryProfileImg property={userLogin?.photo} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProfile;
