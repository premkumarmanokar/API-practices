//XML HTTP request
//They are used to interect with the server via api

//step 01: Create XHR request
var request  = new XMLHttpRequest();
//I am going to perform the interaction with you through XHR

//Step 02: Request through the URL / Open a request
request.open("GET","https://restcountries.com/v3.1/all");

//Step 03: Initate the request
request.send();

//Step 04: Once the data is there in the server
//if the request is successful,
//then server responds with a status code 200

request.onload = function(){

    var result =JSON.parse(request.response);
    for(i=0; i<result.length; i++){
        console.log(result[i].name.common);
        console.log(result[i].capital,result[i].region);
    }
}