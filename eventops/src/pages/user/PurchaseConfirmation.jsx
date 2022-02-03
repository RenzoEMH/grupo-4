import { Link } from 'react-router-dom';
import '../_Tiket.scss';
const PurchaseConfirmation = () => {
    return (
        <div className="container d-flex flex-column justify-content-center" id="contenedor-main">
        <main className="confirmacion-compra__main">
            <section className="principal">
                    <h1 className="text-center text-light">DETALLE COMPRA</h1>
    
                <div clas="logos">
                    <div className="sub-logos">
                        <div className="logo-eventops">
                            <a href="#" className="eventops__title navbar-brand">
                                EVEN<span>TOPS</span></a>
                        </div>
                        <div className="logo-pago">
                            <img src="imagenes/logo-payu.png" alt=""/>
                        </div>
                    </div>
                </div>

                <section className="linea">
                    <div>
                        <hr/>
                    </div>
                </section>
                

                <section className="pago-autorizado">
                    <div className="logo-pay">
                        <img src="imagenes/icono.png" alt=""/>
                    </div>
                    <div className="tipo">
                        <h3>AUTORIZADO</h3>
                    </div>
                    <div className="logo-pay">
                        <img src="imagenes/visa.png" alt=""/>
                    </div>
                </section>

                <div  className="detalle">
                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Nro. Pedido:
                            </h4>
                        </div>
                        <div className="valor-texto" id="nro-pedido">
                            <h4>
                                741582
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Código Autorización:
                            </h4>
                        </div>
                        <div className="valor-texto" id="codigo-autorizacion">
                            <h4>
                                5784521
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Nro. Tarjeta:
                            </h4>
                        </div>
                        <div className="valor-texto" id="nro-tarjeta">
                            <h4>
                                4517*****1287
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Importe Autorizado:
                            </h4>
                        </div>
                        <div className="valor-texto" id="cant-importe">
                            <h4>
                                S/. 37.00
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Fecha de Operación:
                            </h4>
                        </div>
                        <div className="valor-texto" id="fecha-reserva">
                            <h4>
                                15/12/2021 10:00 PM
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Comercio:
                            </h4>
                        </div>
                        <div className="valor-texto" id="nombre-comercio">
                            <h4>
                                EVENTOPS
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Términos y Condiciones:
                            </h4>
                        </div>
                        <div className="enlace-texto" id="terminos-condiciones">
                            <a>
                                eventops.com/terminos
                            </a>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Cliente:
                            </h4>
                        </div>
                        <div className="valor-texto" id="nombre-cliente">
                            <h4>
                                ROBERTO FERNANDEZ
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Cliente:
                            </h4>
                        </div>
                        <div className="enlace-texto" id="email">
                            <a>
                                roberto@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Cantidad:
                            </h4>
                        </div>
                        <div className="valor-texto" id="cantidad">
                            <h4>
                                1
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Descripción:
                            </h4>
                        </div>
                        <div className="valor-texto" id="descripcion">
                            <h4>
                                Rerserva de Evento
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Importe:
                            </h4>
                        </div>
                        <div className="valor-texto" id="importe">
                            <h4>
                                S/. 36.00
                            </h4>
                        </div>
                    </div>

                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Gasto Operativo:
                            </h4>
                        </div>
                        <div className="valor-texto" id="operativo">
                            <h4>
                                S/. 1.00
                            </h4>
                        </div>
                    </div>
                    <div className="subgrupo">
                        <div className="texto">
                            <h4>
                                Importe Total (Depósito/ Balance):
                            </h4>
                        </div>
                        <div className="valor-texto" id="total">
                            <h4>
                                S/. 37.00
                            </h4>
                        </div>
                    </div>

                </div>
                <div className="botones">
                    <div>
                        <Link to={'/'} className="btn btn-secondary py-2">
                            Regresas Home
                        </Link>
                    </div>
                    <div>
                        <Link to={'/mis-entradas'} className="boton">
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
  