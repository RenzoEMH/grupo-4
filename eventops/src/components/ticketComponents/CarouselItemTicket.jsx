const CarouselItemTicket = ({
  datosTicket: {
    ownerName,
    eventName,
    eventDate,
    ticketQuantity,
    eventAddress,
    ticketCategory,
  },
}) => {
  return (
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
      <div className="boxInformation">
        <div className="boxClientInformation">
          <div className="information information1">
            <div className="primaryInformation primaryInformation-width">
              <p className="userData1">Nombres</p>
              <p className="userData2">{ownerName}</p>
            </div>
            <div className="v-line"></div>
            <div className="secondaryInformation">
              <p className="userData1">Evento</p>
              <p className="userData2">{eventName}</p>
            </div>
          </div>
          <div className="information information2">
            <div className="primaryInformation primaryInformation-width">
              {' '}
              <p className="userData1">Hora y fecha</p>
              <p className="userData2">{eventDate}</p>{' '}
            </div>
            <div className="v-line"></div>
            <div className="secondaryInformation">
              <p className="userData1">Cantidad</p>
              <p className="userData2">{ticketQuantity}</p>
            </div>
          </div>
          <div className=" information information3">
            <div className="primaryInformation ">
              {' '}
              <p className="userData1">Ubicación</p>
              <p className="userData2">{eventAddress}</p>
            </div>
          </div>
        </div>
        <div className="boxTicketDescription">
          <p>
            <strong>TICKET</strong>
          </p>
          <p>
            <strong>{ticketCategory}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItemTicket;
