<script>
import Servicios from "@/components/Servicios.vue";
import Domicilios from "@/components/Domicilios.vue";
import Carrusel from "@/components/Carrusel.vue";
import ContactoView from './ContactoView.vue';


export default {
  name: "Inicio",
  components: {
    Servicios,
    Carrusel,
    Domicilios,
    ContactoView
  },
};
</script>
<template>
  <Carrusel></Carrusel>
  <Servicios></Servicios>
  <Domicilios></Domicilios>
  <ContactoView />

</template>
