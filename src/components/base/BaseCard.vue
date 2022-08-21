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
      <h5>{{ data.name }}</h5>
      <h6>
      <span>{{ data.species }} | </span>
      <span>{{ data.gender }} | </span>
      <span>{{ data.location.name }}</span>
      </h6>
      <h6>Episode
      <span
          v-for="(chapter, index) in data.episode"
          :key="index"
        >
          {{ `${index + 1}` }}
      </span>
      </h6>
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

<style scoped>
.card {
  font-size: 15px;
  height: auto;
  line-height: 18px;
  padding: 12px;
  background-color: #424242;
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-out;
  /* Layout Card using flexbox */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card:hover {
  transform: scale(1.1);
  cursor: pointer;
}

/* .card--rgb::after {
  content:"";
  background: linear-gradient(45deg,
  #ff0000 0%,
  #ff9a00 10%,
  #d0de21 20%,
  #4fdc4a 30%,
  #3fdad8 40%,
  #2fc9e2 50%,
  #1c7fee 60%,
  #5f15f2 70%,
  #ba0cf8 80%,
  #fb07d9 90%,
  #ff0000 100%  )
  repeat 0% 0% / 300% 100%;
  position: absolute;
  inset: -3px;
}

.card--rgb::after {
  animation: rgb 5s linear infinite;
  border-radius: 16px;
  filter: blur(8px);
  z-index: -10;
} */

.card__image > img {
  width: 100%;
  border-radius: 50%;
}

.card__information {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
}

</style>
