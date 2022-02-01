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
                <a href="#" style={{ width: '1.5rem' }}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" style={{ width: '1.5rem' }}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={{ width: '1.5rem' }}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" style={{ width: '1.5rem' }}>
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Conócenos</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Acerca de nosotros</a>
                </li>
                <li>
                  <a href="#">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="#">Términos y condiciones</a>
                </li>
                <li>
                  <a href="#">Políticas de privacidad</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Explora</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Explora Eventops</a>
                </li>
                <li>
                  <a href="#">Danos tu opinión</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <div className="mb-3" style={{ marginTop: '1rem' }}>
              <label or="address">Categorías</label>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Conciertos</a>
                </li>
                <li>
                  <a href="#">Salud y Bienestar</a>
                </li>
                <li>
                  <a href="#">Tecnologia</a>
                </li>
                <li>
                  <a href="#">Deportes</a>
                </li>
                <li>
                  <a href="#">Cine</a>
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
