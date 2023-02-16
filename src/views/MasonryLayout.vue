<template >
  <div class="max-w-full h-full overflow-y-auto columns-3 md:columns-4 lg:columns-4 xl:columns-6 gap-[3px] image--column">
     <img
     class="pb-2 image-check"
     v-for="item in 50" 
     :key="item" 
     :src="checkImg(item)" 
     alt=""
     >
  </div>
</template>

<script>
export default {
  data() {
    return {
      landscapeImage: 'https://picsum.photos/500/300',
      largeImage: 'https://picsum.photos/1200/600',
      potraitImage: 'https://picsum.photos/300/300'
    }
  },
  methods: {
    checkImg (item) {
      if (item % 2 === 0) {
        return this.landscapeImage
      } if (item % 3 === 0) {
        return this.largeImage
      } 
        return this.potraitImage
    }
  }
}
</script>

<style scoped>
.image--column {
  column-fill: balance;
}

</style>