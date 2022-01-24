import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import CreateEvent from '../pages/user/CreateEvent';
import Home from '../pages/Home';
import ManageEvents from '../pages/user/ManageEvents';
import Tickets from '../pages/user/Tickets';
import UserProfile from '../pages/user/UserProfile';
import './App.scss';
import { SesionContext } from '../utils/SesionContext';
import { useContext } from 'react';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import PasswordRecovery from '../pages/PasswordRecovery';
import ManageEventsApproval from '../pages/admin/ManageEventsApproval';
import misRutas from '../utils/routesNames';
import ManageBanner from '../pages/admin/ManageBanner';

function App() {
  const { sesion } = useContext(SesionContext);
  const route = useLocation();

  const verifyRoute = (pathname) => {
    if (misRutas.indexOf(pathname) !== -1) return false;
    return true;
  };

  return (
    <div className="eventops d-flex flex-column">
      {verifyRoute(route.pathname) ? <Nav /> : null}
      <Routes>
        {sesion ? (
          sesion.type === 'admin' ? (
            <>
              <Route exact path="/" element={<ManageEventsApproval />} />
              <Route
                exact
                path="/gestionar-banner"
                element={<ManageBanner />}
              />
            </>
          ) : (
            <>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/crear-evento" element={<CreateEvent />} />
              <Route exact path="/perfil" element={<UserProfile />} />
              <Route exact path="/mis-entradas" element={<Tickets />} />
              <Route exact path="/mis-eventos" element={<ManageEvents />} />
            </>
          )
        ) : (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/iniciar-sesion" element={<LogIn />} />
            <Route exact path="/registrarse" element={<Register />} />
            <Route
              exact
              path="/recuperar-password"
              element={<PasswordRecovery />}
            />
          </>
        )}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {verifyRoute(route.pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
