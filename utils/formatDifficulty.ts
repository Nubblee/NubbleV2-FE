const formatDifficulty = (levels: string[]) => {
  if (levels.length === 0) return;

  return `${levels[0]} ~ ${levels.at(-1)}`;
};

export default formatDifficulty;
