import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../PasswordRecovery/_PasswordRecovery.scss';
import {
  userVerified,
  verifyEmailAsync,
} from '../../../redux/features/usersSlice';
import { useEffect } from 'react';
const ConfirmUser = () => {
  const navigate = useNavigate();
  const verifiedUser = useSelector(userVerified);
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyEmailAsync(param));
  }, [dispatch, param]);

  return (
    <>
      {verifiedUser?.data?.message === 'Email verified successfully' ? (
        <div className="simple container text-center d-flex flex-column gap-5">
          <header className="simple__top mt-4">
            <Link to="/" className="simple__back-link d-flex">
              <svg
                className="mt-1 me-3"
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93941 0.439453L0.378906 8.99995L8.93941 17.5605L11.0604 15.4395L4.62091 8.99995L11.0604 2.56045L8.93941 0.439453Z"
                  fill="#9F2D30"
                />
              </svg>
              <span>Volver al Inicio</span>
            </Link>
            <h1 className="simple__title">
              EVEN<span>TOPS</span>
            </h1>
          </header>
          <section className="simple__main d-grid col-10 col-lg-5 mx-auto">
            <h2 className="simple__subtitle mb-5">Usuario Habilitado</h2>
            <div className="mb-4">
              <p className="password-recovery__text">
                Su usuario acaba de ser habilitado. Ahora podra acceder a su
                cuenta y comenzar a crear eventos.
              </p>
            </div>
            <div className="d-grid mt-5 mb-3">
              <Link to="/iniciar-sesion">
                <button className="password-recovery__btn btn btn-primary btn-lg fw-bold mx-3">
                  Ir a inicio de sesión
                </button>
              </Link>
            </div>
          </section>
        </div>
      ) : (
        navigate('/not-found')
      )}
    </>
  );
};

export default ConfirmUser;
