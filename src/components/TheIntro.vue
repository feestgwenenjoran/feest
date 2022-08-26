<template>
  <div class="wrapper">
    <h2 class="names">Gwendolyn en Joran</h2>
    <ul class="list">
      <li>zijn getrouwd</li>
      <li>hebben een huis gekocht</li>
      <li>kregen een baby</li>
    </ul>
    <h2 class="end">Dus: tijd voor een feest!</h2>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.names {
  margin-top: 7rem;
  font-size: 2rem;
}
.list {
  margin-left: 1rem;
  margin-top: 2rem;
  font-size: 1.5rem;

  & > li {
    margin-bottom: 1rem;
  }
}
.end {
  margin-top: 3rem;
  font-size: 2rem;
}
</style>
