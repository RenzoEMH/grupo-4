import { useDispatch } from 'react-redux';
import { setTitleSearch } from '../../redux/features/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target[1].value;
    dispatch(setTitleSearch(query));
  };

  const handleEmpty = (e) => {
    const query = e.target.value;
    query === '' && dispatch(setTitleSearch(query));
  };

  return (
    <form
      onSubmit={(e) => handleSearchSubmit(e)}
      className="d-flex mb-3 mb-md-0"
    >
      <div className="input-group border rounded-3">
        <button className="input-group-text bg-white border-0">
          <i className="bi bi-search"></i>
        </button>
        <input
          onChange={(e) => handleEmpty(e)}
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
