

//-----------HÄMTA API-NYCKEL OCH INFO OM PLANETER------------------

import { fetchApiKey, fetchPlanetData } from './api.js';  
//Importerar två funktioner- hämta api-nyckel och data om planeterna

export let allPlanetsData = [];  
//Lagrar data om planeter i en lista

fetchApiKey()  
//Anropa funktionen fetchApiKey för att hämta nyckeln
.then(apiKey => fetchPlanetData(apiKey)) 
 //När nyckeln hämtats--> använd nyckeln för att hämta info om planeterna med fetchPlanetData
.then(data => {
    allPlanetsData = data;     
    //När vi fått infon om planeterna sparas infon i variabeln allPlanetData. 
    console.log('allPlanetsData:', allPlanetsData);   
    //Infon loggas till konsolen.
});   

//---------------HÄMTA SÖKRESULTAT-----------------------------

const searchField=document.getElementById("search-field");
const submitBtn=document.getElementById("input-button");

import { updateDOM } from './dom.js';
import { searchPlanets } from './search.js';
submitBtn.addEventListener('click', function() { 
    let searchText = searchField.value; 
    // Den text som användaren skrivit in sparas i searchText
    let matchingPlanets = searchPlanets(searchText, allPlanetsData);  
    //Funktionen searchPlanets körs och sparas i variabeln matchingPlanets
    updateDOM(matchingPlanets); 
});
searchField.addEventListener('keydown', function(event) { 
    if (event.keyCode === 13) { 
        event.preventDefault(); // Förhindra standard "Enter" beteendet
        submitBtn.click(); // Utlöser klickhändelsen på submitBtn
    } 
});
//För att kunna trycka på enter istället för sök.






