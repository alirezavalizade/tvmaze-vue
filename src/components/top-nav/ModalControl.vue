<script setup>
import { inject } from "vue";

import { useMatchers } from "@/functions/xstate";
import * as matchers from "@/logic/tvmaze/matchers";

import IconButton from "@/components/ui/IconButton.vue";
import CloseIcon from "@/vectors/close.vue";

const showsService = inject("showsService");
const isViewingShowDetail = useMatchers(
  showsService,
  matchers.isViewingShowDetail
);

const onClick = () => {
  showsService.send("TOGGLE_VIEW_SHOW_DETAIL");
};
</script>

<template>
  <div class="flex items-center justify-end">
    <IconButton v-if="isViewingShowDetail" size="lg" @click="onClick">
      <CloseIcon className="w-4 h-4" />
    </IconButton>
  </div>
</template>
