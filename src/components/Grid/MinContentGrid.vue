<template>
  <div class="wrapper resizable">
    <div class="page">
      <main class="page__item page__item--main">     
        <div class="slider">
          <div v-for="i in 5" :key="i" class="slider__item">
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
      </main>
      <aside class="page__item page__item--aside">
        <p>Aside</p>
      </aside>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  position: relative;
  max-width: 100%;
  display: flex;
  flex: 1;
  border: 1px solid #ccc;
  padding: 24px;
}
.page {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 1rem;

  &__item {
    padding: 1rem;
    background-color: #424242;
    min-height: 200px;
    border-radius: 8px;

    &--main {
       /* prevent the grid item from respecting the
    * minimum content size
    */
    /* min-width: 0; */
    }

    &__aside {
      min-height: 200px;
    }
  }
}

.slider {
  display: flex;
  overflow-x: auto;

  &__item {
    background-color: antiquewhite;
    margin-right: 1rem;
  }
}
</style>