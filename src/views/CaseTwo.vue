<template>
  <main class="container">
    <h1>Common Issues with Flexbox</h1>
    <section class="section__wrapper">
      <h2>1. Auto-fit V Auto-fill</h2>
      <div class="section__container">
        <AutoFitAndFill />
      </div>
    </section>
    <section class="section__wrapper">
      <h2>2. Minimum Content Size</h2>
      <div class="section__container">
        <MinContentGrid />
      </div>
    </section>
  </main>
</template>

<script>
import AutoFitAndFill from '../components/Grid/AutoFitAndFill.vue';
import MinContentGrid from '../components/Grid/MinContentGrid.vue';

export default {
  components: {
    AutoFitAndFill,
    MinContentGrid
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
