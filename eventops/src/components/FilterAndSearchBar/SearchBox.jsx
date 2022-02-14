import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setTitleSearch } from '../../redux/features/filtersSlice';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setQuery(searchParams.get('title') || '');
    dispatch(setTitleSearch(searchParams.get('title') || ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      title: query,
      sprice: searchParams.get('sprice') || '',
      eprice: searchParams.get('eprice') || '',
      category: searchParams.get('category') || '',
      sdate: searchParams.get('sdate') || '',
      edate: searchParams.get('edate') || '',
    });
    dispatch(setTitleSearch(query));
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query === '') {
      setSearchParams({
        title: query,
        sprice: searchParams.get('sprice') || '',
        eprice: searchParams.get('eprice') || '',
        category: searchParams.get('category') || '',
        sdate: searchParams.get('sdate') || '',
        edate: searchParams.get('edate') || '',
      });
      dispatch(setTitleSearch(query));
    }
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
          onChange={(e) => handleChange(e)}
          className="filter-search form-control border-0"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          value={query}
        />
      </div>
    </form>
  );
};

export default SearchBox;
