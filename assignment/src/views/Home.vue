<template>
  <div class="home">
   
    <nevbar></nevbar>
    <slide></slide>
    <bottom-bar></bottom-bar>
    
  </div>
</template>

<script>

 import Slide from '@/components/Slide.vue'
import BottomBar from '../components/BottomBar.vue'


export default {
  
  components: {
 
    Slide,BottomBar
   
  }
}
</script>
