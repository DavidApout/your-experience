import { HighestPoint } from "../utils/HIghestPoint";
import { lowestPoint } from "../utils/LowestPoint";
export function MyStats({ name, experiences }) {
  const High = HighestPoint(experiences);
  const Low = lowestPoint(experiences);
  const totalExp = experiences.length
  const totalStars = Math.floor(totalExp / 5)

  return (
    <>
      <h2>My Stats</h2>
      <p>{name}</p>
      <p>Total Stars: {totalStars}</p>
      <p>Total Experiences: {totalExp}</p>
      <p>Highest Stat: {High.highestStat}</p>
      <p>Lowest Stat: {Low.lowestStat}</p>
    </>
  );
}
