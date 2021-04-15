<template>
  <div class="about">
     <nevbar></nevbar>
    <h1>This is an about page</h1>
    <bottom-bar></bottom-bar>
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
   
  }
}
</script>
