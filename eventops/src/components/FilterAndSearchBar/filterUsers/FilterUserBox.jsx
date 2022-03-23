import { useDispatch } from 'react-redux';
import { setNameUser } from '../../../redux/features/filtersSlice';

const FilterUserBox = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const query = e.target.value;
    dispatch(setNameUser(query));
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSearchSubmit(e)}
      className="d-flex mb-3 mb-md-0"
    >
      <div className="input-group border rounded-3">
        <button type="submit" className="input-group-text bg-white border-0">
          <i className="bi bi-search"></i>
        </button>
        <input
          className="filter-search form-control border-0"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};
export default FilterUserBox;
