<script setup lang="ts">
import RouterTransition from '@/components/transitions/RouterTransition.vue';
import { useGlobalStore } from '@/stores/global.js';

const globalStore = useGlobalStore();
</script>

<template>
  <div class="root" :class="{ darkTheme: globalStore.isThemeDark }">
    <main class="root__content">
      <router-view v-slot="{ Component }" class="root__content__item">
        <RouterTransition>
          <component :is="Component" />
        </RouterTransition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.root {
  position: absolute;
  width: 100%;
  min-height: 100%;
  overflow: hidden;

  &__content {
    display: flex;
    justify-content: center;

    width: 100%;
    min-height: 100vh;

    &__item {
      width: 100%;
      max-width: 1200px;
      min-height: 100%;
      padding: 60px 50px;
    }
  }
}
</style>
