<template>
  <div class="menu-items">
    <div><router-link :to="{ name: 'Page' }">GSAP </router-link></div>
    <div><router-link :to="{ name: 'Home' }">Home </router-link></div>
    <div><router-link :to="{ name: 'Hover' }">Hover me</router-link></div>
  </div>

  <RouterView />
</template>

<script setup></script>

<style scoped>
.menu-items {
  display: flex;
  justify-content: space-around; /* Adjusted to space around each menu item */
  color: red; /* Applied to the text color of all menu items */
  background-color: aqua;
}

.menu-items div {
  margin: 30px; /* Add padding for better spacing */
}
</style>
