<template>
  <div class="countdown">
    <h2 class="heading heading--top">Het duurt nog</h2>
    <div class="countdown__items">
      <div class="countdown__item">
        <h3 class="number">{{ days }}</h3>
        <h3 class="text">{{ daysText }}</h3>
      </div>
      <div class="countdown__item">
        <h3 class="number">{{ hours }}</h3>
        <h3 class="text">{{ hoursText }}</h3>
      </div>
      <div class="countdown__item">
        <h3 class="number">{{ minutes }}</h3>
        <h3 class="text">{{ minutesText }}</h3>
      </div>
      <div class="countdown__item">
        <h3 class="number">{{ seconds }}</h3>
        <h3 class="text">{{ secondsText }}</h3>
      </div>
    </div>
    <h2 class="heading">voordat het begint</h2>
    <p class="paragraph">"Aahhh zo kort nog maar wat moet ik aan???!@?!"</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.updateCountdown()
    setInterval(this.updateCountdown.bind(this), 1000)
  },
  unmounted() {
    clearInterval(this.updateCountdown.bind(this))
  },
  methods: {
    updateCountdown() {
      const now = Date.now()
      const timeLeft = 1664103600000 - now // 13:00 25 sept 2022
      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
      this.minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
      this.seconds = Math.floor((timeLeft / 1000) % 60)
    },
  },
  computed: {
    countdownText() {
      return "Het duurt niet lang meer!"
    },
    daysText() {
      if (this.days === 1) {
        return "dag"
      }
      return "dagen"
    },
    hoursText() {
      return "uur"
    },
    minutesText() {
      if (this.minutes === 1) {
        return "minuut"
      }
      return "minuten"
    },
    secondsText() {
      if (this.days === 1) {
        return "seconde"
      }
      return "seconden"
    },
  },
}
</script>

<style scoped lang="scss">
.heading {
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  &--top {
    margin-top: 5rem;
  }
}
.number {
  font-size: 3rem;
}
.text {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
.countdown {
  &__items {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  &__item {
    text-align: center;
  }
}

.paragraph {
  font-style: italic;
}
</style>
