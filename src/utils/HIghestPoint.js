import { StatTotals } from "./StatTotals";
export function HighestPoint(experiences) {
  const totalStats = StatTotals(experiences);
  let highestPoints = 0;
  let highestStat = "";
  for (const [stat, points] of Object.entries(totalStats)) {
    if (points >= highestPoints) {
      highestPoints = points;
      highestStat = stat;
    }
  }

  return {
    highestPoints,
    highestStat,
  };
}
