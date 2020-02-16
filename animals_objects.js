"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];
const Animal = {
    name: "",
    type:"unknown",
    desc: "",
    age: 0
}

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
        const animal = Object.create(Animal);
        //allAnimals.push(jsonObject); -this was the mistake!
        //console.log(animal)
        //console.log(jsonObject.fullname)
        //animal.name = jsonObject.fullname;
        animal.age = jsonObject.age;
        //console.log(animal)
        // console.log(allAnimals)
        //finding out how to split the name:
        //console.log(animal.fullname.indexOf(" "))
        const firstSpace = jsonObject.fullname.indexOf(" ");
        const secondSpace = jsonObject.fullname.indexOf(" ", firstSpace+1);
        const thirdSpace = jsonObject.fullname.indexOf(" ", secondSpace+1);
        //const secondSpace = animal.fullname.indexOf(" ");
        console.log(firstSpace)
        console.log(secondSpace)
        console.log(thirdSpace)
        animal.name = jsonObject.fullname.substring(0, firstSpace);
        animal.age = jsonObject.age;
        animal.desc = jsonObject.fullname.substring(secondSpace+1, thirdSpace);
        animal.type=  jsonObject.fullname.substring(thirdSpace+1);
        console.log(animal)
        allAnimals.push(animal);

    });

    displayList(animal);
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);
    console.log(animal)
    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
