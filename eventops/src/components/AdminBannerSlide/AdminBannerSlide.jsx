import { useDispatch, useSelector } from 'react-redux';
import {
  deleteSlideAsync,
  loadSlideToEdit,
  selectIsDeleting,
} from '../../redux/features/slidesSlice';
import dateOnlyFormatter from '../../utils/dateOnlyFormatter';

const AdminBannerSlide = ({ slide: { _id, title, date, order, eventId } }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);

  const handleClickEdit = () => {
    const slideToEdit = {
      _id,
      title,
      date,
      order,
      eventId,
    };
    dispatch(loadSlideToEdit(slideToEdit));
  };

  const handleClickDelete = () => {
    dispatch(deleteSlideAsync(_id));
  };

  return (
    <section
      className="
                col-12
                bg-secondary
                mb-3
                d-flex
                align-items-center
                rounded-3
              "
    >
      <span className="fw-bold p-3 fs-1">{order}</span>
      <div
        className="
                  d-flex
                  flex-column flex-sm-row flex-grow-1
                  align-items-center
                  bg-white
                  p-3
                  rounded-end
                "
      >
        <div className="details flex-grow-1 text-dark">
          <p>
            <span className="fw-bold">Evento:</span> {title}
          </p>
          <p className="m-0">
            <span className="fw-bold">Se mostrara desde:</span>{' '}
            {dateOnlyFormatter(date)}
          </p>
        </div>
        <div className="options mt-3 mt-sm-0">
          {isDeleting ? (
            <>
              <button disabled type="button" className="btn btn-primary py-2">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
              <button disabled type="button" className="btn btn-secondary py-2">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleClickEdit}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#slideEditorModal"
                className="btn btn-primary py-2"
              >
                <i className="bi bi-pencil-fill"></i>
              </button>
              <button
                onClick={handleClickDelete}
                type="button"
                className="btn btn-secondary py-2"
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminBannerSlide;
