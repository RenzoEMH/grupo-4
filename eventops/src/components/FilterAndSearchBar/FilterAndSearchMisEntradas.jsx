const FilterAndSearchMisEntradas = () => {
  return (
    <>
      {/*  filter mis entradas */}
      <section className="filter-menu bg-primary my-3 py-3">
        <div
          className="
              container
              d-flex
              flex-column flex-md-row
              justify-content-md-between
            "
        >
          <form className="d-flex mb-3 mb-md-0"></form>
          <div className="d-flex mx-auto">
            <div className="btn-group">
              <button
                className="btn btn-primary d-flex align-items-center"
                type="button"
                id="categoriasDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="me-1 me-sm-2">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.8985 0.728883C34.7941 0.468804 34.5934 0.258999 34.3382 0.143113C34.083 0.0272264 33.793 0.0141826 33.5284 0.106695C33.2639 0.199207 33.0452 0.390152 32.9178 0.639806C32.7905 0.889461 32.7643 1.1786 32.8447 1.44708C34.5169 6.25308 31.1977 9.84228 28.6669 11.7647L27.6445 10.2995C27.3007 9.80808 26.5321 9.39948 25.9345 9.39228L20.1961 9.41748C19.4951 9.43865 18.8128 9.64886 18.2215 10.0259L1.31229 21.8825C0.918977 22.1593 0.651361 22.5806 0.568032 23.0543C0.484703 23.5279 0.592451 24.0153 0.867686 24.4097L8.55189 35.4041C9.12789 36.2231 10.0477 36.1241 10.8685 35.5517L27.7777 23.6933C28.2637 23.3495 28.8253 22.6079 29.0233 22.0409L30.8197 16.3799C31.0177 15.8147 30.8971 14.9525 30.5533 14.4611L29.9305 13.5683C33.3289 10.9637 36.8569 6.36108 34.8985 0.728883ZM27.0307 17.5733C26.7192 17.7913 26.3678 17.9459 25.9965 18.0281C25.6252 18.1103 25.2414 18.1185 24.867 18.0523C24.4926 17.9861 24.1348 17.8468 23.8143 17.6423C23.4937 17.4378 23.2166 17.1721 22.9987 16.8605C22.5576 16.2299 22.3847 15.45 22.518 14.692C22.6513 13.9341 23.0799 13.26 23.7097 12.8177C24.2034 12.4718 24.7929 12.2887 25.3958 12.2942C25.9986 12.2997 26.5847 12.4934 27.0721 12.8483C26.5825 13.1435 26.2459 13.3163 26.1829 13.3433C25.9598 13.4497 25.7794 13.6287 25.6713 13.851C25.5632 14.0733 25.5339 14.3258 25.5881 14.567C25.6423 14.8081 25.7767 15.0238 25.9695 15.1785C26.1623 15.3333 26.4019 15.4179 26.6491 15.4187C26.8039 15.4187 26.9623 15.3827 27.1117 15.3125C27.4609 15.1469 27.8353 14.9507 28.2259 14.7185C28.3157 15.2586 28.2512 15.8131 28.0398 16.3182C27.8283 16.8232 27.4785 17.2583 27.0307 17.5733Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </span>
                <span className="d-none d-sm-block"> Categorias </span>
                <span className="ms-1 ms-sm-2">
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6.5 7L12 1"
                      stroke="#F8F8F8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-end p-3 category-dropdown"
                aria-labelledby="categoriasDropdown"
              >
                <form action="" className="register">
                  <h4 className="text-center mb-3">Filtro por Categorias</h4>
                  <div
                    className="
                        filter__pill-container
                        d-flex
                        justify-content-center
                        flex-wrap
                        mb-3
                        gap-2
                      "
                  >
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      type="button"
                    >
                      Concierto
                    </button>
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      type="button"
                    >
                      Salud y Bienestar
                    </button>
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      type="button"
                    >
                      Tecnología
                    </button>
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      type="button"
                    >
                      Deportes
                    </button>
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      type="button"
                    >
                      Cine
                    </button>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="category-dropdown__btn btn btn-secondary flex-fill"
                      type="button"
                    >
                      Limpiar
                    </button>
                    <button
                      className="category-dropdown__btn btn btn-primary flex-fill"
                      type="submit"
                    >
                      Aplicar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-primary d-flex align-items-center"
                type="button"
                id="fechasDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="me-1 me-sm-2">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.64 3.06H25.5V0.34C25.5 0.153 25.347 0 25.16 0H22.78C22.593 0 22.44 0.153 22.44 0.34V3.06H11.56V0.34C11.56 0.153 11.407 0 11.22 0H8.84C8.653 0 8.5 0.153 8.5 0.34V3.06H1.36C0.60775 3.06 0 3.66775 0 4.42V32.64C0 33.3923 0.60775 34 1.36 34H32.64C33.3923 34 34 33.3923 34 32.64V4.42C34 3.66775 33.3923 3.06 32.64 3.06ZM30.94 30.94H3.06V14.79H30.94V30.94ZM30.94 11.9H3.06V6.12H8.5V8.16C8.5 8.347 8.653 8.5 8.84 8.5H11.22C11.407 8.5 11.56 8.347 11.56 8.16V6.12H22.44V8.16C22.44 8.347 22.593 8.5 22.78 8.5H25.16C25.347 8.5 25.5 8.347 25.5 8.16V6.12H30.94V11.9Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="d-none d-sm-block"> Fechas </span>
                <span className="ms-1 ms-sm-2">
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6.5 7L12 1"
                      stroke="#F8F8F8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="dropdown-menu p-3 date-dropdown"
                aria-labelledby="fechasDropdown"
              >
                <form action="" className="register">
                  <h4 className="text-center mb-3">Filtro por Fechas</h4>
                  <div className="mb-3 d-flex align-items-center gap-3">
                    <input
                      type="text"
                      className="register__names form-control"
                      id="dateBegin"
                      placeholder="Inicio..."
                      onFocus={(e) => {
                        e.target.type = 'date';
                      }}
                      onBlur={(e) => {
                        e.target.type = 'text';
                      }}
                    />
                    <input
                      type="text"
                      className="register__names form-control"
                      id="dateEnd"
                      placeholder="Fin..."
                      onFocus={(e) => {
                        e.target.type = 'date';
                      }}
                      onBlur={(e) => {
                        e.target.type = 'text';
                      }}
                    />
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="category-dropdown__btn btn btn-secondary flex-fill"
                      type="button"
                    >
                      Limpiar
                    </button>
                    <button
                      className="date-dropdown__btn btn btn-primary flex-fill"
                      type="submit"
                    >
                      Aplicar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-primary d-flex align-items-center"
                type="button"
                id="preciosDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="me-1 me-sm-2">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.14367 24.8647C9.69218 25.4975 10.0469 26.2749 10.1655 27.1039C10.2841 27.9329 10.1615 28.7786 9.81245 29.5398C9.46335 30.301 8.9025 30.9457 8.19688 31.3967C7.49126 31.8478 6.67071 32.0862 5.83325 32.0834C3.41242 32.0834 1.45825 30.1293 1.45825 27.7084C1.45825 25.2876 3.41242 23.3334 5.83325 23.3334C6.09575 23.3334 6.35825 23.3334 6.60617 23.4064L11.0833 15.5897L8.54575 14.1459L14.5103 12.5126L16.1437 18.4772L13.6062 17.0334L9.14367 24.8647ZM29.1666 23.3334C27.2708 23.3334 25.6666 24.5584 25.0541 26.2501H16.0416V23.3334L11.6666 27.7084L16.0416 32.0834V29.1668H25.0541C25.6666 30.8584 27.2708 32.0834 29.1666 32.0834C31.5874 32.0834 33.5416 30.1293 33.5416 27.7084C33.5416 25.2876 31.5874 23.3334 29.1666 23.3334ZM17.4999 11.6668C17.7624 11.6668 18.0249 11.6668 18.2728 11.5939L22.7499 19.4105L20.2124 20.8543L26.177 22.4876L27.8103 16.523L25.2728 17.9668L20.8103 10.1355C21.3588 9.50269 21.7136 8.72533 21.8322 7.8963C21.9508 7.06728 21.8282 6.22164 21.4791 5.4604C21.13 4.69916 20.5692 4.05451 19.8635 3.60346C19.1579 3.15241 18.3374 2.91402 17.4999 2.91677C15.0791 2.91677 13.1249 4.87094 13.1249 7.29177C13.1249 9.7126 15.0791 11.6668 17.4999 11.6668Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                </span>
                <span className="d-none d-sm-block"> Estados </span>
                <span className="ms-1 ms-sm-2">
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6.5 7L12 1"
                      stroke="#F8F8F8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="dropdown-menu p-3 price-dropdown"
                aria-labelledby="preciosDropdown"
              >
                <form action="" className="register">
                  <h4 className="text-center mb-3">Filtro por Estado</h4>
                  <div className="mb-3 d-flex justify-content-around gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Activo
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Inactivo
                      </label>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="price-dropdown__btn btn btn-primary flex-fill"
                      type="submit"
                    >
                      Aplicar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  filter mis entradas */}
    </>
  );
};

export default FilterAndSearchMisEntradas;
