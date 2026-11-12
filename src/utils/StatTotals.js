export function StatTotals(experience) {
  return experience.reduce((acc, entry) => {
    acc[entry.stat] = (acc[entry.stat] ?? 0) + 1;
    return acc;
  }, {});
}
