<template>
  <footer class="footer contenedor-completo">
    <div class="">
      <img src="../assets/img/logoBlanco.png" class="mb-5" />
      <div class="row">
        <div class="col-12 col-md-4 p-0">
          <br />
          <p>
            <img class="me-3" src="../assets/img/telefono.png" width="26" height="26" />
            +57 311 5755620
          </p>
          <p>
            <img class="me-3" src="../assets/img/mensaje.png" width="26" height="20" />
            Lavanderiaoli@outlook.com
          </p>
          <p>
            <img class="me-3" src="../assets/img/ubicacion.png" width="20" height="25" />
            Calle 142 B # 128 B - 35
          </p>
        </div>
        <div class="col-12 col-md-4 p-0">
          <div class="footer-column align-items-center">
            <h5>MAPA DEL SITIO</h5>
            <hr class="footer-separator" />
            <ul>
              <li>
                <router-link to="/Lavado">Lavado</router-link>
              </li>
              <li>
                <router-link to="/Secado">Secado</router-link>
              </li>
              <li>
                <router-link to="/Planchado">Planchado</router-link>
              </li>
              <li>
                <router-link to="/ContactoView">Contáctenos</router-link>
              </li>
              <li>
                <router-link to="/AgendarDomicilio">Domicilios</router-link>
              </li>
              <li>
                <router-link to="/ListaDomicilios">Compras</router-link>
              </li>
              <li>
                <router-link to="/Login">Gestión de domicilios</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 p-0">
          <div class="footer-column align-items-rigth">
            <h5>SÍGUENOS EN REDES</h5>
            <hr class="footer-separator" />
            <img src="../assets/img/Redes.png" style="color: #ffffff;" width="40" height="37.86" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import "../assets/main.scss";

p {
  color: #f1f1f1eb;
}

.footer {
  background-color: #0D5D86;
  height: 550px;
}

.footer-column h5 {
  display: flex;
  color: #fff8f8;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.footer-column ul {
  font-family: "Montserrat", sans-serif;
  /* Cambia la fuente para los párrafos <p> */
  font-weight: Light;
}

.footer-column ul li {
  margin: 2px;
  color: #fff8f8;
  font-family: "Montserrat", sans-serif;
  /* Cambia la fuente para los párrafos <p> */
  font-weight: Light;
}

.footer-column ul li a {
  text-decoration: none;
  color: #fff8f8;
  font-family: "Montserrat", sans-serif;
  font-weight: Light;
}

.footer-separator {
  border: 2px solid #ffffff;
  width: 70%;
}

.rectangulo p {
  height: 45px;
  background-color: #02273e;
  text-align: center;
  padding-top: 0.7rem;
  margin-bottom: -1rem;
}

@media (max-width: 575.98px) {
  h5 {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }

  .footer-column ul li {
    font-size: 12px;
  }

  .footer {
    height: 710px;
  }
}

@media (max-width: 767.98px) {
  /* Aplicar estilos solo en pantallas con un ancho máximo de 768px (pantallas pequeñas) */

  .rectangulo {
    height: 60px;
  }
}
</style>
<script></script>
