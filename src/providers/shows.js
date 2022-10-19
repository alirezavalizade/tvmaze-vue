import { provide } from "vue";
import { useInterpret } from "@xstate/vue";
import { showsMachine } from "@/logic/tvmaze/shows-machine";

export const setupShows = () => {
  const showsService = useInterpret(showsMachine, { devTools: true });

  if (process.env.NODE_ENV === "development") {
    showsService.onTransition(console.log);
  }

  provide("showsService", showsService);
};
