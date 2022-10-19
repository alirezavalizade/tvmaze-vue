<script setup>
import { defineProps } from "vue";
import Button from "@/components/ui/Button.vue";
import PlayIcon from "@/vectors/play.vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center space-x-4 p-4 rounded-md hover:bg-neutral-700 group"
  >
    <div>
      <p>{{ data.number || "0" }}.</p>
    </div>
    <div class="flex-1 flex justify-between items-center truncate">
      <p class="truncate">{{ data.name }}</p>
      <div
        class="group-hover:opacity-100 opacity-60 transition-opacity duration-300"
      >
        <Button
          is="a"
          :href="data.url"
          target="_blank"
          variant="info"
          size="sm"
          class="uppercase"
        >
          <PlayIcon class="mr-4 w-6 h-6" />
          <span> play </span>
        </Button>
      </div>
    </div>
  </div>
</template>
