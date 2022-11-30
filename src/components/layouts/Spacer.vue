<script setup lang="ts">
interface Props {
  divide?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  divide: false,
});
</script>

<template>
  <div class="spacer" :class="{ spacer__divider: props.divide }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.spacer {
  width: 100%;

  margin: 60px 0;

  &__divider {
    margin: 80px 0;
    border-top: 1px solid var(--color-border);
  }
}
</style>
