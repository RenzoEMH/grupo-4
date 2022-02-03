import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import SearchBox from './SearchBox';

const FilterAndSearchBar = () => {
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
          <SearchBox />
          <div className="d-flex justify-content-around">
            <PriceFilter />
            <CategoryFilter />
            <DateFilter />
          </div>
        </div>
      </section>

    </>
  );
};

export default FilterAndSearchBar;
