import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSlidesAsync,
  selectSlides,
} from '../../redux/features/slidesSlice';
import SlideCarouselAdmin from './SlideCarouselAdmin';

const Carrusel = () => {
  const slides = useSelector(selectSlides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSlidesAsync());
  }, [dispatch]);

  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {!!slides &&
          slides.map(({ order }) =>
            order === 1 ? (
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to={`${order - 1}`}
                className="active"
                aria-current="true"
                aria-label={`Slide ${order}`}
                key={`${order}0`}
              ></button>
            ) : (
              <button
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide-to={`${order - 1}`}
                aria-label={`Slide ${order}`}
                key={`${order}0`}
              ></button>
            )
          )}
      </div>
      <div data-test-id="carousel-container" className="carousel-inner">
        {!!slides &&
          slides.map((itemSlide, index) => (
            <SlideCarouselAdmin itemSlide={itemSlide} key={index} />
          ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
