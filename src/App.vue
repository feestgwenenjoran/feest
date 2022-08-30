<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import ThePictures from "./components/ThePictures.vue"
import TheIntro from "./components/TheIntro.vue"
import TheInfo from "./components/TheInfo.vue"
import TheCountdown from "./components/TheCountdown.vue"
import TheMarquee from "./components/TheMarquee.vue"
import TheYeah from "./components/TheYeah.vue"
import TheFAQ from "./components/TheFAQ.vue"

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="container">
    <main class="main">
      <h1>FEEST!</h1>
      <!-- <ThePictures /> -->
      <TheIntro />
      <TheInfo />
      <TheCountdown />
      <!-- <TheMarquee /> -->
      <!-- <TheYeah /> -->
      <TheFAQ />
    </main>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  padding-top: 7rem;
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
}

.container {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.main {
  flex-grow: 1;
  padding: 1rem;
  background: $pink;
  overflow: hidden;
  min-height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
</style>
