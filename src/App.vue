<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import TheMarquee from "./components/TheMarquee.vue"

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
components: {
  TheMarquee
}
</script>

<template>
  <main class="main">
    <h1>Test</h1>
    <TheMarquee />
  </main>
</template>

<style lang="scss">
$pink: deeppink;

.main {
  flex-grow: 1;
  background: $pink;
  overflow: hidden;
  min-height: 100vh;
}
</style>
