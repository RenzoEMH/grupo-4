import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setDates } from '../../../redux/features/filtersSlice';

const DateFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateRange, setDateRange] = useState({ min: '', max: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    setDateRange({
      min: searchParams.get('sdate') || '',
      max: searchParams.get('edate') || '',
    });
    dispatch(
      setDates({
        min: searchParams.get('sdate') || '',
        max: searchParams.get('edate') || '',
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleDateFilterSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      title: searchParams.get('title') || '',
      sprice: searchParams.get('sprice') || '',
      eprice: searchParams.get('eprice') || '',
      category: searchParams.get('category') || '',
      sdate: dateRange.min,
      edate: dateRange.max,
    });
    dispatch(setDates(dateRange));
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-primary d-flex align-items-center"
        type="button"
        id="fechasDropdown"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <span className="me-1 me-sm-2">
          <i className="bi bi-calendar4"></i>
        </span>
        <span className="d-none d-sm-block"> Fechas </span>
        <span className="ms-1 ms-sm-2">
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>
      <div
        className="dropdown-menu p-3 date-dropdown"
        aria-labelledby="fechasDropdown"
      >
        <form onSubmit={(e) => handleDateFilterSubmit(e)} className="register">
          <h4 className="text-center mb-3">Filtro por Fechas</h4>
          <div className="mb-3 d-flex align-items-center gap-3">
            <input
              type="text"
              className="register__names form-control"
              id="dateBegin"
              placeholder="Inicio..."
              onFocus={(e) => {
                e.target.type = 'date';
              }}
              onBlur={(e) => {
                e.target.type = 'text';
              }}
              value={dateRange.min}
              onChange={(e) => {
                setDateRange({ ...dateRange, min: e.target.value });
              }}
            />
            <input
              type="text"
              className="register__names form-control"
              id="dateEnd"
              placeholder="Fin..."
              onFocus={(e) => {
                e.target.type = 'date';
              }}
              onBlur={(e) => {
                e.target.type = 'text';
              }}
              value={dateRange.max}
              onChange={(e) => {
                setDateRange({ ...dateRange, max: e.target.value });
              }}
            />
          </div>
          <div className="d-flex">
            <button
              className="date-dropdown__btn btn btn-primary flex-fill"
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

export default DateFilter;
