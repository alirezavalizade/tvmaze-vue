<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <div v-for="item in data" :key="item">
      <p class="text-sm bg-zinc-50 text-zinc-900 px-1 rounded-sm">
        {{ item }}
      </p>
    </div>
  </div>
</template>
