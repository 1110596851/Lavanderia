<template>

  <div class="fondo">
    <h3 class="fuente-personalizada caption">Planchado</h3>
  </div>

  <div class="contenedor-completo">
    <div class="row">
      <div class="col-12 col-md-5 p-0">
        <h1 class="fuente-personalizada text-wrap" style="color: black; width: 65%;">
          Expertos en el cuidado y limpieza de y tus prendas.
        </h1>
      </div>
      <div class="col-12 col-md-7 p-0">
        <p>
          Ofrecemos un <strong>servicio integral</strong> que incluye:
          <br>
          <br>
          <i class="pi pi-check-square" style="color: #39A573"></i> Planchado de todo tipo de prendas de vestir.
          <br>
          <br>
          <i class="pi pi-check-square" style="color: #39A573"></i> Doblado cuidadoso para que tu ropa esté lista para
          usar o guardar.
          <br>
          <br>
          <i class="pi pi-check-square" style="color: #39A573"></i> El precio del servicio depende de la cantidad total
          de las prendas.
          <br>
          <br>
          <i class="pi pi-check-square" style="color: #39A573"></i> Cada prenda tiene un costo de $8.000.
          <br>
        </p>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/Domicilios">
        <button class="button border-round p-2 border-0">AGENDAR DOMICILIO</button>
      </router-link>
    </div>
  </div>



</template>

<style scoped>
.fuente-personalizada {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.3rem;
  text-align: left;
  color: white;
}

.fondo {
  background-color: #0a324b;
  height: 150px;
}

p {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: justify;
  color: black;
}

.centrar-text {
  text-align: center;
  padding-left: 6rem;
  padding-right: 6rem;
}

.caption {
  position: absolute;
  top: 18%;
  margin-left: 6%;
  color: white;
  /* Ajusta el color del texto del caption */
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

  /* Aplicar estilos solo en pantallas con un ancho máximo de 768px (pantallas pequeñas) */
  .caption {
    top: 10%;
    margin-left: 6%;
  }

  .fuente-personalizada {
    font-size: 1rem;
  }

  p {
    font-size: 0.7rem;
  }
}
</style>