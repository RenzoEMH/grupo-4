import { useDispatch } from 'react-redux';
import { removeCard } from '../redux/features/cartSlice';

const ShopCard = ({
  ShopCard: { id, date, img, price, title, city, typeTicket, numberTickets },
}) => {
  const dispatch = useDispatch();

  const removeElement = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <div className="row border-bottom" Style="margin-top: 1rem">
      <div className="row main align-items-center" Style="margin-bottom: 1rem">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <img alt={title} className="img-fluid" src={img} />
            </div>
            <div className="col-md-8">
              <div className="row" Style="line-height: 15px">
                <h6>{title}</h6>
                <p>{city}</p>
                <p>Lunes 20 de diciembre de 2021 5:00pm</p>
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
          <span className="border" Style="padding: 0 0.5rem">
            {numberTickets}
          </span>
          <span type="button">
            <i className="bi bi-plus"></i>{' '}
          </span>
        </div>
        <div className="col-md-1 text-center">
          S/.{price} <span className="close"></span>
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
