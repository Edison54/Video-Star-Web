<template>
  <div class="container-fluid">
    <div class="row">
      <div class="hero"></div>
    </div>
    <div class="row">
      <div class="container">
        <!------------Boton para volver----------->
        <div class="row nav">
          <router-link class="boton" :to="{ name: 'Alquileres' }">
            Volver
          </router-link>
          <!------------Boton para ir al modificar----------->
          <router-link
            class="boton"
            :to="{ name: 'ModificarAlquiler', params: { id: Alquiler.id } }"
          >
            Modificar alquiler
          </router-link>

          <router-link
            class="boton"
            :to="{
              name: 'ModificarDetalleAlquiler',
              params: { id: detalleAlquiler.id },
            }"
          >
            Modificar detalles del alquiler
          </router-link>

          <div class="row detalles justify-content-center align-items-center">
            <div class="col-12 col-md-5">
              <!------------imagen de los alquileres ----------->
              <img
                src="https://i.imgur.com/p7RPa5F.png"
                width="100"
                height="40"
                alt=""
              />
            </div>

            <!------------div que  muestra con todos los datos----------->
            <div class="col-12 col-md-6 offset-md-1">
              <h3>Alquiler con la id:{{ Alquiler.id }}</h3>

              <h3>Plazo:</h3>
              <span>{{ Alquiler.plazo }}</span>
              <h4>Monto total:</h4>
              <span>{{ Alquiler.montoTotal }}</span>
              <h4>Multa:</h4>
              <p>{{ Alquiler.multa }}</p>
              <h4>Fecha peli alquilada:</h4>
              <span>{{ Alquiler.fecha }}</span>

              <h4>Cedula cliente:</h4>
              <span>{{ Alquiler.cedula }}</span>

              <h1>Detalles de alquiler</h1>

              <h4>id detalle alquiler:</h4>
              <span>{{ detalleAlquiler.id }}</span>
              <h4>id de pelicula</h4>
              <p>{{ detalleAlquiler.idPeli }}</p>
              <h4>Costo del alquiler:</h4>
              <span>{{ detalleAlquiler.costoAlqui }}</span>
              <h4>Cantidad disponible:</h4>
              <span>{{ detalleAlquiler.cantidad }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*----------Metodo get con axios para cargar los los alquileres y los detalles---------*/
import axios from "axios";
export default {
  name: "DetallesAlquiler",
  data() {
    return {
      Alquiler: {},
      id: this.$route.params.id,

      detalleAlquiler: {},
    };
  },
  mounted() {
    this.cargarAlquiler();
    this.cargardetalles();
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
    cargardetalles: function() {
      axios
        .get("http://localhost:8080/api/detallealquiler/" + this.id)
        .then((response) => {
          console.log(response);
          this.detalleAlquiler = response.data;
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
