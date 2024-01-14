<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   
    <header class="header">
      <div class="nav">
        <ul class="nav-home">
          <img src="./assets/logo3.png" alt="logo cindy" width="80">
          <li ><RouterLink to="/" id="color">Accueil</RouterLink></li>
          <li>Mes projets</li>
          <li>Jeux</li>
          <li><RouterLink to="/cv" id="color">CV</RouterLink></li>
          <li><RouterLink to="/lettre" id="color">Lettre Motivation</RouterLink></li>     
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

.nav-home li a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}

.nav-home li a:hover {
  color: burlywood;
}

.nav-home li a.router-link-active,
.nav-home li a.router-link-exact-active {
    font-weight: bold;
    color: #b1bfee; 
}
</style>
