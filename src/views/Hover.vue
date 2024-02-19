<template>
  <!-- <div class="item home">
    <div class="dot"></div>
    <div class="text">home</div>
  </div>
  <div class="item">
    <div class="dot"></div>
    <div class="text">about</div>
  </div>
  <div class="item">
    <div class="dot"></div>
    <div class="text">portfolio</div>
  </div>
  <div class="item">
    <div class="dot"></div>
    <div class="text">contact us</div>
  </div> -->

  <div
    v-for="(item, index) in items"
    :key="index"
    class="item home"
    @mouseenter="mouseHover(index)"
    @mouseleave="mouseLeaving(index)"
  >
    <div class="dot"></div>
    <div class="text">{{ item.text }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

// const item = ref();
const dot = ref(null);
const text = ref(null);

const items = ref([
  { text: "home" },
  { text: "about" },
  { text: "portfolio" },
  { text: "contact us" },
]);

let tl;

onMounted(() => {
  gsap.defaults({ duration: 0.5 });
  tl = gsap
    .timeline({ paused: true })
    .to(".text", {
      color: "white",
      x: 10,
    })
    .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, 0);
});

const mouseHover = () => tl.play();

const mouseLeaving = () => {
  tl.reverse();
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dot {
  height: 20px;
  min-width: 20px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 10px;
}

.text {
  color: #777;
  font-family: Raleway;
  font-weight: 700;
  text-transform: uppercase;
  margin: 4px;
  font-size: 40px;
  white-space: nowrap;
}
</style>
