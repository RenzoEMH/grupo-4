import FilterUserBox from './FilterUserBox';
import FilterUserState from './FilterUserState';
const FilterUsers = () => {
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
          <FilterUserBox />
          <div className="d-flex justify-content-around">
            <FilterUserState />
            {/* <PriceFilter />
                <CategoryFilter />
                <DateFilter /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default FilterUsers;
