<script setup>
import { inject } from "vue";
import { useSelector } from "@xstate/vue";

import { getShowService } from "@/logic/tvmaze/selectors";
import { getShowSeasons } from "@/logic/tvmaze/actors/selectors";

import Heading from "@/components/ui/Heading.vue";
import Season from "@/components/shows/seasons/Season.vue";
import LoadingState from "@/components/LoadingState.vue";

const showsService = inject("showsService");
const service = useSelector(showsService, getShowService);
const data = useSelector(service.value, getShowSeasons);
</script>
<template>
  <div class="text-center md:text-left mt-4">
    <Heading as="h2" class="text-xl md:text-2xl lg:text-4xl px-4 md:px-12">
      Seasons
    </Heading>

    <template v-if="!!data">
      <Season v-for="item in data" :key="item.id" :data="item" />
    </template>
    <LoadingState v-else />
  </div>
</template>
