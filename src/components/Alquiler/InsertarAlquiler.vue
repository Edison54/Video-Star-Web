<template>
  <div class="formulario">
    <div class="row nav">
      <!------------------Boton para volver---------->
      <div>
        <router-link class="boton" :to="{ name: 'Alquileres' }">
          Volver
        </router-link>
      </div>
    </div>
    <!------------------Se usa el metodo POST---------->
    <form method="POST" @submit.prevent @submit="insertarData()">
      <!------------------Varios labels para todos los datos que se quieran pedir ---------->
      <label for="id">id de alquiler: </label>
      <input type="text" id="id" name="id" required v-model="Alquiler.id" />

      <label for="plazo">Plazo: </label>
      <input
        type="text"
        id="plazo"
        name="plazo"
        required
        v-model="Alquiler.plazo"
      />

      <label for="montoTotal">Monto Total: </label>
      <input
        type="text"
        id="montoTotal"
        name="montoTotal"
        required
        v-model="Alquiler.montoTotal"
      />

      <label for="multa">multa: </label>
      <input
        type="text"
        id="multa"
        name="multa"
        required
        v-model="Alquiler.multa"
      />

      <label for="fecha">Fecha: </label>
      <input
        type="text"
        id="fecha"
        name="fecha"
        required
        v-model="Alquiler.fecha"
      />

      <label for="cedula">Cedula: </label>
      <input
        type="text"
        id="cedula"
        name="cedula"
        required
        v-model="Alquiler.cedula"
      />

      <h1>Detalles del alquiler</h1>

      <label for="id">id de detalle: </label>
      <input
        type="text"
        id="id"
        name="id"
        required
        v-model="detalleAlquiler.id"
      />
      <label for="idPeli">Id peli: </label>
      <input
        type="text"
        id="idPeli"
        name="idPeli"
        required
        v-model="detalleAlquiler.idPeli"
      />
      <label for="costoAlqui">Costo alquiler: </label>
      <input
        type="text"
        id="costoAlqui"
        name="costoAlqui"
        required
        v-model="detalleAlquiler.costoAlqui"
      />
      <label for="cantidad">cantidad: </label>
      <input
        type="text"
        id="cantidad"
        name="cantidad"
        required
        v-model="detalleAlquiler.cantidad"
      />
      <!------------------boton para guardar---------->
      <input type="submit" class="boton" value="Guardar" />
    </form>

    <!------------------Div del mensaje del crud---------->

    <div class="mensajes">{{ mensaje }}</div>
  </div>
</template>

<script>
/* doble post con axios para el alquiler y los detalles*/
import axios from "axios";
export default {
  name: "InsertarAlquiler",
  data() {
    return {
      mensaje: "",
      Alquiler: {
        id: 0,
        plazo: 0,
        montoTotal: 0,
        multa: 0,
        fecha: "",
        cedula: 0,
      },
      detalleAlquiler: {
        id: 0,
        idPeli: 0,
        CostoAlqui: 0,
        cantidad: 0,
      },
    };
  },

  methods: {
    insertarData() {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      axios
        .post(
          "http://localhost:8080/api/alquiler",
          null,
          { params: this.Alquiler },
          config
        )
        .then((response) => {
          if (response.status === 200) {
            this.mensaje = response.data;
            this.Alquiler = {
              id: 0,
              plazo: 0,
              montoTotal: 0,
              multa: 0,
              fecha: "",
              cedula: 0,
            };
          }
        });

      axios
        .post(
          "http://localhost:8080/api/detallealquiler",
          null,
          { params: this.detalleAlquiler },
          config
        )
        .then((response) => {
          if (response.status === 200) {
            this.mensaje = response.data;
            this.pelicula = {
              id: 0,
              idPeli: 0,
              CostoAlqui: 0,
              cantidad: 0,
            };
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/* Todos los estilos de nuestro componente*/
.formulario {
  width: 500px;
  margin: 0 auto;
  padding-top: 30px;
  color: #ffffff;

  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;

    select,
    input {
      -webkit-appearance: none;
      border: 1px solid black;
      margin: 20px 0;
      padding: 10px;
      border-radius: 0;
      width: 100%;
    }

    a,
    input[type="submit"] {
      width: 200px;
    }
  }
}
</style>
