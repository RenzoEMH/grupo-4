import './_Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-md-12 order-md-1 container" id="container_footer">
        <div className="row">
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label
                or="address"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <span>EVEN</span>TOPS
              </label>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '0.9rem',
                }}
              >
                <span style={{ width: '1.5rem' }}>
                  <i className="bi bi-facebook"></i>
                </span>
                <span style={{ width: '1.5rem' }}>
                  <i className="bi bi-twitter"></i>
                </span>
                <span style={{ width: '1.5rem' }}>
                  <i className="bi bi-instagram"></i>
                </span>
                <span style={{ width: '1.5rem' }}>
                  <i className="bi bi-whatsapp"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Conócenos</label>
              <ul className="list-unstyled">
                <li>
                  <span>Acerca de nosotros</span>
                </li>
                <li>
                  <span>Preguntas frecuentes</span>
                </li>
                <li>
                  <span>Términos y condiciones</span>
                </li>
                <li>
                  <span>Políticas de privacidad</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Explora</label>
              <ul className="list-unstyled">
                <li>
                  <span>Explora Eventops</span>
                </li>
                <li>
                  <span>Danos tu opinión</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Categorías</label>
              <ul className="list-unstyled">
                <li>
                  <span>Conciertos</span>
                </li>
                <li>
                  <span>Salud y Bienestar</span>
                </li>
                <li>
                  <span>Tecnologia</span>
                </li>
                <li>
                  <span>Deportes</span>
                </li>
                <li>
                  <span>Cine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
