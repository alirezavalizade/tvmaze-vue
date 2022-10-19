<script setup>
import { inject } from "vue";
import { useSelector } from "@xstate/vue";
import { getSelectedGenres, getGenres } from "@/logic/tvmaze/selectors";

import Button from "@/components/ui/Button.vue";

const showsService = inject("showsService");
const data = useSelector(showsService, getGenres);
const selectedGenres = useSelector(showsService, getSelectedGenres);

const onClick = (e) => {
  showsService.send("SET_GENRES_FILTERS", { value: e.target.dataset.value });
};
</script>

<template>
  <div v-if="!data?.length">
    <p>No filters available.</p>
  </div>
  <div
    v-else
    class="snap-x snap-mandatory overflow-x-auto flex items-center space-x-4 py-1"
  >
    <div v-for="item in data" class="snap-start" :key="item">
      <Button
        size="md"
        :variant="selectedGenres.includes(item) ? 'info' : 'inverted'"
        :data-value="item"
        @click="onClick"
      >
        {{ item }}
      </Button>
    </div>
  </div>
</template>
