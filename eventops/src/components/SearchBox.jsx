const SearchBox = () => {
  return (
    <form className="d-flex mb-3 mb-md-0">
      <div className="input-group border rounded-3">
        <button className="input-group-text bg-white border-0">
          <i className="bi bi-search"></i>
        </button>
        <input
          className="filter-search form-control border-0"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
        />
      </div>
    </form>
  );
};

export default SearchBox;
