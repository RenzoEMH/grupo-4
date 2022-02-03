import dateFormatter from '../../utils/dateFormatter';
const AdminBannerSlide = ({ slide: { title, date, order } }) => {
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
            {dateFormatter(date)}
          </p>
        </div>
        <div className="options mt-3 mt-sm-0">
          <button className="btn btn-primary py-2">
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button className="btn btn-secondary py-2">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminBannerSlide;
