<script setup>
import { inject, ref, watch } from "vue";

import InputField from "@/components/ui/InputField.vue";

const showsService = inject("showsService");
const value = ref("");

watch(value, (newValue) => {
  showsService.send("SET_FILTERS", { value: { query: newValue } });
});
</script>

<template>
  <form>
    <InputField
      placeholder="Search for any shows here"
      class="min-w-[300px] md:min-w-[400px]"
      v-model="value"
    />
  </form>
</template>
