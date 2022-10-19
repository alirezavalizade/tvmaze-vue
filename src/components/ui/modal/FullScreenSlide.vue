<script setup>
import { defineProps, defineEmits, Teleport, Transition } from "vue";
import { useKeyboard } from "@/functions/use";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const handleKeyboard = () => {
  if (!props.isOpen) {
    return;
  }

  emit("close");
};

useKeyboard(["Escape"], handleKeyboard, "keyup");
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="isOpen"
        class="fixed left-0 right-0 top-[4.95rem] bottom-0 z-20 bg-black-900 flex flex-col overflow-auto will-change-transform"
      >
        <slot> </slot>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-all duration-500;
}

.v-enter-from,
.v-leave-to {
  @apply translate-y-full;
}
</style>
