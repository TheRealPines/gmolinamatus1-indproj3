/*  Project:  INFO301 Hands On Project 3-3
    Author:   
    Date:     
    Purpose:  
*/
//note the square brackets to denote an array and each value enclosed in quotes

//creating the array with 
var cities = ["Salisbury, MD", "Fruitland, MD", "Clinton, MD", "Veracruz, Ver, Mexico", "Chicapa, Oax, Mexico"];
var states = ["MD", "", "", "", ""]

function processPlaces(){ //creating the fuction
  for(var i = 0; i < 5; i++){ //making a for loop that will stop at 4 since i have 5 inputs on the array. Don't forget that the arrays starts a 0
    var listItem = "item" + (i+1);
    document.getElementById(listItem).innerHTML = places[i];
  }
}

window.addEventListener("load", processPlaces);