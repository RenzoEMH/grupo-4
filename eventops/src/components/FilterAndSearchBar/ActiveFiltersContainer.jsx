import { useSelector } from 'react-redux';
import ActiveFilterPill from './ActiveFilterPill';
import {
  setPrices,
  setCategory,
  setDates,
} from '../../redux/features/filtersSlice';

const ActiveFiltersContainer = () => {
  const filters = useSelector((state) => state.filtros);

  return (
    <section className="container d-flex align-items-center mb-4">
      <span>Filtros:</span>
      <div className="filter__pill-container d-flex flex-wrap">
        {
          // price pill
          filters.minPrice !== '' || filters.maxPrice !== '' ? (
            <ActiveFilterPill
              texto={`Min: S/. ${
                filters.minPrice !== '' ? filters.minPrice : '0'
              }.00 - Max: S/. ${
                filters.maxPrice !== '' ? filters.maxPrice : '0'
              }.00`}
              action={setPrices}
              payload={{ min: '', max: '' }}
            />
          ) : null
        }
        {
          // category pill
          filters.category !== '' ? (
            <ActiveFilterPill
              texto={filters.category}
              action={setCategory}
              payload={''}
            />
          ) : null
        }
        {
          // date pill
          filters.minDate !== '' || filters.maxDate !== '' ? (
            <ActiveFilterPill
              texto={`Desde: ${filters.minDate} - Hasta: ${filters.maxDate}`}
              action={setDates}
              payload={{ min: '', max: '' }}
            />
          ) : null
        }
      </div>
    </section>
  );
};

export default ActiveFiltersContainer;
