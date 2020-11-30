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










    <!------------------boton para guardar---------->

      <input type="submit" class="boton" value="Guardar" />

      
    </form>
 <!------------------Div del mensaje del crud---------->
    <div class="mensajes">{{ mensaje }}</div>
  </div>
</template>

<script>
/* metodo get para cargar los datos  y despues un metodo patch para actualizar el alquiler */
import axios from "axios";
export default {
  name: "ModificarAlquiler",
  data() {
    return {
      mensaje: "",
      Alquiler: {},
      id: this.$route.params.id,
    
    };
  },
  mounted() {
    this.cargarAlquiler();
  },
  methods: {
    cargarAlquiler: function() {
      axios
        .get("http://localhost:8080/api/alquiler/" + this.id)
        .then((response) => {
          console.log(response);
          this.Alquiler = response.data;


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
          "http://localhost:8080/api/alquiler/" + this.Alquiler.id,
          null,
          { params: this.Alquiler },
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
