
//Funktionen uppdaterar information om planeter på webbsidan. Skapar nya HTML-element för varje planet och lägger till dem i DOM, men innan dess tar funktionens 
//bort alla gamla element för att hålla sidan uppdaterad med senaste informationen. 


export function updateDOM(matchingPlanets) {
    let newDiv = document.createElement('div');
    newDiv.className = "overlay";
    //En ny div skapas, får namnet newDiv och får klassen overlay tilldelad sig.
    let searchResults = document.querySelector('#search-results');
    //Elementet search-results hämtas och sparas i searchResults
    const oldDivs=document.querySelectorAll('.overlay'); 
    oldDivs.forEach(function(element){
        element.remove();
    //Element som fått klassen overlay sparas i oldDivs. Sedan tas alla oldDivs bort oför att skapa plats åt nya sökningar. 
    });

    searchResults.appendChild(newDiv);
    //newDiv läggs till under searchResults(barn/förälder)
  

    matchingPlanets.forEach(planet => {

        //newDiv

        let planetName = document.createElement('h1');
        planetName.textContent = planet.name;
        planetName.className = "planetNameClass";
        //Planetens namn
    
        let planetLatin = document.createElement('h3');
        planetLatin.innerHTML = planet.latinName;
        planetLatin.className="planetLatinClass";
        //Latinska namn
    
        let planetInfo= document.createElement('p');
        planetInfo.textContent = planet.desc;
        //Info om planeten
    
        newDiv.appendChild(planetName);
        newDiv.appendChild(planetLatin);  
        newDiv.appendChild(planetInfo);
    
         //infoDiv

        let planetArea = document.createElement('p');
        planetArea.innerHTML = '<span style class="planet-titles">OMKRETS: </span>' + planet.circumference + ' km';
        //Omkrets
    
        let planetDist= document.createElement('p');
        planetDist.innerHTML = '<span style class="planet-titles">KM FRÅN SOLEN: </span>' + planet.distance + ' km';
        //Avstånd
    
        let planetTempDay= document.createElement('p');
        planetTempDay.innerHTML = '<span style class="planet-titles">TEMPERATUR DAG: </span>' + planet.temp.day + ' C';
        //Dagstemperatur
    
        let planetTempNight= document.createElement('p');
        planetTempNight.innerHTML = '<span style class="planet-titles">TEMPERATUR NATT: </span>' + planet.temp.night + ' C';
        //Natttemperatur
    
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
