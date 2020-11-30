<template>
  <div class="container">
    <div class="row nav">
      <!------------Boton para volver----------->
      <div>
        <router-link class="boton" :to="{ name: 'Nav' }">
          Volver
        </router-link>
      </div>
      <!------------Boton para ir al insertar----------->
      <div>
        <router-link class="boton" :to="{ name: 'InsertarClientes' }"
          >Insertar Cliente
        </router-link>
      </div>
    </div>
    <!------------div que crea la lista de los clientes con su imagen ----------->
    <div class="listacliente row" v-if="clientes.length">
      <div
        class="cliente col-12 col-sm-6 col-md-4 col-xl-3"
        v-for="Clientes in clientes"
        :key="Clientes.cedula"
      >
        <div class="content">
          <!------------imagen de los clientes ----------->
          <img src="https://i.imgur.com/Nzay9L4.png " alt="" />

          <!------------div que  muestra con todos los datos----------->
          <div class="info animation-center">
            <h1>{{ Clientes.nombre }}</h1>
            <h1>{{ Clientes.cedula }}</h1>

            <!------------Boton para ver detalles----------->
            <router-link
              class="boton"
              :to="{
                name: 'DetallesClientes',
                params: { cedula: Clientes.cedula },
              }"
            >
              Ver detalles clientes
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>No existen películas para mostrar</h1>
    </div>
  </div>
</template>

<script>
/*----------Metodo get con axios para cargar los clientes---------*/

import axios from "axios";
export default {
  name: "Clientes",
  data() {
    return {
      clientes: [],
    };
  },
  mounted() {
    this.cargarClientes();
  },
  methods: {
    cargarClientes: function() {
      axios.get("http://localhost:8080/api/clientes").then((response) => {
        this.clientes = response.data;
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
.listacliente {
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;

  .cliente {
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
