import { useSelector } from 'react-redux';
import ActiveFilterPill from './ActiveFilterPill';
import {
  setPrices,
  setCategory,
  setDates,
} from '../../redux/features/filtersSlice';
import { useSearchParams } from 'react-router-dom';

const ActiveFiltersContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
              actionA={setPrices}
              payload={{ min: '', max: '' }}
              actionB={() => {
                setSearchParams({
                  title: searchParams.get('title') || '',
                  sprice: '',
                  eprice: '',
                  category: searchParams.get('category') || '',
                  sdate: searchParams.get('sdate') || '',
                  edate: searchParams.get('edate') || '',
                });
              }}
            />
          ) : null
        }
        {
          // category pill
          filters.category !== '' ? (
            <ActiveFilterPill
              texto={filters.category}
              actionA={setCategory}
              payload={''}
              actionB={() => {
                setSearchParams({
                  title: searchParams.get('title') || '',
                  sprice: searchParams.get('sprice') || '',
                  eprice: searchParams.get('eprice') || '',
                  category: '',
                  sdate: searchParams.get('sdate') || '',
                  edate: searchParams.get('edate') || '',
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
                  title: searchParams.get('title') || '',
                  sprice: searchParams.get('sprice') || '',
                  eprice: searchParams.get('eprice') || '',
                  category: searchParams.get('category') || '',
                  sdate: '',
                  edate: '',
                });
              }}
            />
          ) : null
        }
      </div>
    </section>
  );
};

export default ActiveFiltersContainer;
