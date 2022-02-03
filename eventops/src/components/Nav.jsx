import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SesionContext } from '../utils/SesionContext';
import './_Nav.scss';

const Nav = () => {
  const { sesion, setSesion } = useContext(SesionContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate('/');
    setSesion(null);
  };

  return (
    <header className="eventops__header border-bottom sticky-top">
      <nav className="eventops__header navbar navbar-expand-md container">
        <Link to="/" className="eventops__title navbar-brand">
          EVEN<span>TOPS</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon burger-toggler">
            <i className="bi bi-list burger-bi-nav"></i>
          </span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-md-3">
            <li className="nav-item">
              <Link to="/" className="nav-link link-light">
                INICIO
              </Link>
            </li>
            {sesion ? (
              sesion.type === 'admin' ? (
                <>
                  <li className="nav-item btn btn-primary rounded-pill p-0">
                    <Link
                      to="/gestionar-banner"
                      className="nav-link link-light p-3"
                    >
                      GESTIONAR BANNER
                    </Link>
                  </li>
                  <li className="nav-item dropdown d-flex flex-column align-self-stretch">
                    <span
                      className="nav-link text-center p-0 lh-1"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-person-fill evt-person"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end py-3"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <span
                          style={{ cursor: 'pointer' }}
                          className="dropdown-item d-flex align-items-center gap-2"
                          onClick={cerrarSesion}
                        >
                          <i
                            style={{
                              fontSize: '1.5rem',
                              transform: 'rotate(90deg)',
                            }}
                            className="bi bi-box-arrow-left lh-1"
                          ></i>
                          Cerrar sesión
                        </span>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item btn btn-primary rounded-pill p-0">
                    <Link
                      to="/crear-evento"
                      className="nav-link link-light p-3"
                    >
                      CREAR EVENTO
                    </Link>
                  </li>
                  <li className="nav-item dropdown d-flex flex-column align-self-stretch">
                    <span
                      className="nav-link text-center p-0 lh-1"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-person-fill evt-person"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end py-3"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          to="/perfil"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <i
                            style={{ fontSize: '1.5rem' }}
                            className="bi bi-person-fill lh-1"
                          ></i>
                          Perfil
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mis-entradas"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <i
                            style={{
                              fontSize: '1.5rem',
                              transform: 'rotate(315deg)',
                            }}
                            className="bi bi-ticket-detailed-fill lh-1"
                          ></i>
                          Entradas
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mis-eventos"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <i
                            style={{ fontSize: '1.5rem' }}
                            className="bi bi-file-earmark-fill lh-1"
                          ></i>
                          Mis eventos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/carrito-compra"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <i
                            style={{
                              fontSize: '1.5rem',
                            }}
                            className="bi bi-cart-fill lh-1"
                          ></i>
                          Carrito
                        </Link>
                      </li>
                      <li>
                        <span
                          style={{ cursor: 'pointer' }}
                          className="dropdown-item d-flex align-items-center gap-2"
                          onClick={cerrarSesion}
                        >
                          <i
                            style={{
                              fontSize: '1.5rem',
                              transform: 'rotate(90deg)',
                            }}
                            className="bi bi-box-arrow-left lh-1"
                          ></i>
                          Cerrar sesión
                        </span>
                      </li>
                    </ul>
                  </li>
                </>
              )
            ) : (
              <li className="nav-item dropdown d-flex flex-column align-self-stretch">
                <span
                  className="nav-link text-center p-0 lh-1"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill evt-person"></i>
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-end py-3"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      to="/iniciar-sesion"
                      className="dropdown-item d-flex align-items-center gap-2"
                    >
                      <i
                        style={{
                          fontSize: '1.5rem',
                          transform: 'rotate(90deg)',
                        }}
                        className="bi bi-box-arrow-in-right lh-1"
                      ></i>
                      Iniciar sesión
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
