import { useDispatch, useSelector } from 'react-redux';
import {
  removeTicketFromCart,
  updateTicketAmount,
} from '../redux/features/cartSlice';
import dateOnlyFormatter from '../utils/dateOnlyFormatter';
import hourOnlyFormatter from '../utils/hourOnlyFormatter';

const ShopCard = ({
  ShopCard: {
    id,
    date,
    dateId,
    hour,
    img,
    price,
    title,
    city,
    typeTicket,
    amount,
    categoryId,
    idEvento,
  },
}) => {
  const evento = useSelector((state) =>
    state.eventos.eventos.find((evento) => evento._id === idEvento)
  );
  const rCart = useSelector((state) => state.shopCart.cart);
  const dispatch = useDispatch();

  const removeElement = () => {
    dispatch(removeTicketFromCart(id));
  };

  const changeAmount = (ticket) => {
    dispatch(updateTicketAmount(ticket));
  };

  const add = () => {
    console.log(evento);
    const categories = [
      ...evento.dates.find((date) => date._id === dateId).ticketCategories,
    ];
    const maxAmount = categories.find(
      (category) => category._id === categoryId
    ).quantity;
    if (amount < maxAmount) {
      const index = rCart.findIndex((item) => item.id === id);
      changeAmount({ index: index, amount: amount + 1 });
    }
  };
  const subtract = () => {
    if (amount !== 0) {
      const index = rCart.findIndex((item) => item.id === id);
      changeAmount({ index: index, amount: amount - 1 });
    }
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
          <span onClick={subtract} type="button">
            <i className="bi bi-dash"></i>{' '}
          </span>
          <span style={{ padding: '0 0.5rem', userSelect: 'none' }}>
            {amount}
          </span>
          <span onClick={add} type="button">
            <i className="bi bi-plus"></i>{' '}
          </span>
        </div>
        <div className="col-md-1 text-center">
          $ {price * amount}.00 <span className="close"></span>
        </div>
        <div className="col-md-1 text-center">
          <span type="button" onClick={removeElement}>
            <i className="bi bi-trash-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
