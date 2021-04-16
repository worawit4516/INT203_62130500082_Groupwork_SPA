<template>
  <div class="basket">
    <nevbar></nevbar>
    <bg-img></bg-img>
    <div class="p-3 bg-white rounded-xl  hover:shadow" id="BasketForm">
      <h2 class="text-4xl pt-4 pb-4 ">
        รายการเกมของคุณ
      </h2>
      <div class="">
        <table>
          <tr class="text-lg">
            <td >Firstname</td>
            <td>Lastname</td>
            <td>Gamename</td>
            <td >Action</td>
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
              <button @click="showData(game)" class="bg-green-500 m-1 p-2">
                Edit
              </button>

              <button @click="deleteGame(game.id)" class="bg-red-500 m-1 p-2">
                Cancle
              </button>
            </td>
          </tr>
        </table>

      </div>
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
      isEdit: false,
      editId: "",
      url: "http://localhost:5000/gameBasket",
      gamesResults: [],
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
          method: 'DELETE'
        })
        //filter - higher order function
        this.gamesResults = this.gamesResults.filter(
          (game) => game.id !== deleteId
        )
      } catch (error) {
        console.log(`Could not delete! ${error}`)
      }
    },
    

  },
  async created() {
    this.gamesResults = await this.getGamesResult();
  },
};
</script>
<style scoped>
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

</style>
