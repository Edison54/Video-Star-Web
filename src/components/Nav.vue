<template  >
<!---Div donde exportamos la nav bar----->
<div class="NavBar">
  <vue-navigation-bar :options="navbarData" />
 


</div>


  
</template>




<script>
/*Export de la nav bar , ademas ahi se le hacen los botones con sus respectivas rutas */


import "vue-navigation-bar/dist/vue-navigation-bar.css";
export default {
  name: "Nav",

  data() {
    return {



      navbarData: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
          brandImagePath: "",
            brandImage: require("../assets/icono.jpg"),
        brandImageAltText: "vue-navigation-bar",
        collapseButtonStyle: "dark",
        
        ariaLabelMainNav: "Main Navigation",

        menuOptionsLeft: [
          {
            type: "link",
            text: "Inicio",
            path: "/",
   },
  
           {
            type: "link",
            text: "Peliculas",
            path: "/principal",
            subMenuOptions: [
               {
                type: "link",
                text: "Ver Peliculas",
                path: "/principal",
              },
              
             
            ],
          },
         
          {
            type: "link",
            text: "Alquileres",
            path: "/alquileres",
            subMenuOptions: [
               {
                type: "link",
                text: "Ver alquileres",
                path: "/alquileres",
              },
             
            ],
          },


 {
            type: "link",
            text: "Clientes",
            path: "/contact",
            subMenuOptions: [
              {
                type: "link",
                text: "Ver clientes",
                path: "/Clientes",
              },
              
            ],
          },



  
        ],

        menuOptionsRight: [
              {





              },
         
          {
            type: "button",
            text: "Login",
            path: "/PrincipalNav",
          },
        ],
      },
    };
  },
};





















</script>

<style lang="scss">
/*Todos los estilos de la navbar*/ 
.NavBar{
     background: #fcff30;
.vnb {



  .button-red {
    background: #ff3b30;

    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }
}
}
</style>
