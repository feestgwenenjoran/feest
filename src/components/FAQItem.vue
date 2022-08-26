<template>
  <div class="wrapper">
    <p class="question">{{ question }}</p>
    <p class="answer">{{ answer }}</p>
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
}
.question {
  padding: 0.5rem;
  margin-left: 1rem;
  background-color: ;
}
</style>
