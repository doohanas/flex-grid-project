<template>
  <div>
    <TheHeader />
    <TheSidebar />
    <TheContent  />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSide.vue';
import TheContent from '@/components/TheContent.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'MainPage',
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
    TheFooter,
  },
};
</script>
