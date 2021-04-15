<template>
  <div class="about">
     <nevbar></nevbar>
     <div class="block h-full w-full">
      <img src="../image/2.png" />

      <div class="container">
        <div class="survey-container">
          <form @submit.prevent="submitForm">
            <base-card>
              <h2 class="heading">
                How was your Vue.js learning experience?
              </h2>

              <label class="label" for="name">Your Name</label>

              <input
                class="input"
                :class="{ 'bg-red-50': invalidNameInput }"
                id="name"
                type="text"
                v-model.trim="enteredName"
                @blur="validateName"
              />

              <p v-if="invalidNameInput" class="text-red-500">
                Please enter your name!
              </p>
            </base-card>

            <base-card>
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-poor"
                  value="poor"
                  v-model="rating"
                />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-avg"
                  value="average"
                  v-model="rating"
                />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-great"
                  value="great"
                  v-model="rating"
                />
                <label class="label" for="rating-great">Great</label>
              </div>
              <p v-if="invalidRatingInput" class="text-red-500">
                Please choose your learning experience!
              </p>
            </base-card>

            <button class="btn">
              Submit
            </button>
          </form>
        </div>
        <!-- <base-card>
          <ul v-for="survey in surveyResults" :key="survey.id">
            <li>
              <span>{{ survey.name }}</span> rating the learning experience
              <span> {{ survey.rating }}</span>
              <button @click="showData(survey)" class="bg-green-500 m-1">
                <img src="./assets/edit.svg" alt="" />
              </button>
              <button @click="deleteSurvey(survey.id)" class="bg-red-500 m-1">
                <img src="./assets/delete.svg" alt="" />
              </button>
            </li>
          </ul>
        </base-card> -->
      </div>
     </div>
    <bottom-bar class="mt-6"></bottom-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import BottomBar from '../components/BottomBar.vue'


export default {
  name: 'Home',
  components: {
  BottomBar
  },
  data() {
    return {
      isEdit: false,
      editId: '',
      url: 'http://localhost:5000/surveyResults',
      enteredName: '',
      rating: null,
      invalidNameInput: false,
      invalidRatingInput: false,
      surveyResults: []
    }
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      this.invalidRatingInput = this.rating === null ? true : false

      console.log(`name value: ${this.enteredName}`)
      console.log(`rating value: ${this.rating}`)
      console.log(`invalid name: ${this.invalidNameInput}`)
      console.log(`invalid rating: ${this.invalidRatingInput}`)

      if (this.enteredName !== '' && this.rating !== null) {
        // this.surveyResults.push({
        //   name: this.enteredName,
        //   rating: this.rating
        // })

        if (this.isEdit) {
          this.editSurvey({
            id: this.editId,
            name: this.enteredName,
            rating: this.rating
          })
        } else {
          this.addNewSurvey({
            name: this.enteredName,
            rating: this.rating
          })
        }
      }
      this.enteredName = ''
      this.rating = null
      // console.log(
      //   `name: ${this.surveyResults[0].name} rating ${this.surveyResults[0].rating}`
      // )
    },

    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },

 
    async addNewSurvey(newSurvey) {
      try {
          await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newSurvey.name,
            rating: newSurvey.rating
          })
        })
        
      } catch (error) {
        console.log(`Could not save! ${error}`)
      }
    }
  },

  async created() {
    this.surveyResults = await this.getSurveyResult()
  }
}
</script>
