<template>
  <div class="formulario">
    <div class="row nav">
      <!------------------Boton para volver---------->
      <div>
        <router-link class="boton" :to="{ name: 'Clientes' }">
          Volver
        </router-link>
      </div>
    </div>
    <!------------------Se usa el metodo POST---------->
    <form method="POST" @submit.prevent @submit="insertarData()">
      <!------------------Varios labels para todos los datos que se quieran pedir ---------->
      <label for="cedula">cedula: </label>
      <input
        type="text"
        id="cedula"
        name="cedula"
        required
        v-model="Clientes.cedula"
      />

      <label for="nombre">Nombre: </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        required
        v-model="Clientes.nombre"
      />

      <label for="apellido">Apellido: </label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        required
        v-model="Clientes.apellido"
      />

      <label for="direccion">Direccion: </label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        required
        v-model="Clientes.direccion"
      />

      <label for="telefono">Telefono: </label>
      <input
        type="text"
        id="telefono"
        name="telefono"
        required
        v-model="Clientes.telefono"
      />

      <label for="correo">Correo: </label>
      <input
        type="text"
        id="correo"
        name="correo"
        required
        v-model="Clientes.correo"
      />
      <!------------------boton para guardar---------->
      <input type="submit" class="boton" value="Guardar" />
    </form>
    <!------------------Div del mensaje del crud---------->
    <div class="mensajes">{{ mensaje }}</div>
  </div>
</template>

<script>
/*  post con axios para el cliente*/
import axios from "axios";
export default {
  name: "InsertarClientes",
  data() {
    return {
      mensaje: "",
      Clientes: {
        cedula: 0,
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: 0,
        correo: "",
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
          "http://localhost:8080/api/clientes",
          null,
          { params: this.Clientes },
          config
        )
        .then((response) => {
          if (response.status === 200) {
            this.mensaje = response.data;
            this.Clientes = {
              cedula: 0,
              nombre: "",
              apellido: "",
              direccion: "",
              telefono: 0,
              correo: "",
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
