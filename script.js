const baseUrl=("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"); //Bas URL
const searchField=document.getElementById("search-field");
const submitBtn=document.getElementById("input-button");
const resultSearch=document.getElementById("search-results");


//Hämta api-nyckel och api-data 
let allPlanetsData = [];
fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
    method: 'POST',
})
.then(response => response.json())
.then(data => {
    console.log(data); 
    let apiKey = data.key;     //Hämtat api-nyckeln med POST

    return fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        method: 'GET',
        headers: {'x-zocom': apiKey}    //Hämtat data om planeterna med GET
    });
})
.then(response => response.json())
.then(data => {
    allPlanetsData = data.bodies;   
    console.log('allPlanetsData:', allPlanetsData); 
})
.catch(error => {
    console.error('Något gick fel:', error); 
});

//Hämta sökresultat och hämta data från allPlanetsData
submitBtn.addEventListener('click', function()
{ 
    let newDiv = document.createElement('div');
    newDiv.id = 'new-div';
    newDiv.className = "overlay";
    let footer = document.querySelector('footer');
    document.body.insertBefore(newDiv, footer);
    let searchText = searchField.value; // Hämtar texten från sökfältet

let matchingPlanets = allPlanetsData.filter(planet => {
    // Söker igenom planetsData och returnerar de planeter vars namn matchar söktexten
    return planet.name.toLowerCase().includes(searchText.toLowerCase());
});
newDiv.innerHTML = '';

matchingPlanets.forEach(planet => {
    let planetName = document.createElement('h1');
    planetName.textContent = planet.name;
    planetName.className = "planetNameClass";

    let latinLabel = document.createElement('h3');
    latinLabel.innerHTML = planet.latinName;
    latinLabel.className="planetLatinClass";

 
    let planetInfo= document.createElement('p');
   planetInfo.textContent = planet.desc;

   let planetArea = document.createElement('p');
planetArea.innerHTML = '<span style="font-weight:400">OMKRETS: </span>' + planet.circumference + 'km';

    let distansenLabel = document.createElement('p');
    distansenLabel.textContent = 'KM FRÅN SOLEN';
    let distansen = document.createElement('p');
    distansen.textContent = planet.distance + 'km';
   distansen.style.color="yellow";

  newDiv.appendChild(planetName);
  newDiv.appendChild(latinLabel);  
  newDiv.appendChild(planetInfo);
  newDiv.appendChild(planetArea);
  newDiv.appendChild(distansenLabel);
  newDiv.appendChild(distansen);
 
});
})





/*
matchingPlanets.forEach(planet => {
    let h1 = document.createElement('h1');
    h1.textContent = planet.name;

    let latin = document.createElement('h2');
    latin.textContent = planet.latinName;

    
    let distansen = document.createElement('p');
    distansen.textContent = planet.distance;

    resultSearch.appendChild(h1);
    resultSearch.appendChild(latin);
    resultSearch.appendChild(distansen);
   */