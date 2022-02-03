import { Link } from 'react-router-dom';
import '../_Tiket.scss';
const Payment = () => {
  return (
    <div className="container-metod-payment"> 

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
                  <input className="form-check-input" type="checkbox" value="false" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckCheckedDisabled">
                    He leído y aceptado los <a href="#" className="link-danger">Términos y condiciones</a>
                  </label>
                </div>
              </div>
              
              <div className="check-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckCheckedDisabled">
                    ¿Usted ha leído los términos y condiciones para el tratamiento de sus datos
                    personales contenidos en la Política de <a href="#" className="link-danger">Privacidad Web?</a>
                  </label>
                </div>
              </div>

              <div className="accordion" Id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <b>Paga con Eventops y via BCP</b>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong className="letra">Compra recomendable</strong> 
                      <img src="imagenes/bcp.png" alt="" className="img-responsive" />
                    </div>
                    <p class="letra"> Obten un reembolso del %100 de esta compra en caso de que no puedas asistir por muchas de la razones de nuestros Términos y condiciones, los cuales aceptas al elegir la opción "Compra reembolsable".</p>
                   
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <b>Transferencia Bancaria</b>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p class="letra"> Obten un reembolso del %100 de esta compra en caso de que no puedas asistir por muchas de la razones de nuestros Términos y condiciones, los cuales aceptas al elegir la opción "Compra reembolsable".</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Efectivo
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className="letra">Acercate a una de nuestras Oficinas en todo el Perú</p>
                    <p class="letra"> Obten un reembolso del %100 de esta compra en caso de que no puedas asistir por muchas de la razones de nuestros Términos y condiciones, los cuales aceptas al elegir la opción "Compra reembolsable".</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-4" id="col-right">
              <div className="caja-right">
                <div>
                  <h5>ROCK AND ROLL: <br/>Peru</h5>
                </div>
                <div className="row">
                  <div className="col-md-6"><span><i class="bi bi-calendar-check"></i></span> Domingo 19 de diciembre</div>
                  <div className="col-md-6"><span><i className="bi bi-alarm"></i></span> 19:00 pm</div>
                </div>
                <div clas="row">
                  <h5>Virtual</h5>
                </div>
                <div>
                  <h5>Mi compra
                  </h5>
                </div>
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2 x General</td>
                        <td>S/. 50.00 PEN</td>
                      </tr>
                      <tr>
                        <td><span></span> Total</td>
                        <td>S/. 50.00</td>
                      </tr>
                    </tbody>
                  </table>       
                </div>
                
            </div>

      </div>
      <div className="class-botones">
        <div className="botones">
          <div>
              <Link to={'/evento-detalle'} className="btn btn-secondary py-3">
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
