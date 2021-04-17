<template>
  <div class="GameRegistration">
    <nevbar></nevbar>
    <div class="block h-full w-full">
      <bg-img></bg-img>
      <gameform @submitForm='regisGame'></gameform>
    </div>
    <bottom-bar class="mt-6"></bottom-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import BottomBar from "../components/BottomBar.vue";

export default {
  
  components: {
    BottomBar,
  },
    data() {
    return { 
      url: "http://localhost:5000/gameBasket",  
      invalidLastNameInput: false,
      invalidNameInput: false,
      invalidGameInput: false,
      
    };
  },
  methods: {
    regisGame(enteredName,enteredLastName,game){
      this.invalidNameInput = enteredName === "" ? true : false;
      this.invalidLastNameInput = enteredLastName === "" ? true : false;
      this.invalidGameInput = game === null ? true : false;

      if (
        enteredName !== "" &&
        enteredLastName !== null &&
        game !== null
      )  {
          this.addNewGametoBasket({
            name: enteredName,
            lastname: enteredLastName,
            game: game,
          });
        }
    },
    async addNewGametoBasket(newgame) {
      try {
        await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: newgame.name,
            lastname: newgame.lastname,
            game: newgame.game,
          }),
        });

        alert(`คุณ ${newgame.name} สั่งซื้อเกม ${newgame.game} เรียบร้อย `);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    }
  },
 async created() {},
};
</script>
<style>
#game-form {
  position: absolute;
  top: 20%;
  left: 33%;
  display: inline-block;
}

</style>
