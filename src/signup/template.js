var yo = require('yo-yo')
var landing = require('../landing')

var signupForm = yo`<div class="col s12 m7 ">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form action="" class="signup-form">
                    <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesion con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i> Iniciar sesion</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electronico"/>
                      <input type="text" name="name" placeholder="Nombre Completo"/>
                      <input type="text" name="username" placeholder="Nombre de Usuario"/>
                      <input type="password" name="password" placeholder="Contraseña"/>
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  Tienes una Cuenta?
                  <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>`

module.exports = landing(signupForm)
