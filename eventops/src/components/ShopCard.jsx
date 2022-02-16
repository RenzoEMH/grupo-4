import { useDispatch } from 'react-redux';
import { removeCard } from '../redux/features/cartSlice';
import dateOnlyFormatter from '../utils/dateOnlyFormatter';
import hourOnlyFormatter from '../utils/hourOnlyFormatter';

const ShopCard = ({
  ShopCard: { id, date, hour, img, price, title, city, typeTicket, amount },
}) => {
  const dispatch = useDispatch();

  const removeElement = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className="row border-bottom mt-3">
      <div className="row main align-items-center mb-3">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <img alt={title} className="img-fluid" src={img} />
            </div>
            <div className="col-md-8">
              <div className="row" style={{ lineHeight: '15px' }}>
                <h6>{title}</h6>
                <p>{city}</p>
                <p>
                  {dateOnlyFormatter(date)} {hourOnlyFormatter(hour)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center">
          {typeTicket} <span className="close"></span>
        </div>
        <div className="col-md-2 text-center">
          <span type="button">
            <i className="bi bi-dash"></i>{' '}
          </span>
          <span className="border" style={{ padding: '0 0.5rem' }}>
            {amount}
          </span>
          <span type="button">
            <i className="bi bi-plus"></i>{' '}
          </span>
        </div>
        <div className="col-md-1 text-center">
          S/.{price * amount}.00 <span className="close"></span>
        </div>
        <div className="col-md-1 text-center">
          <span
            type="button"
            onClick={() => {
              removeElement(id);
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
