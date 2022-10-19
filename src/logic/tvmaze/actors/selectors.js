export function getShowInfo(state) {
  // eslint-disable-next-line no-unused-vars
  const { seasons, ...rest } = state.context.data;

  return rest;
}

export function getShowSeasons(state) {
  return state.context.data.seasons;
}

export function getEpisodesBySeasonsId(id) {
  return (state) => {
    return state.context.data.seasons.find((item) => {
      return id === item.id;
    })?.episodes;
  };
}
