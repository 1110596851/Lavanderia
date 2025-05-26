<!-- src/views/MensajesView.vue -->
<template>
    <div class="contenedor text-center fuente-personalizada" style="color: black;">
        <h1>PQRSD</h1>
        <Divider style="height: 2px; background-color: #39A573;" />
    </div>
    <div class="contenedor">

        <table v-if="mensajes.length" class="mensaje-tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                    <th>Mensaje</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mensaje in mensajes" :key="mensaje.id">
                    <td>{{ mensaje.nombre }}</td>
                    <td>{{ mensaje.correo }}</td>
                    <td>{{ mensaje.telefono }}</td>
                    <td>{{ mensaje.mensaje }}</td>
                    <td>{{ formatFecha(mensaje.fecha) }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else>No hay mensajes enviados.</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'



const mensajes = ref([])

onMounted(async () => {
    try {
        const res = await axios.get(`https://backlavanderia-production.up.railway.app/contacto`)
        mensajes.value = res.data
    } catch (err) {
        console.error('Error al cargar los mensajes', err)
    }
})

function formatFecha(fecha) {
    return new Date(fecha).toLocaleString()
}
</script>

<style scoped>
.container {
    padding: 20px;
}

.mensaje-tabla {
    width: 100%;
    border-collapse: collapse;
}

.mensaje-tabla th,
.mensaje-tabla td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}
</style>
