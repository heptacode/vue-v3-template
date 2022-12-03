<script setup lang="ts">
import { router } from '@/router.js';
</script>

<template>
  <div class="home">
    <h1>Welcome Home!</h1>
    <button @click="router.push('/info')">Info</button>
  </div>
</template>
