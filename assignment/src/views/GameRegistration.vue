<template>
  <div class="about">
    <nevbar></nevbar>
    <div class="block h-full w-full">
      <bg-img></bg-img>
      <gameform></gameform>
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
