import { Link } from 'react-router-dom';
import './_Register.scss';

const Register = () => {
  return (
    <div className="simple container text-center d-flex flex-column gap-5">
      <header className="simple__top mt-4">
        <Link to="/iniciar-sesion" className="simple__back-link d-flex">
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
          <span>Volver al Inicio de Sesión</span>
        </Link>
        <h1 className="simple__title">
          EVEN<span>TOPS</span>
        </h1>
      </header>
      <section className="simple__main d-grid col-10 col-lg-6 mx-auto">
        <h2 className="simple__subtitle mb-5">Registrate</h2>
        <form action="" className="register">
          <div className="mb-4 d-flex gap-4">
            <input
              type="text"
              className="register__names form-control"
              id="names"
              placeholder="Tus nombres"
            />
            <input
              type="text"
              className="register__last-names form-control"
              id="last-names"
              placeholder="Tus apellidos"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="register__mail form-control"
              id="email"
              placeholder="Tu email"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="register__mail form-control"
              id="confirm-email"
              placeholder="Confirma tu email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="register__password form-control"
              id="contrasena"
              placeholder="Tu contraseña"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="register__password form-control"
              id="confirm-contrasena"
              placeholder="Confirma la contraseña"
            />
          </div>
          <div className="mb-5">
            <input
              className="register__checkbox"
              type="checkbox"
              value=""
              id="accept-terms-&-conditions"
            />
            <label
              className="register__label"
              htmlFor="accept-terms-&-conditions"
            >
              He leido y aceptop los{' '}
              <span
                type="button"
                style={{ color: '#9f2d30', fontWeight: '700' }}
              >
                Terminos y condiciones
              </span>
            </label>
          </div>
          <div className="d-grid mt-5 mb-3">
            <button
              className="register__btn btn btn-primary btn-lg fw-bold mx-3"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
