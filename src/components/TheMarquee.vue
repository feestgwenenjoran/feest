<template>
  <div class="marquee">
    <div class="marquee__inner" aria-hidden="true">
      <p class="marquee__intro">Nieuws:</p>
      <p class="marquee__text" v-for="text of marqueeTexts" :key="text">
        {{ text }}<span class="marquee__dot">·</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marqueeTexts: [
        "Geruchten over tafeltennistafel doen de ronde",
        "Zouden er echt alleen maar veganistische hapjes zijn?",
        "Treinchaos rondom Culemborg op 25 september tijdelijk opgeheven",
        "Dit was het nieuws",
      ],
    }
  },
}
</script>

<style lang="scss">
.marquee {
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(0% + var(--offset));
  --move-final: calc(-100% + var(--offset));

  &__intro {
    font-size: 2rem;
    margin-right: 2rem;
  }

  &__inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 20s linear infinite;
    animation-play-state: running;
  }

  &__text {
    font-size: 2rem;
    height: 2rem;
    white-space: nowrap;
  }

  &__dot {
    margin: 0 2rem;
  }
}

.marquee__inner {
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>
