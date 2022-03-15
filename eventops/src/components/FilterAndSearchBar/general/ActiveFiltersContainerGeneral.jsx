import { useSelector } from 'react-redux';
import ActiveFilterPill from '../busqueda/ActiveFilterPill';
import {
  setCategory,
  setDates,
  setState,
} from '../../../redux/features/filtersSlice';
import { useSearchParams } from 'react-router-dom';

const ActiveFiltersContainerGeneral = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector((state) => state.filtros);

  return (
    <section className="container d-flex align-items-center mb-4">
      <span>Filtros:</span>
      <div className="filter__pill-container d-flex flex-wrap">
        {
          // category pill
          filters.category !== '' ? (
            <ActiveFilterPill
              texto={filters.category}
              actionA={setCategory}
              payload={''}
              actionB={() => {
                setSearchParams({
                  category: '',
                  sdate: searchParams.get('sdate') || '',
                  edate: searchParams.get('edate') || '',
                  state: searchParams.get('state') || '',
                });
              }}
            />
          ) : null
        }
        {
          // date pill
          filters.minDate !== '' || filters.maxDate !== '' ? (
            <ActiveFilterPill
              texto={`Desde: ${filters.minDate} - Hasta: ${filters.maxDate}`}
              actionA={setDates}
              payload={{ min: '', max: '' }}
              actionB={() => {
                setSearchParams({
                  category: searchParams.get('category') || '',
                  sdate: '',
                  edate: '',
                  state: searchParams.get('state') || '',
                });
              }}
            />
          ) : null
        }
        {
          // state pill
          filters.state !== '' ? (
            <ActiveFilterPill
              texto={filters.state === 'active' ? 'Activo' : 'Inactivo'}
              actionA={setState}
              payload={''}
              actionB={() => {
                setSearchParams({
                  category: searchParams.get('category') || '',
                  sdate: searchParams.get('sdate') || '',
                  edate: searchParams.get('edate') || '',
                  state: '',
                });
              }}
            />
          ) : null
        }
      </div>
    </section>
  );
};

export default ActiveFiltersContainerGeneral;
