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
  grid-template-areas:
    'sidebar header'
    'sidebar content'
    'sidebar footer';
  border: 1px solid #ccc;
}

.dashboard__sidebar {
  grid-area: sidebar;
  min-width: 200px;
  background: orange;
}

.dashboard__header {
  grid-area: header;
  min-height: 80px;
  background: maroon;
}

.dashboard__content {
  grid-area: content;
  background: white;
}

.dashboard__footer {
  grid-area: footer;
  min-height: 80px;
  background: maroon;
}
</style>
