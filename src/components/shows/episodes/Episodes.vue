<script setup>
import { defineProps, inject } from "vue";
import { useSelector } from "@xstate/vue";

import { getShowService } from "@/logic/tvmaze/selectors";
import { getEpisodesBySeasonsId } from "@/logic/tvmaze/actors/selectors";

import Heading from "@/components/ui/Heading.vue";
import LoadingState from "@/components/LoadingState.vue";
import Episode from "@/components/shows/episodes/Episode.vue";

const props = defineProps({
  seasonId: {
    type: [String, Number],
    required: true,
  },
});

const showsService = inject("showsService");
const service = useSelector(showsService, getShowService);
const episodes = useSelector(
  service.value,
  getEpisodesBySeasonsId(props.seasonId)
);

setTimeout(() => {
  service.value.send("LOAD_SEASON_EPISODE", { seasonId: props.seasonId });
}, 1000);
</script>

<template>
  <div v-if="episodes" class="space-y-4 mt-12">
    <Heading is="h3" class="text-xl"> Episodes </Heading>
    <Episode v-for="item in episodes" :key="item.name" :data="item" />
  </div>
  <LoadingState class="mt-6" v-else />
</template>
