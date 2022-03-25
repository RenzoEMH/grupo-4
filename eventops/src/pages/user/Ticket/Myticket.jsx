import React from 'react';
import { Carousel } from 'react-bootstrap';
import './_Myticket.scss';
import { TicketBanner } from '../../../components/FilterAndSearchBar/general/TicketBanner';

function Myticket() {
  return (
    <div>
      <TicketBanner />
      <div className="box">
        <Carousel className='carouselTicket'>
          <Carousel.Item >
            <div className="boxTicket">
              <div className="boxQrCode">
                <p className="">¡ESCANEA EL CÓDIGO QR!</p>
                <img
                  className="qrCodeImg"
                  alt="qr"
                  src="https://iphoneros.com/wp-content/uploads/2017/02/codigoqrdeiphoneros.gif"
                />
              </div>
              <div className="boxCircles">
                <div className="circle left"></div>
                <div className="circle rigth"></div>
              </div>
              <div class="boxInformation">
                <div className="boxClientInformation">
                  <div className="information information1">
                    <div className="primaryInformation primaryInformation-width">
                      <p className="userData1">Nombres</p>
                      <p className="userData2">Brigitte Romero Luna</p>
                    </div>
                    <div class="v-line"></div>
                    <div className="secondaryInformation">
                      <p className="userData1">Evento</p>
                      <p className="userData2">Rock Alternativo</p>
                    </div>
                  </div>
                  <div className="information information2">
                    <div className="primaryInformation primaryInformation-width">
                      {' '}
                      <p className="userData1">Hora y fecha</p>
                      <p className="userData2">Sábado 13 Feb 9:00 PM</p>{' '}
                    </div>
                    <div class="v-line"></div>
                    <div className="secondaryInformation">
                      <p className="userData1">Cantidad</p>
                      <p className="userData2">2</p>
                    </div>
                  </div>
                  <div className=" information information3">
                    <div className="primaryInformation ">
                      {' '}
                      <p className="userData1">Ubicación</p>
                      <p className="userData2">
                        Enrique Paillardeli 441 - Comas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxTicketDescription">
                  <p>
                    <strong>TICKET</strong>
                  </p>
                  <p>
                    <strong>VIP</strong>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="boxTicket">
              <div className="boxQrCode">
                <p>¡ESCANEA EL CÓDIGO QR!</p>
                <img
                  className="qrCodeImg"
                  alt="qr"
                  src="https://iphoneros.com/wp-content/uploads/2017/02/codigoqrdeiphoneros.gif"
                />
              </div>
              <div className="boxCircles">
                <div className="circle left"></div>
                <div className="circle rigth"></div>
              </div>
              <div class="boxInformation">
                <div className="boxClientInformation">
                  <div className="information information1">
                    <div className="primaryInformation primaryInformation-width">
                      <p className="userData1">Nombres</p>
                      <p className="userData2">Brigitte Romero Luna</p>
                    </div>
                    <div class="v-line"></div>
                    <div className="secondaryInformation">
                      <p className="userData1">Evento</p>
                      <p className="userData2">Rock Alternativo</p>
                    </div>
                  </div>
                  <div className="information information2">
                    <div className="primaryInformation primaryInformation-width">
                      {' '}
                      <p className="userData1">Hora y fecha</p>
                      <p className="userData2">Sábado 13 Feb 9:00 PM</p>{' '}
                    </div>
                    <div class="v-line"></div>
                    <div className="secondaryInformation">
                      <p className="userData1">Cantidad</p>
                      <p className="userData2">2</p>
                    </div>
                  </div>
                  <div className=" information information3">
                    <div className="primaryInformation ">
                      {' '}
                      <p className="userData1">Ubicación</p>
                      <p className="userData2">
                        Enrique Paillardeli 441 - Comas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boxTicketDescription">
                  <p>
                    <strong>TICKET</strong>
                  </p>
                  <p>
                    <strong>VIP</strong>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='buttonContainer'>
        <button className="dowloadButton">DESCARGAR</button>
      </div>
    </div>
  );
}

export default Myticket;
