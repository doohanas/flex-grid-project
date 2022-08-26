<template>
  <main class="container">
    <h1>Common Issues with Flexbox</h1>
    <section class="section__wrapper">
      <h2>1. Flexbox Wrapping</h2>
      <div class="section__container">
        <FlexWrap />
      </div>
    </section>
  </main>
</template>

<script>
import FlexWrap from '../components/Flex/FlexWrap.vue';

export default {
  components: {
    FlexWrap,
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
