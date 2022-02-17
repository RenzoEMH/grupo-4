import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import '../_Tiket.scss';
import { useSelector } from 'react-redux';

const PurchaseConfirmation = () => {
  const { id } = useParams();
  const sales = useSelector((state) => state.sales.sales);
  let saleFilter = sales.filter((sale) => {
    return sale.id == id;
  });

  return (
    <div
      className="container d-flex flex-column justify-content-center"
      id="contenedor-main"
    >
      <main className="confirmacion-compra__main">
        <section className="principal">
          <h2 className="text-center text-light">DETALLE COMPRA</h2>
          <section className="linea">
            <div>
              <hr />
            </div>
          </section>
          <div className="detalle">
            <div className="subgrupo">
              <div className="texto">
                <h4>Token:</h4>
              </div>
              <div className="valor-texto" id="nro-pedido">
                <h4>{saleFilter[0].token}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Nº Transacción / Referencia:</h4>
              </div>
              <div className="valor-texto" id="codigo-autorizacion">
                <h4>{saleFilter[0].numberTransaction}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Nro. Tarjeta:</h4>
              </div>
              <div className="valor-texto" id="nro-tarjeta">
                <h4>{saleFilter[0].cardNumber}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Cliente:</h4>
              </div>
              <div className="valor-texto" id="cant-importe">
                <h4>{saleFilter[0].client}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Fecha de Operación:</h4>
              </div>
              <div className="valor-texto" id="fecha-reserva">
                <h4>{saleFilter[0].paymentDate}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Tipo de tarjeta:</h4>
              </div>
              <div className="valor-texto" id="nombre-comercio">
                <h4>{saleFilter[0].cardType}</h4>
              </div>
            </div>

            <div className="subgrupo">
              <div className="texto">
                <h4>Importe Total:</h4>
              </div>
              <div className="valor-texto" id="terminos-condiciones">
                <h4>{saleFilter[0].totalFare}</h4>
              </div>
            </div>
          </div>

          <div className="botones">
            <div>
              <Link to={'/'} className="btn btn-secondary">
                Regresas Home
              </Link>
            </div>
            <div>
              <Link to={'/mis-entradas'} className="btn btn-danger">
                Ver mis Entradas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default PurchaseConfirmation;
