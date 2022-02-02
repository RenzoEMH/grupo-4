import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/features/filtersSlice';
import categorias from '../../utils/categoriesNames';
import CategoryRadioOption from './CategoryRadioOption';
import './_CategoryFilter.scss';

const CategoryFilter = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedValue(filters.category);
  }, [filters.category]);

  const handleCategoryFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(setCategory(selectedValue));
  };

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
        <form
          onSubmit={(e) => {
            handleCategoryFilterSubmit(e);
          }}
          className="register categories"
        >
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
            {categorias.map((categoria) => {
              return (
                <CategoryRadioOption
                  categoria={categoria}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  key={`${categoria}`}
                />
              );
            })}
          </div>
          <div className="d-flex">
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
