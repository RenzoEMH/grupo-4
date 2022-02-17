import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SesionContext } from '../utils/SesionContext';

const PaymentSummary = () => {
  const { sesion } = useContext(SesionContext);
  const shopCartList = useSelector((state) =>
    state.shopCart.cart.filter((item) => item.idUsuario === sesion.id)
  );
  const [subTotal, setSubTotal] = useState(
    shopCartList.reduce((prev, curr) => prev + curr.price, 0)
  );
  const navigate = useNavigate();

  useEffect(() => {
    setSubTotal(
      shopCartList.reduce((prev, curr) => prev + curr.price * curr.amount, 0)
    );
  }, [shopCartList]);

  return (
    <div className="inferiorCarrito">
      <div className="row">
        <div className="col-md-9">
          <div>
            <p>¿Aun quieres seguir comprando otras entradas de Eventos?</p>
          </div>
          <div>
            <button
              onClick={() => {
                navigate('/busqueda');
              }}
              className="btn btn-danger"
            >
              Seguir comprando
            </button>
          </div>
        </div>
        <div className="col-md-3 summary" id="resumenPago">
          <div
            className="text-center"
            style={{ borderBottom: '2px solid black', marginTop: '1rem' }}
          >
            <h5>
              <b>Resumen de Pago</b>
            </h5>
          </div>
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col">
              <p>Subtotal:</p>
            </div>
            <div className="col text-right">
              S/. {subTotal}
              .00
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Descuento:</p>
            </div>
            <div className="col text-right">S/. 0.00</div>
          </div>
          <div
            className="row"
            style={{ borderTop: '4px solid #21262a', padding: '2vh 0' }}
          >
            <div className="col">
              <p>Total</p>
            </div>
            <div className="col text-right">
              <p>S/. {subTotal}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
