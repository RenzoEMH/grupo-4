import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createSlideAsync,
  selectIsCreating,
  selectSlides,
} from '../../redux/features/slidesSlice';

const errors = {
  title: 'Debe escoger un evento',
  date: 'Ingrese una fecha',
  order: 'Selecctione el orden del slide',
};

const slideIsValid = (slide) => {
  const validation = { isValid: true, formErrors: {} };

  if (slide.title === '') {
    validation.isValid = false;
    validation.formErrors.title = errors.title;
  }

  if (slide.date === '') {
    validation.isValid = false;
    validation.formErrors.date = errors.date;
  }

  if (isNaN(slide.order)) {
    validation.isValid = false;
    validation.formErrors.order = errors.order;
  }

  return validation;
};

const SlideCreatorModal = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
  const isCreating = useSelector(selectIsCreating);
  const slides = useSelector(selectSlides);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef();
  const dispatch = useDispatch();

  const resetForm = () => {
    formRef.current[0].value = 'DEFAULT';
    formRef.current[1].value = '';
    formRef.current[2].value = 'DEFAULT';
    setFormErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const evento = [...eventos].find(
      (eventoElement) => eventoElement._id === formRef.current[0].value
    );

    const slide = {
      title: evento?.title || '',
      date: formRef.current[1].value,
      order: parseInt(formRef.current[2].value),
      img: evento?.img || '',
      eventId: formRef.current[0].value,
    };

    const { isValid, formErrors } = slideIsValid(slide);

    if (isValid) {
      dispatch(createSlideAsync(slide));
      resetForm();
    } else {
      setFormErrors(formErrors);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary btn-lg d-flex justify-content-center align-items-center gap-2 rounded-pill my-4"
        data-bs-toggle="modal"
        data-bs-target="#slideModal"
      >
        Agregar
        <i className="bi bi-plus-lg"></i>
      </button>
      <div
        className="modal fade"
        id="slideModal"
        tabIndex="-1"
        aria-labelledby="slideModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="modal-header text-primary flex-column">
                <h4
                  className="modal-title text-center fw-bold"
                  id="slideModalLabel"
                >
                  Nuevo Slide
                </h4>
              </div>
              <div className="modal-body text-dark">
                <div className="slider d-grid col-12 col-lg-6 mx-auto mt-5 mb-4">
                  <div className="mb-4">
                    <label>Evento</label>
                    <select
                      className="form-select"
                      aria-label="select para nuevo slider"
                      defaultValue={'DEFAULT'}
                    >
                      <option value={'DEFAULT'} disabled>
                        Seleccionar evento...
                      </option>
                      {eventos.map(({ _id, title }) => (
                        <option value={_id} key={_id}>
                          {title}
                        </option>
                      ))}
                    </select>
                    {!!formErrors && (
                      <div className="invalid-feedback d-block">
                        {formErrors.title}
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <label>Fecha</label>
                      <input
                        type="text"
                        className="register__names form-control"
                        id="date"
                        placeholder="Fecha de inicio..."
                        onFocus={(e) => {
                          e.target.type = 'date';
                        }}
                        onBlur={(e) => {
                          e.target.type = 'text';
                        }}
                      />
                      {!!formErrors && (
                        <div className="invalid-feedback d-block">
                          {formErrors.date}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 mb-4">
                      <label>Orden</label>
                      <select
                        className="form-select"
                        aria-label="select para nuevo slider"
                        defaultValue={'DEFAULT'}
                      >
                        <option value={'DEFAULT'} disabled>
                          orden...
                        </option>
                        {[...slides]
                          .sort((a, b) => (a.order > b.order ? 1 : -1))
                          .map(({ id, order }) => (
                            <option value={order} key={`${id}${order}`}>
                              {order}
                            </option>
                          ))}
                        <option value={slides?.length + 1}>Último</option>
                      </select>
                      {!!formErrors && (
                        <div className="invalid-feedback d-block">
                          {formErrors.order}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {isCreating ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      disabled
                    >
                      Cancelar
                    </button>
                    <button
                      disabled
                      className="btn btn-primary btn-lg"
                      type="button"
                    >
                      Creando...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      data-bs-dismiss="modal"
                      onClick={resetForm}
                    >
                      Cancelar
                    </button>
                    <button className="btn btn-primary btn-lg" type="submit">
                      Guardar
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCreatorModal;
