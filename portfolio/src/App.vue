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
          <li class="dropdown">
          <a id="color">Jeux</a>
          <ul class="dropdown-menu">
            <li><RouterLink to="/morpion" id="li_dropdown">Tic Tac Toe</RouterLink></li>
            <li><RouterLink to="/justeprix" id="li_dropdown">Juste Prix</RouterLink></li>
          </ul>
        </li>
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

.dropdown {
  position: relative;
}

#li_dropdown {
  color:#333;
}

#li_dropdown:hover {
  color: rgb(206, 184, 139);
}
.dropdown-menu {
  width: 200px;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
