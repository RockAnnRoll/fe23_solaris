
// Funktionen tar söktexten och listan på alla planeterna och sedan filtrerar fram bara de planeter som innehåller söktexten

export function searchPlanets(planetSearchText, planetDataList) {
   
    let filteredPlanets = planetDataList.filter(planet => {
        return planet.name.toLowerCase().startsWith(planetSearchText.toLowerCase());
        // startsWith gör att det går att söka på endast första bokstaven
        //returnerar lista oavsett det är skrivet med stora eller små bokstäver
    });
    return filteredPlanets;
}



