<script setup>
import { inject } from "vue";
import { useSelector } from "@xstate/vue";

import { getShowService } from "@/logic/tvmaze/selectors";
import { getShowInfo } from "@/logic/tvmaze/actors/selectors";

import ShowListItem from "@/components/shows/list/ShowListItem.vue";

const showsService = inject("showsService");
const service = useSelector(showsService, getShowService);
const data = useSelector(service.value, getShowInfo);
</script>

<template>
  <ShowListItem
    v-if="data"
    class="p-4 md:p-12"
    :data="data"
    :fullDetail="true"
  />
</template>
