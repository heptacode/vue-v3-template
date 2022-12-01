<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  list: boolean;
  flow: boolean;
  align: string;
  justify: string;
}
const props = withDefaults(defineProps<Props>(), {
  list: false,
  flow: false,
  align: '',
  justify: '',
});

const getStyle = computed(() => {
  const styles: string[] = [];
  if (props.list) {
    styles.push(`padding: 16px 24px;`);
  }
  if (props.flow) {
    styles.push(`flex-flow: ${props.flow};`);
  }
  if (props.align) {
    styles.push(`align-items: ${props.align};`);
  }
  if (props.justify) {
    styles.push(`justify-content: ${props.justify};`);
  }
  return styles.join('');
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
