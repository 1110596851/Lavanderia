<template>
  <div class="contenedor text-center fuente-personalizada" style="color: black;">
    <h1>Servicio de Lavandería a Domicilio</h1>
    <Divider style="height: 2px; background-color: #39A573;" />
    <h5>
      ¿Cansado de lavar, doblar y planchar ropa? ¡Nosotros lo hacemos por ti! Nuestro servicio de lavandería a domicilio
      está diseñado para ahorrarte tiempo, esfuerzo y preocupaciones.
    </h5>
    <div class="">
      <router-link to="/AgendarDomicilio">
        <button class="button border-round p-2 border-0">AGENDAR DOMICILIO</button>
      </router-link>
    </div>

  </div>


</template>

<style scoped>
.fuente-personalizada {
  size: 40px;
}


.button {
  background: #39A573;
  color: white;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-top: 3rem;
}

@media (max-width: 575.98px) {
  .contenedor {
    height: 20rem;
    width: 15rem;
  }

  .container {
    margin-top: 6rem;
    padding: 2rem;
    margin-left: -2rem;
  }

  .fuente-personalizada {
    font-size: 1rem;
  }

  .button {
    height: 28px;
    width: 100px;
    font-size: 0.5rem;
  }
}

/* @media (max-width: 991.98px) {
  .container {
    margin-top: 5rem; /*distancia desde el borde del rectangulo azul al letrero de historia */
/* posicion imagen y texto*/
/* margin-left: -1rem; posicion izquierda texto
  } */
/* .fuente-personalizada {
    font-size: 1.5rem;
  }
  .carrusel {
    margin-left: 5rem;
    margin-right: -5.5rem;
    margin-top: -3.5rem;
  }
  .carrusel2 {
    margin-left: 1rem;
    margin-right: 3.3rem;
    padding: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
  .button {
    height: 38px;
    width: 150px;
    font-size: 0.7rem;
  }
} */
</style>
