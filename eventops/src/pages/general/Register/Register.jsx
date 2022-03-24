import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_Register.scss';
import { createUserAsync } from '../../../redux/features/usersSlice';
import {
  resetAllAtributes,
  setAtribute,
} from '../../../redux/features/singleUserSlice';
import { getAllUsersAsync } from '../../../redux/features/usersSlice';
import validator from 'validator';

const errors = {
  email: 'Debe ingresar un correo válido - Ej: ejemplo@gmail.com',
  password:
    'La contraseña debe tener minimo 8 caracteres incluidos minúsculas, mayúsculas, números y simbolos',
  confirmEmail: 'Los correos deben coincidir',
  confirmPassword: 'Las contraseñas deben coincidir',
  emailNotValid: 'Este correo ya esta registrado',
};

const registerUserIsValid = (e, registerUser, users) => {
  const validation = { isValid: true, formErrors: {} };

  users.forEach((user) => {
    if (user.email === registerUser.email) {
      validation.isValid = false;
      validation.formErrors.emailNotValid = errors.emailNotValid;
    }
  });

  if (registerUser.email !== '') {
    let posicionArroba = registerUser.email.lastIndexOf('@');
    let posicionPunto = registerUser.email.lastIndexOf('.');
    if (
      !(
        posicionArroba < posicionPunto &&
        posicionArroba > 0 &&
        registerUser.email.indexOf('@@') === -1 &&
        posicionPunto > 2 &&
        registerUser.email.length - posicionPunto > 2
      )
    ) {
      validation.isValid = false;
      validation.formErrors.email = errors.email;
    }
  }
  if (
    !validator.isStrongPassword(registerUser.password, {
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
  if (e.target[3].value !== registerUser.email) {
    validation.isValid = false;
    validation.formErrors.confirmEmail = errors.confirmEmail;
  }
  if (e.target[5].value !== registerUser.password) {
    validation.isValid = false;
    validation.formErrors.confirmPassword = errors.confirmPassword;
  }
  return validation;
};

const Register = () => {
  const usuario = useSelector((state) => state.singleUser.singleUser);
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const users = useSelector((state) => state.usuarios.users);

  useEffect(() => {
    dispatch(getAllUsersAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const newUser = {
      name: elements[0].value,
      lastname: elements[1].value,
      email: elements[2].value,
      password: elements[4].value,
      photo: '',
      dni: '',
      type: 'usuario',
      estado: true,
      verified: false,
    };
    const { isValid, formErrors } = registerUserIsValid(e, newUser, users);
    if (isValid) {
      dispatch(createUserAsync(newUser));
      dispatch(resetAllAtributes());
      e.target[3].value = '';
      e.target[5].value = '';
      e.target[6].checked = false;
      setFormErrors({});
      navigate('/usuario-creado');
    } else {
      setFormErrors(formErrors);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
          <div className="mb-4 d-flex gap-4">
            <input
              type="text"
              className="register__names form-control"
              id="names"
              placeholder="Tus nombres"
              value={usuario.Nombres}
              onChange={(e) =>
                dispatch(setAtribute({ key: 'Nombres', value: e.target.value }))
              }
              required
            />
            <input
              type="text"
              className="register__last-names form-control"
              id="last-names"
              placeholder="Tus apellidos"
              value={usuario.apellidos}
              onChange={(e) =>
                dispatch(
                  setAtribute({ key: 'apellidos', value: e.target.value })
                )
              }
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="register__mail form-control"
              id="email"
              placeholder="Tu email - Ej: ejemplo@gmail.com"
              value={usuario.Correo}
              onChange={(e) =>
                dispatch(setAtribute({ key: 'Correo', value: e.target.value }))
              }
              required
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">{formErrors.email}</div>
            )}
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.emailNotValid}
              </div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="register__mail form-control"
              id="confirm-email"
              placeholder="Confirma tu email"
              required
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.confirmEmail}
              </div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="register__password form-control"
              id="contrasena"
              placeholder="Tu contraseña"
              value={usuario.password}
              onChange={(e) =>
                dispatch(
                  setAtribute({ key: 'password', value: e.target.value })
                )
              }
              required
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.password}
              </div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="register__password form-control"
              id="confirm-contrasena"
              placeholder="Confirma la contraseña"
              required
            />
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.confirmPassword}
              </div>
            )}
          </div>
          <div className="mb-5">
            <input
              className="register__checkbox"
              type="checkbox"
              value=""
              id="accept-terms-&-conditions"
              required
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
        </section>
      </div>
    </form>
  );
};

export default Register;
