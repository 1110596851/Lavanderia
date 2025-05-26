<template>

  <!-- Lista de Servicios -->
  <div class="row">
    <div class="col-12 col-md p-2 text-center" v-for="servicios in servicios" :key="servicios.titulo">
      <Card class="p-0 tarjeta" style="align-items: center; justify-content: center" :values="servicios" :pt="{
        content: { class: 'p-0' },
        footer: { class: 'p-0' },
        title: { class: 'text-end' },
      }">


        <template #content>
          <div class="p-0">
            <img v-if="servicios.image" class="p-0 img-fluid aling-center" style="height: auto;"
              :src="require(`@/assets/img/${servicios.image}.png`)" alt="" />
          </div>
        </template>
        <template #footer>
          <p style="text-align: center">{{ servicios.referencia }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servicios: {},
  },
};
</script>

<style scoped>
.contenedor-tarjeta {
  padding: 5rem;
}

.fuente-personalizada {
  font-family: "Montserrat";
  font-weight: 700;
  color: black;
  align-content: center;
}

p {
  font-family: "Montserrat";
  font-weight: 400;
  text-align: justify;
  color: black;
}

.tarjeta {
  height: 100%;
  color: black;
}
</style>
