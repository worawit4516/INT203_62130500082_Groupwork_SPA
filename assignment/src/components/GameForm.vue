<template>
  <div class="">
    <form @submit.prevent="submitForm" id="game-form">
      <div class="p-3 bg-white rounded-xl max-w-lg hover:shadow">
        <h2 class="text-4xl pt-4 pb-4 ">
          เลือกเกมที่ต้องการซื้อ
        </h2>
        <flexform>
          <div class="grid justify-items-start p-3 ">
            <label class="label pb-3" for="name">ระบุชื่อของคุณ</label>

            <input
              class="input bg-gray-100 rounded px-4 py-2"
              :class="{ 'bg-red-50': invalidNameInput }"
              id="name"
              type="text"
              v-model.trim="enteredName"
              @blur="validateName"
            />

            <p v-if="invalidNameInput" class="text-red-500 pt-2">
              Please enter your name!
            </p>

            <div class=" grid justify-items-start">
              <label class="label pb-3" for="name">ระบุนามสกุลของคุณ</label>

              <input
                class="input bg-gray-100 rounded px-4 py-2"
                :class="{ 'bg-red-50': invalidLastNameInput }"
                id="name"
                type="text"
                v-model.trim="enteredLastName"
                @blur="validateName"
              />

              <p v-if="invalidLastNameInput" class="text-red-500 pt-2">
                Please enter your Last name!
              </p>
            </div>
          </div>

          <div class="grid justify-items-start ml-10 pt-4 pr-4 pb-3">
            <h2 class="heading">เลือกเกมที่ต้องการซื้อ</h2>

            <div>
              <input
                type="radio"
                name="Game"
                id="Game-Farcry-5"
                value="Farcry 5"
                v-model="game"
              />
              <label class="label" for="Game-Farcry-5"> Farcry 5</label>
            </div>
            <div>
              <input
                type="radio"
                name="Game"
                id="Game-CyberPunk2077"
                value="CyberPunk2077"
                v-model="game"
              />
              <label class="label" for="Game-CyberPunk2077">
                CyberPunk2077</label
              >
            </div>
            <div>
              <input
                type="radio"
                name="Game"
                id="Game-ResidentEvil-7"
                value="ResidentEvil-7"
                v-model="game"
              />
              <label class="label" for="Game-ResidentEvil-7">
                ResidentEvil-7</label
              >
            </div>
            <p v-if="invalidGameInput" class="text-red-500">
              Please choose your Game that you want to buy !
            </p>
          </div>
        </flexform>
        <button
          class="w-full h-12 rounded-md border-2 text-md hover:shadow hover:bg-red-700 hover:border-red-700 hover:text-white"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "GameForm",
  props: {
    msg: String,
  },
  data() {
    return {
      url: "http://localhost:5000/gameBasket",
      enteredName: "",
      enteredLastName: "",
      isEdit: false,
      editId: "",
      game: null,
      invalidLastNameInput: false,
      invalidNameInput: false,
      invalidGameInput: false,
      
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidLastNameInput = this.enteredLastName === "" ? true : false;
      this.invalidGameInput = this.game === null ? true : false;

      if (
        this.enteredName !== "" &&
        this.enteredLastName !== null &&
        this.game !== null
      ) {
        if (this.isEdit) {
          this.editSurvey({
            id: this.editId,
            name: this.enteredName,
            lastname: this.enteredLastName,
            game: this.game,
          });
        } else {
          this.addNewGametoBasket({
            name: this.enteredName,
            lastname: this.enteredLastName,
            game: this.game,
          });
        }
      }
      this.enteredName = "";
      this.enteredLastName = "";
      this.game = null;
    },

    validateName() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidLastNameInput = this.enteredLastName === "" ? true : false;
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
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async editGame(editingGame) {
      try {
        await fetch(`${this.url}/${editingGame.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: editingGame.name,
            lastname: editingGame.lastname,
            game: editingGame.game,
          }),
        });

        this.isEdit = false;
        this.editId = "";
        this.enteredName = "";
        this.enteredLastName = "";
        this.game = null;
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
  },

  async created() {},
};
</script>

<style></style>
