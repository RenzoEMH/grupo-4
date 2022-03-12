import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nextPage, setAtribute } from '../../redux/features/singleEventSlice';
import categoryNames from '../../utils/categoriesNames';
import parseJwt from '../../utils/ParseJwt';
import EventDate from './EventDate';
import EventoImgModal from './EventoImgModal';
import ProgressBar from './ProgressBar';

const errors = {
  title: 'Debe ingresar un titulo para el evento',
  category: 'Escoja una categoría',
  description: 'Escriba la descripcion de su evento',
  dates: 'Ingrese todo los datos sobre la(s) fecha(s) del evento',
  img: 'Debe ingresar el url de la foto',
  ageRestriction: 'Selecctione una de las restricciones de edad',
};

const eventDetailsAreValid = (details) => {
  const validation = { isValid: true, formErrors: {} };

  if (details.title === '') {
    validation.isValid = false;
    validation.formErrors.title = errors.title;
  }

  if (details.category === '') {
    validation.isValid = false;
    validation.formErrors.category = errors.category;
  }

  if (details.description === '') {
    validation.isValid = false;
    validation.formErrors.description = errors.description;
  }

  if (
    details.dates.some((date) => !date.date || !date.startHour || !date.endHour)
  ) {
    validation.isValid = false;
    validation.formErrors.dates = errors.dates;
  }

  if (details.img === '') {
    validation.isValid = false;
    validation.formErrors.img = errors.img;
  }

  if (details.ageRestriction === '') {
    validation.isValid = false;
    validation.formErrors.ageRestriction = errors.ageRestriction;
  }

  return validation;
};

const DetailsEvent = () => {
  const evento = useSelector((state) => state.singleEvent.singleEvent);
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!evento.idOwner) {
      dispatch(setAtribute({ key: '_id', value: Date.now() }));
      dispatch(setAtribute({ key: 'idOwner', value: sesion?._id }));
    }
  }, [dispatch, evento.idOwner, sesion._id]);

  const handleAddDate = () => {
    dispatch(
      setAtribute({
        key: 'dates',
        value: [
          ...evento.dates,
          {
            _id: Math.floor(Math.random() * 100000) + 1,
            date: '',
            startHour: '',
            endHour: '',
            isEditable: true,
            ticketCategories: [],
          },
        ],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, formErrors } = eventDetailsAreValid(evento);

    if (isValid) {
      dispatch(nextPage());
      setFormErrors({});
    } else {
      setFormErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar />
      <div className="accordion-item">
        <h1 className="accordion-button">Detalles del Evento</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 order-lg-1">
              <div className="mb-3">
                <label htmlFor="address">Nombre del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ponle un nombre llamativo "
                  value={evento.title}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'title', value: e.target.value })
                    )
                  }
                />
                {!!formErrors && (
                  <div className="invalid-feedback d-block">
                    {formErrors.title}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address">Categoría del Evento</label>
                <select
                  className="form-select d-block"
                  value={evento.category}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'category', value: e.target.value })
                    )
                  }
                >
                  <option value="">Elige una categoría para tu Evento</option>
                  {categoryNames.map((category, index) => (
                    <option value={category} key={`${category}${index}`}>
                      {category}
                    </option>
                  ))}
                </select>
                {!!formErrors && (
                  <div className="invalid-feedback d-block">
                    {formErrors.category}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address">Descripción del Evento</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="3"
                  placeholder="Escribe un parráfo corto que describa lo mejor posible tu evento. "
                  value={evento.description}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'description',
                        value: e.target.value,
                      })
                    )
                  }
                ></textarea>
                {!!formErrors && (
                  <div className="invalid-feedback d-block">
                    {formErrors.description}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address">Información Adicional</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows="4"
                  placeholder="Detalla toda la información extra de tu evento. "
                  value={evento.infoExtra}
                  onChange={(e) =>
                    dispatch(
                      setAtribute({ key: 'infoExtra', value: e.target.value })
                    )
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <div className="row border-bottom py-3">
                  <button
                    onClick={handleAddDate}
                    type="button"
                    className="btn btn-primary"
                  >
                    Agregar Fecha
                  </button>
                </div>
                {evento.dates.map((dateItem, index) => (
                  <EventDate
                    dateItem={dateItem}
                    index={index}
                    allDates={evento.dates}
                    key={index}
                  />
                ))}
                {!!formErrors && (
                  <div className="invalid-feedback d-block">
                    {formErrors.dates}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5 order-lg-2">
              <EventoImgModal property={evento.img} type={'Evento'} />
              {!!formErrors && (
                <div className="invalid-feedback d-block">{formErrors.img}</div>
              )}
              <EventoImgModal property={evento.ticketImg} type={'Ticket'} />
            </div>
          </div>
          <div className="mb-1">
            <label>Restriccion de Edad </label>
            <div className="d-block my-2">
              <div className="custom-control custom-radio">
                <input
                  id="allAges"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="allAges"
                  checked={evento.ageRestriction === 'allAges'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="allAges">
                  Apto para todo público
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="withAdult"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="withAdult"
                  checked={evento.ageRestriction === 'withAdult'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="withAdult">
                  Apto para menores de 18 años en compañia de un adulto
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="adultOnly"
                  name="ageRestriction"
                  type="radio"
                  className="custom-control-input"
                  value="adultOnly"
                  checked={evento.ageRestriction === 'adultOnly'}
                  //required
                  onChange={(e) =>
                    dispatch(
                      setAtribute({
                        key: 'ageRestriction',
                        value: e.target.value,
                      })
                    )
                  }
                />
                <label className="custom-control-label" htmlFor="adultOnly">
                  Apto solo para mayores de 18 años
                </label>
              </div>
            </div>
            {!!formErrors && (
              <div className="invalid-feedback d-block">
                {formErrors.ageRestriction}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="col-md-12 order-md-1 container"
        style={{ marginTop: '1rem' }}
      >
        <div className="row">
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-light"
            >
              Cancelar
            </button>
          </div>
          <div
            className="col-md-6 order-md-1"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <button type="submit" className="btn btn-danger">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailsEvent;
