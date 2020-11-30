<template>
  <div class="formulario">
    <div class="row nav">
      <!------------------Boton para volver---------->
      <div>
        <router-link class="boton" :to="{ name: 'DetallesAlquiler' }">
          Volver
        </router-link>
      </div>
    </div>
    <!------------------Se usa el metodo POST---------->
    <form method="POST" @submit.prevent @submit="modificarData()">
      <!------------------Varios labels para todos los datos que se quieran modificar ---------->
      <h1>Detalles del alquiler</h1>

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
/* metodo get para cargar los datos  y despues un metodo patch para actualizar el detalle */
import axios from "axios";
export default {
  name: "ModificarAlquiler",
  data() {
    return {
      mensaje: "",
      detalleAlquiler: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.cargardetalles();
  },
  methods: {
    cargardetalles: function() {
      axios
        .get("http://localhost:8080/api/detallealquiler/" + this.id)
        .then((response) => {
          this.detalleAlquiler = response.data;
        });
    },

    modificarData() {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      axios
        .patch(
          "http://localhost:8080/api/detallealquiler/" +
            this.detalleAlquiler.id,
          null,
          { params: this.detalleAlquiler },
          config
        )
        .then((response) => {
          if (response.status === 200) {
            this.mensaje = response.data;
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
