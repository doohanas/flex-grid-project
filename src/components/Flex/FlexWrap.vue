<template>
  <div class="card resizable">
    <h2>My Contacts</h2>
    <div class="card__list">
      <div v-for="i in 5" :key="i" class="card__item">
        <img
          class="card__item__avatar"
          :src="`https://i.pravatar.cc/100?img=${i + 1}`"
          width="32"
          height="32"
          alt="avatar"
        />
        <p class="card__item__title">Lorem Ipsum</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 24px;
}

.card > h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
}

.card__list {
  display: flex;
  justify-content: start;

  /**
   * Using Flex Wrap to prevent item blowout
   */
  /* flex-wrap: wrap; */
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
  background-color: orangered;
  margin-bottom: 8px;
}

.card__item__title {
  font-size: 12px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}
</style>
