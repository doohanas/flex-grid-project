<template>
  <div>
    <button
      class="button"
      v-bind="{...$props,...$attrs}"
      v-on="$listeners"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="postcss" scoped>
.button {
  @apply p-2 rounded-md shadow-md bg-green-800 text-center text-[14px] leading-[23px]
  text-yellow-50;
}
</style>
