<script setup>
import { setupShows } from "@/providers/shows";
import TopNav from "@/components/top-nav/TopNav.vue";
import Shows from "@/components/shows/Shows.vue";

setupShows();
</script>

<template>
  <main
    role="main"
    class="flex flex-col w-full overflow-hidden min-h-full max-h-full p-4"
  >
    <TopNav />
    <div
      class="flex flex-col flex-1 bg-neutral-900 rounded-md mt-4 overflow-auto"
      id="main"
    >
      <Shows />
    </div>
  </main>
</template>
