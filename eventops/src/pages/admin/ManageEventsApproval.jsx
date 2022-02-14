import '../_Tiket.scss';
const ManageEventsApproval = () => {
  return (
    <div className="container" id="contenedor-principal">
        <main className="eventops">

            <div className="container">
                <div className="titulo">
                    Hello, <span>Administrador</span>
                </div>

                <div  id="contenedor-detalles">                      
                        <div className="categorias">
                            <div className="row" id="primero">
                                <div id="pendientes">
                                    <h4>Eventos Pendientes</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div id="rechazados">
                                    <h4>Eventos Rechazados</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div id="activos">
                                    <h4>Eventos Activos</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div id="pasados">
                                    <h4>Eventos Pasados</h4>
                                </div>
                            </div>
                            <div className="row" id="ultimo">
                                <div id="usuarios">
                                    <h4>Lista de Usuarios</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div id="detalles">
                            <div id="contenedor-imagen">
                                <img id="imagen-portada" src="imagenes/concert.jpg" alt=""/>
                            </div>
                            
                            <div className="" id="datos-concierto">
                                <div className="" id="nombre-concierto">
                                    <h2>CONCIERTO DE ACDC</h2>
                                </div>
                                <div id="datos-evento">
                                    <div id="icono">
                                        <img src="imagenes/calendario.jpg" alt=""/>
                                    </div>
                                    <div id="fecha">
                                        <h2>Lunes 20 dic - 5:00 pm</h2>
                                    </div>
                                </div>
                                <div id="botones">
                                    <div id="precio">
                                        <h3>S/. 37.00 </h3>
                                    </div>
                                    <div id="btn-aceptar" >
                                        <button className="btn btn-danger">
                                            Aceptar
                                        </button>
                                    </div>
                                    <div id="btn-denegar">
                                        <button className="btn btn-danger">
                                            Denegar
                                        </button>
                                    </div>
                                    <div id="btn-Detalles" >
                                        <button className="btn btn-danger"> 
                                            Detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    
                </div>
                <div id="table">
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Concierto de ACDC</th>
                            <td>15/12/2021</td>
                            <td>Lima</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                              </svg>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                              </svg>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Concierto Coldplay</th>
                            <td>17/12/2021</td>
                            <td>Cusco</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                              </svg>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                              </svg></td>
                          </tr>
                          <tr>
                            <th scope="row">Concierto Aerosmith</th>
                            <td>19/12/2021</td>
                            <td>Arequipa</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                              </svg>
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                              </svg></td>
                          </tr>
                        </tbody>
                      </table>
                </div>  
            </div>

                       
        </main>
    </div>
  );
};

export default ManageEventsApproval;
