const baseUrl=("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com"); //Bas URL
const searchField=document.getElementById("search-field");
const submitBtn=document.getElementById("input-button");
const resultSearch=document.getElementById("search-results");
/*
submitBtn.addEventListener('click', function() 
{ */


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
    console.log(data);    
})
.catch(error => {
    console.error('Något gick fel:', error); 
});

