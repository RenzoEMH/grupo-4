import HomeSearchBox from './HomeSearchBox';

const FilterAndSearchBarHome = () => {
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
            {/* <PriceFilter />
            <CategoryFilter />
            <DateFilter /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterAndSearchBarHome;
