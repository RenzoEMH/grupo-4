const FinishCreate = () => {
  return (
    <div className="accordion-item">
      <h1 className="accordion-button ">Creació n Finalizada</h1>
      <div className="accordion-body">
        <div className="col-md-12 order-md-1">
          <div className="d-flex flex-column align-items-center">
            <span>
              <i
                style={{ color: 'green', fontSize: '7rem' }}
                className="bi bi-check-circle-fill"
              ></i>
            </span>
            <span style={{ fontSize: '4rem' }}>¡Éxito!</span>
            <p>
              Por favor espere a que su evento sea aprovado por el administrador
              para poder visualizarlo en la pagina de eventos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishCreate;
