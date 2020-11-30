import Vue from "vue";
import Router from "vue-router";

import Nav from "./components/Nav";

import Principal from "./components/Videos/Principal";
import InsertarVideos from "./components/Videos/InsertarVideos";
import ModificarVideos from "./components/Videos/ModificarVideos";
import DetallesVideos from "./components/Videos/DetallesVideos";

import Alquileres from "./components/Alquiler/Alquileres";

import DetallesAlquiler from "./components/Alquiler/DetallesAlquiler";
import InsertarAlquiler from "./components/Alquiler/InsertarAlquiler";
import ModificarAlquiler from "./components/Alquiler/ModificarAlquiler";
import ModificarDetalleAlquiler from "./components/Alquiler/ModificarDetalleAlquiler";





import InsertarClientes from "./components/Clientes/InsertarClientes";
import DetallesClientes from "./components/Clientes/DetallesClientes";
import Clientes from "./components/Clientes/Clientes";
import ModificarClientes from "./components/Clientes/ModificarClientes";

Vue.use(Router);
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);

export default new Router({
  mode: "history",
  routes: [




    {
      path: "/principal",
      name: "Principal",
      component: Principal,
    },
    

    {
      path: "/InsertarClientes",
      name: "InsertarClientes",
      component: InsertarClientes,
    },

    {
      path: "/DetallesClientes",
      name: "DetallesClientes",
      component: DetallesClientes,
    },
    {
      path: "/ModificarDetalleAlquiler",
      name: "ModificarDetalleAlquiler",
      component: ModificarDetalleAlquiler,
    },

    {
      path: "/Clientes",
      name: "Clientes",
      component: Clientes,
    },

    {
      path: "/ModificarClientes",
      name: "ModificarClientes",
      component: ModificarClientes,
    },


    {
      path: "/alquileres",
      name: "Alquileres",
      component: Alquileres,
    },


    {
      path: "/ModificarAlquiler/:id",
      name: "ModificarAlquiler",
      component: ModificarAlquiler,
    },

    {
      path: "/insertarAlquiler",
      name: "InsertarAlquiler",
      component: InsertarAlquiler,
    },
    {
      path: "/DetallesAlquiler/:id",
      name: "DetallesAlquiler",
      component: DetallesAlquiler,
    },



    {
      path: "/ModificarVideos/:id",
      name: "ModificarVideos",
      component: ModificarVideos,
    },
    {
      path: "/DetallesVideos/:id",
      name: "DetallesVideos",
      component: DetallesVideos,
    },

    {
      path: "/InsertarVideos",
      name: "InsertarVideos",
      component: InsertarVideos,
    },

    {
      path: "/",
      name: "Nav",
      component: Nav,
    },
  ],
});
