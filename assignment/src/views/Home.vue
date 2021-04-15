<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nevbar></nevbar>
    <slide></slide>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import Slide from '@/components/Slide.vue'
import BottomBar from '../components/BottomBar.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Slide,BottomBar
   
  }
}
</script>
