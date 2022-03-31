import { Link, useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router';
import '../_Tiket.scss';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCreating,
  selectCreatedSale,
  selectSaleError,
  createSaleAsync,
} from '../../redux/features/salesSlice';
import {
  getAllEventsAsync,
  selectEvents,
} from '../../redux/features/eventsSlice';

const PurchaseConfirmation = () => {
  const [searchParams] = useSearchParams();
  const refPayco = searchParams.get('ref_payco');
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const isCreating = useSelector(selectIsCreating);
  const createdSale = useSelector(selectCreatedSale);
  const saleError = useSelector(selectSaleError);

  useEffect(() => {
    if (events) dispatch(createSaleAsync(refPayco));
  }, [dispatch, refPayco, events]);

  useEffect(() => {
    if (!events) dispatch(getAllEventsAsync());
  }, [dispatch, events]);

  return (
    <div
      className="container d-flex flex-column justify-content-center flex-grow-1"
      id="contenedor-main"
    >
      <main className="confirmacion-compra__main d-flex flex-column flex-grow-1">
        <section className="principal d-flex flex-column flex-grow-1">
          <h2 className="text-center text-light">DETALLE COMPRA</h2>
          <section className="linea">
            <div>
              <hr />
            </div>
          </section>
          {isCreating ? (
            <h2 className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
              Cargando...
            </h2>
          ) : null}
          {!!createdSale && (
            <div className="detalle">
              <div className="subgrupo">
                <div className="texto">
                  <h4>Nº Transacción / Referencia:</h4>
                </div>
                <div className="valor-texto" id="codigo-autorizacion">
                  <h4>{createdSale.numberTransaction}</h4>
                </div>
              </div>

              <div className="subgrupo">
                <div className="texto">
                  <h4>Nro. Tarjeta:</h4>
                </div>
                <div className="valor-texto" id="nro-tarjeta">
                  <h4>{createdSale.cardNumber}</h4>
                </div>
              </div>

              <div className="subgrupo">
                <div className="texto">
                  <h4>Cliente:</h4>
                </div>
                <div className="valor-texto" id="cant-importe">
                  <h4>{createdSale.client}</h4>
                </div>
              </div>

              <div className="subgrupo">
                <div className="texto">
                  <h4>Fecha de Operación:</h4>
                </div>
                <div className="valor-texto" id="fecha-reserva">
                  <h4>{createdSale.paymentDate}</h4>
                </div>
              </div>

              <div className="subgrupo">
                <div className="texto">
                  <h4>Tipo de tarjeta:</h4>
                </div>
                <div className="valor-texto" id="nombre-comercio">
                  <h4>{createdSale.cardType}</h4>
                </div>
              </div>

              <div className="subgrupo">
                <div className="texto">
                  <h4>Importe Total:</h4>
                </div>
                <div className="valor-texto" id="terminos-condiciones">
                  <h4>$ {createdSale.totalFare}.00</h4>
                </div>
              </div>
            </div>
          )}
          {saleError && (
            <h2 className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
              {saleError}
            </h2>
          )}

          <div className="botones">
            <div>
              <Link to={'/'} className="btn btn-secondary">
                Regresar a Inicio
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
