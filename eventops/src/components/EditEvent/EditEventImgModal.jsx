import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEditAtribute } from '../../redux/features/singleEventSlice';

/**
 * se debe enviar la propiedad img o ticketImg del stado de eventoSingle y el tipo de imagen ('Evento' o 'Ticket')
 * @param {*} param0
 * @returns componente de modal
 */
const EditEventImgModal = ({ property, type }) => {
  // const evento = useSelector((state) => state.singleEvent.singleEvent);
  const dispatch = useDispatch();
  const [imgURL, setImgURL] = useState(property);

  const handleClick = () => {
    dispatch(
      setEditAtribute({
        key: type === 'Evento' ? 'img' : 'ticketImg',
        value: imgURL,
      })
    );
  };

  return (
    <>
      <div
        style={type !== 'Evento' ? { paddingTop: '14px' } : null}
        className="form-element"
      >
        <label>Imagen del {type}</label>
        <div className="image-picker">
          {property === '' ? (
            <div className="image-event" />
          ) : (
            <img className="img-fluid rounded-3" src={property} alt="preview" />
          )}
          <button
            style={{ position: 'absolute', margin: '0.5rem' }}
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target={`#modalImg${type}`}
          >
            + Cargar
          </button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`modalImg${type}`}
        tabIndex="-1"
        aria-labelledby={`modalImg${type}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-body">
              <div className="file-loading">
                <label style={{ color: 'black' }} htmlFor="address">
                  URL de la imagen del {type}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Ingrese el URL de la imagen de su ${type}`}
                  value={imgURL}
                  onChange={(e) => setImgURL(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end Modal --> */}
    </>
  );
};

export default EditEventImgModal;
