<template>
  <h2 class="heading">Wat waar wanneer??!?</h2>
  <div class="wrapper">
    <div class="selectors">
      <p
        class="selector"
        @click="doSelect('date')"
        :class="{ selected: selectedItem === 'date' }"
      >
        25 september 2022
      </p>
      <p
        class="selector"
        @click="doSelect('time')"
        :class="{ selected: selectedItem === 'time' }"
      >
        13:00 - 17:00
      </p>
      <p
        class="selector"
        @click="doSelect('location')"
        :class="{ selected: selectedItem === 'location' }"
      >
        Gelderlandfabriek Culemborg
      </p>
    </div>
    <div class="infobox">
      {{ selectedText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "date",
      selectedTexts: {
        date: "Dit is dus een zondag. Christelijk tijdstip wel",
        time: "Lekker in de middag. Iedereen voor het eten weer thuis",
        location: "Het is in de grote zaal. Naast het station vet handig",
      },
    }
  },
  computed: {
    selectedText() {
      return this.selectedTexts[this.selectedItem]
    },
  },
  methods: {
    doSelect(string) {
      this.selectedItem = string
    },
  },
}
</script>

<style scoped lang="scss">
.heading {
  margin-top: 10rem;
  margin-bottom: 1rem;
}
.wrapper {
  display: flex;
  gap: 2rem;
}
.selectors {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0;
}
.selector {
  font-size: 1.5rem;
  &:hover {
    color: #ffbe0b;
    cursor: pointer;
  }
  &.selected {
    color: yellow;
    position: relative;
    &::after {
      content: "\25B6";
      position: absolute;
      right: -1.5rem;
    }
  }
}

.infobox {
  width: 10rem;
  background-color: #ffbe0b;
  color: #3a86ff;
  padding: 1rem;
  font-weight: bold;
}
</style>
