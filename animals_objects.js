"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList(animal) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    const Animal = {
        name: "",
        type:"unknown",
        desc: "",
        age: 0
    }
    
    const firstSpace = animal.fullname.indexOf(" ");
    const secondSpace = animal.fullname.indexOf(" ", firstSpace+1);
    const thirdSpace = animal.fullname.indexOf(" ", secondSpace+1);

    console.log(firstSpace)
    console.log(secondSpace)
    console.log(thirdSpace)
    
    
    let animalNew = Object.create(Animal);
    animalNew.name = animal.fullname.substring(0, firstSpace);
    animalNew.age = animal.age;
    animalNew.desc = animal.fullname.substring(secondSpace+1, thirdSpace);
    animalNew.type=  animal.fullname.substring(thirdSpace+1);
    console.log(animalNew)
    
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animalNew.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


