import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsUpdating,
  selectSlides,
  selectSlideToEdit,
  updateSlideAsync,
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

const SlideEditorModal = () => {
  const eventos = useSelector((state) => state.eventos.eventos);
  const slides = useSelector(selectSlides);
  const slideToEdit = useSelector(selectSlideToEdit);
  const isUpdating = useSelector(selectIsUpdating);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const evento = [...eventos].find(
      (eventoElement) => eventoElement._id === formRef.current[0].value
    );

    const slide = {
      _id: slideToEdit._id,
      title: evento?.title || '',
      date: formRef.current[1].value,
      order: parseInt(formRef.current[2].value),
      img: evento?.img || '',
      eventId: formRef.current[0].value,
    };

    const { isValid, formErrors } = slideIsValid(slide);

    if (isValid) {
      dispatch(updateSlideAsync(slide));
    } else {
      setFormErrors(formErrors);
    }
  };

  useEffect(() => {
    setFormErrors({});
    formRef.current[0].value = slideToEdit?.eventId;
    formRef.current[1].value = slideToEdit?.date;
    formRef.current[2].value = slideToEdit?.order;
  }, [slideToEdit]);

  return (
    <>
      <div
        className="modal fade"
        id="slideEditorModal"
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
                  Editar Slide
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
                      {eventos
                        .filter((eventItem) => eventItem.state === 'active')
                        .map(({ _id, title }) => (
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
                {isUpdating ? (
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
                      Guardando...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      data-bs-dismiss="modal"
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

export default SlideEditorModal;
