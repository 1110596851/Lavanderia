<template>
  <div class="contenedor text-center fuente-personalizada" style="color: black;">
    <h1>Gestión de domicilios</h1>
    <Divider style="height: 2px; background-color: #39A573;" />
  </div>
  <div class="contenedor my-0">
    <router-link class="nav-link" to="/MensajesView"><button type="submit"
        class="button border-round p-2 border-0">PQRSD</button></router-link>

  </div>
  <div class="contenedor p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-y-6">
    <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2">Nombre</th>
          <th class="px-4 py-2">Dirección</th>
          <th class="px-4 py-2">Teléfono</th>
          <th class="px-4 py-2">Fecha</th>
          <th class="px-4 py-2">Servicios</th>
          <th class="px-4 py-2">Estado</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr v-for="dom in domicilios" :key="dom.id">
          <td class="px-4 py-2">{{ dom.nombre }}</td>
          <td class="px-4 py-2">{{ dom.direccion }}</td>
          <td class="px-4 py-2">{{ dom.telefono }}</td>
          <td class="px-4 py-2">{{ new Date(dom.fecha).toLocaleDateString() }}</td>
          <td class="px-4 py-2">
            <ul>
              <li v-for="serv in dom.servicios" :key="serv.id">
                {{ serv.tipo }} - {{ serv.cantidad }} x ${{ serv.precio.toLocaleString() }}
              </li>
            </ul>
          </td>
          <td class="px-4 py-2">
            <select v-model="dom.estado" @change="actualizarEstado(dom)" class="border rounded px-2 py-1">
              <option value="en curso">En curso</option>
              <option value="finalizado">Finalizado</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'ListaDomicilios',
  data() {
    return {
      domicilios: [],
    };
  },
  async mounted() {
    await this.cargarDomicilios();
  },
  methods: {
    async cargarDomicilios() {
      try {
        const res = await axios.get('https://back-lavanderia.onrender.com/domicilios');
        this.domicilios = res.data;
      } catch (error) {
        console.error('Error cargando domicilios:', error);
        alert('Error al cargar la lista de domicilios.');
      }
    },
    async actualizarEstado(domicilio) {
      try {
        await axios.patch(`https://back-lavanderia.onrender.com${domicilio.id}`, {
          estado: domicilio.estado,
        });
        // Opcional: mensaje de éxito
        // alert('Estado actualizado');
      } catch (error) {
        console.error('Error actualizando estado:', error);
        alert('No se pudo actualizar el estado.');
      }
    }
  }
};
</script>
<style scoped>
.button {
  background: #39A573;
  color: white;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
</style>
