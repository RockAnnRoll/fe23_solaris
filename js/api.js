
//Funktionerna för att hämta api-nyckel o data om planeter


const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"; //Bas URL

//Hämta Api-nyckel

export function fetchApiKey() {
    return fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => data.key)
    .catch(error => {
        console.error('Något gick fel:', error); 
    });
}

//Hämta data om planeter

export function fetchPlanetData(apiKey) {
    return fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        method: 'GET',
        headers: {'x-zocom': apiKey}
    })
    .then(response => response.json())
    .then(data => data.bodies)
    .catch(error => {
        console.error('Något gick fel:', error); 
    });
}

