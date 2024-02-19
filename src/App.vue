

<template>
  <div>
    <router-link :to="{ name: 'Page' }">GSAP</router-link> |
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </div>

  <RouterView />
</template>

<script setup>

</script>


<style scoped>
div {
  color: Red;
  background-color: aqua;
}
</style>
