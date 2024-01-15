<script setup>
import { computed } from 'vue';
import { ref, watchEffect} from 'vue';
import { UsejeuxStore } from '../stores/jeux';

const jeuxStore = UsejeuxStore();
const point = (event) => {
  const index = event.target.dataset.class;
  console.log('Calling point with index:', index);
  jeuxStore.actions.point(index);
};

jeuxStore.actions.checkWinner();

const resetGame = () => {
  jeuxStore.mutations.resetGame(); 
};

const currentPlayerMessage = computed(() => {
  const player = jeuxStore.getters.currentPlayer(jeuxStore.state);
  console.log('currentPlayerMessage:', player);
  return `A toi de jouer joueur ${player}`;
});
</script>

<template>
    <div class="gradient-background">
  <h1>Tic Tac Toe <span id="tic">X</span><span id="tic">O</span></h1>
  <div>
    <div ref="joueurRef" class="joueur">{{ currentPlayerMessage }}</div>

    <table>
      <tr>
        <td @click="point" class="case" data-class="0">{{ jeuxStore.state.tab[0] }}</td>
        <td @click="point" class="case" data-class="1">{{ jeuxStore.state.tab[1] }}</td>
        <td @click="point" class="case" data-class="2">{{ jeuxStore.state.tab[2] }}</td>
      </tr>
      <tr>
        <td @click="point" class="case" data-class="3">{{ jeuxStore.state.tab[3] }}</td>
        <td @click="point" class="case" data-class="4">{{ jeuxStore.state.tab[4] }}</td>
        <td @click="point" class="case" data-class="5">{{ jeuxStore.state.tab[5] }}</td>
      </tr>
      <tr>
        <td @click="point" class="case" data-class="6">{{ jeuxStore.state.tab[6] }}</td>
        <td @click="point" class="case" data-class="7">{{ jeuxStore.state.tab[7] }}</td>
        <td @click="point" class="case" data-class="8">{{ jeuxStore.state.tab[8] }}</td>
      </tr>
    </table>
    <div class="btn">
        <button @click="resetGame">Réinitialiser</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.gradient-background {
    background-color: #27282c;
}

#tic {
    color: #eedf8e;
}
 h1 {
    text-align: center;
    text-shadow: 2px 2px 4px #83a8c8;
    margin-bottom: 50px;
    padding-top: 90px;
    color: #eee;
    font-family: 'Permanent Marker', cursive;
}
.joueur {
    text-align: center;
    margin-bottom: 20px;
    color: #eee;
    font-size: 20px;
}
table {
    border-collapse: collapse;
    margin: auto;
}

td {
    width: 170px;
    height: 170px;
    text-align: center;
    margin: auto;
    vertical-align: middle;
    border: 1px solid #485563;
    box-shadow: 0 0 5px 1px #878686;
    font-family: 'Permanent Marker', cursive;
    color: #eee;
    font-size: 65px;
  }

#case-1 {
  border-top: none;
  border-left: none;
}  
#case-2 {
  border-top: none;
}  
#case-3 {
  border-top: none;
  border-right: none;
}
#case-4 {
  border-left: none;
}
#case-6 {
  border-right: none;
}
#case-7 {
  border-left: none;
  border-bottom: none;
}
#case-8 {
  border-bottom: none;
}
#case-9 {
  border-right: none;
  border-bottom: none;
}
#joueur {
  text-align: center;
  margin-top: 50px;
  font-family: 'La Belle Aurore', cursive;
  font-size: 25px;
}
.btn {
    margin-top: 30px;
    text-align: center;
}
button {
    background-image: linear-gradient(to right, #485563 0%, #d7d2cc 51%, #485563 100%); 
    margin: auto; 
    padding: 15px 35px;
    font-size: 15px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 5px #eee;
    border-radius: 10px;
    border: none;

}
button:hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
} 
</style>
