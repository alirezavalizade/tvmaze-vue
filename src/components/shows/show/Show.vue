<script setup>
import { inject } from "vue";
import { useMatchers } from "@/functions/xstate";

import * as matchers from "@/logic/tvmaze/matchers";

import FullScreenSlide from "@/components/ui/modal/FullScreenSlide.vue";
import Seasons from "@/components/shows/seasons/Seasons.vue";
import ShowInfo from "@/components/shows/show/ShowInfo.vue";

const showsService = inject("showsService");
const isViewingShowDetail = useMatchers(
  showsService,
  matchers.isViewingShowDetail
);

const onClose = () => {
  showsService.send("TOGGLE_VIEW_SHOW_DETAIL");
};
</script>

<template>
  <FullScreenSlide :isOpen="isViewingShowDetail" @close="onClose">
    <ShowInfo />
    <Seasons />
  </FullScreenSlide>
</template>
