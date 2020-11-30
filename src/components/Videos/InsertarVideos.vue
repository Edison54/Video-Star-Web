<template>
  <div class="formulario">
    <div class="row nav">
      <!------------------Boton para volver---------->
      <div>
        <router-link class="boton" :to="{ name: 'Principal' }">
          Volver
        </router-link>
      </div>
    </div>
    <!------------------Se usa el metodo POST---------->
    <form method="POST" @submit.prevent @submit="insertarData()">
      <!------------------Varios labels para todos los datos que se quieran pedir ---------->
      <label for="id">id: </label>
      <input type="text" id="id" name="id" required v-model="Videos.id" />

      <label for="tituloPeli">Nombre: </label>
      <input
        type="text"
        id="tituloPeli"
        name="tituloPeli"
        required
        v-model="Videos.tituloPeli"
      />

      <label for="anio">Año de Lanzamiento: </label>
      <input type="text" id="anio" name="anio" required v-model="Videos.anio" />

      <label for="nacionalidad">Pais: </label>
      <input
        type="text"
        id="nacionalidad"
        name="nacionalidad"
        required
        v-model="Videos.nacionalidad"
      />

      <label for="cantidad">Cantidad disponibles: </label>
      <input
        type="text"
        id="cantidad"
        name="cantidad"
        required
        v-model="Videos.cantidad"
      />

      <label for="genero">Genero: </label>
      <input
        type="text"
        id="genero"
        name="genero"
        required
        v-model="Videos.genero"
      />
      <label for="imagenHD"> Link de imagen</label>
      <input
        type="text"
        id="imagenHD"
        name="imagenHD"
        required
        v-model="Videos.imagenHD"
      />
      <label for="descripcion">Descripcion de la pelicula</label>
      <input
        type="text"
        id="descripcion"
        name="descripcion"
        required
        v-model="Videos.descripcion"
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
  name: "InsertarVideos",
  data() {
    return {
      mensaje: "",
      Videos: {
        id: 0,
        tituloPeli: "",
        anio: 0,
        genero: "",
        nacionalidad: "",
        cantidad: 0,
        imagenHD: "",
        descripcion: "",
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
          "http://localhost:8080/api/videos",
          null,
          { params: this.Videos },
          config
        )
        .then((response) => {
          if (response.status === 200) {
            this.mensaje = response.data;
            this.Videos = {
              id: 0,
              tituloPeli: "",
              anio: 0,
              genero: "",
              nacionalidad: "",
              cantidad: 0,
              imagenHD: "",
              descripcion: "",
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
