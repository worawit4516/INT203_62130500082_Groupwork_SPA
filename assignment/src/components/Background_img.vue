<template>
  <div id="background-img-crop">
      <img src="../image/2.png" id="background-img"/>
      </div>
</template>

<script>
export default {
    name: 'BG-img',
  props: {
    msg: String
  }
}
</script>

<style>
#background-img{
  opacity: 40%;
}
#background-img-crop{
  background-color: black;
}
</style>