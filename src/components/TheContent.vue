<template>
  <section>
    <div v-for="(character) in characters" :key="character.id">
      <BaseCard
        :data="character"
      />
    </div>
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
