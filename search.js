
export function searchPlanets(planetSearchText, planetDataList) {
   
    let filteredPlanets = planetDataList.filter(planet => {
        return planet.name.toLowerCase().startsWith(planetSearchText.toLowerCase());
    });
    return filteredPlanets;
}

// Tar söktexten och listan på alla planeterna och sedan filtrerar fram bara de planeter som innehåller söktexten
// startsWith gör att det går att söka på endast första bokstaven

