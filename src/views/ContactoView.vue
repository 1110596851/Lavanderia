<template>
  <div class="contenedor text-center fuente-personalizada" style="color: black;">
    <h1>Contáctenos</h1>
    <Divider style="height: 2px; background-color: #39A573;" />
    <h5>
      Déjanos tus datos, nos comunicaremos contigo lo más rápido posible.
    </h5>
  </div>
  <div class="contacto-container">
    <form @submit.prevent="enviarFormulario" class="formulario">
      <input v-model="nombre" type="text" placeholder="Nombre completo*" required />
      <input v-model="correo" type="email" placeholder="Correo electrónico*" required />
      <input v-model="telefono" type="text" placeholder="Teléfono*" required />
      <textarea v-model="mensaje" placeholder="Mensaje*" required></textarea>
      <button type="submit" style="background-color: #39A573;">Enviar</button>
      <p v-if="enviado" class="mensaje-exito">Mensaje enviado con éxito</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const nombre = ref('')
const correo = ref('')
const telefono = ref('')
const mensaje = ref('')
const enviado = ref(false)

const enviarFormulario = async () => {
  try {
    await axios.post('http://localhost:3000/contacto', {
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value,
      mensaje: mensaje.value,
    })
    enviado.value = true

    // Limpiar formulario
    nombre.value = ''
    correo.value = ''
    telefono.value = ''
    mensaje.value = ''
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un problema al enviar el mensaje')
  }
}
</script>

<style scoped>
.contacto-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #00b050;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mensaje-exito {
  color: green;
  margin-top: 10px;
}
</style>
