import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setState } from '../../../redux/features/filtersSlice';

const StateFilterGeneral = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedValue(searchParams.get('state') || '');
    dispatch(setState(searchParams.get('state') || ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleStateFilterSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      category: searchParams.get('category') || '',
      sdate: searchParams.get('sdate') || '',
      edate: searchParams.get('edate') || '',
      state: selectedValue,
    });
    dispatch(setState(selectedValue));
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
          <i className="bi bi-recycle"></i>
        </span>
        <span className="d-none d-sm-block"> Estados </span>
        <span className="ms-1 ms-sm-2">
          <i className="bi bi-chevron-down"></i>
        </span>
      </button>
      <div
        className="dropdown-menu p-3 price-dropdown"
        aria-labelledby="preciosDropdown"
      >
        <form onSubmit={(e) => handleStateFilterSubmit(e)} className="register">
          <h4 className="text-center mb-3">Filtro por Estado</h4>
          <div className="mb-3 d-flex justify-content-around gap-3">
            <div className="form-check">
              <input
                id="active"
                name="stateRadio"
                type="radio"
                className="form-check-input"
                value="active"
                checked={selectedValue === 'active'}
                onChange={(e) => setSelectedValue(e.target.value)}
              ></input>
              <label className="form-check-label" htmlFor="active">
                Activo
              </label>
            </div>
            <div className="form-check">
              <input
                id="inactive"
                name="stateRadio"
                type="radio"
                className="form-check-input"
                value="inactive"
                checked={selectedValue === 'inactive'}
                onChange={(e) => setSelectedValue(e.target.value)}
              ></input>
              <label className="form-check-label" htmlFor="inactive">
                Inactivo
              </label>
            </div>
          </div>
          <div className="d-flex gap-3">
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

export default StateFilterGeneral;
