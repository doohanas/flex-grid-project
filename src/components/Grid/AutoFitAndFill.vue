<template>
  <article class="card resizable">
    <h2>My Cards</h2>
     <div class="card__list">
      <div v-for="i in 5" :key="i" class="card__item">
        <img
          class="card__item__avatar"
          src="https://avatars.dicebear.com/api/croodles/:seed.svg"
          width="32"
          height="32"
          alt="avatar"
        />
        <p class="card__item__title">Lorem Ipsum</p>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  data () {
    return {
      characters: []
    }
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 24px;
}

.card__list {
  margin: 8px 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /**
   * Using auto-fit to expand the grid items to fill the available space.
   */
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-gap: 12px;
}

.card__item {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 8px 8px 0;
}

.card__item__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-bottom: 8px;
}

.card__item__title {
  font-size: 12px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}
</style>
