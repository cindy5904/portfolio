<script setup>
import { ref } from 'vue';

const min = ref(1);
const max = ref(100);
const good = ref(Math.floor(Math.random() * (max.value - min.value + 1)) + min.value);
const retry = ref(1);
const userGuess = ref(null);
const message = ref('');
const gameOver = ref(false);

const checkGuess = () => {
  if (userGuess.value === good.value) {
    gameOver.value = true;
  } else {
    retry.value++;
    message.value = userGuess.value < good.value ? "C'est plus" : "C'est moins";
  }
};
</script>
<template>
<div>
    <h1>Juste Prix</h1>
    <p v-if="!gameOver">Saisir un nombre entre {{ min }} et {{ max }}</p>
    <input v-if="!gameOver" type="number" v-model="userGuess" />
    <button v-if="!gameOver" @click="checkGuess">Vérifier</button>
    <p v-if="message">{{ message }}</p>
    <p v-if="gameOver">Tu as trouvé le nombre {{ good }} en {{ retry }} fois.</p>
  </div>
</template>

<style scoped>
h1 {
    padding-top: 80px;
}
</style>