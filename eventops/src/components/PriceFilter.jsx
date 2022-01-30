const PriceFilter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary d-flex align-items-center"
        type="button"
        id="preciosDropdown"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <span className="me-1 me-sm-2">
          <i className="bi bi-coin"></i>
        </span>
        <span className="d-none d-sm-block"> Precios </span>
        <span className="ms-1 ms-sm-2">
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>
      <div
        className="dropdown-menu p-3 price-dropdown"
        aria-labelledby="preciosDropdown"
      >
        <form action="" className="register">
          <h4 className="text-center mb-3">Filtro por Precios</h4>
          <div className="mb-3 d-flex align-items-center gap-3">
            <span className="fw-bold">S/.</span>
            <input
              type="number"
              className="price-dropdown__min form-control"
              id="min"
              placeholder="Min."
              min="0"
            />
            <input
              type="number"
              className="price-dropdown__max form-control"
              id="max"
              placeholder="Max."
              min="0"
            />
          </div>
          <div className="d-flex gap-3">
            <button
              className="category-dropdown__btn btn btn-secondary flex-fill"
              type="button"
            >
              Limpiar
            </button>
            <button
              className="price-dropdown__btn btn btn-primary flex-fill"
              type="submit"
            >
              Aplicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceFilter;
