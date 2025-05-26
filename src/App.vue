<script>
import BarraNavegacion from "./components/BarraNavegacion.vue";
import PiePagina from "./components/PiePagina.vue";

export default {
  name: "App",
  components: {
    BarraNavegacion,
    PiePagina,
  },
  data() {
    return {
      totalItems: 0, // <-- contador global
    };
  },
  methods: {
    actualizarCarrito(nuevoTotal) {
      this.totalItems = nuevoTotal;
    },
  },
};
</script>

<template>
  <BarraNavegacion :total-items="totalItems" />
  
  <!-- Escucha el evento de hijos que emiten 'update-carrito' -->
  <router-view @update-carrito="actualizarCarrito" />

  <PiePagina />
</template>



