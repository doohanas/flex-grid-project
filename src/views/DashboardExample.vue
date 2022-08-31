<template>
  <div class="container">
    <section class="section__wrapper">
      <h2>Dashboard Layout with Grid Template Rows/Column</h2>
      <div class="section__container">
        <DashboardOne />
      </div>
    </section>
  </div>
</template>

<script>
import DashboardOne from '../components/Grid/DashboardOne.vue';

export default {
  components: {
    DashboardOne,
  },
};
</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
}

.container h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.section__wrapper {
  margin: 72px 0;
}

.section__wrapper h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.section__container {
  display: grid;
  place-items: center;
}
</style>
