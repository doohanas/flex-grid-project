<template>
  <div class="card resizable">
    <img
      :src="`https://i.pravatar.cc/200`"
      class="card__image"
      width="56"
      height="56"
      alt="avatar"
    />
    <div class="card__description">
      <h3>Doohan AS</h3>
      <p>Lorem ipsum dolor sit amet.</p>

      <!-- <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam vel
        harum, aliquid ea vitae explicabo nobis, quasi sunt aspernatur tenetur
        dicta autem! Ducimus quae voluptates facere eligendi excepturi earum
        adipisci.
      </p> -->
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
  width: 500px;
  border-radius: 12px;
  display: flex;
}

.card__image {
  border-radius: 50%;
  /* align-self: start; */

  /** or */

  /* width: 56px;
  height: 56px; */
}

.card__description {
  text-align: left;
  margin-left: 1rem;
}

.card__description > h3 {
  font-size: 18px;
  font-weight: bold;
}
</style>
