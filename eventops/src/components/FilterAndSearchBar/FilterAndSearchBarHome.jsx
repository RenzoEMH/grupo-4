import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';
import HomeSearchBox from './HomeSearchBox';
import PriceFilter from './PriceFilter';

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
          <HomeSearchBox />
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
