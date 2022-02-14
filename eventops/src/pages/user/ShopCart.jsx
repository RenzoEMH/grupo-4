import './ShopCart.scss';
import { useDispatch, useSelector } from 'react-redux';
import ShopCard from '../../components/ShopCard';
import { useEffect } from 'react';
import shopCart from '../../utils/shopCart';
import { setShopCart } from '../../redux/features/cartSlice';
import PaymentSummary from '../../components/PaymentSummary';
import { useNavigate } from 'react-router-dom';

const ShopCart = () => {
  const shopCartList = useSelector((state) => state.shopCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setShopCart(shopCart));
  }, [dispatch]);

  return (
    <main className="cuerpoCarrito">
      <div className="card" id="cardCarrito">
        <div className="col-md-12 cart">
          <div className="row mb-3">
            <div className="col-md-10">
              <h3>Mi compra</h3>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger">Vaciar Carrito</button>
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
          <button
            onClick={() => navigate('/metodo-pago')}
            className="btn btn-danger"
          >
            Pagar Ahora
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShopCart;
