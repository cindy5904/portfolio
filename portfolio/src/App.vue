<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   
    <header class="header">
      <div class="nav">
        <ul class="nav-home">
          <img src="./assets/logo3.png" alt="logo cindy" width="80">
          <li ><RouterLink to="/" id="color">Accueil</RouterLink></li>
          <li>Personnages</li>
          <li>Mes projets</li>
          <li>bla</li>    
        </ul>
      </div>
    </header>
    <div id="app">
    <RouterView />
  </div>
</template>

<style scoped>

.header {
  position: fixed;
  height: 80px;
  width: 100%;
  background: linear-gradient(to bottom, #333, #626262);
  z-index: 10;
  display: flex;
  align-items: center;
}

.nav {
  margin-left: 30px;
}
 .nav-home {
    display: flex;
    align-items: center;
    list-style: none;
    padding: auto;
    margin: auto;
  }

  .nav-home img {
    margin-right: 10px;
    width: 70px;
  }

  .nav-home li {
    padding: 20px;
    color: white; 
    font-weight: bold;
  }

.router-link-active,
.router-link-exact-active {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
</style>
