const PaymentSummary = () => {
  return (
    <div className="inferiorCarrito">
      <div className="row">
        <div className="col-md-9">
          <div>
            <p>¿Aun quieres seguir comprando otras entradas de Eventos?</p>
          </div>
          <div>
            <button className="btn btn-danger">Seguir comprando</button>
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
            <div className="col text-right">S/. 270.00</div>
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
              <p>S/. 270.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
