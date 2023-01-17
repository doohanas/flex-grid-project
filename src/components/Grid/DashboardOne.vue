<template>
  <div class="dashboard resize-both">
    <aside class="dashboard__sidebar"></aside>
    <header class="dashboard__header"></header>
    <main class="dashboard__content"></main>
    <footer class="dashboard__footer"></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard {
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  border: 1px solid #ccc;
}

.dashboard__sidebar {
  background: navy;
  min-width: 200px;
  grid-column: 1;
  grid-row: 1 / 4;
}

.dashboard__header {
  background: lightblue;
  min-height: 80px;
  /* grid-column: 2;
  grid-row: 1 / 2; */
}

.dashboard__content {
  background: white;
  /* grid-column: 2;
  grid-row: 2 / 3; */
}

.dashboard__footer {
  background: lightcoral;
  min-height: 80px;
  /* grid-column: 2;
  grid-row: 3 / 4; */
}
</style>
