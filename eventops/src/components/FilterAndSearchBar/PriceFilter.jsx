import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setPrices } from '../../redux/features/filtersSlice';

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    setPriceRange({
      min: searchParams.get('sprice') || '',
      max: searchParams.get('eprice') || '',
    });
    dispatch(
      setPrices({
        min: searchParams.get('sprice') || '',
        max: searchParams.get('eprice') || '',
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handlePriceFilterSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      title: searchParams.get('title') || '',
      sprice: priceRange.min,
      eprice: priceRange.max,
      category: searchParams.get('category') || '',
      sdate: searchParams.get('sdate') || '',
      edate: searchParams.get('edate') || '',
    });
    dispatch(setPrices(priceRange));
  };

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
        <form onSubmit={(e) => handlePriceFilterSubmit(e)} className="register">
          <h4 className="text-center mb-3">Filtro por Precios</h4>
          <div className="mb-3 d-flex align-items-center gap-3">
            <span className="fw-bold">S/.</span>
            <input
              type="number"
              className="price-dropdown__min form-control"
              id="min"
              placeholder="Min."
              min="0"
              value={priceRange.min}
              onChange={(e) => {
                setPriceRange({ ...priceRange, min: e.target.value });
              }}
            />
            <input
              type="number"
              className="price-dropdown__max form-control"
              id="max"
              placeholder="Max."
              min="0"
              value={priceRange.max}
              onChange={(e) => {
                setPriceRange({ ...priceRange, max: e.target.value });
              }}
            />
          </div>
          <div className="d-flex">
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
