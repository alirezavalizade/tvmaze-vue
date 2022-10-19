<script setup>
import { defineProps } from "vue";
import { useToggle } from "@/functions/use";
import { getYear } from "@/functions/date";

import Heading from "@/components/ui/Heading.vue";
import Button from "@/components/ui/Button.vue";
import Episodes from "@/components/shows/episodes/Episodes.vue";
import ArrowDownIcon from "@/vectors/arrow-down.vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const [showEpisodes, toggle] = useToggle(false);
</script>
<template>
  <div
    class="group transition-colors duration-300 p-4 md:p-12"
    :class="{
      'bg-neutral-900': showEpisodes,
      'hover:bg-neutral-900': !showEpisodes,
    }"
  >
    <div
      class="flex flex-col md:flex-row items-center rounded-md mb-4 md:mb-0 space-y-8 md:space-y-0 md:space-x-8"
    >
      <div
        class="w-40 rounded-md overflow-hidden aspect-[9_/_12] bg-neutral-700"
      >
        <img
          v-if="data.image?.original"
          class="max-w-full block w-full"
          :src="data.image?.original"
          :alt="data.number"
        />
      </div>
      <div
        class="flex flex-col items-center flex-1 self-stretch md:py-4 md:items-start"
      >
        <div class="flex-1 space-y-4 text-center md:text-left">
          <Heading as="h2" class="text-lg md:text-xl lg:text-2xl">
            Season {{ data.number }} ({{ getYear(data.premiereDate) }})
          </Heading>
          <p v-if="data.episodeOrder" class="opacity-90">
            {{ data.episodeOrder }} Episodes
          </p>
        </div>

        <div
          class="w-full sm:w-auto group-hover:opacity-100 opacity-80 transition-opacity duration-300"
          :class="{ 'opacity-100': showEpisodes }"
        >
          <Button
            variant="info"
            size="sm"
            class="uppercase !rounded-md mt-4 md:mt-0 !w-full"
            @click="toggle"
          >
            <ArrowDownIcon
              class="w-6 h-6 transform-gpu transition-transform duration-300 ml-2"
              :class="{
                'rotate-180': showEpisodes,
              }"
            />
            view episodes
          </Button>
        </div>
      </div>
    </div>

    <Episodes v-if="showEpisodes" :seasonId="data.id" />
  </div>
</template>
