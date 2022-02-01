const ActiveFiltersContainer = () => {
  return (
    <section className="container d-flex align-items-center mb-4">
      <span>Filtros:</span>
      <div className="filter__pill-container d-flex flex-wrap">
        <span
          className="
              badge
              rounded-pill
              bg-primary
              ms-2
              px-3
              py-2
              border border-2
              d-flex
              align-items-center
            "
        >
          Concierto
          <span className="ms-2">
            <i className="bi bi-x-lg"></i>
          </span>
        </span>
      </div>
    </section>
  );
};

export default ActiveFiltersContainer;
