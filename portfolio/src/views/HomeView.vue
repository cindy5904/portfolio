<script setup>
import SectionMilieu from '../components/Section_milieu.vue';
import Card from '../components/Card.vue';
</script>

<template>
  
  <main>
    <div>
      <img src="../assets/bg.jpg" alt="background" class="bg">
    </div>
    <div class="content">
      <h1>Profil d'une conceptrice développeuse junior</h1>
      <div class="container">
        <div class="section1">
        <div>
          <img src="../assets/interro.png" alt="point d'interrogation" width="60px" class="pointInterro">
        </div>
          <h2>Qui suis-je?</h2>
          <p>Passionnée par le développement, je suis actuellement en formation pour devenir conceptrice développeuse d'applications.</p>
        </div>
        <div class="section2">
          <div>
            <img src="../assets/parcours.png" alt="Illustration parcours pro" class="parcours">
          </div>
          <h2>Mon parcours</h2>
          <p>Tout à débuter avec la nurserie à la découverte des métiers du numérique. 
          J’ai ensuite suivi une technique de base en développement et suivi une formation de développement web où
          j’ai obtenu mon titre pro.</p>
        </div>
      </div>
      <div class="container2">
        <div class="section3">
          <div>
          <img src="../assets/motiv.png" alt="illustration motivation" class="motiv">
        </div>
          <h2>Ma motivation</h2>
          <p>Passionnée de développement, je suis motivée à créer des applications innovantes. Mon expérience diversifiée en projets me permettra à y contribuer pleinement</p>
        </div>
        <div class="section4">
          <div>
            <img src="../assets/recherche.png" alt="illustration recherche" class="recherche">
          </div>
          <h2>Ma recherche</h2>
          <p>Je suis actuellement à la recherche d’un stage qui débutera le 7 octobre 2023 au 27 Décembre 2024.</p>
        </div>
      </div>
      <div class="container3">
        <div class="section5">
          <div>
            <img src="../assets/arbre.png" alt="illustration vision" class="vision">
          </div>
          <h2>Ma vision</h2>
          <p>Imaginez une application qui va au-delà du code, qui raconte une histoire, qui résout des problèmes et qui crée une expérience utilisateur mémorable. Je suis convaincue que le 
            développement d'applications est une forme d'art, une fusion de créativité et de logique.</p>
        </div>
      </div>
    </div>
    <SectionMilieu />
    <Card/>
  </main>
</template>
<style scoped>
img {
  position: absolute;
}
.bg {
  height: 800px;
}
.content {
  position: relative;
  z-index: 1;
}
.container {
  display: flex;
  justify-content: center;
  gap: 90px;
}
.section1 {
  width: 350px;
  height: 200px;
  background-color: #F474B1;
  border-radius: 20px;
}

h2 {
  text-align: center;
  color: white;
  padding-top: 20px;
}

p {
  color: white;
}
.section1 p {
  text-align: left;
  margin-top: 30px;
  margin-left: 30px;
  line-height: 1.5em;
}

.section2 {
  width: 450px;
  height: 240px;
  background-color: #75BF8A;
  border-radius: 20px;
}

.section2 p {
  text-align: left;
  margin-top: 30px;
  margin-left: 130px;
  line-height: 1.5em;
  width: 300px;
}

.pointInterro {
  margin-left: -20px;
  height: 150px;
  margin-top: 10px;
  
}
.parcours {
  width: 200px;
  height: 180px;
  margin-left: -80px;
  margin-top: 30px;
}
.container2 {
  display: flex;
  justify-content: center;
  gap: 130px;
}
.section3 {
  background-color: #FFA216;
  width: 300px;
  height: 255px;
  border-radius: 20px;
  margin-top: -40px;
  }
.section3 p{
  margin-top: 20px;
  line-height: 1.5rem;
  width: 200px;
  margin-left: 70px;
}

.section4 {
  background-color: #EE5568;
  width: 350px;
  height: 215px;
  border-radius: 20px;
}

.section4 p {
  width: 150px;
  margin-top: 20px;
  margin-left: 150px;
  line-height: 1.5rem;
}

.motiv {
  width: 200px;
  height: 180px;
  margin-left: -125px;
  margin-top: 35px;
}

.recherche {
  width: 150px;
  margin-top: 50px;
  margin-left: -30px;
}

.container3 {
  display: flex;
  justify-content: center;
}

.section5 {
  background-color: #CE72BA;
  width: 550px;
  height: 200px;
  border-radius: 20px;
}

.section5 p {
  width: 400px;
  margin-top: 12px;
  line-height: 1.5rem;
  margin-left: 100px;
}

.vision {
  width: 180px;
  height: 180px;
  margin-left: -80px;
  margin-top: 20px;
}
.section1:hover,
.section2:hover,
.section3:hover,
.section4:hover,
.section5:hover {
  transform: scale(1.1); /* Agrandit l'élément de 10% au survol */
  transition: transform 0.3s ease; /* Ajoute une transition fluide */
}

h1 {
  padding-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Lemon', serif;
  text-shadow: 2px 2px 4px #000000;
}
</style>