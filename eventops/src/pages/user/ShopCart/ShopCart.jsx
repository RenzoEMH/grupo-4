import './ShopCart.scss';
import { useDispatch, useSelector } from 'react-redux';
import ShopCard from '../../../components/ShopCard';
import PaymentSummary from '../../../components/PaymentSummary';
import parseJwt from '../../../utils/ParseJwt';
import { useEffect, useState } from 'react';
import { getAllEventsAsync } from '../../../redux/features/eventsSlice';

const ShopCart = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const shopCartList = useSelector((state) =>
    state.shopCart.cart.filter((item) => item.idUsuario === sesion?.id)
  );
  const [subTotal, setSubTotal] = useState();
  const [description, setDescription] = useState('');
  // const navigate = useNavigate();
  console.log(subTotal, '||', description);
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

  const openPayment = () => {
    let data = {
      //Parametros compra (obligatorio)
      name: 'EVENTOPS',
      description: description,
      // invoice: '1234',
      currency: 'usd',
      amount: subTotal,
      tax_base: '0',
      tax: '0',
      country: 'pe',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales
      // extra1: 'extra1',
      // extra2: 'extra2',
      // extra3: 'extra3',
      // confirmation: 'http://secure2.payco.co/prueba_curl.php',
      confirmation: 'http://localhost:5000/epayco/confirmation',
      response: `${process.env.REACT_APP_BASE_URL}confirmacion-compra`,

      //Atributos cliente
      name_billing: '',
      // address_billing: 'Carrera 19 numero 14 91',
      // type_doc_billing: 'cc',
      // mobilephone_billing: '3050000000',
      // number_doc_billing: '100000000',

      //atributo deshabilitación metodo de pago
      // methodsDisable: ['TDC', 'PSE', 'SP', 'CASH', 'DP'],
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
            // onClick={() => navigate('/metodo-pago')}
            onClick={openPayment}
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
