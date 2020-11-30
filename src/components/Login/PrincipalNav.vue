<template  >
<div class="NavBar">
  <vue-navigation-bar :options="navbarData" />
 
 <div id="nav">
        <div>
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
   </div> 
</template>




<script>
/*
 -
-
-No sirveeeeeeeeeeeeeeeeeeee
-
-
 -
*/


import "vue-navigation-bar/dist/vue-navigation-bar.css";
export default {
  name: "PrincipalNav",

  data() {

            return {
                authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                },

      navbarData: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
          brandImagePath: "",
            brandImage: require("C:/Users/Edison/Desktop/Proyecto web pelis/VideoStar/videostar/src/assets/icono.jpg"),
        brandImageAltText: "vue-navigation-bar",
        collapseButtonStyle: "dark",
        
        ariaLabelMainNav: "Main Navigation",

        menuOptionsLeft: [
          {
            type: "link",
            text: "Inicio",
            path: "/",
   },
  
   


  
        ],

        menuOptionsRight: [
              {





              },
         
          {
            type: "button",
            text: "Login",
            path: "/login",
          },
        ],
      },





            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }






    






















</script>

<style lang="scss">
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
