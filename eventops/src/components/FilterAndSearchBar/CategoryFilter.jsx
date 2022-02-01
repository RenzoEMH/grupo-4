const CategoryFilter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary d-flex align-items-center"
        type="button"
        id="categoriasDropdown"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <span className="me-1 me-sm-2">
          <i className="bi bi-tag-fill"></i>
        </span>
        <span className="d-none d-sm-block"> Categorias </span>
        <span className="ms-1 ms-sm-2">
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>
      <div
        className="dropdown-menu dropdown-menu-end p-3 category-dropdown"
        aria-labelledby="categoriasDropdown"
      >
        <form action="" className="register">
          <h4 className="text-center mb-3">Filtro por Categorias</h4>
          <div
            className="
                      filter__pill-container
                      d-flex
                      justify-content-center
                      flex-wrap
                      mb-3
                      gap-2
                    "
          >
            <button
              className="btn btn-outline-primary rounded-pill"
              type="button"
            >
              Concierto
            </button>
            <button
              className="btn btn-outline-primary rounded-pill"
              type="button"
            >
              Salud y Bienestar
            </button>
            <button
              className="btn btn-outline-primary rounded-pill"
              type="button"
            >
              Tecnología
            </button>
            <button
              className="btn btn-outline-primary rounded-pill"
              type="button"
            >
              Deportes
            </button>
            <button
              className="btn btn-outline-primary rounded-pill"
              type="button"
            >
              Cine
            </button>
          </div>
          <div className="d-flex gap-3">
            <button
              className="category-dropdown__btn btn btn-secondary flex-fill"
              type="button"
            >
              Limpiar
            </button>
            <button
              className="category-dropdown__btn btn btn-primary flex-fill"
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

export default CategoryFilter;
