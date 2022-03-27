import HomeSearchBox from './HomeSearchBox';

const FilterAndSearchBarHome = () => {
  return (
    <>
      <section className="filter-menu bg-primary mb-4 py-3">
        <div
          className="
            container
            d-flex
            flex-column flex-md-row
            justify-content-md-between
          "
        >
          <HomeSearchBox />
          <div className="d-flex justify-content-around"></div>
        </div>
      </section>
    </>
  );
};

export default FilterAndSearchBarHome;
