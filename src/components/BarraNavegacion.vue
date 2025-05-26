<template>
  <!-- Navbar -->
  <div style="background: #F3F3F3">
    <div class="contenedor-lateral">
      <nav class="navbar fuente-personalizada navbar-expand-lg">
        <div class="container-fluid p-0">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/img/Logo_sinFondo.png" height="50" />
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav align-items-center mb-lg-0">
              <li class="nav-item nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" to="/Inicio" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">Servicios</router-link>
              <li class="nav-item dropdown ">
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="dropdown-item fuente-personalizada"><router-link class="nav-link"
                      to="/Lavado">Lavado</router-link> </li>
                  <li class="dropdown-item fuente-personalizada"><router-link class="nav-link"
                      to="/Secado">Secado</router-link> </li>
                  <li class="dropdown-item fuente-personalizada"><router-link class="nav-link"
                      to="/Planchado">Planchado</router-link> </li>
                </ul>
              </li>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/ContactoView">Contáctenos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="AgendarDomicilio">Domicilios</router-link>
              </li>
              <li class="nav-item">
                <a href="">
                  <router-link class="nav-link" to="Login"><img class="nav-link p-0 margen_icono"
                      src="../assets/img/person.png" height="30" /></router-link>
                </a>
              </li>
              <nav class="flex items-center space-x-2">
                <i class="pi pi-cart-plus" style="font-size: 1.5rem"></i>
                <span> {{ totalItems }}</span>
              </nav>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0
    }
  }
}
</script>


<style scoped>
@import "../assets/main.scss";

.fuente-personalizada {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.position-relative {
  position: relative;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 50%;
}

p {
  color: #f1f1f1eb;
}

.navbar-nav .nav-link {
  color: #000000;
  font-size: 0.85rem;
}

.margen_icono {
  margin: 0.5rem;
}
</style>