<script setup lang="ts">
import { computed, StyleValue } from 'vue';

interface Props {
  list: boolean;
  flow: string;
  align: string;
  justify: string;
}
const props = withDefaults(defineProps<Props>(), {
  list: false,
  flow: '',
  align: '',
  justify: '',
});

const getStyle = computed(() => {
  return {
    padding: props.list ? '16px 24px' : 'inherit',
    flexFlow: props.flow,
    alignItems: props.align,
    justifyContent: props.justify,
  } satisfies StyleValue;
});
</script>

<template>
  <div class="flex-layout" :style="getStyle" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.flex-layout {
  display: flex;
  justify-content: space-between;
}
</style>
