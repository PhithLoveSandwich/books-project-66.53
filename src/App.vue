<template>
  <div id="app">
    <AppNavbar />
    <router-view class="main-content"></router-view>
    <AppEndbar />
  </div>
</template>

<script>

import AppNavbar from "./components/Navbar.vue";
import AppEndbar from "./components/Endbar.vue";



export default {
  components: {
    AppNavbar,
    AppEndbar,
  },
  
};

</script>

<style src="./assets/app.css"></style>
