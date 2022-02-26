const TicketType = ({
  ticket: { type, price, quantity },
  all,
  setTickets,
  index,
}) => {
  const handleOnChangeType = (e) => {
    setTickets([
      ...all.map((tType, i) =>
        i === index ? { ...tType, [`${e.target.name}`]: e.target.value } : tType
      ),
    ]);
  };

  const handleOnChangeNumber = (e) => {
    setTickets([
      ...all.map((tType, i) =>
        i === index
          ? { ...tType, [`${e.target.name}`]: parseInt(e.target.value) }
          : tType
      ),
    ]);
  };

  const handleOnClickDelete = () => {
    setTickets([...all.filter((tType, i) => index !== i)]);
  };

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
            name={'type'}
            onChange={handleOnChangeType}
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
            min="0"
            value={quantity}
            name={'quantity'}
            onChange={handleOnChangeNumber}
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
            min="0"
            value={price}
            name={'price'}
            onChange={handleOnChangeNumber}
            // required
          />
        </div>
      </div>
      <div className="col-md-2 order-md-1 d-flex justify-content-center align-items-center">
        {all.length > 1 ? (
          <span onClick={handleOnClickDelete} type="button">
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
