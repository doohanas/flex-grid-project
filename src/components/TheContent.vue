<template>
  <section>
    <article class="card__container">
      <div v-for="(character) in characters" :key="character.id">
      <BaseCard
        :data="character"
      />
      </div>
    </article>
  </section>
</template>

<script>
import EventData from '@/services/EventData';
import BaseCard from '@/components/base/BaseCard.vue';

export default {
  name: 'TheContent',
  components: {
    BaseCard,
  },
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    EventData.getData()
      .then((res) => {
        this.characters = res.data.results;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.card__container {
  margin: 8px 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-gap: 16px;
}
</style>
