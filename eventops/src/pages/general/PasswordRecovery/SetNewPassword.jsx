import { Link, useNavigate, useParams } from 'react-router-dom';
import './_PasswordRecovery.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setNewPasswordAsync } from '../../../redux/features/usersSlice';
import validator from 'validator';

const errors = {
  password:
    'La contraseña debe tener minimo 8 caracteres incluidos minúsculas, mayúsculas, números y simbolos',
  confirmPassword: 'Las contraseñas deben coincidir',
};

const newPasswordIsValid = (e, password) => {
  const validation = { isValid: true, formErrors: {} };
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    validation.isValid = false;
    validation.formErrors.password = errors.password;
  }
  if (e.target[1].value !== password) {
    validation.isValid = false;
    validation.formErrors.confirmPassword = errors.confirmPassword;
  }
  return validation;
};

const SetNewPassword = () => {
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  let param = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    param = {
      password: elements[0].value,
      id: param.id,
      token: param.token,
    };
    const { isValid, formErrors } = newPasswordIsValid(e, param.password);
    if (isValid) {
      dispatch(setNewPasswordAsync(param));
      navigate('/confirmar-password');
    } else {
      setFormErrors(formErrors);
    }
  };
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
      <section className="simple__main d-grid col-10 col-lg-5 mx-auto">
        <h2 className="simple__subtitle mb-5">Crear nueva contraseña</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="password-recovery"
        >
          <div className="mb-4">
            <p className="password-recovery__text">
              Ingrese una nueva contraseña para su cuenta.
            </p>
            <input
              type="password"
              className="password-recovery__mail form-control"
              id="password"
              placeholder="Contraseña"
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.password}
              </div>
            )}
            <br />
            <input
              type="password"
              className="password-recovery__mail form-control"
              id="confirmPassword"
              placeholder="Confirma nueva contraseña"
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.confirmPassword}
              </div>
            )}
          </div>
          <div className="d-grid mt-5 mb-3">
            <button
              className="password-recovery__btn btn btn-primary btn-lg fw-bold mx-3"
              type="submit"
            >
              Crear
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SetNewPassword;
