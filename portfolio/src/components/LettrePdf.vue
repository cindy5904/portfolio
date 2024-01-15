<script setup>
const motivationImagePath = `${import.meta.env.BASE_URL}Lettre_TelmonCindy.png`;
const imprimer = () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Imprimer</title>
        <style>
          body { margin: 0; }
          img { width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <img src="${motivationImagePath}" alt="Lettre de Motivation">
      </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 1000); // Ajoutez un délai (1 seconde) avant d'appeler print()
};
</script>

<template>
    <div class="bouton">
        <a :href="motivationImagePath" download="Lettre_TelmonCindy.png">
      <button class="telecharge">Télécharger</button>
    </a>
    <button @click="imprimer" class="imprime">Imprimer</button>
    </div>
    <div class="img">
        <img :src="motivationImagePath" alt="Lettre de Motivation">
    </div>

</template>

<style scoped>
.bouton {
    padding-top: 150px;
}
.bouton {
    display: flex;
    justify-content: center;
    gap: 30px;
    text-align: center;
}

.telecharge, .imprime{
    background-image: linear-gradient(to right, #304352 0%, #d7d2cc  51%, #304352  100%); 
    margin: 10px;  
    padding: 15px 45px;
    font-size: 15px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
}

.telecharge:hover, .imprime:hover {
background-position: right center; 
color: #fff;
text-decoration: none;
}
         
.img {
  width: 100%;
  padding-top: 30px;
  text-align: center;
}

img {
    width: 600px;
    margin: auto;
}
</style>