<script>
import Tarjetas from "@/components/Tarjetas.vue";

export default {
  components: {
    Tarjetas,
  },
  data() {
    return {
      servicios: [
        {
          image: "lavado",
          nombre: "Lavado",
          referencia: "",
        },
        {
          image: "secado",
          nombre: "Secado",
          referencia: "",
        },
        {
          image: "planchado",
          nombre: "Planchado",
          referencia: "",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <div class="contenedor text-center fuente-personalizada" style="color: black;">
      <h1>Servicios</h1>
      <Divider style="height: 2px; background-color: #39A573;" />
    </div>
    <Tarjetas :cards="cards" :programa="programa" :funcionamiento="funcionamiento" :servicios="servicios">
    </Tarjetas>

  </div>

</template>

<style scoped>
.fuente-personalizada {
  font-family: "Montserrat";
  font-weight: 700;
  color: black;
  align-content: center;
}

.contenedor {
  margin: 5rem;
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
  top: 22%;
  margin-left: 4.5%;
  color: white;
  /* Ajusta el color del texto del caption */
}

@media (max-width: 575.98px) {

  /* Aplicar estilos solo en pantallas con un ancho máximo de 768px (pantallas pequeñas) */
  .caption {
    top: 14%;
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