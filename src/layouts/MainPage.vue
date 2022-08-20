<template>
  <div class="layout">
    <TheHeader class="layout-header" />
    <TheSidebar class="layout-sidebar"/>
    <TheContent class="layout-content" />
    <TheFooter class="layout-footer"/>
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

<style lang="postcss" scoped>
@import './MainPage.pcss';
</style>
