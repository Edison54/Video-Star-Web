<template>
  <div class="container">
    <div class="row nav">
      <div>
        <!------------Boton para volver----------->
        <router-link class="boton" :to="{ name: 'Nav' }">
          Volver
        </router-link>
      </div>

      <div>
        <!------------Boton para ir al insertar----------->
        <router-link class="boton" :to="{ name: 'InsertarAlquiler' }"
          >Insertar Alquiler
        </router-link>
      </div>
    </div>

    <!------------div que crea la lista de los alquileres con su imagen ----------->
    <div class="listaalquileres row" v-if="alquiler.length">
      <div
        class="alquiler col-12 col-sm-6 col-md-4 col-xl-3"
        v-for="Alquiler in alquiler"
        :key="Alquiler.id"
      >
        <div class="content">
          <!------------imagen de los alquileres ----------->
          <img src="https://i.imgur.com/p7RPa5F.png" alt="" />

          <!------------div que muestra con todos los datos----------->
          <div class="info animation-center">
            <h6>Cedula cliente: {{ Alquiler.cedula }}</h6>
            <h6>Id del alquiler:{{ Alquiler.id }}</h6>
            <h6>Plazo {{ Alquiler.plazo }}</h6>

            <!------------Boton para ver detalles----------->
            <router-link
              class="boton"
              :to="{ name: 'DetallesAlquiler', params: { id: Alquiler.id } }"
            >
              Ver más detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>No existen alquileres para mostrar</h1>
    </div>
  </div>
</template>

<script>
/*----------Metodo get con axios para cargar los alquileres y los detalles---------*/

import axios from "axios";
export default {
  name: "Alquileres",
  data() {
    return {
      alquiler: [],

      id: 0,
    };
  },
  mounted() {
    this.cargaralquiler();
  },
  methods: {
    cargaralquiler: function() {
      axios.get("http://localhost:8080/api/alquiler").then((response) => {
        this.alquiler = response.data;
      });
    },
  },
  filters: {
    truncate: function(text, length) {
      if (text.length > length) {
        return text.substring(0, text.lastIndexOf(" ", length)) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Todos los estilos de nuestro componente*/
.nav {
  padding-top: 40px;
}
.listaalquileres {
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;

  .alquiler {
    .content {
      margin-bottom: 15px;
      margin-top: 15px;
      position: relative;

      img {
        height: auto;
        width: 100%;
      }

      h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 0;
      }

      &:hover {
        &::before {
          opacity: 1;
        }

        .info {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      &::before {
        background: rgba(#000000, 0.8);
        content: "";
        display: block;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        position: absolute;
        transition: 0.5s;
        width: 100%;
        z-index: 2;
      }

      .info {
        bottom: 10px;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 10px;
        height: calc(100% - 20px);
        position: absolute;
        text-align: left;
        width: calc(100% - 20px);
        font-size: 14px;
        opacity: 100;
        transform: translateY(30px);
        transition: 0.5s;
        z-index: 3;
        padding: 10px;

        .boton {
          position: absolute;
          bottom: 0;
          width: calc(100% - 20px);
          left: 0;
        }
      }

      .animation-center {
        &::before,
        &::after {
          box-sizing: inherit;
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          transform-origin: center;
          width: 100%;
        }

        &::before {
          border-bottom: 2px solid #ffffff;
          border-top: 2px solid #ffffff;
          transform: scale3d(0, 1, 1);
        }

        &::after {
          border-left: 2px solid #ffffff;
          border-right: 2px solid #ffffff;
          transform: scale3d(1, 0, 1);
        }

        &:hover::before,
        &:hover::after {
          transform: scale3d(1, 1, 1);
          transition: transform 0.5s;
        }
      }
    }
  }
}
</style>
