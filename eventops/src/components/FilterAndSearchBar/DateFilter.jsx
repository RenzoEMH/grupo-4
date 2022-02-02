import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDates } from '../../redux/features/filtersSlice';

const DateFilter = () => {
  const [dateRange, setDateRange] = useState({ min: '', max: '' });
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    setDateRange({ min: filters.minDate, max: filters.maxDate });
  }, [filters.maxDate, filters.minDate]);

  const handleDateFilterSubmit = (e) => {
    e.preventDefault();
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
