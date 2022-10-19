<script setup>
import { inject, defineAsyncComponent } from "vue";
import { useSelector } from "@xstate/vue";
import { useMatchers } from "@/functions/xstate";
import * as matchers from "@/logic/tvmaze/matchers";
import { getDynamicShowsWithFilter } from "@/logic/tvmaze/selectors";

import Button from "@/components/ui/Button.vue";
import ShowListItem from "@/components/shows/list/ShowListItem.vue";

const NoResultFound = defineAsyncComponent(() =>
  import("@/vectors/no-result-found.vue")
);

const showsService = inject("showsService");
const isLoading = useMatchers(showsService, matchers.isLoading);
const isLoadingMoreData = useMatchers(showsService, matchers.isLoadingMoreData);
const isSearching = useMatchers(showsService, matchers.isSearching);
const data = useSelector(showsService, getDynamicShowsWithFilter);

const onClick = () => {
  showsService.send("LOAD_MORE");
};
</script>

<template>
  <div
    class="flex-1 flex flex-col"
    v-if="isLoadingMoreData ? true : !isLoading"
  >
    <div
      v-if="isSearching && data?.length === 0"
      class="flex flex-col items-center justify-center w-full md:w-1/2 xl:w-1/3 mx-auto flex-1"
    >
      <div class="w-full">
        <NoResultFound />
      </div>
      <p class="text-xl">Ups!... no results found</p>
    </div>
    <template v-if="data?.length">
      <ShowListItem v-for="item in data" :key="item.name" :data="item" />
      <div
        v-if="!isSearching"
        class="flex items-center justify-center py-4 md:py-8"
      >
        <Button
          size="lg"
          variant="info"
          class="uppercase"
          @click="onClick"
          :isLoading="isLoadingMoreData"
        >
          Load more
        </Button>
      </div>
    </template>
  </div>
</template>
