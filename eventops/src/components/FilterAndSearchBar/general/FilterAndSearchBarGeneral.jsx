import ActiveFiltersContainerGeneral from './ActiveFiltersContainerGeneral';
import CategoryFilterGeneral from './CategoryFilterGeneral';
import DateFilterGeneral from './DateFilterGeneral';
import StateFilterGeneral from './StateFilterGeneral';

const FilterAndSearchBarGeneral = () => {
  return (
    <>
      <section className="filter-menu bg-primary my-4 py-3">
        <div className="d-flex justify-content-center gap-5">
          <CategoryFilterGeneral />
          <DateFilterGeneral />
          <StateFilterGeneral />
        </div>
      </section>
      <ActiveFiltersContainerGeneral />
    </>
  );
};

export default FilterAndSearchBarGeneral;
