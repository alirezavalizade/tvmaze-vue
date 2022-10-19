<script setup>
import { defineAsyncComponent, inject } from "vue";
import { useSelector } from "@xstate/vue";
import { useMatchers } from "@/functions/xstate";

import IconButton from "@/components/ui/IconButton.vue";
import Logo from "@/vectors/swr.vue";
import Filters from "@/components/shows/Filters.vue";
import ModalControl from "@/components/top-nav/ModalControl.vue";
import SearchForm from "@/components/top-nav/SearchForm.vue";

import * as matchers from "@/logic/tvmaze/matchers";
import * as selectors from "@/logic/tvmaze/selectors";

const CloseIcon = defineAsyncComponent(() => import("@/vectors/close.vue"));
const FilterIcon = defineAsyncComponent(() => import("@/vectors/filter.vue"));

const showsService = inject("showsService");
const showFilters = useSelector(showsService, selectors.getShowFiltersValue);
const isViewingShowDetail = useMatchers(
  showsService,
  matchers.isViewingShowDetail
);
const isLoading = useMatchers(showsService, matchers.isLoading);

const toggleFilters = () => {
  showsService.send("TOGGLE_FILTERS");
};
</script>

<template>
  <nav class="space-y-4">
    <div class="grid grid-cols-[1fr_auto_1fr] h-12">
      <div class="flex justify-start">
        <Logo
          class="flex-shrink-0 align-middle fill-current w-12 h-12 hidden sm:block"
        />
      </div>
      <div class="flex items-center space-x-2">
        <SearchForm />

        <IconButton
          size="lg"
          @click="toggleFilters"
          :isDisabled="isViewingShowDetail"
          :isLoading="isLoading"
          variant="inverted"
        >
          <CloseIcon
            v-if="showFilters && !isViewingShowDetail"
            class="w-6 h-6"
          />
          <FilterIcon v-else class="w-6 h-6" />
        </IconButton>
      </div>
      <ModalControl />
    </div>

    <Filters v-if="showFilters" />
  </nav>
</template>
