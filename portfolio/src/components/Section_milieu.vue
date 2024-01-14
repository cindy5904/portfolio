<script setup>

</script>

<template>
<section class="section_milieu">
    <p>Partir à l'aventure</p>
    <span>Embarquez moi pour découvrir le passionnant voyage du développement, où chaque ligne de code ouvre la porte à de nouvelles aventures.</span>
</section>

</template>

<style scoped>
.section_milieu {
    margin-top: 20px;
    width: 100%;
    height: 300px;
    background: url(../assets/bureau_flou.png);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
}
.section_milieu p {
    font-size: 60px;
    color: #f1f1f1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ajoute une ombre légère */
    -webkit-text-stroke: 2px black; /* Ajoute un contour noir */
    color: transparent;
  }
  .section_milieu span {
    display: block;
    font-size: 20px;
    color: #f1f1f1;
    margin-top: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Ajoute une ombre légère */
    -webkit-text-stroke: 1px black; /* Ajoute un contour noir */
    color: transparent;
  }

</style>