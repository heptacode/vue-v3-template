<script setup lang="ts"></script>

<template>
  <Transition name="router" v-bind="$attrs">
    <slot />
  </Transition>
</template>

<style lang="scss" scoped>
.router {
  &-enter-active,
  &-leave-active {
    position: absolute;
    transition-duration: 0.5s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>
