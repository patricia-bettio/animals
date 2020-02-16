"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;

function start( ) {
    console.log("ready");

    loadJSON();
}

function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        animals = jsonData;

        // when loaded, display the list
        displayList();
    });
}

function displayList() {
    // clear the list
    document.querySelector("#list").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    
    //console.log(animal)
    //name = animal.fullname.substring(1," ");
    //console.log(name)


//1 - Define a template/ prototype for the data objects

const Animal = {
    name: "",
    type:"unknown",
    desc: "",
    age: 0
}

//finding out how to split the name:
//console.log(animal.fullname.indexOf(" "))
const firstSpace = animal.fullname.indexOf(" ");
const secondSpace = animal.fullname.indexOf(" ", firstSpace+1);
const thirdSpace = animal.fullname.indexOf(" ", secondSpace+1);
//const secondSpace = animal.fullname.indexOf(" ");
console.log(firstSpace)
console.log(secondSpace)
console.log(thirdSpace)

//const firstName = animal.fullname.substring(0, firstS);
//console.log(firstName) 

let animalNew = Object.create(Animal);
animalNew.name = animal.fullname.substring(0, firstSpace);
animalNew.age = animal.age;
animalNew.desc = animal.fullname.substring(secondSpace+1, thirdSpace);
animalNew.type=  animal.fullname.substring(thirdSpace+1);
console.log(animalNew)


//create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=fullname]").textContent = animalNew.name;
    clone.querySelector("[data-field=type]").textContent = animalNew.type;
    clone.querySelector("[data-field=description]").textContent = animalNew.desc;
    clone.querySelector("[data-field=age]").textContent = animalNew.age;

    // append clone to list
    document.querySelector("#list").appendChild( clone );

}
