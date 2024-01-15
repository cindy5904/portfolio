import { defineStore } from 'pinia';
import { reactive } from 'vue';



export const UsejeuxStore = defineStore('jeux', () => {
  const state = reactive({
    tab: ["", "", "", "", "", "", "", "", ""],
    compt: 0,
  });

  const mutations = {
    updateTab(payload) {
      state.tab = payload;
    },
    
      updateCompt(payload) {
        console.log('Updating compt:', payload);
        state.compt = payload;
      },
    
    resetGame() {
      state.tab = ["", "", "", "", "", "", "", "", ""];
      state.compt = 0;
    },
  };

  const actions = {
    point(index) {
      if (state.tab[index] === "") {
        const updatedTab = [...state.tab];
        updatedTab[index] = state.compt % 2 === 0 ? "X" : "O";
        console.log('Updated Tab:', updatedTab);
        mutations.updateTab(updatedTab);
        mutations.updateCompt(state.compt + 1);

        this.checkWinner();
      }
    },

    checkWinner() {
      if (state.tab[0] === state.tab[1] && state.tab[1] === state.tab[2] && state.tab[0] !== "") {
        console.log(`Le joueur ${state.tab[0]} a gagné !`);
      }

      
    },
  };

  const getters = {
    currentPlayer: function (state) {
      const player = state.compt % 2 === 0 ? 1 : 2;
      console.log('currentPlayer:', player);
      return player;
    },
  };
  
  

  return { state, mutations, actions, getters };
});