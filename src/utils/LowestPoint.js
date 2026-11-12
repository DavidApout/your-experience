import { StatTotals } from "./StatTotals";

export function lowestPoint (experience){
const totalStats = StatTotals(experience)
let lowestPoints = Infinity
let lowestStat = ""
for (const [stat,points] of Object.entries(totalStats)){
if (points <= lowestPoints){
lowestPoints = points
lowestStat = stat
}
}
return {
lowestPoints,
lowestStat
}
}