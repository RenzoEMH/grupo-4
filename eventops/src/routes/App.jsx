import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Home from '../pages/general/Home/Home';
import UserProfile from '../pages/user/UserProfile';
import EditProfile from '../pages/user/EditProfile';
import MisEntradas from '../pages/user/MisEntradas';
import MisEventosCreados from '../pages/user/MisEventosCreados';
import './App.scss';
import { useSelector } from 'react-redux';
import NotFound from '../pages/general/NotFound/NotFound';
import LogIn from '../pages/general/Login/LogIn';
import Register from '../pages/general/Register/Register';
import PasswordRecovery from '../pages/general/PasswordRecovery/PasswordRecovery';
import ManageEventsApproval from '../pages/admin/ManageEventsApproval';
import misRutas from '../utils/routesNames';
import ManageBanner from '../pages/admin/ManageBanner';
import RequireAuth from '../utils/RequireAuth';
import HideIfLogged from '../utils/HideIfLogged';
import SearchEvents from '../pages/general/SearchEvents/SearchEvents';
import PurchaseConfirmation from '../pages/user/PurchaseConfirmation';
import EventDetail from '../pages/general/EventDetail/EventDetail';
import ShopCart from '../pages/user/ShopCart/ShopCart';
import CreateEvent from '../pages/user/CreateEvent/CreateEvent';
import EditEvent from '../pages/user/EditEvent/EditEvent';
import parseJwt from '../utils/ParseJwt';
import ConfirmUserCreated from '../pages/general/Register/ConfirmUserCreated';
import ConfirmUser from '../pages/general/Register/ConfirmUser';
import SetNewPassword from '../pages/general/PasswordRecovery/SetNewPassword';
import ConfirmPasswordRecovery from '../pages/general/PasswordRecovery/ConfirmPasswordRecovery';
import Myticket from '../pages/user/Ticket/Myticket';
function App() {
  const route = useLocation();
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);

  return (
    <div className="eventops d-flex flex-column">
      {misRutas.includes(route.pathname) ? null : <Nav />}
      <Routes>
        {/* home */}
        <Route
          exact
          path="/"
          element={
            sesion?.type === 'admin' ? <ManageEventsApproval /> : <Home />
          }
        />

        {/* admin */}
        <Route
          exact
          path="/gestionar-banner"
          element={
            <RequireAuth type="admin">
              <ManageBanner />
            </RequireAuth>
          }
        />

        {/* user */}
        <Route
          exact
          path="/crear-evento"
          element={
            <RequireAuth type="usuario">
              <CreateEvent />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editar-evento/:eventoId"
          element={
            <RequireAuth type="usuario">
              <EditEvent />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/carrito-compra"
          element={
            <RequireAuth type="usuario">
              <ShopCart />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/perfil"
          element={
            <RequireAuth type="usuario">
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editar-perfil/:idUser"
          element={
            <RequireAuth type="usuario">
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-entradas"
          element={
            <RequireAuth type="usuario">
              {/*               <Tickets /> */}
              <MisEntradas />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-eventos"
          element={
            <RequireAuth type="usuario">
              {/*               <ManageEvents /> */}
              <MisEventosCreados />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/busqueda"
          element={
            sesion && sesion.type !== 'usuario' ? (
              <Navigate to="/not-found" replace />
            ) : (
              <SearchEvents />
            )
          }
        />

        <Route
          exact
          path="/confirmacion-compra"
          element={
            <RequireAuth type="usuario">
              <PurchaseConfirmation />
            </RequireAuth>
          }
        />

        {/* guest */}
        <Route
          exact
          path="/iniciar-sesion"
          element={
            <HideIfLogged>
              <LogIn />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/registrarse"
          element={
            <HideIfLogged>
              <Register />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/recuperar-password"
          element={
            <HideIfLogged>
              <PasswordRecovery />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/password-reset/:id/:token"
          element={
            <HideIfLogged>
              <SetNewPassword />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/confirmar-password"
          element={
            <HideIfLogged>
              <ConfirmPasswordRecovery />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/usuario-creado"
          element={
            <HideIfLogged>
              <ConfirmUserCreated />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/:id/verify/:token"
          element={
            <HideIfLogged>
              <ConfirmUser />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/evento-detalle/:eventoId"
          element={<EventDetail />}
        />
        <Route
          exact
          path="/mi-ticket/:id"
          element={
            <RequireAuth type="usuario">
              <Myticket />
            </RequireAuth>
          }
        />

        {/* all */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      {misRutas.includes(route.pathname) ? null : <Footer />}
    </div>
  );
}

export default App;
