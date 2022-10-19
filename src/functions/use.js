import { ref, onMounted, onUnmounted } from "vue";

export function useToggle(initial) {
  const value = ref(initial);

  function toggle() {
    value.value = !value.value;
  }

  return [value, toggle];
}

export const useKeyboard = (keys, fn, type = "keydown") => {
  const handleKeyboard = (event) => {
    if (keys.length === 0) {
      fn(event);
      return;
    }

    if (keys.includes(event.key)) {
      fn(event);
    }
  };

  onMounted(() => {
    window.addEventListener(type, handleKeyboard);
  });

  onUnmounted(() => {
    window.removeEventListener(type, handleKeyboard);
  });

  return null;
};
