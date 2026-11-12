
export function StatCard ({name,points,prestige,star}){
    return(
        <>
            <h2>{name}</h2>
            <p>{name} Points: {points}</p>
            <p>{name} Stars: {star}</p>
            <p>{name} Prestige: {prestige}</p>
        </>        
    )
}

