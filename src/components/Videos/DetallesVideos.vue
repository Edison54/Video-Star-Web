<template>
  <div class="container-fluid">
    <div class="row">
      <div class="hero"></div>
    </div>
    <div class="row">
      <div class="container">
        <!------------Boton para volver----------->
        <div class="row nav">
          <router-link class="boton" :to="{ name: 'Principal' }">
            Volver
          </router-link>
          <!------------Boton para ir al modificar----------->
          <router-link
            class="boton"
            :to="{ name: 'ModificarVideos', params: { id: Videos.id } }"
          >
            Modificar
          </router-link>

          <!------------Boton para eliminar----------->
          <button class="boton" @click="eliminarPelicula">Eliminar</button>
        </div>
        <div class="row detalles justify-content-center align-items-center">
          <div class="col-12 col-md-5">
            <!------------imagen de los videos ----------->
            <img :src="Videos.imagenHD" alt="" />
          </div>
          <!------------div que  muestra con todos los datos----------->
          <div class="col-12 col-md-6 offset-md-1">
            <div class="col-12 col-md-6 offset-md-1">
              <h1>{{ Videos.tituloPeli }}</h1>
          <h3>id de la peli:</h3>
               <span>{{ Videos.id }}</span>
           

              <h3>Año de Lanzamiento:</h3>

              <span>{{ Videos.anio }}</span>
              <h3>Género</h3>

              <span>{{ Videos.genero }}</span>

              <h3>Sinopsis</h3>
              <p>{{ Videos.descripcion }}</p>

              <h3>Nacionalidad de la pelicula:</h3>
              <span>{{ Videos.nacionalidad }}</span>

              <h3>Cantidad disponible:</h3>
              <span>{{ Videos.cantidad }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*----------Metodo get y delete  con axios para cargar los videos---------*/
import axios from "axios";
export default {
  name: "DetallesVideos",
  data() {
    return {
      Videos: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.cargarPelicula();
  },
  methods: {
    cargarPelicula: function() {
      axios
        .get("http://localhost:8080/api/videos/" + this.id)
        .then((response) => {
          console.log(response);
          this.Videos = response.data;
        });
    },

    eliminarPelicula: function() {
      axios
        .delete("http://localhost:8080/api/videos/" + this.id)
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/Principal");
          }
        });
    },
  },
};
</script>

<style lang="scss">
/* Todos los estilos de nuestro componente*/
.hero {
  background-color: black;
  background-image: url("https://i.imgur.com/p6XxL7K.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 100%;
}

.detalles {
  color: #ffffff;
  padding: 20px 0 60px;

  img {
    height: auto;
    width: 100%;
  }

  h1 {
    margin-top: 20px;
  }

  h3 {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  span,
  p {
    font-size: 20px;
  }

  @media all and (min-width: 768px) and (max-width: 991px) {
    h1 {
      font-size: 26px;
    }

    h3 {
      font-size: 20px;
    }

    span,
    p {
      font-size: 16px;
    }
  }
}
</style>
