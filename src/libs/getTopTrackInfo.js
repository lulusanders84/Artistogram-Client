export const getTopTrackInfo = (track, year) => {
  const { name: title, duration_ms: duration, id } = track;
  return {
    title,
    duration,
    year,
    id,
  };
};
