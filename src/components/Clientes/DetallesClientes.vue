<template>
  <div class="container-fluid">
    <div class="row">
      <div class="hero"></div>
    </div>
    <div class="row">
      <div class="container">
        <div class="row nav">
          <!------------Boton para volver----------->
          <router-link class="boton" :to="{ name: 'Clientes' }">
            Volver
          </router-link>

          <!------------Boton para ir al modificar----------->
          <router-link
            class="boton"
            :to="{
              name: 'ModificarClientes',
              params: { cedula: Clientes.cedula },
            }"
          >
            Modificar
          </router-link>

          <!------------Boton para eliminar----------->

          <button class="boton" @click="eliminarCliente">Eliminar</button>
        </div>
        <div class="row detalles justify-content-center align-items-center">
          <div class="col-12 col-md-5">
            <!------------imagen de los clientes ----------->
            <img src="https://i.imgur.com/VPW0VJr.png" alt="" />
          </div>
          <!------------div que  muestra con todos los datos----------->
          <div class="col-12 col-md-6 offset-md-1">
            <div class="col-12 col-md-6 offset-md-1">
              <h1>{{ Clientes.nombre }}</h1>
              <span>{{ Clientes.apellido }}</span>
              <h3>Direccion</h3>

              <span>{{ Clientes.direccion }}</span>

              <h3>Celular</h3>
              <p>{{ Clientes.telefono }}</p>

              <h3>Correo:</h3>
              <span>{{ Clientes.correo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*----------Metodo get y delete  con axios para cargar los clientes---------*/
import axios from "axios";
export default {
  name: "DetallesClientes",
  data() {
    return {
      Clientes: {},
      cedula: this.$route.params.cedula,
    };
  },
  mounted() {
    this.cargarCliente();
  },
  methods: {
    cargarCliente: function() {
      axios
        .get("http://localhost:8080/api/clientes/" + this.cedula)
        .then((response) => {
          console.log(response);
          this.Clientes = response.data;
        });
    },

    eliminarCliente: function() {
      axios
        .delete("http://localhost:8080/api/clientes/" + this.cedula)
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/Clientes");
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
