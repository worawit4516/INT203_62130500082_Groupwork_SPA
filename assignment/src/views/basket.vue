<template>
  <div class="basket">
    <nevbar></nevbar>
    <bg-img></bg-img>
    <div class="p-3 bg-white rounded-xl  hover:shadow" id="BasketForm">
      <h2 class="text-4xl pt-4 pb-4 justify-items-center grid">
        รายการเกมของคุณ
      </h2>
      <div class="">
        <table>
          <tr class="text-lg">
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Gamename</td>
            <td>Action</td>
          </tr>
          <tr v-for="game in gamesResults" :key="game.id" class="p-1">
            <td>
              <span>{{ game.name }}</span>
            </td>
            <td>
              <span> {{ game.lastname }}</span>
            </td>
            <td>
              <span> {{ game.game }}</span>
            </td>
            <td>
              <button
                @click="editModeOpen(game)"
                class="bg-green-500 m-1 p-2 text-white"
              >
                Edit
              </button>

              <button
                @click="deleteGame(game.id)"
                class="bg-red-500 m-1 p-2 text-white"
              >
                Cancle
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <game-form
      v-if="EditMode"
      class="max-w-lg"
      @submitForm="editGame"
    ></game-form>
    <bottom-bar class="mt-6"></bottom-bar>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar.vue";
import GameForm from "../components/GameForm.vue";

export default {
  components: {
    BottomBar,
    GameForm,
  },
  data() {
    return {
      EditMode: false,
      url: "http://localhost:5000/gameBasket",
      gamesResults: [],
      gameforEdit: null,
    };
  },
  methods: {
    async getGamesResult() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
    async deleteGame(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.gamesResults = this.gamesResults.filter(
          (game) => game.id !== deleteId
        );
        alert(`ยกเลิกคำสั่งซื้อเกมเรียบร้อย `);
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },

    editModeOpen(game) {
      this.EditMode = true;
      this.gameforEdit = game;
    },

    async editGame(enteredName, enteredLastName, game) {
      try {
        await fetch(`${this.url}/${this.gameforEdit.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            lastname: enteredLastName,
            game: game,
          }),
        });
        this.gamesResults = await this.getGamesResult();
        this.EditMode = false;
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
  },
  async created() {
    this.gamesResults = await this.getGamesResult();
  },
};
</script>
<style>
#BasketForm {
  position: absolute;
  top: 20%;
  left: 30%;
  display: inline-block;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 12px 15px;
}
#game-form {
  position: absolute;
  top: 20%;
  left: 33%;
  display: inline-block;
}
</style>
