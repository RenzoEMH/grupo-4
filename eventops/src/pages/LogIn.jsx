import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SesionContext } from '../utils/SesionContext';

const LogIn = () => {
  const [user, setUser] = useState(null);
  const { setSesion } = useContext(SesionContext);
  const navigate = useNavigate();

  const onInputChange = (inputName) => (inputValue) => {
    setUser({ ...user, [inputName]: inputValue.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user !== null) {
      navigate('/');
      user.password === 'user'
        ? setSesion({ type: 'user' })
        : setSesion({ type: 'admin' });
    }
  };

  return (
    <div className="simple container text-center d-flex flex-column justify-content-between">
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
          <span>Volver a Eventops</span>
        </Link>
        <h1 className="simple__title">
          EVEN<span>TOPS</span>
        </h1>
      </header>
      <section className="simple__main d-grid col-10 col-lg-4 mx-auto">
        <h2 className="simple__subtitle mb-5">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login">
          <div className="mb-4">
            <input
              type="email"
              className="login__mail form-control"
              id="email"
              placeholder="Tu email"
              onChange={onInputChange('email')}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="login__password form-control"
              id="contrasena"
              placeholder="Tu contraseña"
              onChange={onInputChange('password')}
              required
            />
          </div>
          <div className="d-grid mt-5 mb-3">
            <button
              className="login__btn btn btn-primary btn-lg fw-bold mx-3"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
        <Link to="/recuperar-password">¿Olvidaste tu contraseña?</Link>
      </section>
      <footer className="simple__footer mb-5">
        <span>
          ¿No tienes cuenta?
          <br />
        </span>
        <Link to="/registrarse">¡Registrate Aquí!</Link>
      </footer>
    </div>
  );
};

export default LogIn;
