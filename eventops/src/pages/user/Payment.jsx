import { Link } from 'react-router-dom';
import '../_Tiket.scss';
import { useSelector } from 'react-redux';

const Payment = () => {
  const shopCart = useSelector((state) => state.shopCart.cart);
  console.log(shopCart);
  let totalFare = 0;
  for (let i = 0; i < shopCart.length; i++) {
    totalFare = totalFare + shopCart[i].price * shopCart[i].amount;
  }
  return (
    <div className="container-metod-payment container">
      <div className="row">
        <div className="title">
          <h1>MÉTODO DE PAGO</h1>
        </div>
      </div>

      <div className="row" id="row-principal">
        <div className="col-md-8">
          <div className="subtitle">
            <h4>Elije tu método de pago</h4>
          </div>

          <div className="check-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="false"
                id="flexCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckCheckedDisabled"
              >
                He leído y aceptado los{' '}
                <span
                  type="button"
                  style={{ color: '#9f2d30', fontWeight: '700' }}
                  className="link-danger"
                >
                  Términos y condiciones
                </span>
              </label>
            </div>
          </div>

          <div className="check-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckCheckedDisabled"
              >
                ¿Usted ha leído los términos y condiciones para el tratamiento
                de sus datos personales contenidos en la Política de{' '}
                <span
                  type="button"
                  style={{ color: '#9f2d30', fontWeight: '700' }}
                  className="link-danger"
                >
                  Privacidad Web?
                </span>
              </label>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b>Paga con Eventops y via BCP</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong className="letra">Compra recomendable</strong>
                  <img
                    src="imagenes/bcp.png"
                    alt=""
                    className="img-responsive"
                  />
                </div>
                <p className="letra">
                  {' '}
                  Obten un reembolso del %100 de esta compra en caso de que no
                  puedas asistir por muchas de la razones de nuestros Términos y
                  condiciones, los cuales aceptas al elegir la opción "Compra
                  reembolsable".
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>Transferencia Bancaria</b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="letra">
                    {' '}
                    Obten un reembolso del %100 de esta compra en caso de que no
                    puedas asistir por muchas de la razones de nuestros Términos
                    y condiciones, los cuales aceptas al elegir la opción
                    "Compra reembolsable".
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Efectivo
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="letra">
                    Acercate a una de nuestras Oficinas en todo el Perú
                  </p>
                  <p className="letra">
                    {' '}
                    Obten un reembolso del %100 de esta compra en caso de que no
                    puedas asistir por muchas de la razones de nuestros Términos
                    y condiciones, los cuales aceptas al elegir la opción
                    "Compra reembolsable".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4" id="col-right">
          <div className="caja-right">
            {shopCart.map((cart) => {
              return (
                <div key={cart.id}>
                  <div>
                    <strong>{cart.title}</strong>
                  </div>
                  <div className="row">
                    <div className="col-md-5">{cart.date}</div>
                    <div className="col-md-4">
                      {cart.amount} x {cart.typeTicket}
                    </div>
                    <div className="col-md-3">
                      S/.{cart.price * cart.amount}.00
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Subtotal</strong>
                    </td>
                    <td>S/. {totalFare}.00</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>S/. {totalFare}.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="class-botones">
          <div className="botones">
            <div>
              <Link to={'/carrito-compra'} className="btn btn-secondary py-3">
                <b> Cancelar</b>
              </Link>
            </div>
            <div>
              <Link to={'/form-pago'} className="btn btn-primary py-3">
                Pagar Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
