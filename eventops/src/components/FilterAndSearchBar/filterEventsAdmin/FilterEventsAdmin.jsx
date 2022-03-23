import FilterEventsAdminBox from './FilterEventsAdminBox';
const FilterEventsAdmin = () => {
  return (
    <>
      <section className="filter-menu bg-primary my-4 py-3">
        <div
          className="
                    container
                    d-flex
                    flex-column flex-md-row
                    justify-content-md-between
                  "
        >
          <FilterEventsAdminBox />
          <div className="d-flex justify-content-around">
            {/* <PriceFilter />
                    <CategoryFilter />
                    <DateFilter /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterEventsAdmin;
