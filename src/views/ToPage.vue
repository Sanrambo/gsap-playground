<template lang="">
  <div>
    <a href="#">
      <img src="/vite.svg" class="logo vite" alt="Vite logo" />
    </a>

    <a href="#">
      <img src="../assets/vue.svg" class="logo vue3" alt="Vue logo" />
    </a>

    <a href="#">
      <img src="../assets/react.svg" class="logo react" alt="react logo" />
    </a>

  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <h1 ref="gsapp">gsap</h1>
  </div>
  <div id="nav">
    <button id="play" @click="pressPlay">Play</button>
    <button id="pause" @click="pressPause">Pause</button>
    <button id="reverse" @click="pressReverse">Reverse</button>
    <button id="restart" @click="pressRestart">Restart</button>
  </div>
</template>
<script setup>

import gsap from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';

const vite = ref(null)
const vue3 = ref(null)
const gsapp = ref(null)
const react = ref(null)


// const clickAnimation = onMounted(() => {
//   gsap.to(".logo", { stagger: .2, duration: 1, x: -300, scale: 1.1, rotation: 360, repeat: 1, yoyo: true, ease: 'power2.inOut' })

// })


let ctx
let tween



onMounted(() => {

  // tween = gsap.fromTo(".vite", { x: -500 }, { duration: 5, x: 600, ease: "linear", paused: true })

  tween = gsap.timeline()
    .from(".vite", { x: 200, duration: 2 }, 0)
    .from(".vue3", { x: -200, duration: 2 }, "<.5")
    .add("go")
    .from(".react", { y: -300, duration: 2 }, 3);

})

onUnmounted(() => {
  // tween
  //     .to(".react", { x: -200, duration: 2 })

  tween.revert();
  // tween.play()
})


const pressPlay = () => {

  tween.play();
  console.log("TEST")
}

const pressPause = () => {

  tween.pause();

}

const pressReverse = () => {

  tween.reverse();

}

const pressRestart = () => {

  tween.play("go");

}


</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>