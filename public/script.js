/*  Project:  INFO301 Hands On Project 3-3
    Author:   
    Date:     
    Purpose:  
*/
//note the square brackets to denote an array and each value enclosed in quotes

//creating the array with 
var cities = ["Salisbury", "Fruitland", "Clinton", "Veracruz", "Chicapa"];
var states = ["MD", "MD", "MD", "Ver", "Oax"];
var country = ["USA","USA","USA","MEX","MEX"];

function processPlaces(){ //creating the fuction
  for(var i = 0; i < 5; i++){ //making a for loop that will stop at 4 since i have 5 inputs on the array. Don't forget that the arrays starts a 0
    var listItem = "item" + (i+1);
    document.getElementById(listItem).innerHTML = cities[i] + ", " + states[i] + ", " + country[i];
  }
}

window.addEventListener("load", processPlaces);