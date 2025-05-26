<!-- src/views/LoginView.vue -->
<template>
  <div class="contenedor fuente-personalizada">
    <div class="flex">
      <div class="flex-1">
        <form @submit.prevent="login">
          <div class="flex-1">
            <div class="field">
              <label class="block text-sm font-medium">Usuario</label>
              <input v-model="username"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                required />
            </div>
            <div class="field">
              <label class="block text-sm font-medium">Contraseña</label>
              <input type="password" v-model="password"
                class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                required />
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="button border-round p-2 border-0">Ingresar</button>
          </div>
        </form>
      </div>
    </div>


    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await axios.post('https://backlavanderia-production.up.railway.app/auth/login', {
      username: username.value,
      password: password.value,
    })
    const token = response.data.access_token
    localStorage.setItem('token', token)

    router.push('/ListaDomicilios')
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Error al iniciar sesión'
  }
}
</script>


<style scoped>
/* Agrega estilos según necesites */
.error {
  color: red;
}

.button {
  background: #8CD5F2;
  color: white;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-top: 3rem;
}
</style>
