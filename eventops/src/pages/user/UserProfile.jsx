const UserProfile = () => {
  return (
    <div className="App">
      <div className="container d-flex flex-column justify-content-center" id="" style="max-width:100%; max-height: 100%;">
        <main className="" >
          <div className="row">
            <div className="col-md-3 col-left">
              <div className="row fila-1" style="margin-top:20px; margin-bottom:50px; ">
                <div className="col-md-4 ">
                  <img src="./imagenes/imagen-perfil.png" alt="imagen de perfil"/>
                </div>
                <div className="col-md-8">
                  <div className="row" style="color: black">Roberto<br/>Fernandez</div>
                  <div className="row" style="color:#9F2D30">Cuenta verificada</div>
                </div>
              </div>
              <div className="row mi-perfil" style="color: #9F2D30; font-size:24px; margin-left: 10px;">Mi Perfil</div>
              <div className="row" style="color: black; font-size:18px; margin-left: 10px;">Cerrar Sesion</div>
            </div>
            <div className="col-md-6">
              <div className="row" style="margin-top:20px">
                <div className="col-md-11">
                  <h1 style="color:white">Mi perfil</h1>
                </div>
                <div className="col-md-1">
                  <img src="./imagenes/lapiz.png" alt="lapiz"/>
                </div>
              </div>
              <div className="row" style="margin-top:20px">
                  <div className="row" style="margin-top:10px">
                    <div className="col-md-6">
                      <p style="color: white; font-size:16px; margin:auto;">Nombres</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">Roberto</p>
                    </div>
                    <div className="col-md-6" >
                      <p style="color: white; font-size:16px; margin:auto;">Apellidos</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">Fernandez</p>
                    </div>
                  </div>
                  <div className="row"style="margin-top:20px">
                    <div className="col-md-6">
                      <p style="color: white; font-size:16px; margin:auto;">Tipo de documento</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">DNI</p>
                    </div>
                    <div className="col-md-6">
                      <p style="color: white; font-size:16px; margin:auto;">Numero de documento</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">98745621</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top:20px">
                    <div className="col-md-3">
                      <p style="color: white; font-size:16px; margin:auto;">Email</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">roberto@gmail.com</p>
                    </div>
                    <div className="col-md-3">
                      <p style="color: white; font-size:16px; margin:auto;">Código</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">98745621</p>
                    </div>
                    <div className="col-md-3">
                      <p style="color: white; font-size:16px; margin:auto;">Teléfono</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">789451236</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top:20px">
                    <div className="col-md-3">
                      <p style="color: white; font-size:16px; margin:auto;">Pais</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">Perú</p>
                    </div>
                    <div className="col-md-3">
                      <p style="color: white; font-size:16px; margin:auto;">Ciudad</p>
                      <p style="color: white; font-size:16px; font-weight:bold; margin:auto;">Lima</p>
                    </div>
                  </div>
                  <div className="row">                   
                  </div>            
              </div>
            </div>
            <div className="col-md-3 col-right" style="max-width: 250px; margin-top:20px">
              <div className="row">
                <img src="./imagenes/imagen-perfil.png" alt="imagen de perfil" name="imagen-perfil" style="margin:10 auto;"/>
              </div>
              <div className="row" style="margin-top:20px">
                <button type="submit" className="btn btn-danger" style="border-radius:25px">
                  Cambiar/ subir imagen
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
