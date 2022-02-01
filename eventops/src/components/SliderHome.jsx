const SliderHome = ({ slider: { img } }) => {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img}
            className="d-block w-100"
            alt="concierto gianmarco"
          />
        </div>
        <div className="carousel-item">
          <img src="./img/first.jpg" className="d-block w-100" alt="..." />
        </div>
  
      </div>
    );
  };
  
  export default SliderHome;
  