import { useDispatch } from 'react-redux';
import { setAtribute } from '../../redux/features/singleEventSlice';

const TicketType = ({ ticket: { type, price, quantity }, all, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="row border-bottom py-4">
      <div className="col-md-5 order-md-1">
        <div className="mb-3">
          <label htmlFor="address">Nombre de la Entrada</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ej. VIP, General "
            value={type}
            onChange={(e) =>
              dispatch(
                setAtribute({
                  key: 'typeTicket',
                  value: all.map((tType, i) =>
                    i === index ? { ...tType, type: e.target.value } : tType
                  ),
                })
              )
            }
            // required
          />
        </div>
      </div>
      <div className="col-md-3 order-md-1">
        <div className="mb-3">
          <label htmlFor="address">Cant. disponible</label>
          <input
            type="number"
            className="form-control"
            placeholder="0 "
            value={price}
            onChange={(e) =>
              dispatch(
                setAtribute({
                  key: 'typeTicket',
                  value: all.map((tType, i) =>
                    i === index
                      ? { ...tType, price: parseInt(e.target.value) }
                      : tType
                  ),
                })
              )
            }
            // required
          />
        </div>
      </div>
      <div className="col-md-2 order-md-1">
        <div className="mb-3">
          <label htmlFor="address">Precio</label>
          <input
            type="number"
            className="form-control"
            placeholder="0 "
            value={quantity}
            onChange={(e) =>
              dispatch(
                setAtribute({
                  key: 'typeTicket',
                  value: all.map((tType, i) =>
                    i === index
                      ? { ...tType, quantity: parseInt(e.target.value) }
                      : tType
                  ),
                })
              )
            }
            // required
          />
        </div>
      </div>
      <div className="col-md-2 order-md-1 d-flex justify-content-center align-items-center">
        {all.length > 1 ? (
          <span
            onClick={() =>
              dispatch(
                setAtribute({
                  key: 'typeTicket',
                  value: all.filter((tType, i) => index !== i),
                })
              )
            }
            type="button"
          >
            <i className="bi bi-trash-fill"></i>
          </span>
        ) : (
          <span>
            <i style={{ color: 'grey' }} className="bi bi-trash-fill"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default TicketType;
