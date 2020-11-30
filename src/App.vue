<template>

  <div id="app">
    
   <router-view />  



    
  </div>
</template>

<script>






export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style lang="scss">

#app {
	font-family: "Nunito Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #ffffff;
	background-color: #353535;
	min-height: 100vh;
	//background-image: url(assets/background.jpg);
	//background-size: auto;
	//background-position: center;

	h1,
	h3 {
		font-family: "Roboto Condensed", sans-serif;
	}





	input[type="submit"],
	a,

  
	.boton {
		background: #000000;
		border: 2px solid #ffffff;
		color: rgb(255, 255, 255);
		cursor: pointer;
		
		font-weight: bold;
		margin: 10px;
		outline: none;
		padding: 0.6rem;
		text-align: center;
		transition: 0.5s ease;
		z-index: 4;

		&:hover {
			background: #cecece;
			color: rgb(30, 142, 146);
			text-decoration: none;
		}
	}



	
}



</style>
