import './_SlideCarouselAdmin.scss';

const SlideCarouselAdmin = ({ itemSlide: { title, img, order } }) => {
  return (
    <div
      data-test-id="carousel-item"
      className={`carousel-item ${order === 1 ? 'active' : ''}`}
    >
      <img src={img} className="d-block w-100 ev-slide-img" alt={title} />
    </div>
  );
};

export default SlideCarouselAdmin;
