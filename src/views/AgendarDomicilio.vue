<template>
    <div class="contenedor">
        <div class=" text-center fuente-personalizada" style="color: black;">
            <h1 class="font-bold">Agendar domicilio</h1>
            <Divider style="height: 2px; background-color: #39A573;" />
        </div>
        <h5 class="">Por favor complete el siguiente formulario:</h5>

        <form @submit.prevent="submitForm" class="space-y-4">
            <div class="formgrid grid mt-5">
                <div class="field col">
                    <label class="block text-sm font-medium">Nombre</label>
                    <input v-model="form.nombre" type="text"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        required />
                </div>
                <div class="field col">
                    <label class="block text-sm font-medium">Dirección</label>
                    <input v-model="form.direccion" type="text"
                        class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        required />
                </div>
            </div>
            <div class="formgrid grid">
                <div class="field col">
                    <label class=" block text-sm font-medium">Teléfono</label>
                    <input v-model="form.telefono" type="text" class="input" required />
                </div>
                <div class="field col">
                    <label class="block text-sm font-medium">Fecha</label>
                    <input v-model="form.fecha" type="date" class="input" required />
                </div>
            </div>

            <!-- ---Servicios--- -->

            <div>
                <h5 class="my-5">Agregue los servicios que desea</h5>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="(servicio, index) in serviciosDisponibles" :key="servicio.tipo"
                        class=" p-4 rounded shadow text-center" style="background-color: #8CD5F2; width: 200px;">
                        <div class="font-bold">{{ servicio.tipo }}</div>

                        <div class="font-bold">{{ servicio.nombre }}</div>
                        <div class="text-lg">${{ servicio.precio.toLocaleString() }}</div>
                        <div class="text-center">
                            <button type="button" @click="cambiarCantidad(index, -1)"
                                class="px-2 font-bold border-0 mr-3" style="background-color: #8CD5F2;"> − </button>
                            <span>{{ servicio.cantidad }}</span>
                            <button type="button" @click="cambiarCantidad(index, 1)"
                                class="px-2 font-bold border-0 ml-3 mt-2" style="background-color: #8CD5F2;"> +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 text-right font-bold text-lg">
                Total: ${{ total.toLocaleString() }}
            </div>
            <div class="text-center">
                <button type="submit" class="button border-round p-2 border-0">Agendar</button>
            </div>
        </form>

    </div>
</template>



<script>
import axios from 'axios';


export default {
    data() {
        return {
            form: {
                nombre: '',
                direccion: '',
                telefono: '',
                fecha: '',
                servicios: [],
            },
            serviciosDisponibles: [
                { tipo: 'lavado', nombre: '', precio: 35000, cantidad: 0 },
                { tipo: 'secado', nombre: '', precio: 30000, cantidad: 0 },
                { tipo: 'planchado', nombre: '', precio: 8000, cantidad: 0 },
                { tipo: 'detergente_liquido', nombre: '', precio: 5000, cantidad: 0 },
                { tipo: 'detergente_polvo', nombre: '', precio: 5000, cantidad: 0 },
                { tipo: 'suavizante', nombre: '', precio: 3000, cantidad: 0 },
                { tipo: 'Promoción Plata', nombre: 'Lavado + Secado + detergente liquido+suavitel', precio: 65500, cantidad: 0 },
                { tipo: 'Promoción Diamante', nombre: 'Lavado + Secado + Planchado+ detergente liquido+suavitel', precio: 70000, cantidad: 0 },
                { tipo: 'Promoción Cobre', nombre: 'Lavado + detergente liquido+suavitel', precio: 36500, cantidad: 0 },

            ]
        };
    },
    computed: {
        total() {
            return this.serviciosDisponibles.reduce((acc, s) => acc + (s.precio * s.cantidad), 0);
        },
        totalItems() {
            return this.serviciosDisponibles.reduce((sum, s) => sum + s.cantidad, 0);
        }
    },
    methods: {
        cambiarCantidad(index, delta) {
            const servicio = this.serviciosDisponibles[index];
            servicio.cantidad = Math.max(0, servicio.cantidad + delta);
            this.$emit('update-carrito', this.totalItems);
        },
        async submitForm() {
            const serviciosSeleccionados = this.serviciosDisponibles
                .filter(s => s.cantidad > 0)
                .map(s => ({ tipo: s.tipo, precio: s.precio, cantidad: s.cantidad }));

            try {
                await axios.post(`https://backlavanderia-production.up.railway.app/domicilios`, {
                    ...this.form,
                    servicios: serviciosSeleccionados
                });
                alert('Domicilio agendado correctamente');
                this.resetForm();
                this.$emit('update-carrito', 0);
            } catch (error) {
                console.error(error);
                if (error.response && error.response.data?.message) {
                    alert(`Error: ${error.response.data.message}`);
                } else {
                    alert('Error al agendar domicilio');
                }
            }
        },

        resetForm() {
            this.form = {
                nombre: '',
                direccion: '',
                telefono: '',
                fecha: '',
                servicios: [],
            };
            this.serviciosDisponibles.forEach(s => s.cantidad = 0);
        }
    }
};
</script>





<style scoped>
.input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    margin-top: 0.25rem;
}

.button {
    background: #39A573;
    color: white;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin-top: 3rem;
}
</style>
