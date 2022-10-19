<script setup>
import { inject, defineProps } from "vue";
import { getYear } from "@/functions/date";
import sanitize from "sanitize-html";

import Heading from "@/components/ui/Heading.vue";
import Button from "@/components/ui/Button.vue";
import Rate from "@/components/Rate.vue";
import Tags from "@/components/Tags.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  fullDetail: {
    type: Boolean,
    default: false,
  },
});

const showsService = inject("showsService");

const onClick = () => {
  showsService.send("TOGGLE_VIEW_SHOW_DETAIL", { value: props.data });
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center rounded-md mb-4 md:mb-0 space-y-8 md:space-y-0 md:space-x-8"
    :class="{
      'p-4 md:p-8 hover:bg-neutral-800': !fullDetail,
    }"
    v-bind="$attrs"
  >
    <div
      class="w-full sm:w-44 md:w-52 xl:w-56 rounded-md overflow-hidden aspect-[9_/_13] bg-neutral-700"
    >
      <img
        v-if="data.image?.original"
        :src="data.image?.original"
        :alt="data.name"
        class="w-full block max-w-full"
      />
    </div>
    <div
      class="flex flex-col items-center flex-1 self-stretch md:py-4 md:items-start"
    >
      <div class="flex-1 space-y-4 text-center md:text-left">
        <Heading is="h2" class="text-lg md:text-xl lg:text-2xl">
          {{ data.name }} ({{ getYear(data.premiered) }}) - {{ data.status }}
        </Heading>
        <div v-if="data.network">
          <p>
            Network:{{ " " }}
            <component
              :is="data.network.officialSite ? 'a' : 'span'"
              :href="data.network.officialSite"
              target="_blank"
              :class="{ underline: data.network.officialSite }"
              rel="noreferrer"
            >
              {{ data.network.name }} </component
            >{{ " " }} - {{ data.network?.country?.name }}
          </p>
        </div>
        <div
          class="flex items-center justify-center md:justify-start space-x-4"
        >
          <Rate v-if="data.rating.average">{{ data.rating.average }}</Rate>
          <Tags v-if="data.genres" :data="data.genres" />
        </div>
        <div
          v-html="sanitize(data.summary)"
          :class="{ 'line-clamp-4 md:line-clamp-3': !fullDetail }"
        ></div>
      </div>

      <div v-if="!fullDetail" class="w-full sm:w-auto">
        <Button
          variant="info"
          size="sm"
          class="uppercase !rounded-md mt-4 md:mt-0 !w-full"
          @click="onClick"
        >
          view more
        </Button>
      </div>
    </div>
  </div>
</template>
