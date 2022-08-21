<template>
  <section class="card">
    <div class="card__status">
      <span v-if="statusColorR" class="status-icon-r"></span>
      <span v-else-if="statusColorG" class="status-icon-g"></span>
      <span>Status: {{ data.status }}</span>
    </div>
    <div class="card__image">
      <img :src="data.image" alt="img error">
    </div>
    <div class="card__information">
      <div>
        <h1>{{ data.name }}</h1>
      </div>
      <div>
        <span>{{ data.species }}  | </span>
        <span>{{ data.gender }}  | </span>
        <span>{{ data.location.name }}</span>
      </div>
      <div class="inlne-flex">
        <p>Episode</p>
        <span
          v-for="(chapter, index) in data.episode"
          :key="index"
        >
          {{ `${index + 1}` }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      status: this.data.status,
    };
  },
  computed: {
    statusColorR() {
      return this.status === 'Dead';
    },
    statusColorG() {
      return this.status === 'Alive';
    },
  },
};
</script>
