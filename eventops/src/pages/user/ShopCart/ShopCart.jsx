import './ShopCart.scss';
import { useDispatch, useSelector } from 'react-redux';
import ShopCard from '../../../components/ShopCard';
import PaymentSummary from '../../../components/PaymentSummary';
import parseJwt from '../../../utils/ParseJwt';
import { useEffect, useState } from 'react';
import { getAllEventsAsync } from '../../../redux/features/eventsSlice';
import { emptyCart } from '../../../redux/features/cartSlice';

const ShopCart = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const shopCartList = useSelector((state) =>
    state.shopCart.cart.filter((item) => item.idUsuario === sesion?.id)
  );
  const [subTotal, setSubTotal] = useState();
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  let handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_KEY,
    test: true,
  });

  useEffect(() => {
    dispatch(getAllEventsAsync());
  }, [dispatch]);

  useEffect(() => {
    setDescription(
      shopCartList.reduce(
        (acc, curr, index) =>
          `${acc}${index !== 0 ? ' || ' : ''}${curr.title} - ${
            curr.typeTicket
          } X ${curr.amount}`,
        ''
      )
    );
  }, [shopCartList]);

  useEffect(() => {
    setSubTotal(
      shopCartList.reduce((prev, curr) => prev + curr.price * curr.amount, 0)
    );
  }, [shopCartList]);

  const handleEmptyCartButtonClick = () => {
    dispatch(emptyCart());
  };

  const openPayment = () => {
    let data = {
      name: 'EVENTOPS',
      description: description,
      currency: 'usd',
      amount: subTotal,
      tax_base: '0',
      tax: '0',
      country: 'pe',
      lang: 'es',
      external: 'false',
      response: `${process.env.REACT_APP_BASE_URL}confirmacion-compra`,
    };

    handler.open(data);
  };

  return (
    <main className="cuerpoCarrito">
      <div className="card" id="cardCarrito">
        <div className="col-md-12 cart">
          <div className="row mb-3">
            <div className="col-md-10">
              <h3>Mi compra</h3>
            </div>
            <div className="col-md-2">
              {shopCartList.length > 0 ? (
                <button
                  onClick={handleEmptyCartButtonClick}
                  type="button"
                  className="btn btn-danger"
                >
                  Vaciar Carrito
                </button>
              ) : (
                <button type="button" className="btn btn-danger" disabled>
                  Vaciar Carrito
                </button>
              )}
            </div>
          </div>
          <div className="row border-top border-bottom" id="cabeceraCarrito">
            <div className="row">
              <div className="col-md-6 text-center">
                <h6>
                  <strong>Detalles del Evento</strong>
                </h6>
              </div>
              <div className="col-md-2 text-center">
                <h6>
                  <strong>Tipo de entrada</strong>
                </h6>
              </div>
              <div className="col-md-2 text-center">
                <h6>
                  <strong>Cantidad</strong>
                </h6>
              </div>
              <div className="col-md-1">
                <h6>
                  <strong>Precio</strong>
                </h6>
              </div>
              <div className="col-md-1 text-center"></div>
            </div>
          </div>
          {shopCartList.map((shopCard) => {
            return <ShopCard ShopCard={shopCard} key={shopCard.id} />;
          })}
        </div>
      </div>
      <PaymentSummary />
      <div className="row" id="btnPagar">
        <div className="col-md-9"></div>
        <div
          className="col-md-3"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {shopCartList.length > 0 ? (
            <button
              onClick={openPayment}
              type="button"
              className="btn btn-danger"
            >
              Pagar Ahora
            </button>
          ) : (
            <button type="button" className="btn btn-danger" disabled>
              Pagar Ahora
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default ShopCart;
