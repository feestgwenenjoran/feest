<template>
  <div class="wrapper">
    <p class="question">{{ question }}</p>
    <p class="answer" v-html="answer" />
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0.5rem;
}
.question {
  padding: 0.5rem;
  margin-left: 1rem;
  background-color: $orange;
  color: $blue;
  font-weight: bold;
  font-size: 1.5rem;
}

.answer {
  padding: 0.5rem;
  color: black;
  background-color: white;
  font-weight: bold;
  margin-right: 2rem;
}
</style>
