
export function updateDOM(matchingPlanets) {
    let newDiv = document.createElement('div');
    newDiv.className = "overlay";
    //En ny div skapas, får namnet newDiv och får klassen overlay tilldelad sig.
    let searchResults = document.querySelector('#search-results');
    //Elementet search-results hämtas och sparas i searchResults
    const oldDivs=document.querySelectorAll('.overlay'); 
    oldDivs.forEach(function(element){
        element.remove();
    //Element som fått klassen overlay sparas i oldDivs. Sedan tas alla oldDivs bort oför att skapa plats åt nya sökningar. Tidigare sökningar tas bort. 
    });

    searchResults.appendChild(newDiv);
    //newDiv läggs till under searchResults(barn/förälder)
  

    matchingPlanets.forEach(planet => {

        //newDiv
        let planetName = document.createElement('h1');
        planetName.textContent = planet.name;
        planetName.className = "planetNameClass";
    
        let planetLatin = document.createElement('h3');
        planetLatin.innerHTML = planet.latinName;
        planetLatin.className="planetLatinClass";
    
        let planetInfo= document.createElement('p');
       planetInfo.textContent = planet.desc;
    
        newDiv.appendChild(planetName);
        newDiv.appendChild(planetLatin);  
        newDiv.appendChild(planetInfo);
    
         //infoDiv
        let planetArea = document.createElement('p');
        planetArea.innerHTML = '<span style class="planet-titles">OMKRETS: </span>' + planet.circumference + 'km';
    
        let planetDist= document.createElement('p');
        planetDist.innerHTML = '<span style class="planet-titles">KM FRÅN SOLEN: </span>' + planet.distance + 'km';
    
        let planetTempDay= document.createElement('p');
        planetTempDay.innerHTML = '<span style class="planet-titles">TEMPERATUR DAG: </span>' + planet.temp.day + 'C';
    
        let planetTempNight= document.createElement('p');
        planetTempNight.innerHTML = '<span style class="planet-titles">TEMPERATUR NATT: </span>' + planet.temp.night + 'C';
    
        let infoDiv = document.createElement('div');
        infoDiv.className = 'infoDivClass';
    
        infoDiv.appendChild(planetArea);
        infoDiv.appendChild(planetDist);
        infoDiv.appendChild(planetTempDay);
        infoDiv.appendChild(planetTempNight);
        
        newDiv.appendChild(infoDiv);
    //infoDiv läggs till under newDiv(barn/förälder)
     
    });
}
