<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <Carousel class="" :value="products" :showNavigators="false" :numVisible="1" :numScroll="3"
          :responsiveOptions="responsiveOptions" :showIndicators="false" circular :autoplayInterval="5000">
          <template #item="slotProps">
            <div>
              <img v-if="slotProps.data.image" :src="require(`@/assets/img/${slotProps.data.image}.png`)" alt=""
                class="w-100" />
              <h1 class="text-wrap caption" style="width: 50%;">{{ slotProps.data.text2 }}</h1>
              <p class="text-wrap captiontext" style="width: 35%;">{{ slotProps.data.text1 }}</p>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          text2: "Creemos que el cuidado de tu ropa debe ser tan confiable como sencillo",
          text1:
            "Desde nuestros inicios, nos hemos dedicado a ofrecer un servicio de lavandería a domicilio de alta calidad,pensado para personas y familias que valoran su tiempo y quieren lo mejor para sus prendas",
          image: "inicio",
        },
        {
          text2: "En Lavandería Olimpia cuidamos cada detalle como si fuera nuestra propia ropa",
          text1:
            "Con años de experiencia en el sector, combinamos tecnología, productos de limpieza profesionales y un trato humano para garantizar resultados impecables. Ya sea que necesites lavar tu ropa del día a día, prendas delicadas o textiles de gran volumen. ",
          image: "inicioDos",
        },

      ],

      responsiveOptions: [
        {
          breakpoint: "1199px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "991px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>
<style scoped>
.caption h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
}

.caption {
  position: absolute;
  top: 30%;
  margin-left: 6%;
  color: white;
  /* Ajusta el color del texto del caption */
}

.captiontext {
  position: absolute;
  top: 60%;
  margin-left: 6%;
  color: white;
  /* Ajusta el color del texto del caption */
}

@media (max-width: 578.98px) {

  /* Aplicar estilos solo en pantallas con un ancho máximo de 768px (pantallas pequeñas) */
  .caption h1 {
    font-size: 0.5rem;
  }

  p {
    font-size: 0.3rem;
  }

}

@media (max-width: 991.98px) {

  /* Aplicar estilos solo en pantallas con un ancho máximo de 768px (pantallas pequeñas) */
  .caption {
    font-size: 1rem;
    top: 25%;
    margin-left: 7%;
  }

  .captiontext {
    font-size: 1rem;
    top: 50%;
    margin-left: 7%;
  }

  .fuente-personalizada {
    font-size: 1.5rem;
  }
}
</style>
