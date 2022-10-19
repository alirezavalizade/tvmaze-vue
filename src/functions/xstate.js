import { ref, onUnmounted } from "vue";

export const useMatchers = (service, matcher) => {
  const state = service?.state ?? service?.initialState;
  const initialState = matcher(state);
  const condition = ref(initialState);
  const { unsubscribe } = service.subscribe((state) => {
    if (!state.changed) return;

    condition.value = matcher(state);
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return condition;
};
