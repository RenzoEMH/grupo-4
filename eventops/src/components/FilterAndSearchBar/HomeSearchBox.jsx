import { createSearchParams, useNavigate } from 'react-router-dom';

const HomeSearchBox = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: 'busqueda',
      search: `?${createSearchParams({
        title: e.target[1].value,
      })}`,
    });
  };

  return (
    <form
      onSubmit={(e) => handleSearchSubmit(e)}
      className="d-flex mb-3 mb-md-0"
    >
      <div className="input-group border rounded-3">
        <button className="input-group-text bg-white border-0">
          <i data-test-id="search-box" className="bi bi-search"></i>
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

export default HomeSearchBox;
